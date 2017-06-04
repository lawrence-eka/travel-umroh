yalla.framework.addComponent("/dist/user/login-form", (function() {
  var $patchChanges = yalla.framework.renderToScreen;
  var $inject = yalla.framework.createInjector("/dist/user/login-form");
  var $export = {};
  var $path = "/dist/user/login-form";
  var _elementName = "dist.user.login-form";
  var _context = {};
  var _parentComponent = yalla.framework.getParentComponent;
  var _merge = yalla.utils.merge;

  function ComponentEvent(type, data, target, currentTarget) {
    this.data = data;
    this.target = target;
    this.type = type;
    this.currentTarget = currentTarget;
  }

  var _elementOpen = IncrementalDOM.elementOpen;
  var _elementClose = IncrementalDOM.elementClose;
  var _elementOpenStart = IncrementalDOM.elementOpenStart;
  var _elementOpenEnd = IncrementalDOM.elementOpenEnd;
  var _elementVoid = IncrementalDOM.elementVoid;
  var _text = IncrementalDOM.text;
  var _attr = IncrementalDOM.attr;
  var _skip = IncrementalDOM.skip;

  function initState(props) {
    return {}
  };

  function onPropertyChange(event) {};


  var errorMessage = '';

  function login() {
    var form = this.target.form;
    errorMessage = "";
    var userName = form.elements.username.value.toLowerCase();
    var password = form.elements.password.value;
    var rememberMe = form.elements.rememberMe.checked;

    form.elements.username.value = '';
    form.elements.password.value = '';
    form.elements.rememberMe.checked = false;

    dpd.users.login({
      "username": userName,
      "password": password
    }, function(user, err) {
      if (err) {
        errorMessage = err.message;
        $patchChanges();
      } else {
        dpd.users.me(function(me) {
          storage.me.save(me, rememberMe);
          window.location.hash = "#app/action.searchPackage"
          $patchChanges();
        });
      }
    });
  }

  function $render(_props, _slotView) {
    _context["alert"] = $inject("/component/alert");
    var alert = _context["alert"];
    _context["panel"] = $inject("/component/panel");
    var panel = _context["panel"];
    _context["entry"] = $inject("/component/entry");
    var entry = _context["entry"];
    _elementOpenStart("link", "");
    _attr("element", "dist.user.login-form");
    _attr("href", "asset/css/custom-style.css");
    _attr("rel", "stylesheet");
    _elementOpenEnd("link");
    var _component = IncrementalDOM.currentElement();
    var _validComponent = yalla.framework.validComponentName(_component, _elementName)
    _component._state = _component._state && _validComponent ? _component._state : initState.bind(_component)(_props);
    _component._state._name = _elementName;
    var _state = _component._state;
    var _self = {
      component: _component,
      properties: _props,
      state: _component._state
    };
    if (_validComponent) {
      yalla.framework.propertyCheckChanges(_component._properties, _props, onPropertyChange.bind(_self));
    }
    _component._properties = _props;
    _elementClose("link");
    _elementOpenStart("div", "");
    _attr("element", "dist.user.login-form");
    _attr("class", "container  margin-top-login-panel");
    _elementOpenEnd("div");
    var _component = IncrementalDOM.currentElement();
    var _validComponent = yalla.framework.validComponentName(_component, _elementName)
    _component._state = _component._state && _validComponent ? _component._state : initState.bind(_component)(_props);
    _component._state._name = _elementName;
    var _state = _component._state;
    var _self = {
      component: _component,
      properties: _props,
      state: _component._state
    };
    if (_validComponent) {
      yalla.framework.propertyCheckChanges(_component._properties, _props, onPropertyChange.bind(_self));
    }
    _component._properties = _props;
    var _params = {
      "nofooter": "nofooter",
      "notitle": "notitle"
    };
    _context["panel"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {
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
        var _params = {
          "type": "text",
          "name": "username",
          "required": "required",
          "placeholder": "Email"
        };
        _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
        var _params = {
          "type": "password",
          "name": "password",
          "placeholder": "Password"
        };
        _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
        var _params = {
          "type": "checkbox",
          "name": "rememberMe",
          "prompt": "Remember me"
        };
        _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
        var _params = {
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
            self.component = _component;
            self.component._state = self.component._state || {};
            self.state = self.component._state;
            self.emitEvent = function(eventName, data) {
              var event = new ComponentEvent(eventName, data, self.target, self.currentTarget);
              if ('on' + eventName in _props) {
                _props['on' + eventName](event);
              }
            };
            login.bind(self)();
          }
        };
        _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
        _elementOpenStart("div", "");
        _attr("class", "form-group custom-entry-margin");
        _elementOpenEnd("div");
        _elementOpenStart("a", "");
        _attr("href", "#user.registration");
        _attr("class", "custom-entry-prompt");
        _elementOpenEnd("a");
        _text("New to MarKiMroh? Register here");
        _elementClose("a");
        _elementOpenStart("a", "");
        _attr("href", "#common.privacyPolicy");
        _attr("class", "custom-entry-prompt");
        _elementOpenEnd("a");
        _text("Privacy Policy");
        _elementClose("a");
        _elementClose("div");
        _elementClose("form");
        var _params = {
          "alertType": 'error',
          "message": errorMessage
        };
        _context["alert"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
        _elementClose("div");
      }
    });
    _elementClose("div");
  }
  if (typeof $render === "function") {
    $export.render = $render;
  }
  return $export;
})());