yalla.framework.addComponent("/dist/booking/edit-passenger", (function() {
  var $patchChanges = yalla.framework.renderToScreen;
  var $inject = yalla.framework.createInjector("/dist/booking/edit-passenger");
  var $export = {};
  var $path = "/dist/booking/edit-passenger";
  var _elementName = "dist.booking.edit-passenger";
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
    debugger;
    return {
      booking: props.booking,
      bookingId: props.booking.id,
      alert: new Alert(null, $patchChanges, "alert"),
    }
  }

  function registerPassenger() {
    debugger;
    //booking.uniqueCode = Math.floor(Math.random() * 1000);
    var self = this;
    self.state.booking.totalPrice = self.state.booking.numberOfPassengers * (self.state.booking.costTickets + self.state.booking.costLandArrangements);
    dpd.bookings.put(self.state.booking, function(booking, err) {
      self.state.alert.alert(err);
      if (!err) {
        var form = self.target.form;

        var q = {};
        q.bookingId = form.elements.bookingId.value;
        q.firstName = form.elements.firstName.value;
        q.middleName = form.elements.middleName.value;
        q.lastName = form.elements.lastName.value;
        q.birthPlace = form.elements.birthPlace.value;
        q.birthday = (new Date(form.elements.birthday.value)).getTime();
        q.passportNumber = form.elements.passportNumber.value;
        q.passportIssuer = form.elements.passportIssuer.value;
        q.passportIssueDate = (new Date(form.elements.passportIssueDate.value)).getTime();
        q.passportExpiryDate = (new Date(form.elements.passportExpiryDate.value)).getTime();

        form.elements.firstName.value = "";
        form.elements.middleName.value = "";
        form.elements.lastName.value = "";
        form.elements.birthPlace.value = "";
        form.elements.birthday.value = "";
        form.elements.passportNumber.value = "";
        form.elements.passportIssuer.value = "";
        form.elements.passportIssueDate.value = "";
        form.elements.passportExpiryDate.value = "";
        debugger;
        dpd.passengers.post(q, function(user, err) {
          debugger;
          self.state.alert.alert(err);
        });
      }
    });
  }

  function calculatePaymentDetail(bookingId) {
    booking.uniqueCode = Math.floor(Math.random() * 1000);
    booking.waitingForPaymentUntil = (new Date()).getTime() + 10800000;
    dpd.bookings.put(booking, function(bkg, err) {
      self.state.alert.alert(err);
      if (!err) {
        window.location.hash = '#app/booking.paymentDetails:bookingId=' + bookingId;
      }
    });
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
    _attr("element", "dist.booking.edit-passenger");
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
        _elementOpenStart("form", "");
        _attr("role", "form");
        _elementOpenEnd("form");
        if (slotName === "footer") {
          _elementOpenStart("div", "");
          _elementOpenEnd("div");
          var _params = {};
          _context["ppLink"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
          _elementClose("div");
        }
        _elementOpenStart("div", "");
        _attr("class", "row");
        _elementOpenEnd("div");
        var _params = {
          "type": "hidden",
          "name": "bookingId",
          "value": _state.bookingId
        };
        _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
        var _params = {
          "type": "text",
          "prompt": "First Name",
          "name": "firstName"
        };
        _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
        var _params = {
          "type": "text",
          "prompt": "Middle Name",
          "name": "middleName"
        };
        _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
        var _params = {
          "type": "text",
          "prompt": "Last Name",
          "name": "lastName"
        };
        _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
        var _params = {
          "type": "text",
          "prompt": "Birth Place",
          "name": "birthPlace"
        };
        _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
        var _params = {
          "type": "date",
          "prompt": "Birthday",
          "name": "birthday",
          "value": (new Date()).toYYYYMMDD(),
          "max": (new Date()).toYYYYMMDD()
        };
        _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
        var _params = {
          "type": "text",
          "prompt": "Passport Number",
          "name": "passportNumber"
        };
        _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
        var _params = {
          "type": "date",
          "prompt": "Passport Issue Date",
          "name": "passportIssueDate",
          "value": (new Date()).toYYYYMMDD(),
          "max": (new Date()).toYYYYMMDD()
        };
        _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
        var _params = {
          "type": "date",
          "prompt": "Passport Expiry Date",
          "name": "passportExpiryDate",
          "value": (new Date()).toYYYYMMDD(),
          "min": (new Date()).toYYYYMMDD()
        };
        _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
        var _params = {
          "type": "text",
          "prompt": "Passport Issuer",
          "name": "passportIssuer"
        };
        _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
        var _params = {
          "type": "button",
          "name": "btnRegister",
          "value": "Register",
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
            calculatePaymentDetail.bind(self)();
          }
        };
        _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
        _elementClose("div");
        _elementClose("form");
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