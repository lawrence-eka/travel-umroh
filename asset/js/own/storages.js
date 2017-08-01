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
