yalla.framework.addComponent("/dist/user/login-form", (function() {
  var $path = "/dist/user/login-form";
  var $patchChanges = yalla.framework.renderToScreen;
  var $export = {};
  var $context = {};
  var _parentComponent = yalla.framework.getParentComponent;
  var $inject = yalla.framework.createInjector("/dist/user/login-form");

  function ComponentEvent(type, data, target, currentTarget) {
    this.data = data;
    this.target = target;
    this.type = type;
    this.currentTarget = currentTarget;
  }

  var _elementOpen = IncrementalDOM.elementOpen,
    _elementClose = IncrementalDOM.elementClose,
    _elementOpenStart = IncrementalDOM.elementOpenStart,
    _elementOpenEnd = IncrementalDOM.elementOpenEnd,
    _elementVoid = IncrementalDOM.elementVoid,
    _text = IncrementalDOM.text,
    _attr = IncrementalDOM.attr,
    _skip = IncrementalDOM.skip;

  function initState(props) {
    return {}
  };

  function createCookie(name, value, days) {
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      var expires = "; expires=" + date.toGMTString();
    } else var expires = "";
    document.cookie = name + "=" + value + expires + "; path=/";
  }

  function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }

  function eraseCookie(name) {
    createCookie(name, "", -1);
  }

  function hasLoggedIn() {
    return new Promise(function(resolve) {
      var cookie = readCookie('rememberMe')
      if (cookie == 'true') {
        dpd.users.me(function(me) {
          if (me) {
            window.location.hash = "#app/action.searchPackage";
            resolve(true);
          } else resolve(false);
        });
      } else resolve(false);
    });
  }

  var errorMessage = '';

  function login() {
    var form = this.target.form;
    errorMessage = "";
    $patchChanges();
    var userName = form.elements.username.value.toLowerCase();
    var password = form.elements.password.value;

    if (form.elements.rememberMe) createCookie("rememberMe", "true");
    else eraseCookie("rememberMe");

    dpd.users.login({
      "username": userName,
      "password": password
    }, function(user, err) {
      if (err) {
        errorMessage = err.message;
      } else {
        window.location.hash = "#app/action.searchPackage";
      }

      $patchChanges();
    });
    return false;
  }

  function $render(_props, _slotView) {
    $context["alert"] = $inject("/component/alert");
    var alert = $context["alert"];
    $context["panel"] = $inject("/component/panel");
    var panel = $context["panel"];
    $context["entry"] = $inject("/component/entry");
    var entry = $context["entry"];
    _elementOpenStart("link", "");
    _attr("element", "dist.user.login-form");
    _attr("href", "asset/css/custom-style.css");
    _attr("rel", "stylesheet");
    _elementOpenEnd("link");
    // The component of this object
    var __component = IncrementalDOM.currentElement();
    __component.__state = __component.__state || initState.bind(__component)(_props);
    var __state = __component.__state;
    _elementClose("link");
    if (hasLoggedIn()) {
      _elementOpenStart("div", "");
      _attr("element", "dist.user.login-form");
      _attr("class", "container  margin-top-login-panel");
      _elementOpenEnd("div");
      // The component of this object
      var __component = IncrementalDOM.currentElement();
      __component.__state = __component.__state || initState.bind(__component)(_props);
      var __state = __component.__state;
      $context["panel"].render({
        "nofooter": "nofooter",
        "notitle": "notitle"
      }, function(slotName) {
        if (slotName == "body") {
          _elementOpenStart("div", "");
          _elementOpenEnd("div");
          _elementOpenStart("h2", "");
          _attr("class", "form-signin-heading");
          _elementOpenEnd("h2");
          _text("Please sign in");
          _elementClose("h2");
          _elementOpenStart("form", "");
          _elementOpenEnd("form");
          $context["entry"].render({
            "type": "text",
            "name": "username",
            "required": "required",
            "placeholder": "Username"
          }, function(slotName) {});
          $context["entry"].render({
            "type": "text",
            "name": "password",
            "placeholder": "Password"
          }, function(slotName) {});
          $context["entry"].render({
            "type": "checkbox",
            "name": "rememberMe",
            "prompt": "Remember me"
          }, function(slotName) {});
          $context["entry"].render({
            "type": "button",
            "value": "Sign In",
            "onclick": function(event) {
              var self = {
                target: event.target
              };
              self.properties = _props;
              if ('elements' in self.target) {
                self.elements = self.target.elements;
              }
              self.currentTarget = this == event.target ? self.target : _parentComponent(event.currentTarget);
              self.component = __component;
              self.component.__state = self.component.__state || {};
              self.state = self.component.__state;
              self.emitEvent = function(eventName, data) {
                var event = new ComponentEvent(eventName, data, self.target, self.currentTarget);
                if ('on' + eventName in _props) {
                  _props['on' + eventName](event);
                }
              };
              return login.bind(self)();
            }
          }, function(slotName) {});
          _elementOpenStart("a", "");
          _attr("href", "#user.registration");
          _attr("class", "custom-entry-prompt");
          _elementOpenEnd("a");
          _text("New to MarKiMroh? Register here");
          _elementClose("a");
          _elementClose("form");
          $context["alert"].render({
            "alertType": 'error',
            "message": errorMessage
          }, function(slotName) {});
          _elementClose("div");
        }
      });
      _elementClose("div");
    }
  }
  if (typeof $render === "function") {
    $export.render = $render;
  }
  return $export;
})());