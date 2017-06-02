yalla.framework.addComponent("/dist/user/login-form", (function() {
  var $path = "/dist/user/login-form";
  var $patchChanges = yalla.framework.renderToScreen;
  var $export = {};
  var _context = {};
  var _parentComponent = yalla.framework.getParentComponent;
  var _merge = yalla.utils.merge;
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

  function onPropertyChange(event) {
    return {}
  };


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
    // The component of this object
    var __component = IncrementalDOM.currentElement();
    __component.__state = __component.__state || initState.bind(__component)(_props);
    var __state = __component.__state;
    var __self = {
      component: __component,
      properties: _props,
      state: __component.__state
    };
    yalla.framework.propertyCheckChanges(__component.__properties, _props, onPropertyChange.bind(__self));
    __component.__properties = _props;
    _elementClose("link");
    _elementOpenStart("div", "");
    _attr("element", "dist.user.login-form");
    _attr("class", "container  margin-top-login-panel");
    _elementOpenEnd("div");
    // The component of this object
    var __component = IncrementalDOM.currentElement();
    __component.__state = __component.__state || initState.bind(__component)(_props);
    var __state = __component.__state;
    var __self = {
      component: __component,
      properties: _props,
      state: __component.__state
    };
    yalla.framework.propertyCheckChanges(__component.__properties, _props, onPropertyChange.bind(__self));
    __component.__properties = _props;
    var __params = {
      "nofooter": "nofooter",
      "notitle": "notitle"
    };
    _context["panel"].render(typeof arguments[1] === "object" ? _merge(arguments[1], __params) : __params, function(slotName, slotProps) {
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
        var __params = {
          "type": "text",
          "name": "username",
          "required": "required",
          "placeholder": "Username"
        };
        _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], __params) : __params, function(slotName, slotProps) {});
        var __params = {
          "type": "password",
          "name": "password",
          "placeholder": "Password"
        };
        _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], __params) : __params, function(slotName, slotProps) {});
        var __params = {
          "type": "checkbox",
          "name": "rememberMe",
          "prompt": "Remember me"
        };
        _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], __params) : __params, function(slotName, slotProps) {});
        var __params = {
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
        };
        _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], __params) : __params, function(slotName, slotProps) {});
        _elementOpenStart("div", "");
        _attr("class", "form-group custom-entry-margin");
        _elementOpenEnd("div");
        _elementOpenStart("a", "");
        _attr("href", "#user.registration");
        _attr("class", "custom-entry-prompt");
        _elementOpenEnd("a");
        _text("New to MarKiMroh? Register here");
        _elementClose("a");
        _elementClose("div");
        _elementClose("form");
        var __params = {
          "alertType": 'error',
          "message": errorMessage
        };
        _context["alert"].render(typeof arguments[1] === "object" ? _merge(arguments[1], __params) : __params, function(slotName, slotProps) {});
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