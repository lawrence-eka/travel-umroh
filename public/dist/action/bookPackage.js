yalla.framework.addComponent("/dist/action/bookPackage", (function() {
  var $path = "/dist/action/bookPackage";
  var $patchChanges = yalla.framework.renderToScreen;
  var $storeRef = yalla.framework.storeRef;
  var $export = {};
  var $context = {};
  var $patchRef = yalla.framework.patchRef;
  var $inject = yalla.framework.createInjector("/dist/action/bookPackage");

  function ComponentEvent(type, data, target) {
    this.data = data;
    this.target = target;
    this.type = type;
  }

  var _elementOpen = IncrementalDOM.elementOpen,
    _elementClose = IncrementalDOM.elementClose,
    _elementOpenStart = IncrementalDOM.elementOpenStart,
    _elementOpenEnd = IncrementalDOM.elementOpenEnd,
    _elementVoid = IncrementalDOM.elementVoid,
    _text = IncrementalDOM.text,
    _attr = IncrementalDOM.attr,
    _skip = IncrementalDOM.skip;

  var dates = $inject('/common/dates');
  var numbers = $inject('/common/numbers');
  var obj = $inject('/common/objects');

  //var costLA = 0;
  //var costTickets = 0;

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
          //numOfPassenger = passengers.length;
          //booking.numBeRofpassengers = passengers.length;
          setNumberOfPassengers(passengers.length);
          resolve(passengers);
        }
      });
    });
  }

  function registerPassenger(form) {
    //booking.uniqueCode = Math.floor(Math.random() * 1000);
    booking.totalPrice = booking.numberOfPassengers * (booking.costTickets + booking.costLandArrangements);
    dpd.bookings.put(booking, function(booking, err) {
      if (err) {
        errorMessage = err.message;
        $patchChanges();
      } else {}
    });

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

    form.elements.bookingId.value = "";
    form.elements.firstName.value = "";
    form.elements.middleName.value = "";
    form.elements.lastName.value = "";
    form.elements.birthPlace.value = "";
    form.elements.birthday.value = "";
    form.elements.passportNumber.value = "";
    form.elements.passportExpiryDate.value = "";

    dpd.passengers.post(q, function(user, err) {
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

  function $render(_data, _slotView) {
    $context["card-booking"] = $inject("/component/card-booking");
    var cardBooking = $context["card-booking"];
    $context["card-passenger"] = $inject("/component/card-passenger");
    var cardPassenger = $context["card-passenger"];
    $context["alert"] = $inject("/component/alert");
    var alert = $context["alert"];
    _elementOpenStart("link", "");
    _attr("element", "dist.action.bookPackage");
    _attr("href", "asset/css/registration.css");
    _attr("rel", "stylesheet");
    _elementOpenEnd("link");
    _elementClose("link");
    _elementOpenStart("div", "");
    _attr("element", "dist.action.bookPackage");
    _elementOpenEnd("div");
    if (errorMessage != '') {
      _elementOpenStart("div", "");
      _elementOpenEnd("div");
      _text("" + (errorMessage) + "");
      _elementClose("div");
    }
    _elementOpenStart("div", "");
    _elementOpenEnd("div");
    (function(domNode) {
      var node = domNode.element;

      function asyncFunc__1(data) {
        $context["card-booking"].render({
          "bkg": data
        }, function(slotName) {});
      }
      var promise = queryBooking(_data.bookingId);
      if (promise && typeof promise == "object" && "then" in promise) {
        _skip();
        promise.then(function(_result) {
          $patchChanges(node, function() {
            asyncFunc__1.call(node, _result)
          });
        });
      } else {
        asyncFunc__1.call(node, promise)
      }
    })({
      element: IncrementalDOM.currentElement(),
      pointer: IncrementalDOM.currentPointer()
    });
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
    _attr("class", "panel panel-default");
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
    if (errorMessage) {
      _elementOpenStart("div", "");
      _attr("class", "form-control");
      _elementOpenEnd("div");
      _text("" + (errorMessage) + "");
      _elementClose("div");
    }
    _elementOpenStart("form", "");
    _attr("role", "form");
    _attr("onsubmit", function(event) {
      this.emitEvent = function(eventName, data) {
        var event = new ComponentEvent(eventName, data, this);
        if ('on' + eventName in _data) {
          _data['on' + eventName](event);
        }
      };
      return register.bind(this)(this);
    });
    _elementOpenEnd("form");
    _elementOpenStart("div", "");
    _attr("class", "row");
    _elementOpenEnd("div");
    _elementOpenStart("div", "");
    _attr("class", "col-xs-12 col-sm-12 col-md-12 col-lg-12");
    _elementOpenEnd("div");
    _elementOpenStart("div", "");
    _attr("class", "form-group");
    _elementOpenEnd("div");
    _elementOpenStart("input", "");
    _attr("type", "text");
    _attr("name", "firstName");
    _attr("class", "form-control input-sm");
    _attr("placeholder", "First Name");
    _elementOpenEnd("input");
    _elementClose("input");
    _elementClose("div");
    _elementClose("div");
    _elementOpenStart("div", "");
    _attr("class", "col-xs-12 col-sm-12 col-md-12 col-lg-12");
    _elementOpenEnd("div");
    _elementOpenStart("div", "");
    _attr("class", "form-group");
    _elementOpenEnd("div");
    _elementOpenStart("input", "");
    _attr("type", "text");
    _attr("name", "middleName");
    _attr("class", "form-control input-sm");
    _attr("placeholder", "Middle Name");
    _elementOpenEnd("input");
    _elementClose("input");
    _elementClose("div");
    _elementClose("div");
    _elementOpenStart("div", "");
    _attr("class", "col-xs-12 col-sm-12 col-md-12 col-lg-12");
    _elementOpenEnd("div");
    _elementOpenStart("div", "");
    _attr("class", "form-group");
    _elementOpenEnd("div");
    _elementOpenStart("input", "");
    _attr("type", "text");
    _attr("name", "lastName");
    _attr("class", "form-control input-sm");
    _attr("placeholder", "Last Name");
    _elementOpenEnd("input");
    _elementClose("input");
    _elementClose("div");
    _elementClose("div");
    _elementClose("div");
    _elementOpenStart("div", "");
    _attr("class", "row");
    _elementOpenEnd("div");
    _elementOpenStart("div", "");
    _attr("class", "col-xs-12 col-sm-6 col-md-6 col-lg-6");
    _elementOpenEnd("div");
    _elementOpenStart("div", "");
    _attr("class", "form-group");
    _elementOpenEnd("div");
    _elementOpenStart("input", "");
    _attr("type", "text");
    _attr("name", "birthPlace");
    _attr("class", "form-control input-sm");
    _attr("placeholder", "Birth Place");
    _elementOpenEnd("input");
    _elementClose("input");
    _elementClose("div");
    _elementClose("div");
    _elementOpenStart("div", "");
    _attr("class", "col-xs-12 col-sm-6 col-md-6 col-lg-6");
    _elementOpenEnd("div");
    _elementOpenStart("div", "");
    _attr("class", "form-group");
    _elementOpenEnd("div");
    _elementOpenStart("input", "");
    _attr("type", "date");
    _attr("name", "birthday");
    _attr("class", "form-control input-sm");
    _attr("placeholder", "birthday");
    _elementOpenEnd("input");
    _elementClose("input");
    _elementClose("div");
    _elementClose("div");
    _elementClose("div");
    _elementOpenStart("div", "");
    _attr("class", "form-group");
    _elementOpenEnd("div");
    _elementOpenStart("input", "");
    _attr("type", "text");
    _attr("name", "passportNumber");
    _attr("class", "form-control input-sm");
    _attr("placeholder", "Passport Number");
    _elementOpenEnd("input");
    _elementClose("input");
    _elementClose("div");
    _elementOpenStart("div", "");
    _attr("class", "form-group");
    _elementOpenEnd("div");
    _elementOpenStart("input", "");
    _attr("type", "date");
    _attr("name", "passportExpiryDate");
    _attr("class", "form-control input-sm");
    _attr("placeholder", "Passport Expiry Date");
    _elementOpenEnd("input");
    _elementClose("input");
    _elementClose("div");
    _elementOpenStart("div", "");
    _attr("class", "form-group");
    _elementOpenEnd("div");
    _elementOpenStart("input", "");
    _attr("type", "text");
    _attr("name", "passportIssuer");
    _attr("class", "form-control input-sm");
    _attr("placeholder", "Passport Issuer");
    _elementOpenEnd("input");
    _elementClose("input");
    _elementClose("div");
    _elementOpenStart("input", "");
    _attr("type", "submit");
    _attr("value", "Register");
    _attr("class", "btn btn-info btn-block btn-default");
    _elementOpenEnd("input");
    _elementClose("input");
    _elementClose("form");
    _elementOpenStart("div", "");
    _attr("class", "form-group");
    _elementOpenEnd("div");
    _elementOpenStart("input", "");
    _attr("type", "button");
    _attr("value", "Payment Detail");
    _attr("class", "form-control btn btn-info btn-block margin-top-15px");
    _attr("onclick", function(event) {
      this.emitEvent = function(eventName, data) {
        var event = new ComponentEvent(eventName, data, this);
        if ('on' + eventName in _data) {
          _data['on' + eventName](event);
        }
      };
      return calculatePaymentDetail.bind(this)(_data.bookingId);
    });
    _elementOpenEnd("input");
    _elementClose("input");
    _elementClose("div");
    _elementClose("div");
    _elementClose("div");
    _elementClose("div");
    _elementClose("div");
    _elementClose("div");
    _elementClose("div");
    _elementOpenStart("div", "");
    _attr("element", "dist.action.bookPackage");
    _elementOpenEnd("div");
    (function(domNode) {
      var node = domNode.element;

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
      var promise = getPassengers(_data.bookingId);
      if (promise && typeof promise == "object" && "then" in promise) {
        _skip();
        promise.then(function(_result) {
          $patchChanges(node, function() {
            asyncFunc__1.call(node, _result)
          });
        });
      } else {
        asyncFunc__1.call(node, promise)
      }
    })({
      element: IncrementalDOM.currentElement(),
      pointer: IncrementalDOM.currentPointer()
    });
    _elementClose("div");
    _elementOpenStart("script", "");
    _elementOpenEnd("script");
    _elementClose("script");
  }
  if (typeof $render === "function") {
    $export.render = $render;
  }
  return $export;
})());