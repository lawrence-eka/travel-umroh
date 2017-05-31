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


  var errorMessage = '';

  function login(form) {
    errorMessage = "";
    $patchChanges();
    var userName = form.elements.userName.value;
    var password = form.elements.password.value;
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
    _elementOpenStart("link", "");
    _attr("element", "dist.user.login-form");
    _attr("href", "/asset/css/signin.css");
    _attr("rel", "stylesheet");
    _elementOpenEnd("link");
    // The component of this object
    var __component = IncrementalDOM.currentElement();
    __component.__state = __component.__state || initState.bind(__component)(_props);
    var __state = __component.__state;
    _elementClose("link");
    _elementOpenStart("link", "");
    _attr("element", "dist.user.login-form");
    _attr("href", "asset/css/registration.css");
    _attr("rel", "stylesheet");
    _elementOpenEnd("link");
    // The component of this object
    var __component = IncrementalDOM.currentElement();
    __component.__state = __component.__state || initState.bind(__component)(_props);
    var __state = __component.__state;
    _elementClose("link");
    _elementOpenStart("div", "");
    _attr("element", "dist.user.login-form");
    _attr("class", "container  margin-top-login-panel");
    _elementOpenEnd("div");
    // The component of this object
    var __component = IncrementalDOM.currentElement();
    __component.__state = __component.__state || initState.bind(__component)(_props);
    var __state = __component.__state;
    _elementOpenStart("form", "");
    _attr("class", "form-signin");
    _attr("onsubmit", function(event) {
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
      login.bind(self)(this);
      return false;
    });
    _elementOpenEnd("form");
    _elementOpenStart("h2", "");
    _attr("class", "form-signin-heading");
    _elementOpenEnd("h2");
    _text("Please sign in");
    _elementClose("h2");
    _elementOpenStart("label", "");
    _attr("for", "userName");
    _attr("class", "sr-only");
    _elementOpenEnd("label");
    _text("Username");
    _elementClose("label");
    _elementOpenStart("input", "");
    _attr("type", "text");
    _attr("id", "userName");
    _attr("class", "form-control");
    _attr("placeholder", "Username");
    _attr("required", "required");
    _attr("autofocus", "autofocus");
    _elementOpenEnd("input");
    _elementClose("input");
    _elementOpenStart("label", "");
    _attr("for", "password");
    _attr("class", "sr-only");
    _elementOpenEnd("label");
    _text("Password");
    _elementClose("label");
    _elementOpenStart("input", "");
    _attr("type", "password");
    _attr("id", "password");
    _attr("class", "form-control");
    _attr("placeholder", "Password");
    _attr("required", "required");
    _elementOpenEnd("input");
    _elementClose("input");
    _elementOpenStart("div", "");
    _attr("class", "checkbox");
    _elementOpenEnd("div");
    _elementOpenStart("label", "");
    _elementOpenEnd("label");
    _elementOpenStart("input", "");
    _attr("type", "checkbox");
    _attr("value", "remember-me");
    _elementOpenEnd("input");
    _elementClose("input");
    _text("Remember me");
    _elementClose("label");
    _elementClose("div");
    $context["alert"].render({
      "alertType": 'error',
      "message": errorMessage
    }, function(slotName) {});
    _elementOpenStart("button", "");
    _attr("class", "btn btn-lg btn-primary btn-block");
    _attr("type", "submit");
    _elementOpenEnd("button");
    _text("Sign in");
    _elementClose("button");
    _elementOpenStart("a", "");
    _attr("href", "#user.registration");
    _elementOpenEnd("a");
    _text("New to MarKiMroh? Register here");
    _elementClose("a");
    _elementClose("form");
    _elementClose("div");
  }
  if (typeof $render === "function") {
    $export.render = $render;
  }
  return $export;
})());