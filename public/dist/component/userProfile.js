yalla.framework.addComponent("/dist/component/userProfile", (function() {
  var $path = "/dist/component/userProfile";
  var $patchChanges = yalla.framework.renderToScreen;
  var $export = {};
  var _context = {};
  var _parentComponent = yalla.framework.getParentComponent;
  var _merge = yalla.utils.merge;
  var $inject = yalla.framework.createInjector("/dist/component/userProfile");

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


  function initState(props) {
    return {
      error: {
        message: props.errorMessage
      }
    };
  }

  function loadProfile(profile, errorMessage) {
    if (!this.state.error.message) this.state.error.message = errorMessage;
    return profile ? profile : {};
  }

  function onRegister() {
    this.state.error.message = '';
    var form = this.target.form;

    if (form.elements.password.value != form.elements.repeatPassword.value) {
      this.state.error.message = "Please repeat your password correctly";
      $patchChanges();
      return;
    }

    var profile = {};
    profile.id = form.elements.id.value;
    profile.firstName = form.elements.firstName.value;
    profile.lastName = form.elements.lastName.value;
    profile.email = form.elements.email.value;
    profile.phone = form.elements.phone.value;
    profile.username = form.elements.email.value;

    if (profile.username) profile.username = profile.username.toLowerCase();
    if (form.elements.password.value != '') profile.password = form.elements.password.value;

    profile.address1 = form.elements.address1.value;
    profile.city = form.elements.city.value;
    profile.isAdmin = (form.elements.isAdmin.value == "on");
    profile.isTravelAgent = (form.elements.isTravelAgent.value == "on");
    debugger;
    this.emitEvent('save', profile);
  }

  function onCancel() {
    this.emitEvent('cancel');
  }


  function $render(_props, _slotView) {
    _elementOpenStart("link", "");
    _attr("element", "dist.component.userProfile");
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
    _context["alert"] = $inject("/component/alert");
    var alert = _context["alert"];
    _context["entry"] = $inject("/component/entry");
    var entry = _context["entry"];
    _context["panel"] = $inject("/component/panel");
    var panel = _context["panel"];
    _elementOpenStart("div", "");
    _attr("element", "dist.component.userProfile");
    _attr("class", "container all-5px");
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
      "title": (_props.profile ? 'Your Profile' : 'Please Sign Up'),
      "nofooter": "nofooter"
    };
    _context["panel"].render(typeof arguments[1] === "object" ? _merge(arguments[1], __params) : __params, function(slotName, slotProps) {
      if (slotName == "body") {
        _elementOpenStart("div", "");
        _elementOpenEnd("div");
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
          self.component = __component;
          self.component.__state = self.component.__state || {};
          self.state = self.component.__state;

          function asyncFunc__1(data) {
            _elementOpenStart("form", "");
            _elementOpenEnd("form");
            _elementOpenStart("input", "");
            _attr("type", "hidden");
            _attr("name", "id");
            _attr("value", data.id);
            _elementOpenEnd("input");
            _elementClose("input");
            _elementOpenStart("div", "");
            _attr("class", "row");
            _elementOpenEnd("div");
            var __params = {
              "type": "text",
              "prompt": "First Name",
              "name": "firstName",
              "value": data.firstName
            };
            _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], __params) : __params, function(slotName, slotProps) {});
            var __params = {
              "type": "text",
              "prompt": "Last Name",
              "name": "lastName",
              "value": data.lastName
            };
            _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], __params) : __params, function(slotName, slotProps) {});
            _elementClose("div");
            _elementOpenStart("div", "");
            _attr("class", "row");
            _elementOpenEnd("div");
            var __params = {
              "type": "email",
              "prompt": "Email",
              "name": "email",
              "value": data.email
            };
            _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], __params) : __params, function(slotName, slotProps) {});
            var __params = {
              "type": "text",
              "prompt": "Phone",
              "name": "phone",
              "value": data.phone
            };
            _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], __params) : __params, function(slotName, slotProps) {});
            _elementClose("div");
            _elementOpenStart("div", "");
            _attr("class", "row");
            _elementOpenEnd("div");
            var __params = {
              "type": "textarea",
              "prompt": "Address",
              "name": "address1",
              "value": data.address1
            };
            _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], __params) : __params, function(slotName, slotProps) {});
            _elementClose("div");
            _elementOpenStart("div", "");
            _attr("class", "row");
            _elementOpenEnd("div");
            var __params = {
              "type": "text",
              "prompt": "City",
              "name": "city",
              "value": data.city
            };
            _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], __params) : __params, function(slotName, slotProps) {});
            _elementClose("div");
            _elementOpenStart("div", "");
            _attr("class", "row custom-set-hidden");
            _elementOpenEnd("div");
            var __params = {
              "type": "checkbox",
              "prompt": "Travel Agent",
              "name": "isTravelAgent",
              "value": data.isTravelAgent
            };
            _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], __params) : __params, function(slotName, slotProps) {});
            var __params = {
              "type": "checkbox",
              "prompt": "Administrator",
              "name": "isAdmin",
              "value": data.isAdmin
            };
            _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], __params) : __params, function(slotName, slotProps) {});
            _elementClose("div");
            _elementOpenStart("div", "");
            _attr("class", "row");
            _elementOpenEnd("div");
            var __params = {
              "type": "password",
              "prompt": "Password",
              "name": "password",
              "value": data.password
            };
            _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], __params) : __params, function(slotName, slotProps) {});
            var __params = {
              "type": "password",
              "prompt": "Repeat Password",
              "name": "repeatPassword"
            };
            _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], __params) : __params, function(slotName, slotProps) {});
            _elementClose("div");
            var __params = {
              "alertType": 'error',
              "message": __state.error.message
            };
            _context["alert"].render(typeof arguments[1] === "object" ? _merge(arguments[1], __params) : __params, function(slotName, slotProps) {});
            _elementOpenStart("div", "");
            _attr("class", "row");
            _elementOpenEnd("div");
            var __params = {
              "type": "button",
              "name": "btnSave",
              "value": _props.profile ? 'Save' : 'Register',
              "divClass": "col-xs-6 col-sm-6 col-md-6 col-lg-6",
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
                return onRegister.bind(self)();
              }
            };
            _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], __params) : __params, function(slotName, slotProps) {});
            var __params = {
              "type": "button",
              "name": "btnCancel",
              "value": "Cancel",
              "divClass": "col-xs-6 col-sm-6 col-md-6 col-lg-6",
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
                return onCancel.bind(self)();
              }
            };
            _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], __params) : __params, function(slotName, slotProps) {});
            _elementClose("div");
            _elementClose("form");
          }
          var promise = loadProfile.bind(self)(_props.profile, _props.errorMessage);
          if (promise && typeof promise == "object" && "then" in promise) {
            _skip();
            promise.then(function(_result) {
              $patchChanges(node, function() {
                asyncFunc__1.call(self, _result)
              });
            }).catch(function(err) {
              console.log(err);
            });
          } else {
            asyncFunc__1.call(self, promise)
          }
        })({
          element: IncrementalDOM.currentElement(),
          pointer: IncrementalDOM.currentPointer()
        });
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