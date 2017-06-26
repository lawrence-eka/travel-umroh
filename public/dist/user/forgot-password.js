yalla.framework.addComponent("/dist/user/forgot-password", (function() {
  var $patchChanges = yalla.framework.renderToScreen;
  var $inject = yalla.framework.createInjector("/dist/user/forgot-password");
  var $export = {};
  var $path = "/dist/user/forgot-password";
  var _elementName = "dist.user.forgot-password";
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

  function initState() {
    return {
      alert: new Alert(null, $patchChanges, "alert")
    }
  }

  function onResetPassword() {
    debugger;
    var q = {
      email: this.target.form.elements.email.value,
      resetPassword: "-",
    }
    debugger;
    var self = this;
    dpd.resetpassword.post("", q, function(res, err) {
      debugger;
      self.state.alert.alert(err);
      if (!err) {
        window.location.has = "#app";
      }
    });
  }

  function onCancel() {
    window.location.hash = "#app/user.login-form"
  }

  function $render(_props, _slotView) {
    _context["profile"] = $inject("/user/userProfile");
    var profile = _context["profile"];
    _context["panel"] = $inject("/component/panel");
    var panel = _context["panel"];
    _context["entry"] = $inject("/component/entry");
    var entry = _context["entry"];
    _context["alert"] = $inject("/component/alert");
    var alert = _context["alert"];
    _elementOpenStart("div", "");
    _attr("element", "dist.user.forgot-password");
    _attr("class", "container small-margin-top");
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
    var _params = {};
    _context["panel"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {
      if (slotName === "title") {
        _elementOpenStart("div", "");
        _elementOpenEnd("div");
        _elementOpenStart("strong", "");
        _elementOpenEnd("strong");
        _text("Forgot Your Password?");
        _elementClose("strong");
        _elementClose("div");
      }
      if (slotName === "body") {
        _elementOpenStart("div", "");
        _elementOpenEnd("div");
        _elementOpenStart("form", "");
        _elementOpenEnd("form");
        _elementOpenStart("div", "");
        _attr("class", "row");
        _elementOpenEnd("div");
        var _params = {
          "type": "email",
          "name": "email",
          "required": "required",
          "prompt": "Your Email Address"
        };
        _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
        var _params = {
          "type": "button",
          "value": "Reset Password",
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
            onResetPassword.bind(self)();
          }
        };
        _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
        var _params = {
          "type": "button",
          "value": "Cancel",
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
            onCancel.bind(self)();
          }
        };
        _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
        _elementClose("div");
        _elementClose("form");
        _elementClose("div");
      }
      if (slotName === "footer") {
        _elementOpenStart("div", "");
        _elementOpenEnd("div");
        _text("Please Enter your email address");
        _elementClose("div");
      }
    });
    _elementOpenStart("span", "");
    _elementOpenEnd("span");
    yalla.framework.registerRef("alert", IncrementalDOM.currentElement(), function() {
      var _params = {
        "alertType": _state.alert.type.bind(self)(),
        "message": _state.alert.text.bind(self)()
      };
      _context["alert"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
    })()
    _elementClose("span");
    _elementClose("div");
  }
  if (typeof $render === "function") {
    $export.render = $render;
  }
  return $export;
})());