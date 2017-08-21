/**
 * Created by Lawrence Eka on 04-Jul-2017.
 */

//var patchedYalla = document.querySelector("script[id='yallaScript']");

//yalla.scriptCache = scriptCache;
//debugger;
yalla.utils.fetch = function (url, postData) {
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
	
	return new Promise(function (resolve, reject) {
		scriptCache.getOrFetch(url, postData, false, false, resolve, reject);
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
		s = document.createElement('script');
		s.type = "text/javascript";
		s.text = scriptCache.scripts['.' + url].responseText;
		document.head.appendChild(s);

		yalla.framework.componentLoadListener[url] = function () {
			resolve(url);
			delete yalla.framework.componentLoadListener[url];
		};
		resolve(url);
	});
};

yalla.framework.start = function () {
	//debugger;
	if(yalla.framework.isStarted) return;
	yalla.framework.isStarted = true;
	console.log("framework start invoked");
	var scripts = document.querySelector("script[id='yallaScript']") || [];
	//debugger;
	if (!yalla.utils.assertNotNull(scripts.attributes['yalla-component'], scripts.attributes['yalla-base'], scripts.attributes['yalla-domtarget'])) {
		throw new Error("script tag should contain attributes 'yalla-component', 'yalla-base' and 'yalla-domtarget'");
	}
	var component = scripts.attributes['yalla-component'].nodeValue;
	var base = scripts.attributes['yalla-base'].nodeValue;
	var domTarget = scripts.attributes['yalla-domtarget'].nodeValue;
	var routingCallback = scripts.attributes['yalla-routing'] ? scripts.attributes['yalla-routing'].nodeValue : false;

	yalla.framework.base = base;
	yalla.framework.domTarget = domTarget;
	yalla.framework.defaultComponent = component;
	yalla.framework.beforeRenderToScreen = function(){
		return new Promise(function (resolve){
			if(routingCallback && typeof window[routingCallback] == 'function'){
				var path = window.location.hash;
				window[routingCallback](path).then(function(newPath){
					if(newPath && newPath != path){
						resolve(false);
						yalla.log.info('Re-routing path to new location');
						window.location.hash = newPath;
					}else{
						resolve(true);
					}
				});
			}else{
				resolve(true);
			}
		});
	};
	yalla.framework.renderToScreen();
};

//if(loader.needLoading) yalla.framework.start();
