/**
 * Created by Lawrence Eka on 04-Jul-2017.
 */
function ScriptCache(cv){
	try{
		this.scripts = JSON.parse(localStorage.getItem("scripts"));
		if(!this.scripts) this.scripts = {};
	} catch(e) {
		this.scripts = {};
	}
	try {
		this.version = JSON.parse(localStorage.getItem("scriptsVersion"));
		if(!this.version) this.version ={};
	} catch(e) {
		this.version = {};
		this.scripts={} // scriptVersion is not present or not in the correct format, probably old one, hence clear script cache.
	}
	
	this.promises = {};
	this.isReset = false;
	
	this.decompress = function(a){
		var na = new Uint8Array(a);
		//debugger;
		if(na[0] == 31 && na[1] == 139) { //GZIP magic number, 1F8B
			try {
				na = (new Zlib.Gunzip(na)).decompress();
			} catch(e) {
				return '';
			}
		}
		return (new TextDecoder("utf-8")).decode(na);
	}
	
	this.addPromise = function (url, attribute, resolve, reject) {
		if(!this.promises[url]) this.promises[url] = [];
		this.promises[url].push({resolve:resolve, reject: reject});
		//debugger;
		if(attribute) {
			this.scripts[url] = {attribute: attribute};
		}
		return this.promises[url].length == 1;
	};
	
	this.getScript = function(url, getCompleteData, isPassThru) {
		if(!this.scripts || !this.scripts[url]) return null;
		else if(isPassThru) {
			delete this.scripts[url];
			return null;
		}
		else if(getCompleteData) {
			var completeData = this.scripts[url];
			completeData.url = url;
			return (completeData); //called by loader
		}
		else return (this.scripts[url]); //called by yalla.js patch
	};
	
	this.fulfillPromises = function(url, isResolve,resolveCompleteData){
		if(this.promises[url] && this.scripts[url]) {
			//debugger;
			for(;this.promises[url].length;) {
				//debugger;
				this.promises[url][0][isResolve?"resolve":"reject"](this.getScript(url, resolveCompleteData)); //called by loader
				this.promises[url].splice(0, 1);
			}
		}
	};
	
	this.preprocess = function(cv) {
		var ev={};
		try {
			ev = {version: cv['#']};
			var bt = cv[':'];
			var f = cv['/'];
			Object.keys(cv).forEach(function (x) {
				if ('#/:'.indexOf(x) < 0) {
					var fi = x.substr(0, x.indexOf('/'));
					var fl = x.substr(x.indexOf('/') + 1);
					ev[(f[fi] ? f[fi] + '/' : '') + fl] = cv[x] + bt;
				}
			});
		} catch(e) {}
		//debugger;
		return ev;
	}
	
	this.setVersion = function(cv) {
		cv = this.preprocess(cv);
		cv.version = cv.version || "0001.01.01.00.00.00";

		for(var url in this.version) { //iterate this.version instead of currenvVersion to make sure that urls that are no longer used, hence no longer part of currentVersion, be deleted from the cache.
			if(cv[url] != this.version[url]) {
				//debugger;
				console.log("New version detected.");
				delete this.scripts['./' + url];
				delete this.scripts['/' + url];
				delete this.scripts[url];
			}
		}
		
		this.version = cv;
		this.promises = {};
		localStorage.setItem("scriptsVersion", JSON.stringify(cv));
		localStorage.setItem("scripts", JSON.stringify(this.scripts));
		this.isReset = true;
	};
	
	this.setScript = function(url, req, resolveCompleteData, isPassThru) {
		if(req){
			//debugger;
			attribute = (this.scripts && this.scripts[url] ? this.scripts[url].attribute : null);
			this.scripts[url] = {responseText: this.decompress(req.response), attribute: attribute};
			this.fulfillPromises(url, true, resolveCompleteData);
		} else {
			this.fulfillPromises(url, false, resolveCompleteData);
		}
		
		if(!req || isPassThru) {
			delete this.scripts[url];
		}
		localStorage.setItem("scripts", JSON.stringify(this.scripts));
	};
	
};

