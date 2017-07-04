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
		if(scriptCache.scripts[url]) {
			resolve(scriptCache.scripts[url].req);
			return;
		}
		
		if(!scriptCache.addPromise(url, resolve, reject)) return; // if already on going request for this script, return;
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
			//eka patch starts
			scriptCache.setScript(url, null);
			//reject(req);
			//eka patch ends
		};
		req.onreadystatechange = function () {
			if (req.readyState != 4) return;
			if (req.status != 200 && req.status != 304) {
				//eka patch starts
				scriptCache.setScript(url, null);
				//reject(req);
				return;
				//eka patch ends
			}
			//eka patch starts
			scriptCache.setScript(url, req);
			//resolve(req);
			//eka patch ends
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
		var s = document.createElement('script');
		//eka patch starts
		//s.setAttribute("src", '.' + url);
		s.type="text/javascript";
		s.text=scriptCache.scripts['.' + url].req.responseText;
		//eka patch ends;
		document.head.appendChild(s);
		//eka patch starts
		//framework.componentLoadListener[url] = function () {
		//    resolve(url);
		//    delete framework.componentLoadListener[url];
		//};
		resolve(url);
		//eka patch ends
	});
};
