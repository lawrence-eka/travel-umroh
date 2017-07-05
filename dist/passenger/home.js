yalla.framework.addComponent("/dist/passenger/home", (function() {
  var $patchChanges = yalla.framework.renderToScreen;
  var $inject = yalla.framework.createInjector("/dist/passenger/home");
  var $export = {};
  var $path = "/dist/passenger/home";
  var _elementName = "dist.passenger.home";
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
      bookingId: props.bookingId,
      booking: null,
      bookingStatus: null,
      editPassengerId: null,
      alert: new Alert(),
      isEditMode: false,
    }
  }
  /*
      function onPropertyChange(props) {
      	debugger;
  	    if(props.bookingId) this.state.bookingId = props.bookingId.newValue;
  	    if(props.booking) this.state.booking = props.booking.newValue;
          if(props.bookingStatus) this.state.bookingStatus = props.bookingStatus.newValue;
          if(props.editPassengerId) this.state.editPassengerId = props.editPassengerId.newValue;
      }
  */
  function onCancelled() {
    this.state.isEditMode = false;
    this.state.editPassengerId = null,
      $patchChanges();
  }

  function onSaved() {
    this.state.isEditMode = false;
    this.state.editPassengerId = null,
      $patchChanges();
  }

  function onDelete(event) {
    //debugger;
    $patchChanges();
  }

  function onAddPassenger() {
    this.state.isEditMode = true;
    this.state.editPassengerId = null,
      $patchChanges();
  }

  function getBookings() {
    var self = this;
    return new Promise(function(resolve) {
      dpd.bookings.get(self.state.bookingId, function(bkg, err) {
        //debugger;
        self.state.alert.alert(err);
        if (!err) {
          self.state.booking = bkg;
          self.state.bookingStatus = (new Utils()).bookings.status(bkg);
          resolve(bkg);
        }
      });
    });
  }

  function onEdit(event) {
    this.state.isEditMode = true;
    this.state.editPassengerId = event.data;
    $patchChanges();
  }

  function onBackToMyBookings() {
    window.location.hash = "#app/booking.home";
  }


  function $render(_props, _slotView) {
    _context["list-passenger"] = $inject("/passenger/list-passenger");
    var listPassenger = _context["list-passenger"];
    _context["edit-passenger"] = $inject("/passenger/edit-passenger");
    var editPassenger = _context["edit-passenger"];
    _context["card-booking"] = $inject("/booking/card-booking");
    var cardBooking = _context["card-booking"];
    _context["entry"] = $inject("/component/entry");
    var entry = _context["entry"];
    _context["panel"] = $inject("/component/panel");
    var panel = _context["panel"];
    _elementOpenStart("div", "");
    _attr("element", "dist.passenger.home");
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
        var _params = {
          "title": _state.booking.package.packageName,
          "nofooter": "nofooter"
        };
        _context["panel"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {
          if (slotName === "body") {
            _elementOpenStart("div", "");
            _elementOpenEnd("div");
            var _params = {
              "type": "button",
              "value": "Go to My Bookings",
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
                onBackToMyBookings.bind(self)();
              }
            };
            _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
            if (!_state.isEditMode && _state.bookingStatus.code == 0) {
              var _params = {
                "type": "button",
                "value": "Add Passenger...",
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
                  onAddPassenger.bind(self)();
                }
              };
              _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
            }
            _elementClose("div");
          }
        });
        if (_state.isEditMode) {
          _elementOpenStart("span", "");
          _elementOpenEnd("span");
          var _params = {
            "id": _state.editPassengerId,
            "bookingId": _state.booking.id,
            "oncancelled": function(event) {
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
              onCancelled.bind(self)();
            },
            "onsaved": function(event) {
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
              onSaved.bind(self)();
            }
          };
          _context["edit-passenger"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
          _elementClose("span");
        }
        if (!_state.isEditMode) {
          _elementOpenStart("span", "");
          _elementOpenEnd("span");
          var _params = {
            "booking": _state.booking,
            "bookingStatus": _state.bookingStatus,
            "onedit": function(event) {
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
              onEdit.bind(self)(event);
            },
            "ondelete": function(event) {
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
              onDelete.bind(self)(event);
            }
          };
          _context["list-passenger"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
          _elementClose("span");
        }
        _elementOpenStart("span", "");
        _elementOpenEnd("span");
        yalla.framework.registerRef("alert", IncrementalDOM.currentElement(), function() {
          _elementOpenStart("alert", "");
          _attr("alertType", _state.alert.type.bind(self)());
          _attr("message", _state.alert.text.bind(self)());
          _elementOpenEnd("alert");
          _elementClose("alert");
        })()
        _elementClose("span");
      }
      var promise = getBookings.bind(self)();
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
  if (typeof $render === "function") {
    $export.render = $render;
  }
  return $export;
})());