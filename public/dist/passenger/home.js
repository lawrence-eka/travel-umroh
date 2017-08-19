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
      passengers: null,
      editPassengerId: null,
      alert: new Alert(null, $patchChanges, "alert"),
      isEditMode: false,
      flow: (new Utils).flow.booking,
    }
  }

  function onCancelled() {
    this.state.isEditMode = false;
    this.state.editPassengerId = null,
      $patchChanges();
  }

  function onSaved() {
    this.state.isEditMode = false;
    this.state.editPassengerId = null;
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

  function onFinalizePassengerCount() {
    var self = this;
    var booking = this.state.booking;

    booking.uniqueCode = Math.floor(Math.random() * 1000);
    booking.totalPrice = booking.totalPrice + booking.uniqueCode;
    booking.waitingForPaymentUntil = (new Date().addHours(3)).getTime();
    booking.bookingStatus = self.state.flow.move(booking.bookingStatus, 'passengersCompleted');
    debugger;
    dpd.bookings.put(booking.id, booking, function(bkg, err) {
      debugger;
      self.state.alert.alert(err);
      if (!err) {
        window.location.hash = "#app/booking.home:bookingId=" + self.state.bookingId;
      }
    });
  }

  function getBookings() {
    var self = this;
    //debugger;
    return new Promise(function(resolve) {
      dpd.bookings.get(self.state.bookingId, function(bkg, err) {
        //debugger;
        self.state.alert.alert(err);
        if (!err) {
          self.state.booking = bkg;
          dpd.passengers.get({
            "bookingId": self.state.booking.id
          }, function(passengers, err) {
            //debugger;
            self.state.alert.alert(err);
            if (!err) {
              self.state.booking.numberOfPassengers = passengers.length;
              self.state.booking.totalPrice = (self.state.booking.numberOfPassengers * (self.state.booking.costTickets + self.state.booking.costLandArrangements)) + (self.state.booking.uniqueCode ? self.state.booking.uniqueCode : 0);
              dpd.bookings.put(self.state.booking.id, self.state.booking, function(res, err) {
                debugger;
                self.state.alert.alert(err);
                self.state.passengers = passengers;
                //if(!err) resolve(passengers);
                resolve(bkg);
              });
            }
          });
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
    window.location.hash = "#app/booking.home:bookingId=" + this.state.bookingId;
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
          "title": 'Passengers of ' + _state.booking.package.packageName,
          "nofooter": "nofooter"
        };
        _context["panel"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {
          if (slotName === "body") {
            _elementOpenStart("div", "");
            _attr("class", "row");
            _elementOpenEnd("div");
            var _params = {
              "type": "button",
              "value": "Back to My Booking",
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
            if (_state.booking.bookingStatus == 'DPS') {
              var _params = {
                "type": "button",
                "value": "Add Passenger",
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
            if ((_state.booking.bookingStatus == 'DPS') && (_state.booking.numberOfPassengers > 0)) {
              var _params = {
                "type": "button",
                "value": "Next: Payment...",
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
                  onFinalizePassengerCount.bind(self)();
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
            "passengers": _state.passengers,
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