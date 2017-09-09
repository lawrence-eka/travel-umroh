yalla.framework.addComponent("/dist/booking/card-booking", (function() {
  var $patchChanges = yalla.framework.renderToScreen;
  var $inject = yalla.framework.createInjector("/dist/booking/card-booking");
  var $export = {};
  var $path = "/dist/booking/card-booking";
  var _elementName = "dist.booking.card-booking";
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
      booking: props.booking,
      flow: (new Utils()).flow.booking,
      showOnly: props.showOnly,
      alert: new Alert(null, $patchChanges, "alert"),
      displayedPackageId: null,
      onClosePackageDetail: new Event(),
    }
  }

  function onPropertyChange(props) {
    //debugger;
    if (props.booking) {
      this.state.booking = props.booking.newValue;
      this.state.status = (new Utils()).bookings.status(props.booking.newValue);
    }
    if (props.showOnly) this.state.showOnly = props.showOnly.newValue;
  }

  function onClick() {
    //debugger;
    this.emitEvent('click', this.state.booking);
  }

  function onShowPaymentDetail() {
    window.location.hash = '#app/booking.paymentDetails:bookingId=' + this.state.booking.id;
  }

  function onEditPassenger() {
    window.location.hash = "#app/passenger.home:bookingId=" + this.state.booking.id;
  }

  function onSaveBooking() {
    this.emitEvent('saved');
  }

  function onCancelBooking() {
    //debugger;
    var self = this;
    return new Promise(function(resolve) {
      //debugger;
      if (self.state.booking.bookingStatus == 'DPS') {
        dpd.bookings.del(self.state.booking.id, function(err) {
          debugger;
          self.state.alert.alert(null);
          self.emitEvent("cancelled");
          resolve(null);
        });
      } else {
        self.state.booking.isCancelled = true;
        self.state.booking.bookingStatus = self.state.flow.move(self.state.booking.bookingStatus, 'cancellation');
        dpd.bookings.put(self.state.booking.id, self.state.booking, function(res, err) {
          debugger;
          self.state.alert.alert(err);
          if (!err) {
            self.emitEvent("cancelled");
          }
          resolve(null);
        });
      }
    });
  }

  function onDisplayPackageDetails() {
    //debugger;
    this.state.displayedPackageId = this.state.booking.package.id;
    $patchChanges();
  }

  function onClosePackageDisplay() {
    debugger;
    this.state.displayedPackageId = null;
    $patchChanges();
  }


  function $render(_props, _slotView) {
    _context["card"] = $inject("/component/panel");
    var card = _context["card"];
    _context["alert"] = $inject("/component/alert");
    var alert = _context["alert"];
    _context["entry"] = $inject("/component/entry");
    var entry = _context["entry"];
    _context["show-package"] = $inject("/search-package/showPackage");
    var showPackage = _context["show-package"];
    _context["popup"] = $inject("/component/scrollable-popup/home");
    var popup = _context["popup"];
    _elementOpenStart("div", "");
    _attr("element", "dist.booking.card-booking");
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
        onClick.bind(self)();
      },
      "title": _state.booking.package.packageName
    };
    _context["card"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {
      if (slotName === "body") {
        _elementOpenStart("div", "");
        _elementOpenEnd("div");
        _elementOpenStart("div", "");
        _attr("class", "row");
        _elementOpenEnd("div");
        var _params = {
          "type": "label",
          "prompt": ('Booking No: ' + _state.booking.bookingNo),
          "innerDivClass": "custom-label-margin"
        };
        _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
        var _params = {
          "type": "label",
          "prompt": ('Travel Date: ' + ((_state.booking.package.travelDateFrom).toStringDateRange(_state.booking.package.travelDateUntil))),
          "innerDivClass": "custom-label-margin"
        };
        _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
        var _params = {
          "type": "label",
          "prompt": ('Operator: ' + _state.booking.travelAgent.travelAgentName),
          "innerDivClass": "custom-label-margin"
        };
        _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
        var _params = {
          "type": "label",
          "prompt": ('Land Arrangements: ' + (_state.booking.costLandArrangements ? _state.booking.costLandArrangements.toFormattedString() : '')),
          "innerDivClass": "custom-label-margin"
        };
        _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
        var _params = {
          "type": "label",
          "prompt": ('Tickets: ' + (_state.booking.costTickets ? _state.booking.costTickets.toFormattedString() : '')),
          "innerDivClass": "custom-label-margin"
        };
        _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
        var _params = {
          "type": "label",
          "prompt": ('Total passenger: ' + (_state.booking.numberOfPassengers ? _state.booking.numberOfPassengers : '')),
          "innerDivClass": "custom-label-margin"
        };
        _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
        var _params = {
          "type": "label",
          "prompt": ('Total Price: ' + ((_state.booking.totalPrice - _state.booking.uniqueCode) ? (_state.booking.totalPrice - _state.booking.uniqueCode).toFormattedString() : '')),
          "innerDivClass": "custom-label-margin"
        };
        _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
        var _params = {
          "type": "label",
          "prompt": ('Unique Code: ' + (_state.booking.uniqueCode ? _state.booking.uniqueCode : '')),
          "innerDivClass": "custom-label-margin"
        };
        _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
        var _params = {
          "type": "label",
          "prompt": ('Grand Total: ' + ((_state.booking.totalPrice) ? (_state.booking.totalPrice).toFormattedString() : '')),
          "innerDivClass": "custom-label-margin"
        };
        _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
        var _params = {
          "type": "label",
          "prompt": ('Expiry Date: ' + (_state.booking.waitingForPaymentUntil ? _state.booking.waitingForPaymentUntil.toDateComponents(false, true) : ''))
        };
        _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
        _elementClose("div");
        if (!_state.showOnly) {
          _elementOpenStart("div", "");
          _attr("class", "row");
          _elementOpenEnd("div");
          var _params = {
            "type": "button",
            "name": "btnPackageDetails",
            "value": "Package Details",
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
              onDisplayPackageDetails.bind(self)();
            }
          };
          _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
          var _params = {
            "type": "button",
            "name": "btnSave",
            "value": "Save & Close",
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
              onSaveBooking.bind(self)();
            }
          };
          _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
          var _params = {
            "type": "button",
            "name": "btnPassengers",
            "value": "Passengers...",
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
              onEditPassenger.bind(self)();
            }
          };
          _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
          if (_state.booking.uniqueCode) {
            var _params = {
              "type": "button",
              "name": "btnPaymentDetail",
              "value": "Payment Detail",
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
                onShowPaymentDetail.bind(self)();
              }
            };
            _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
          }
          if (_state.flow.isTransitionAllowed(_state.booking.bookingStatus, 'DPS')) {
            var _params = {
              "type": "button",
              "name": "btnRedefinePassengers",
              "value": "Redefine Passengers",
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
                onRedefinePassengers.bind(self)();
              }
            };
            _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
          }
          if (_state.flow.isTransitionAllowed(_state.booking.bookingStatus, 'WFP', 'paymentCancellation')) {
            var _params = {
              "type": "button",
              "name": "btnCancelPayment",
              "value": "Cancel Payment",
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
                onRedefinePassengers.bind(self)();
              }
            };
            _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
          }
          if (_state.flow.isTransitionAllowed(_state.booking.bookingStatus, 'CCL')) {
            var _params = {
              "type": "button",
              "name": "btnCancel",
              "value": "Cancel Booking",
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
                onCancelBooking.bind(self)();
              }
            };
            _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
          }
          _elementClose("div");
        }
        _elementClose("div");
      }
      if (slotName === "footer") {
        _elementOpenStart("div", "");
        _elementOpenEnd("div");
        _elementOpenStart("strong", "");
        _elementOpenEnd("strong");
        _text("Status: " + (_state.flow.status(_state.booking.bookingStatus)) + "");
        _elementClose("strong");
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
    _elementOpenStart("span", "");
    _elementOpenEnd("span");
    yalla.framework.registerRef("packageInfo", IncrementalDOM.currentElement(), function() {
      if (_state.displayedPackageId) {
        var _params = {
          "show": _state.displayedPackageId,
          "onCloseEvent": _state.onClosePackageDetail
        };
        _context["popup"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {
          var _params = {
            "packageId": _state.displayedPackageId,
            "aspopup": "aspopup",
            "home": "#app/booking.home",
            "readonly": "readonly",
            "onclose": function(event) {
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
              onClosePackageDisplay.bind(self)();
            },
            "onCloseEvent": _state.onClosePackageDetail
          };
          _context["show-package"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
        });
      }
    })()
    _elementClose("span");
    _elementClose("div");
  }
  if (typeof $render === "function") {
    $export.render = $render;
  }
  return $export;
})());