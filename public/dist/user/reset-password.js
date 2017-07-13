yalla.framework.addComponent("/dist/user/reset-password", (function() {
  var $patchChanges = yalla.framework.renderToScreen;
  var $inject = yalla.framework.createInjector("/dist/user/reset-password");
  var $export = {};
  var $path = "/dist/user/reset-password";
  var _elementName = "dist.user.reset-password";
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

  function initState(props) {
    return {
      alert: new Alert(null, $patchChanges, "alert"),
      uuid: props.id,
      user: null,
      success: false,
    }
  }

  function oPropertyChange(props) {
    //debugger;
    if (props.id) this.state.uuid = props.id.newValue;
    if (props.success) this.state.success = props.success.newValue;
  }
  //https://localhost/#user.reset-password:id=c31d4f99-f902-44a4-8d12-4541ff9b7a3b
  function getUser() {
    var self = this;
    return new Promise(function(resolve) {
      var q = {
        uuid: self.state.uuid,
      }
      dpd.resetpassword.get(q, function(user, err) {
        //debugger;
        self.state.alert.alert(err);
        if (!err) {
          resolve(user);
        } else {
          resolve(null);
        }
      });
    });
  }

  function onChangePassword() {
    var self = this;
    var q = {
      password: this.target.form.elements.password.value,
    }
    var self = this;
    dpd.resetpassword.put({
      uuid: self.state.uuid
    }, q, function(result, err) {
      //debugger;
      self.state.alert.alert(err);
      if (!err) {
        self.state.success = true;
        $patchChanges();
      }
    });
  }

  function onCancel() {
    window.location.hash = "#app/user.login-form"
  }

  function onLogIn() {
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
    _attr("element", "dist.user.reset-password");
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
    if (!_state.success) {
      _elementOpenStart("span", "");
      _elementOpenEnd("span");
      (function(domNode) {
        var node = domNode.element;
        var self = {
          target: node
        };
        self.properties = _props;
        if ('elements' in self.target) {
          self.elements = self.target.elements;
        }
        self.currentTarget = self.target;
        self.component = _component;
        self.component._state = self.component._state || {};
        self.state = self.component._state;

        function asyncFunc_1(data) {
          if (data) {
            var _params = {
              "nofooter": "nofooter"
            };
            _context["panel"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {
              if (slotName === "title") {
                _elementOpenStart("div", "");
                _elementOpenEnd("div");
                _elementOpenStart("strong", "");
                _elementOpenEnd("strong");
                _text("Reset Your Password");
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
                  "type": "label",
                  "prompt": 'Hello, ' + data.firstName + ' ' + data.lastName
                };
                _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
                var _params = {
                  "type": "password",
                  "name": "password",
                  "required": "required",
                  "prompt": "Your New Password"
                };
                _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
                var _params = {
                  "type": "password",
                  "name": "retypePassword",
                  "required": "required",
                  "prompt": "Re-type Your New Password"
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
                    onChangePassword.bind(self)();
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
            });
          }
        }
        var promise = getUser.bind(self)();
        if (promise && typeof promise == "object" && "then" in promise) {
          _skip();
          promise.then(function(_result) {
            $patchChanges(node, function() {
              asyncFunc_1.call(self, _result)
            });
          }).catch(function(err) {
            console.log(err);
          });
        } else {
          asyncFunc_1.call(self, promise)
        }
      })({
        element: IncrementalDOM.currentElement(),
        pointer: IncrementalDOM.currentPointer()
      });
      _elementClose("span");
    }
    if (_state.success) {
      _elementOpenStart("span", "");
      _elementOpenEnd("span");
      var _params = {
        "nofooter": "nofooter"
      };
      _context["panel"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {
        if (slotName === "title") {
          _elementOpenStart("div", "");
          _elementOpenEnd("div");
          _elementOpenStart("strong", "");
          _elementOpenEnd("strong");
          _text("Reset Your Password");
          _elementClose("strong");
          _elementClose("div");
        }
        if (slotName === "body") {
          _elementOpenStart("div", "");
          _elementOpenEnd("div");
          _elementOpenStart("div", "");
          _elementOpenEnd("div");
          var _params = {
            "message": "Your password has been changed.",
            "alertType": "info"
          };
          _context["alert"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
          _elementClose("div");
          _elementOpenStart("div", "");
          _attr("class", "row");
          _elementOpenEnd("div");
          var _params = {
            "type": "button",
            "value": "Log In",
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
              onLogIn.bind(self)();
            }
          };
          _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
          _elementClose("div");
          _elementClose("div");
        }
      });
      _elementClose("span");
    }
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