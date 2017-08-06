!function(global){"use strict";if(!global.Base64){var buffer;"undefined"!=typeof module&&module.exports&&(buffer=require("buffer").Buffer);var b64chars="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",b64tab=function(bin){for(var t={},i=0,l=bin.length;i<l;i++)t[bin.charAt(i)]=i;return t}(b64chars),fromCharCode=String.fromCharCode,cb_utob=function(c){if(c.length<2)return(cc=c.charCodeAt(0))<128?c:cc<2048?fromCharCode(192|cc>>>6)+fromCharCode(128|63&cc):fromCharCode(224|cc>>>12&15)+fromCharCode(128|cc>>>6&63)+fromCharCode(128|63&cc);var cc=65536+1024*(c.charCodeAt(0)-55296)+(c.charCodeAt(1)-56320);return fromCharCode(240|cc>>>18&7)+fromCharCode(128|cc>>>12&63)+fromCharCode(128|cc>>>6&63)+fromCharCode(128|63&cc)},re_utob=/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,utob=function(u){return u.replace(re_utob,cb_utob)},cb_encode=function(ccc){var padlen=[0,2,1][ccc.length%3],ord=ccc.charCodeAt(0)<<16|(ccc.length>1?ccc.charCodeAt(1):0)<<8|(ccc.length>2?ccc.charCodeAt(2):0);return[b64chars.charAt(ord>>>18),b64chars.charAt(ord>>>12&63),padlen>=2?"=":b64chars.charAt(ord>>>6&63),padlen>=1?"=":b64chars.charAt(63&ord)].join("")},btoa=global.btoa||function(b){return b.replace(/[\s\S]{1,3}/g,cb_encode)},_encode=buffer?function(u){return new buffer(u).toString("base64")}:function(u){return btoa(utob(u))},encode=function(u,urisafe){return urisafe?_encode(u).replace(/[+\/]/g,function(m0){return"+"==m0?"-":"_"}).replace(/=/g,""):_encode(u)},re_btou=new RegExp(["[À-ß][-¿]","[à-ï][-¿]{2}","[ð-÷][-¿]{3}"].join("|"),"g"),cb_btou=function(cccc){switch(cccc.length){case 4:var offset=((7&cccc.charCodeAt(0))<<18|(63&cccc.charCodeAt(1))<<12|(63&cccc.charCodeAt(2))<<6|63&cccc.charCodeAt(3))-65536;return fromCharCode(55296+(offset>>>10))+fromCharCode(56320+(1023&offset));case 3:return fromCharCode((15&cccc.charCodeAt(0))<<12|(63&cccc.charCodeAt(1))<<6|63&cccc.charCodeAt(2));default:return fromCharCode((31&cccc.charCodeAt(0))<<6|63&cccc.charCodeAt(1))}},btou=function(b){return b.replace(re_btou,cb_btou)},cb_decode=function(cccc){var len=cccc.length,padlen=len%4,n=(len>0?b64tab[cccc.charAt(0)]<<18:0)|(len>1?b64tab[cccc.charAt(1)]<<12:0)|(len>2?b64tab[cccc.charAt(2)]<<6:0)|(len>3?b64tab[cccc.charAt(3)]:0),chars=[fromCharCode(n>>>16),fromCharCode(n>>>8&255),fromCharCode(255&n)];return chars.length-=[0,0,2,1][padlen],chars.join("")},atob=global.atob||function(a){return a.replace(/[\s\S]{1,4}/g,cb_decode)},_decode=buffer?function(a){return new buffer(a,"base64").toString()}:function(a){return btou(atob(a))},decode=function(a){return _decode(a.replace(/[-_]/g,function(m0){return"-"==m0?"+":"/"}).replace(/[^A-Za-z0-9\+\/]/g,""))};if(global.Base64={VERSION:"2.1.1",atob:atob,btoa:btoa,fromBase64:decode,toBase64:encode,utob:utob,encode:encode,encodeURI:function(u){return encode(u,!0)},btou:btou,decode:decode},"function"==typeof Object.defineProperty){var noEnum=function(v){return{value:v,enumerable:!1,writable:!0,configurable:!0}};global.Base64.extendString=function(){Object.defineProperty(String.prototype,"fromBase64",noEnum(function(){return decode(this)})),Object.defineProperty(String.prototype,"toBase64",noEnum(function(urisafe){return encode(this,urisafe)})),Object.defineProperty(String.prototype,"toBase64URI",noEnum(function(){return encode(this,!0)}))}}}}(this);