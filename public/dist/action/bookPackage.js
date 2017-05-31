yalla.framework.addComponent("/dist/action/bookPackage", (function() {
  var $path = "/dist/action/bookPackage";
  var $patchChanges = yalla.framework.renderToScreen;
  var $export = {};
  var $context = {};
  var _parentComponent = yalla.framework.getParentComponent;
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
    //debugger;
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
    $context["card-booking"] = $inject("/component/card-booking");
    var cardBooking = $context["card-booking"];
    $context["card-passenger"] = $inject("/component/card-passenger");
    var cardPassenger = $context["card-passenger"];
    $context["alert"] = $inject("/component/alert");
    var alert = $context["alert"];
    $context["entry"] = $inject("/component/entry");
    var entry = $context["entry"];
    _elementOpenStart("link", "");
    _attr("element", "dist.action.bookPackage");
    _attr("href", "asset/css/custom-style.css");
    _attr("rel", "stylesheet");
    _elementOpenEnd("link");
    // The component of this object
    var __component = IncrementalDOM.currentElement();
    __component.__state = __component.__state || initState.bind(__component)(_props);
    var __state = __component.__state;
    _elementClose("link");
    _elementOpenStart("div", "");
    _attr("element", "dist.action.bookPackage");
    _elementOpenEnd("div");
    // The component of this object
    var __component = IncrementalDOM.currentElement();
    __component.__state = __component.__state || initState.bind(__component)(_props);
    var __state = __component.__state;
    _elementOpenStart("div", "");
    _attr("class", "row");
    _elementOpenEnd("div");
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
        $context["card-booking"].render({
          "bkg": data
        }, function(slotName) {});
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
    _elementClose("div");
    _elementOpenStart("div", "");
    _attr("class", "container all-5px");
    _elementOpenEnd("div");
    _elementOpenStart("div", "");
    _attr("class", "row centered-form no-top-margin");
    _elementOpenEnd("div");
    _elementOpenStart("div", "");
    _attr("class", "form-panel col-xs-12 col-sm-12 col-md-12 col-lg-12");
    _elementOpenEnd("div");
    _elementOpenStart("div", "");
    _attr("class", "panel panel-default custom-panel");
    _elementOpenEnd("div");
    _elementOpenStart("div", "");
    _attr("class", "panel-heading");
    _elementOpenEnd("div");
    _elementOpenStart("h3", "");
    _attr("class", "panel-title");
    _elementOpenEnd("h3");
    _text("Passenger Detail");
    _elementClose("h3");
    _elementClose("div");
    _elementOpenStart("div", "");
    _attr("class", "panel-body");
    _elementOpenEnd("div");
    _elementOpenStart("form", "");
    _attr("role", "form");
    _elementOpenEnd("form");
    _elementOpenStart("div", "");
    _attr("class", "row");
    _elementOpenEnd("div");
    $context["entry"].render({
      "type": "hidden",
      "name": "bookingId",
      "value": _props.bookingId
    }, function(slotName) {});
    $context["entry"].render({
      "type": "text",
      "prompt": "First Name",
      "name": "firstName"
    }, function(slotName) {});
    $context["entry"].render({
      "type": "text",
      "prompt": "Middle Name",
      "name": "middleName"
    }, function(slotName) {});
    $context["entry"].render({
      "type": "text",
      "prompt": "Last Name",
      "name": "lastName"
    }, function(slotName) {});
    $context["entry"].render({
      "type": "text",
      "prompt": "Birth Place",
      "name": "birthPlace"
    }, function(slotName) {});
    $context["entry"].render({
      "type": "date",
      "prompt": "Birthday",
      "name": "birthday"
    }, function(slotName) {});
    $context["entry"].render({
      "type": "text",
      "prompt": "Passport Number",
      "name": "passportNumber"
    }, function(slotName) {});
    $context["entry"].render({
      "type": "date",
      "prompt": "Passport Expiry Date",
      "name": "passportExpiryDate"
    }, function(slotName) {});
    $context["entry"].render({
      "type": "text",
      "prompt": "Passport Issuer",
      "name": "passportIssuer"
    }, function(slotName) {});
    $context["entry"].render({
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
    }, function(slotName) {});
    $context["entry"].render({
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
    }, function(slotName) {});
    _elementClose("div");
    _elementClose("form");
    _elementClose("div");
    _elementClose("div");
    _elementClose("div");
    _elementClose("div");
    _elementClose("div");
    _elementOpenStart("div", "");
    _attr("class", "row");
    _elementOpenEnd("div");
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
          $context["card-passenger"].render({
            "passenger": psg
          }, function(slotName) {});
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
    _elementClose("div");
  }
  if (typeof $render === "function") {
    $export.render = $render;
  }
  return $export;
})());