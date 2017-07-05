/**
 * Created by Lawrence Eka on 04-Jul-2017.
 */
yalla.utils.fetch = function (url, postData) {
	
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
		if(!scriptCache.addPromise(url, null, resolve, reject)) return; // if there is already an on going request for this script, return;
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
			scriptCache.setScript(url);
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

yalla.framework.attachScriptToDocument = function (url) {
	var componentPath = url.substring(0, url.length - ".js".length);
	if (componentPath in yalla.components) {
		return Promise.resolve(true);
	}
	if (url in yalla.framework.componentLoadListener) {
		return Promise.resolve(true);
	}
	return new Promise(function (resolve) {
		var s = null;
		if(url.indexOf(".js") >= 0) {
			s = document.createElement('script');
			s.type = "text/javascript";
			s.text = scriptCache.scripts['.' + url].req.responseText;
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

		yalla.framework.componentLoadListener[url] = function () {
			resolve(url);
			delete yalla.framework.componentLoadListener[url];
		};
		resolve(url);
	});
};
