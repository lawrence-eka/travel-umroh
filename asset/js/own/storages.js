/**
 * Created by Lawrence Eka on 01-Jun-2017.
 */

var storage = {
	cookie: {},
	local: {},
	session: {},
	me:{}
};
storage.cookie.save = function(name, value, days)
{
	if(days) {
		var date = new Date();
		date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
		var expires = "; expires=" + date.toGMTString();
	}
	else var expires = "";
	document.cookie = name + "=" + value + expires + "; path=/";
};

storage.cookie.read = function (name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') c = c.substring(1, c.length);
		if(c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
	}
	return null;
};

storage.cookie.erase = function erase(name) {
	storage.cookie.create(name, "", -1);
};

storage.local.save = function(key, value) {
	localStorage.setItem(key, value);
}

storage.local.read = function(key) {
	return localStorage.getItem(key);
}

storage.local.erase = function(key) {
	console.log("local", key, "erased");
	//debugger;
	localStorage.removeItem(key);
}

storage.session.save = function(key, value) {
	sessionStorage.setItem(key, value);
}

storage.session.read = function(key) {
	return sessionStorage.getItem(key);
}

storage.session.erase = function(key) {
	sessionStorage.removeItem(key);
}

storage.me.save = function(me, remember) {
	storage.me.erase();
	console.log("remember?", remember);
	if(remember) storage.local.save("me", JSON.stringify(me));
	else storage.session.save("me", JSON.stringify(me));
}

storage.me.read = function() {
	var me = storage.session.read("me");
	//debugger;
	if (!me) me = storage.local.read("me");
	//debugger;
	if(!me) return null;
	else {
		me = JSON.parse(me);
		if(!me) return null;
		if (!storage.cookie.read("sid")) storage.cookie.save("sid", me.sid);
		return me;
	}
}

storage.me.isRemembered = function() {
	if(storage.local.read("me")) return true;
	else return false;
}

storage.me.erase = function() {
//	console.log("me erased");
//	storage.cookie,erase("sid");
	storage.local.erase("me");
	storage.session.erase("me");
}
/**
 * Created by Lawrence Eka on 04-Jul-2017.
 */
