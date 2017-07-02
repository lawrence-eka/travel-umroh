yalla.framework.addComponent("/dist/passenger/edit-passenger", (function() {
  var $patchChanges = yalla.framework.renderToScreen;
  var $inject = yalla.framework.createInjector("/dist/passenger/edit-passenger");
  var $export = {};
  var $path = "/dist/passenger/edit-passenger";
  var _elementName = "dist.passenger.edit-passenger";
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
      id: props.id,
      bookingId: props.bookingId,
      alert: new Alert(null, $patchChanges, "alert"),
      passport: new PassportDatePair($patchChanges),
    }
  }

  function onCancel() {
    this.emitEvent('cancelled');
  }

  function getPassenger() {
    var self = this;
    return new Promise(function(resolve) {
      dpd.passengers.get(self.state.id, function(psg, err) {
        self.state.alert.alert(err);
        if (!err) {
          resolve(psg);
        }
      });
    });
  }

  function registerPassenger() {
    //debugger;
    //booking.uniqueCode = Math.floor(Math.random() * 1000);
    var self = this;
    var formElements = self.target.form.elements;
    var q = {};
    q.bookingId = formElements.bookingId.value;
    q.id = formElements.id.value;
    q.firstName = formElements.firstName.value;
    q.middleName = formElements.middleName.value;
    q.lastName = formElements.lastName.value;
    q.birthPlace = formElements.birthPlace.value;
    q.birthday = (new Date(formElements.birthday.value)).getTime();
    q.passportNumber = formElements.passportNumber.value;
    q.passportIssuer = formElements.passportIssuer.value;
    q.passportIssueDate = (new Date(formElements.passportIssueDate.value)).getTime();
    q.passportExpiryDate = (new Date(formElements.passportExpiryDate.value)).getTime();

    formElements.firstName.value = "";
    formElements.middleName.value = "";
    formElements.lastName.value = "";
    formElements.birthPlace.value = "";
    formElements.birthday.value = "";
    formElements.passportNumber.value = "";
    formElements.passportIssuer.value = "";
    formElements.passportIssueDate.value = "";
    formElements.passportExpiryDate.value = "";
    //debugger;
    if (!q.id) {
      dpd.passengers.post(q, function(user, err) {
        //debugger;
        self.state.alert.alert(err);
        if (!err) {
          self.emitEvent('saved');
        }
      });
    } else {
      dpd.passengers.put(q.id, q, function(user, err) {
        //debugger;
        self.state.alert.alert(err);
        if (!err) {
          self.emitEvent('saved');
        }
      });
    }
  }

  function $render(_props, _slotView) {
    _context["alert"] = $inject("/component/alert");
    var alert = _context["alert"];
    _context["entry"] = $inject("/component/entry");
    var entry = _context["entry"];
    _context["panel"] = $inject("/component/panel");
    var panel = _context["panel"];
    _context["ppLink"] = $inject("/component/ppLink");
    var ppLink = _context["ppLink"];
    _elementOpenStart("div", "");
    _attr("element", "dist.passenger.edit-passenger");
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
      "title": "Passenger Detail"
    };
    _context["panel"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {
      if (slotName === "body") {
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
          self.component = _component;
          self.component._state = self.component._state || {};
          self.state = self.component._state;

          function asyncFunc_1(data) {
            _elementOpenStart("form", "");
            _attr("role", "form");
            _elementOpenEnd("form");
            _elementOpenStart("span", "");
            _elementOpenEnd("span");
            yalla.framework.registerRef("alert", IncrementalDOM.currentElement(), function() {
              var _params = {
                "type": "hidden",
                "name": "bookingId",
                "value": _state.bookingId
              };
              _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
              var _params = {
                "type": "hidden",
                "name": "id",
                "value": data.id
              };
              _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
              var _params = {
                "type": "text",
                "prompt": "First Name",
                "name": "firstName",
                "value": data.firstName,
                "alert": _state.alert
              };
              _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
              var _params = {
                "type": "text",
                "prompt": "Middle Name",
                "name": "middleName",
                "value": data.middleName,
                "alert": _state.alert
              };
              _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
              var _params = {
                "type": "text",
                "prompt": "Last Name",
                "name": "lastName",
                "value": data.lastName,
                "alert": _state.alert
              };
              _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
              var _params = {
                "type": "text",
                "prompt": "Birth Place",
                "name": "birthPlace",
                "value": data.birthPlace,
                "alert": _state.alert
              };
              _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
              var _params = {
                "type": "date",
                "prompt": "Birthday",
                "name": "birthday",
                "value": (data.birthday ? data.birthday : (new Date())).toYYYYMMDD(),
                "max": (new Date()).toYYYYMMDD(),
                "alert": _state.alert
              };
              _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
              var _params = {
                "type": "text",
                "prompt": "Passport Number",
                "name": "passportNumber",
                "value": data.passportNumber,
                "alert": _state.alert
              };
              _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
              var _params = {
                "type": "date",
                "prompt": "Passport Issue Date",
                "name": "passportIssueDate",
                "value": _state.passport.defaultStartDate.bind(self)(data.passportIssueDate),
                "min": _state.passport.minStartDate.bind(self)(),
                "max": _state.passport.maxStartDate.bind(self)(),
                "onfocusout": function(event) {
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
                  _state.passport.onStartDateFocusOut.bind(self)('passportExpiryDate');
                },
                "alert": _state.alert
              };
              _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
              _elementOpenStart("span", "");
              _elementOpenEnd("span");
              yalla.framework.registerRef("passportExpiryDate", IncrementalDOM.currentElement(), function() {
                var _params = {
                  "type": "date",
                  "prompt": "Passport Expiry Date",
                  "name": "passportExpiryDate",
                  "value": _state.passport.defaultEndDate.bind(self)(data.passportExpiryDate),
                  "min": _state.passport.minEndDate.bind(self)(),
                  "max": _state.passport.maxEndDate.bind(self)(),
                  "alert": _state.alert
                };
                _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
              })()
              _elementClose("span");
              var _params = {
                "type": "text",
                "prompt": "Passport Issuer",
                "name": "passportIssuer",
                "value": data.passportIssuer,
                "alert": _state.alert
              };
              _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
              var _params = {
                "type": "button",
                "name": "btnRegister",
                "divClass": "col-xs-6 col-sm-6 col-md-6 col-lg-6",
                "value": _state.id ? 'Save' : 'Register',
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
                  registerPassenger.bind(self)();
                }
              };
              _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
              var _params = {
                "type": "button",
                "name": "btnRegister",
                "divClass": "col-xs-6 col-sm-6 col-md-6 col-lg-6",
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
            })()
            _elementClose("span");
            _elementClose("form");
          }
          var promise = getPassenger.bind(self)();
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
        _elementClose("div");
      }
      if (slotName === "footer") {
        _elementOpenStart("div", "");
        _elementOpenEnd("div");
        var _params = {};
        _context["ppLink"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
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