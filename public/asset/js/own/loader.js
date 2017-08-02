function ScriptCache(){try{this.scripts=JSON.parse(localStorage.getItem("scripts"))}catch(e){this.scripts={}}try{this.version=JSON.parse(localStorage.getItem("scriptsVersion"))}catch(e){this.version={},this.scripts={}}this.promises={},this.isReset=!1,this.decompress=function(a){var na=new Uint8Array(a);if(31==na[0]&&139==na[1])try{na=new Zlib.Gunzip(na).decompress()}catch(e){return""}return new TextDecoder("utf-8").decode(na)},this.addPromise=function(url,attribute,resolve,reject){return this.promises[url]||(this.promises[url]=[]),this.promises[url].push({resolve:resolve,reject:reject}),attribute&&(this.scripts[url]={attribute:attribute}),1==this.promises[url].length},this.getScript=function(url,getCompleteData,isPassThru){if(this.scripts[url]){if(isPassThru)return delete this.scripts[url],null;if(getCompleteData){var completeData=this.scripts[url];return completeData.url=url,completeData}return this.scripts[url]}return null},this.fulfillPromises=function(url,isResolve,resolveCompleteData){if(this.promises[url]&&this.scripts[url])for(;this.promises[url].length;)this.promises[url][0][isResolve?"resolve":"reject"](this.getScript(url,resolveCompleteData)),this.promises[url].splice(0,1)},this.preprocess=function(cv){var ev={};try{ev={version:cv["#"]};var bt=cv[":"],f=cv["/"];Object.keys(cv).forEach(function(x){if("#/:".indexOf(x)<0){var fi=x.substr(0,x.indexOf("/")),fl=x.substr(x.indexOf("/")+1);ev[(f[fi]?f[fi]+"/":"")+fl]=cv[x]+bt}})}catch(e){}return ev},this.setVersion=function(cv){(cv=this.preprocess(cv)).version=cv.version||"0001.01.01.00.00.00";for(var url in this.version)cv[url]!=this.version[url]&&(delete this.scripts["./"+url],delete this.scripts[url]);this.version=cv,this.promises={},localStorage.setItem("scriptsVersion",JSON.stringify(cv)),localStorage.setItem("scripts",JSON.stringify(this.scripts)),this.isReset=!0},this.setScript=function(url,req,resolveCompleteData,isPassThru){req?(attribute=this.scripts[url]?this.scripts[url].attribute:null,this.scripts[url]={responseText:this.decompress(req.response),attribute:attribute},this.fulfillPromises(url,!0,resolveCompleteData)):this.fulfillPromises(url,!1,resolveCompleteData),req&&!isPassThru||delete this.scripts[url],localStorage.setItem("scripts",JSON.stringify(this.scripts))}}function Loader(){this.unloadedAssets=0,this.needLoading=!1,this.assets=[{seq:2,file:"asset/css/form-panel.css"},{seq:2,file:"asset/css/font-awesome.min.css"},{seq:2,file:"asset/css/bootstrap.min.css"},{seq:3,file:"asset/css/css-patch.css"},{seq:2,file:"asset/css/custom-style.css"},{seq:2,file:"asset/css/ie10-viewport-bug-workaround.css"},{seq:2,file:"asset/css/sticky-footer-navbar.css"},{seq:2,file:"asset/js/jquery.min.js"},{seq:4,file:"asset/js/bootstrap.min.js"},{seq:2,file:"dpd.js"},{seq:2,file:"asset/js/own/prototypes.js"},{seq:2,file:"asset/js/own/datePair.js"},{seq:2,file:"asset/js/own/alert.js"},{seq:2,file:"asset/js/own/utils.js"},{seq:2,file:"asset/js/own/event.js"},{seq:0,file:"asset/js/own/storages.js"},{seq:0,file:"asset/js/zlib/gunzip.min.js"},{seq:0,file:"dist/yalla.js",attribute:{id:"yallaScript","yalla-component":"app","yalla-base":"dist","yalla-domtarget":"body","yalla-routing":"authenticate"}},{seq:1,file:"asset/js/own/yalla-patch.js"},{seq:2,file:"asset/js/vendor/pica.min.js"},{seq:3,file:"asset/js/own/imageProcessor.js"}],this.loadAssets=function(seq){for(var i in this.assets)this.assets[i].seq!=seq||this.assets[i].called||(this.assets[i].called=!0,this.fetch("./"+this.assets[i].file,null,this.assets[i].attribute).then(this.attachScriptToDocument.bind(this,seq)))},this.unpackAll=function(z,cv){var self=this;this.fetch(z).then(this.attachScriptToDocument.bind(this,null)).then(this.fetch.bind(this,cv,null,null,!0)).then(function(result){scriptCache.setVersion(JSON.parse(result.responseText)),self.loadAssets(0)})},this.fetch=function(url,postData,attribute,isPassThru){function createXMLHTTPObject(){for(var xmlhttp=!1,i=0;i<XMLHttpFactories.length;i++){try{xmlhttp=XMLHttpFactories[i]()}catch(e){continue}break}return xmlhttp}var XMLHttpFactories=[function(){return new XMLHttpRequest},function(){return new ActiveXObject("Msxml2.XMLHTTP")},function(){return new ActiveXObject("Msxml3.XMLHTTP")},function(){return new ActiveXObject("Microsoft.XMLHTTP")}];return new Promise(function(resolve,reject){var script=scriptCache.getScript(url,!0,isPassThru);if(script&&script.responseText)resolve(script);else if(scriptCache.addPromise(url,attribute,resolve,reject)){var req=createXMLHTTPObject();req.timeout=2e4,req&&(req.open("GET",url,!0),req.responseType="arraybuffer",req.ontimeout=function(){scriptCache.setScript(url,null,!0,isPassThru)},req.onreadystatechange=function(){4==req.readyState&&(200==req.status||304==req.status?scriptCache.setScript(url,req,!0,isPassThru):scriptCache.setScript(url,null,!0))},4!=req.readyState&&req.send())}})},this.attachScriptToDocument=function(seq,scriptData){var s=null,url=scriptData.url,attribute=scriptData.attribute,self=this;if(url){if(url.indexOf(".js")>=0){if(s=document.createElement("script"),s.type="text/javascript",s.text=scriptData.responseText,attribute)for(var prop in attribute)attribute.hasOwnProperty(prop)&&s.setAttribute(prop,attribute[prop])}else{(s=document.createElement("style")).type="text/css";var css=scriptData.responseText;s.styleSheet?s.styleSheet.cssText=css:s.appendChild(document.createTextNode(css))}if(document.head.appendChild(s),self.unloadedAssets--,url.indexOf("dist/yalla.js")>=0)ego=self,window.onload=function(){ego.needLoading=!0};else if(0==self.unloadedAssets){var ego=self;window.onload=function(){ego.needLoading=!1,yalla.framework.start()},self.needLoading||scriptCache.isReset?(yalla.framework.start(),scriptCache.isReset=!1):self.unloadedAssets}isNaN(seq)||null==seq||self.loadAssets(seq+1)}},this.unloadedAssets=this.assets.length}function authenticate(path){return new Promise(function(resolve){var specialAddress=["#user.login-form","#user.forgot-password","#user.reset-password","#user.registration","#common.privacyPolicy"];resolve(storage.me.read()?path||"#app/search-package.home":void 0!==specialAddress.find(function(x){return path.indexOf(x)>=0})?path:"#app")})}var scriptCache=new ScriptCache;(new Loader).unpackAll("asset/js/zlib/gunzip.min.js","./version.ver"),document.addEventListener("touchmove",function(event){1!==event.scale&&event.preventDefault()},!1);