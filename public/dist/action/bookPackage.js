yalla.framework.addComponent("/dist/action/bookPackage", (function() {
  var $path = "/dist/action/bookPackage";
  var $patchChanges = yalla.framework.renderToScreen;
  var $export = {};
  var _context = {};
  var _parentComponent = yalla.framework.getParentComponent;
  var _merge = yalla.utils.merge;
  var $inject = yalla.framework.createInjector("/dist/action/bookPackage");

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

  var package = {};
  var booking = {};

  //var numOfPassenger = 0;
  var errorMessage = '';

  function setPackage(pkg) {
    package = pkg;
  }

  function getPackage() {
    return package;
  }

  function setBooking(bkg) {
    var nop = booking.numberOfPassengers ? booking.numberOfPassengers : 0;
    booking = bkg;
    booking.numberOfPassengers = nop;
  }

  function setNumberOfPassengers(numberOfPassengers) {
    booking.numberOfPassengers = numberOfPassengers
  }

  function getBooking() {
    return booking;
  }

  function calculatePaymentDetail(bookingId) {
    booking.uniqueCode = Math.floor(Math.random() * 1000);
    booking.waitingForPaymentUntil = (new Date()).getTime() + 10800000;
    dpd.bookings.put(booking, function(bkg, err) {
      if (err) {
        errorMessage = err.message;
      } else {
        window.location.hash = '#app/action.paymentDetails:bookingId=' + bookingId;
      }
      $patchChanges();
    });
  }

  function getPassengers(bookingId) {
    debugger;
    return new Promise(function(resolve) {
      dpd.passengers.get({
        "bookingId": bookingId
      }, function(passengers, err) {
        if (err) {
          errorMessage = JSON.stringify(err);
        } else {
          setNumberOfPassengers(passengers.length);
          resolve(passengers);
        }
      });
    });
  }

  function registerPassenger(bookingId) {
    //booking.uniqueCode = Math.floor(Math.random() * 1000);
    booking.totalPrice = booking.numberOfPassengers * (booking.costTickets + booking.costLandArrangements);
    dpd.bookings.put(booking, function(booking, err) {
      if (err) {
        errorMessage = err.message;
        $patchChanges();
      } else {}
    });
    var form = this.target.form;

    var q = {};
    q.bookingId = form.elements.bookingId.value;
    q.firstName = form.elements.firstName.value;
    q.middleName = form.elements.middleName.value;
    q.lastName = form.elements.lastName.value;
    q.birthPlace = form.elements.birthPlace.value;
    q.birthday = (new Date(form.elements.birthday.value)).getTime();
    q.passportNumber = form.elements.passportNumber.value;
    q.passportIssuer = form.elements.passportIssuer.value;
    q.passportExpiryDate = (new Date(form.elements.passportExpiryDate.value)).getTime();

    form.elements.firstName.value = "";
    form.elements.middleName.value = "";
    form.elements.lastName.value = "";
    form.elements.birthPlace.value = "";
    form.elements.birthday.value = "";
    form.elements.passportNumber.value = "";
    form.elements.passportIssuer.value = "";
    form.elements.passportExpiryDate.value = "";
    debugger;
    dpd.passengers.post(q, function(user, err) {
      debugger;
      if (err) {
        errorMessage = JSON.stringify(err);
      }
      $patchChanges();
    });
    return false;
  }

  function queryBooking(id) {
    return new Promise(function(resolve) {
      dpd.bookings.get(id, function(bkg, err) {
        if (err) {
          errorMessage = JSON.stringify(err);
        } else {
          resolve(bkg);
          setBooking(bkg);
        }
      });
    });
  }

  function $render(_props, _slotView) {
    _context["card-booking"] = $inject("/component/card-booking");
    var cardBooking = _context["card-booking"];
    _context["card-passenger"] = $inject("/component/card-passenger");
    var cardPassenger = _context["card-passenger"];
    _context["alert"] = $inject("/component/alert");
    var alert = _context["alert"];
    _context["entry"] = $inject("/component/entry");
    var entry = _context["entry"];
    _context["panel"] = $inject("/component/panel");
    var panel = _context["panel"];
    _elementOpenStart("link", "");
    _attr("element", "dist.action.bookPackage");
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
    _attr("element", "dist.action.bookPackage");
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
        var __params = {
          "bkg": data
        };
        _context["card-booking"].render(typeof arguments[1] === "object" ? _merge(arguments[1], __params) : __params, function(slotName, slotProps) {});
      }
      var promise = queryBooking.bind(self)(_props.bookingId);
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
    var __params = {
      "title": "Passenger Detail",
      "nofooter": "nofooter"
    };
    _context["panel"].render(typeof arguments[1] === "object" ? _merge(arguments[1], __params) : __params, function(slotName, slotProps) {
      if (slotName == "body") {
        _elementOpenStart("div", "");
        _elementOpenEnd("div");
        _elementOpenStart("form", "");
        _attr("role", "form");
        _elementOpenEnd("form");
        _elementOpenStart("div", "");
        _attr("class", "row");
        _elementOpenEnd("div");
        var __params = {
          "type": "hidden",
          "name": "bookingId",
          "value": _props.bookingId
        };
        _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], __params) : __params, function(slotName, slotProps) {});
        var __params = {
          "type": "text",
          "prompt": "First Name",
          "name": "firstName"
        };
        _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], __params) : __params, function(slotName, slotProps) {});
        var __params = {
          "type": "text",
          "prompt": "Middle Name",
          "name": "middleName"
        };
        _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], __params) : __params, function(slotName, slotProps) {});
        var __params = {
          "type": "text",
          "prompt": "Last Name",
          "name": "lastName"
        };
        _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], __params) : __params, function(slotName, slotProps) {});
        var __params = {
          "type": "text",
          "prompt": "Birth Place",
          "name": "birthPlace"
        };
        _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], __params) : __params, function(slotName, slotProps) {});
        var __params = {
          "type": "date",
          "prompt": "Birthday",
          "name": "birthday",
          "max": (new Date()).toYYYYMMDD()
        };
        _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], __params) : __params, function(slotName, slotProps) {});
        var __params = {
          "type": "text",
          "prompt": "Passport Number",
          "name": "passportNumber"
        };
        _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], __params) : __params, function(slotName, slotProps) {});
        var __params = {
          "type": "date",
          "prompt": "Passport Expiry Date",
          "name": "passportExpiryDate",
          "min": "(new Date()).toYYYYMMDD()"
        };
        _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], __params) : __params, function(slotName, slotProps) {});
        var __params = {
          "type": "text",
          "prompt": "Passport Issuer",
          "name": "passportIssuer"
        };
        _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], __params) : __params, function(slotName, slotProps) {});
        var __params = {
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
            self.component = __component;
            self.component.__state = self.component.__state || {};
            self.state = self.component.__state;
            self.emitEvent = function(eventName, data) {
              var event = new ComponentEvent(eventName, data, self.target, self.currentTarget);
              if ('on' + eventName in _props) {
                _props['on' + eventName](event);
              }
            };
            return registerPassenger.bind(self)(_props.bookingId);
          }
        };
        _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], __params) : __params, function(slotName, slotProps) {});
        var __params = {
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
            self.component = __component;
            self.component.__state = self.component.__state || {};
            self.state = self.component.__state;
            self.emitEvent = function(eventName, data) {
              var event = new ComponentEvent(eventName, data, self.target, self.currentTarget);
              if ('on' + eventName in _props) {
                _props['on' + eventName](event);
              }
            };
            return calculatePaymentDetail.bind(self)(_props.bookingId);
          }
        };
        _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], __params) : __params, function(slotName, slotProps) {});
        _elementClose("div");
        _elementClose("form");
        _elementClose("div");
      }
    });
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
        var _array = data || [];
        _array.forEach(function(psg) {
          _elementOpenStart("p", "");
          _elementOpenEnd("p");
          var __params = {
            "passenger": psg
          };
          _context["card-passenger"].render(typeof arguments[1] === "object" ? _merge(arguments[1], __params) : __params, function(slotName, slotProps) {});
          _elementClose("p");
        });
      }
      var promise = getPassengers.bind(self)(_props.bookingId);
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
    _elementClose("div");
  }
  if (typeof $render === "function") {
    $export.render = $render;
  }
  return $export;
})());