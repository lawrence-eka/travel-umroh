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
	if(remember) storage.local.save("me", JSON.stringify(me));
	else storage.session.save("me", JSON.stringify(me));
}

storage.me.read = function() {
	var me = storage.session.read("me");
	if (!me) me = storage.local.read("me");
	if(!me) return null;
	else return JSON.parse(me);
}

storage.me.isRemembered = function() {
	if(storage.local.read("me")) return true;
	else return false;
}

storage.me.erase = function() {
	storage.local.erase("me");
	storage.session.erase("me");
}

/**
 * Created by Lawrence Eka on 05-Jul-2017.
 */
/**
 * Created by Lawrence Eka on 04-Jul-2017.
 */
var scriptCache = {
	scripts: storage.session.read("scripts") ? JSON.parse(storage.session.read("scripts")) : {},
	promises: {},
	addPromise: function (url, attribute, resolve, reject) {
		if(!this.promises[url]) this.promises[url] = [];
		this.promises[url].push({resolve:resolve, reject: reject});
		//debugger;
		if(attribute) {
			this.scripts[url] = {attribute: attribute};
		}
		return this.promises[url].length == 1;
	},
	
	fulfillPromises: function(url, isResolve){
		if(this.promises[url] && this.scripts[url]) {
			//debugger;
			for(;this.promises[url].length;) {
				//debugger;
				this.promises[url][0][isResolve?"resolve":"reject"](this.scripts[url].req);
				this.promises[url].splice(0, 1);
			}
		}
	},
	
	setScript: function(url, req) {
		if(req){
			//debugger;
			attribute = (this.scripts[url] ? this.scripts[url].attribute : null);
			this.scripts[url] = {req:{response: req.response, responseText: req.responseText}, attribute: attribute};
			this.fulfillPromises(url, true);
		} else {
			this.fulfillPromises(url, false);
			delete this.scripts[url];
		}
		storage.session.save("scripts", JSON.stringify(this.scripts));
	}
};

var loader={};

loader.fetch = function (url, postData, attribute) {
	
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
	
	return new Promise(function (resolve, reject) {
		
		// eka patch starts
		if(scriptCache.scripts[url] && scriptCache.scripts[url].req) {
			resolve(scriptCache.scripts[url].req);
			return;
		}
		if(!scriptCache.addPromise(url, attribute, resolve, reject)) return; // if there is already an on going request for this script, return;
		//eka patch ends
		
		var req = createXMLHTTPObject();
		req.timeout = 2000;
		if (!req) return;
		var method = (postData) ? "POST" : "GET";
		req.open(method, url, true);
		if (postData) {
			req.setRequestHeader('Content-type', 'application/json');
		}
		req.ontimeout = function (e) {
			scriptCache.setScript(url, null);
		};
		req.onreadystatechange = function () {
			if (req.readyState != 4) return;
			if (req.status != 200 && req.status != 304) {
				scriptCache.setScript(url, null);
				return;
			}
			scriptCache.setScript(url, req);
		};
		if (req.readyState == 4) {
			return;
		}
		req.send(JSON.stringify(postData));
	});
};

loader.attachScriptToDocument = function (url) {
	var s = null;
	if(url.indexOf(".js") >= 0) {
		s = document.createElement('script');
		s.type = "text/javascript";
		s.text = scriptCache.scripts['.' + url].req.responseText;
		
		attribute = scriptCache.scripts['.' + url].attribute;
		if(attribute) {
			debugger;
			for(var prop in attribute) {
				if(attribute.hasOwnProperty(prop)) s.setAttribute(prop, attribute[prop]);
			}
		}
	} else {
		s = document.createElement('style');
		s.type = "text/css";
		var css = scriptCache.scripts['.' + url].req.responseText;
		if (s.styleSheet){
			s.styleSheet.cssText = css;
		} else {
			s.appendChild(document.createTextNode(css));
		}
	}
	//eka patch ends;
	document.head.appendChild(s);
}