function Loader(cv) {
	this.unloadedAssets =  0;
	this.needLoading = false;
	this.assets;// = assets;

	this.loadAssets = function (seq) {
		for (var i in this.assets) {
			if (this.assets[i].seq == seq && !this.assets[i].called) {
				//console.log("loading asset seq:", seq, "=", this.assets[i].file)
				this.assets[i].called = true;
				this.fetch("./" + this.assets[i].file, null, this.assets[i].attribute).then(this.attachScriptToDocument.bind(this, seq));
			}
		}
	};
	
	this.unpackAll = function(z, cv, as) {
		var self = this;
		this.fetch(z)
			.then(this.attachScriptToDocument.bind(this, null))
			.then(this.fetch.bind(this, cv, null, null, true))
			.then(function(result) {
				scriptCache.setVersion(JSON.parse(result.responseText));
			})
			.then(this.fetch.bind(this, as))
			.then(this.attachScriptToDocument.bind(this, null))
			.then(function(result) {
				//debugger;
				self.assets = assets;
				self.unloadedAssets = self.assets.length;
				self.loadAssets(0);
			});
	}
	
	this.fetch = function (url, postData, attribute, isPassThru) {
		//debugger;
		var XMLHttpFactories = [
			function () {
				return new XMLHttpRequest()
			},
			function () {
				return new ActiveXObject("Msxml2.XMLHTTP")
			},
			function () {
				return new ActiveXObject("Msxml3.XMLHTTP")
			},
			function () {
				return new ActiveXObject("Microsoft.XMLHTTP")
			}
		];
		
		function createXMLHTTPObject() {
			var xmlhttp = false;
			for (var i = 0; i < XMLHttpFactories.length; i++) {
				try {
					xmlhttp = XMLHttpFactories[i]();
				}
				catch (e) {
					continue;
				}
				break;
			}
			return xmlhttp;
		}
		
		var self = this;
		//debugger;
		return new Promise(function (resolve, reject) {
			// eka patch starts
			//debugger;
			var script = scriptCache.getScript(url, true, isPassThru);
			if (script && script.responseText) {
				resolve(script);
				return;
			}
			if (!scriptCache.addPromise(url, attribute, resolve, reject)) return; // if there is already an on going request for this script, return;
			//eka patch ends
			
			var req = createXMLHTTPObject();
			req.timeout = 20000;
			if (!req) return;
			req.open('GET', url, true);
			req.responseType='arraybuffer';
			req.ontimeout = function (e) {
				scriptCache.setScript(url, null, true, isPassThru);
			};
			req.onreadystatechange = function () {
				if (req.readyState != 4) return;
				if (req.status != 200 && req.status != 304) {
					scriptCache.setScript(url, null, true);
					return;
				}
				scriptCache.setScript(url, req, true, isPassThru);
			};
			if (req.readyState == 4) {
				return;
			}
			//req.send(JSON.stringify(postData));
			req.send();
		});
	};
	
	this.attachScriptToDocument = function (seq, scriptData) {
		//debugger;
		var s = null;
		var url = scriptData.url;
		var attribute = scriptData.attribute;
		var self = this;
		if (!url) return;
		if (url.indexOf(".js") >= 0) {
			//debugger;
			s = document.createElement('script');
			s.type = "text/javascript";
			s.text = scriptData.responseText;
			
			if (attribute) {
				//debugger;
				for (var prop in attribute) {
					if (attribute.hasOwnProperty(prop)) s.setAttribute(prop, attribute[prop]);
				}
			}
		} else {
			s = document.createElement('style');
			s.type = "text/css";
			var css = scriptData.responseText;
			if (s.styleSheet) {
				s.styleSheet.cssText = css;
			} else {
				s.appendChild(document.createTextNode(css));
			}
		}
		document.head.appendChild(s);
		
		//start of moved to here
		self.unloadedAssets--;
		//debugger;
		//console.log
		if(url.indexOf("dist/yalla.js") >= 0){//} && scriptCache.isReset) {
			var ego = self;
			window.onload = function () {
				//debugger;
				ego.needLoading=true;
				//console.log("temporary onload");
			};
			//scriptCache.isReset = false;
		} else if(self.unloadedAssets==0) {
			var ego = self;
			//debugger;
			window.onload = function () {
				//console.log("Patched window.onload triggered");
				ego.needLoading = false;
				yalla.framework.start();
			};
			//debugger;
			if(self.needLoading || scriptCache.isReset) {
				//console.log("Need loading.")
				yalla.framework.start();
				scriptCache.isReset = false;
			} else if(self.unloadedAssets==0) {
				//console.log("No need to reload");
			}
		}
		//console.log("asset seq:", seq, '=', url, "loaded.")
		if(!isNaN(seq) && seq != null) self.loadAssets(seq + 1);
		//end of moved to here
	};
	
	//debugger;
	//this.unloadedAssets = this.assets.length;
};

function authenticate(path){
	return new Promise(function(resolve){
		console.log('Path = ', path);
		resolve(path && path != '#app' ? path : mainMenuPath);
	});
}

var scriptCache = new ScriptCache();
//var loader = new Loader();
//loader.unpackAll('./version.ver');
(new Loader()).unpackAll('asset/js/zlib/gunzip.min.js', './version.ver', '/asset/js/own/loaderData.js');
