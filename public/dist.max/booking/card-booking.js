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
    //debugger;
    return {
      booking: props.booking,
      bookingUtils: (new Utils()).bookings,
      status: (new Utils()).bookings.status(props.booking),
      showOnly: props.showOnly,
      alert: new Alert(null, $patchChanges, "alert"),
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

  function calculatePaymentDetail() {
    //debugger;
    var booking = this.state.booking;
    var self = this;
    if (!booking.uniqueCode) {
      booking.uniqueCode = Math.floor(Math.random() * 1000);
      booking.totalPrice = booking.costLandArrangements + booking.costTickets + booking.uniqueCode;
      booking.waitingForPaymentUntil = (new Date().addHours(3)).getTime();
      dpd.bookings.put(booking, function(bkg, err) {
        //debugger;
        self.state.alert.alert(err);
        if (!err) {
          window.location.hash = '#app/booking.paymentDetails:bookingId=' + booking.id;
        }
      });
    } else {
      window.location.hash = '#app/booking.paymentDetails:bookingId=' + booking.id;
    }
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
      if (self.state.status.code == 0) {
        dpd.bookings.del(self.state.booking.id, function(err) {
          //debugger;
          self.state.alert.alert(null);
          self.emitEvent("cancelled");
          resolve(null);
        });
      } else {
        self.state.booking.isCancelled = true;
        dpd.bookings.put(self.state.booking.id, self.state.booking, function(res, err) {
          self.state.alert.alert(err);
          if (!err) {
            self.emitEvent("cancelled");
          }
          resolve(null);
        });
      }
    });
  }


  function $render(_props, _slotView) {
    _context["card"] = $inject("/component/panel");
    var card = _context["card"];
    _context["alert"] = $inject("/component/alert");
    var alert = _context["alert"];
    _context["entry"] = $inject("/component/entry");
    var entry = _context["entry"];
    _elementOpenStart("link", "");
    _attr("element", "dist.booking.card-booking");
    _attr("href", "asset/css/custom-style.css");
    _attr("rel", "stylesheet");
    _elementOpenEnd("link");
    _elementClose("link");
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
      "title": 'Package: ' + _state.booking.package.packageName
    };
    _context["card"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {
      if (slotName === "body") {
        _elementOpenStart("div", "");
        _elementOpenEnd("div");
        _text("Travel Date: " + ((_state.booking.package.travelDateFrom).toStringDateRange(_state.booking.package.travelDateUntil)) + "");
        _elementOpenStart("br", "");
        _elementOpenEnd("br");
        _elementClose("br");
        _text("Operator: " + (_state.booking.travelAgent.travelAgentName) + "");
        _elementOpenStart("br", "");
        _elementOpenEnd("br");
        _elementClose("br");
        _text("Land Arrangements: " + (_state.booking.costLandArrangements ? _state.booking.costLandArrangements.toFormattedString() : '') + "");
        _elementOpenStart("br", "");
        _elementOpenEnd("br");
        _elementClose("br");
        _text("Tickets: " + (_state.booking.costTickets ? _state.booking.costTickets.toFormattedString() : '') + "");
        _elementOpenStart("br", "");
        _elementOpenEnd("br");
        _elementClose("br");
        _text("Total passenger: " + (_state.booking.numberOfPassengers ? _state.booking.numberOfPassengers : '') + "");
        _elementOpenStart("br", "");
        _elementOpenEnd("br");
        _elementClose("br");
        _text("Total Price: " + ((_state.booking.totalPrice ? _state.booking.totalPrice.toFormattedString() : '')) + "");
        _elementOpenStart("br", "");
        _elementOpenEnd("br");
        _elementClose("br");
        _text("Unique Code: " + (_state.booking.uniqueCode ? _state.booking.uniqueCode : '') + "");
        _elementOpenStart("br", "");
        _elementOpenEnd("br");
        _elementClose("br");
        _text("Grand Total: " + ((_state.booking.totalPrice + _state.booking.uniqueCode) ? (_state.booking.totalPrice + _state.booking.uniqueCode).toFormattedString() : '') + "");
        _elementOpenStart("br", "");
        _elementOpenEnd("br");
        _elementClose("br");
        _text("Expiry Date: " + ((_state.booking.waitingForPaymentUntil ? _state.booking.waitingForPaymentUntil.toDateComponents(false, true) : '')) + "");
        _elementOpenStart("br", "");
        _elementOpenEnd("br");
        _elementClose("br");
        if (!_state.showOnly) {
          _elementOpenStart("div", "");
          _elementOpenEnd("div");
          _elementOpenStart("div", "");
          _attr("class", "row");
          _elementOpenEnd("div");
          var _params = {
            "type": "button",
            "name": "btnSave",
            "value": _state.status.code == _state.bookingUtils.definingPassengers ? 'Save for Later' : 'Close',
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
          if (_state.status.code == _state.bookingUtils.definingPassengers || _state.status.code == _state.bookingUtils.waitingForPayment) {
            var _params = {
              "type": "button",
              "name": "btnCancel",
              "value": "Cancel Booking",
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
          var _params = {
            "type": "button",
            "name": "btnPaymentDetail",
            "value": (_state.status.code == _state.bookingUtils.definingPassengers ? 'Next Step: ' : '') + 'Payment Detail',
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
              calculatePaymentDetail.bind(self)();
            }
          };
          _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
          _elementClose("div");
          _elementClose("div");
        }
        _elementClose("div");
      }
      if (slotName === "footer") {
        _elementOpenStart("div", "");
        _elementOpenEnd("div");
        _elementOpenStart("strong", "");
        _elementOpenEnd("strong");
        _text("Status: " + (_state.status.text) + "");
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
    _elementClose("div");
  }
  if (typeof $render === "function") {
    $export.render = $render;
  }
  return $export;
})());