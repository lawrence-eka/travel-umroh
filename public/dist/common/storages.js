yalla.framework.addComponent("/dist/common/storages", (function() {
  var $path = "/dist/common/storages";
  var $patchChanges = yalla.framework.renderToScreen;
  var $export = {};
  var _context = {};
  var _parentComponent = yalla.framework.getParentComponent;
  var _merge = yalla.utils.merge;
  var $inject = yalla.framework.createInjector("/dist/common/storages");

  function ComponentEvent(type, data, target, currentTarget) {
    this.data = data;
    this.target = target;
    this.type = type;
    this.currentTarget = currentTarget;
  }

  /**
   * Created by Lawrence Eka on 01-Jun-2017.
   */

  var storage = {
    cookie: {},
    local: {},
    session: {},
    me: {}
  };
  storage.cookie.save = function(name, value, days) {
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      var expires = "; expires=" + date.toGMTString();
    } else var expires = "";
    document.cookie = name + "=" + value + expires + "; path=/";
  };

  storage.cookie.read = function(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
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
    if (remember) storage.local.save("me", JSON.stringify(me));
    else storage.session.save("me", JSON.stringify(me));
  }

  storage.me.read = function() {
    var me = storage.session.read("me");
    if (!me) me = storage.local.read("me");
    if (!me) return null;
    else return JSON.parse(me);
  }

  storage.me.erase = function() {
    storage.local.erase("me");
    storage.session.erase("me");
  }
  if (typeof $render === "function") {
    $export.render = $render;
  }
  return $export;
})());