function ScriptCache(currentVersion){
	this.version = storage.local.read("scriptsVersion");
	this.scripts = storage.local.read("scripts") ? JSON.parse(storage.local.read("scripts")) : {};
	this.promises = {};
	this.isReset = false;
	this.addPromise = function (url, attribute, resolve, reject) {
		if(!this.promises[url]) this.promises[url] = [];
		this.promises[url].push({resolve:resolve, reject: reject});
		//debugger;
		if(attribute) {
			this.scripts[url] = {attribute: attribute};
		}
		return this.promises[url].length == 1;
	};

	this.getScript = function(url, getCompleteData) {
		if(!this.scripts[url]) return null;
		if(getCompleteData) {
			var completeData = this.scripts[url];
			completeData.url = url;
			return (completeData); //called by loader
		}
		return (this.scripts[url].req); //called by yalla.js patch
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

	this.setVersion = function(currentVersion) {
		if(this.version != currentVersion) {
			console.log("New version detected.");
			this.version = currentVersion;
			this.scripts = {};
			this.promises = {};
			storage.local.save("scriptsVersion", currentVersion);
			storage.local.erase("scripts");
			this.isReset = true;
		}
		//else this.isReset = false;
	};

	this.setScript = function(url, req, resolveCompleteData) {
		if(req){
			//debugger;
			attribute = (this.scripts[url] ? this.scripts[url].attribute : null);
			this.scripts[url] = {req:{response: req.response, responseText: req.responseText}, attribute: attribute};
			this.fulfillPromises(url, true, resolveCompleteData);
		} else {
			this.fulfillPromises(url, false, resolveCompleteData);
			delete this.scripts[url];
		}
		storage.local.save("scripts", JSON.stringify(this.scripts));
	};

};

function Loader() {
	//this.scriptCache = scriptCache;
	this.unloadedAssets =  0;
	this.needLoading = false;
	this.assets = [
		{seq: 2, file: "asset/css/form-panel.css"},
		{seq: 2, file: "asset/css/font-awesome.min.css"},
		{seq: 2, file: "asset/css/bootstrap.min.css"},
		{seq: 3, file: "asset/css/css-patch.css"},
		{seq: 2, file: "asset/css/custom-style.css"},
		{seq: 2, file: "asset/css/ie10-viewport-bug-workaround.css"},
		{seq: 2, file: "asset/css/sticky-footer-navbar.css"},
		{seq: 2, file: "asset/js/jquery.min.js"},
		{seq: 4, file: "asset/js/bootstrap.min.js"},
		{seq: 2, file: "dpd.js"},
		{seq: 2, file: "asset/js/own/prototypes.js"},
		{seq: 2, file: "asset/js/own/datePair.js"},
		{seq: 2, file: "asset/js/own/alert.js"},
		{seq: 2, file: "asset/js/own/utils.js"},
		{seq: 2, file: "asset/js/own/event.js"},
		{seq: 0, file: "dist/yalla.js",
			attribute: {
				id: "yallaScript",
				"yalla-component": "app",
				"yalla-base": "dist",
				"yalla-domtarget": "body",
				"yalla-routing": "authenticate"
			}
		},
		{seq: 1, file: "asset/js/own/yalla-patch.js"},
	];
	
	this.loadAssets = function (seq) {
		//var self = this;
		//debugger;
		for (var i in this.assets) {
			if (this.assets[i].seq == seq && !this.assets[i].called) {
				//console.log("loading asset seq:", seq, "=", this.assets[i].file)
				this.assets[i].called = true;
				this.fetch("./" + this.assets[i].file, null, this.assets[i].attribute).then(this.attachScriptToDocument.bind(this, seq));
			}
		}
	};
	
	this.fetch = function (url, postData, attribute) {

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
			var script = scriptCache.getScript(url, true);
			if (script && script.req) {
				resolve(script);
				return;
			}
			if (!scriptCache.addPromise(url, attribute, resolve, reject)) return; // if there is already an on going request for this script, return;
			//eka patch ends

			var req = createXMLHTTPObject();
			req.timeout = 20000;
			if (!req) return;
			var method = (postData) ? "POST" : "GET";
			req.open(method, url, true);
			if (postData) {
				req.setRequestHeader('Content-type', 'application/json');
			}
			req.ontimeout = function (e) {
				scriptCache.setScript(url, null, true);
			};
			req.onreadystatechange = function () {
				if (req.readyState != 4) return;
				if (req.status != 200 && req.status != 304) {
					scriptCache.setScript(url, null, true);
					return;
				}
				scriptCache.setScript(url, req, true);
			};
			if (req.readyState == 4) {
				return;
			}
			req.send(JSON.stringify(postData));
		});
	};
	
	this.attachScriptToDocument = function (seq, scriptData, direct) {
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
			s.text = scriptData.req.responseText;

			if (attribute) {
				//debugger;
				for (var prop in attribute) {
					if (attribute.hasOwnProperty(prop)) s.setAttribute(prop, attribute[prop]);
				}
			}
		} else {
			s = document.createElement('style');
			s.type = "text/css";
			var css = scriptData.req.responseText;
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
		self.loadAssets(seq + 1);
		//end of moved to here
	};

	
	//debugger;
	this.unloadedAssets = this.assets.length;
};

function authenticate(path){
   return new Promise(function(resolve){
        var specialAddress = [
            "#user.login-form",
            "#user.forgot-password",
            "#user.reset-password",
           "#user.registration",
           '#common.privacyPolicy',
       ];
    console.log('Path = ', path);
       resolve(storage.me.read()? path ? path : "#app/search-package.home" : typeof specialAddress.find(function(x){return path.indexOf(x) >= 0;}) != 'undefined' ? path : "#app");
   });
}

var scriptCache = new ScriptCache();
var loader = new Loader();
