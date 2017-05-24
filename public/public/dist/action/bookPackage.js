yalla.framework.addComponent("/dist/action/bookPackage", (function() {
  var $path = "/dist/action/bookPackage";
  var $patchChanges = yalla.framework.renderToScreen;
  var $storeRef = yalla.framework.storeRef;
  var $export = {};
  var $context = {};
  var $patchRef = yalla.framework.patchRef;
  var $inject = yalla.framework.createInjector("/dist/action/bookPackage");
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

  function setNumberOfPassengers(numBeRofpassengers) {
    booking.numberOfPassengers = numBeRofpassengers
  }

  function getBooking() {
    return booking;
  }

  function calculatePaymentDetail(userId, packageId) {
    window.location.hash = '#app/action.paymentDetails:bookingId=' + booking.id;
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
    booking.uniqueCode = Math.floor(Math.random() * 1000);
    booking.totalPrice = booking.numberOfPassengers * (booking.costTickets + booking.costLandArrangements);
    dpd.bookings.put(booking, function(booking, err) {
      if (err) {
        errorMessage = JSON.stringify(err);
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

  function queryTravelAgent(id) {
    return new Promise(function(resolve) {
      dpd.travelagents.get(id, function(agent, err) {
        if (err) {
          errorMessage = JSON.stringify(err);
          $patchChanges();
        } else {;
          resolve(agent);
        }
      });
    });
  }

  function queryPackage(id) {

    return new Promise(function(resolve) {
      dpd.packages.get(id, function(pkg, err) {
        if (err) {
          errorMessage = JSON.stringify(err);
          $patchChanges();
        } else {
          queryTravelAgent(pkg.travelAgentId).then(function(agent) {
            pkg.agent = agent;
            resolve(pkg);
          });
        }
      });
    });
  }

  function queryBooking(id) {
    return new Promise(function(resolve) {
      dpd.bookings.get(id, function(bkg, err) {
        if (err) {
          errorMessage = JSON.stringify(err);
        } else {
          setBooking(bkg);
          queryPackage(bkg.packageId).then(function(pkg) {
            setPackage(pkg);
            bkg.package = pkg;
            //debugger;
            resolve(bkg);
          });
        }
      });
    });
  }

  function $render(_data, _slotView) {
    $context["card-booking"] = $inject("/component/card-booking");
    var cardBooking = $context["card-booking"];
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
    _elementOpenStart("form", "");
    _attr("onsubmit", function(event) {
      return registerPassenger(this)
    });
    _elementOpenEnd("form");
    _elementOpenStart("input", "");
    _attr("type", "hidden");
    _attr("name", "bookingId");
    _attr("value", _data.bookingId);
    _elementOpenEnd("input");
    _elementClose("input");
    _elementOpenStart("p", "");
    _elementOpenEnd("p");
    _text("First Name:");
    _elementOpenStart("input", "");
    _attr("type", "text");
    _attr("name", "firstName");
    _elementOpenEnd("input");
    _elementClose("input");
    _elementClose("p");
    _elementOpenStart("p", "");
    _elementOpenEnd("p");
    _text("Middle Name:");
    _elementOpenStart("input", "");
    _attr("type", "text");
    _attr("name", "middleName");
    _elementOpenEnd("input");
    _elementClose("input");
    _elementClose("p");
    _elementOpenStart("p", "");
    _elementOpenEnd("p");
    _text("Last Name:");
    _elementOpenStart("input", "");
    _attr("type", "text");
    _attr("name", "lastName");
    _elementOpenEnd("input");
    _elementClose("input");
    _elementClose("p");
    _elementOpenStart("p", "");
    _elementOpenEnd("p");
    _text("Birth Place:");
    _elementOpenStart("input", "");
    _attr("type", "text");
    _attr("name", "birthPlace");
    _elementOpenEnd("input");
    _elementClose("input");
    _elementClose("p");
    _elementOpenStart("p", "");
    _elementOpenEnd("p");
    _text("Birthday:");
    _elementOpenStart("input", "");
    _attr("type", "date");
    _attr("name", "birthday");
    _elementOpenEnd("input");
    _elementClose("input");
    _elementClose("p");
    _elementOpenStart("p", "");
    _elementOpenEnd("p");
    _text("Passport No:");
    _elementOpenStart("input", "");
    _attr("type", "text");
    _attr("name", "passportNumber");
    _elementOpenEnd("input");
    _elementClose("input");
    _elementClose("p");
    _elementOpenStart("p", "");
    _elementOpenEnd("p");
    _text("Passport Expiry Date:");
    _elementOpenStart("input", "");
    _attr("type", "date");
    _attr("name", "passportExpiryDate");
    _elementOpenEnd("input");
    _elementClose("input");
    _elementClose("p");
    _elementOpenStart("p", "");
    _elementOpenEnd("p");
    _elementOpenStart("input", "");
    _attr("type", "submit");
    _attr("value", "Add Passenger");
    _attr("class", "btn btn-default");
    _elementOpenEnd("input");
    _elementClose("input");
    _elementClose("p");
    _elementClose("form");
    _elementOpenStart("p", "");
    _elementOpenEnd("p");
    _elementOpenStart("input", "");
    _attr("type", "button");
    _attr("value", "Done and Go to Payment Detail");
    _attr("onclick", function(event) {
      return calculatePaymentDetail()
    });
    _attr("class", "btn btn-default");
    _elementOpenEnd("input");
    _elementClose("input");
    _elementClose("p");
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
          _text("First Name: " + (psg.firstName) + "; Middle Name: " + (psg.middleName) + "; Last Name: " + (psg.lastName) + ";		Birth Place: " + (psg.birthPlace) + "; Birth Date: " + (dates.formatter(psg.birthday)) + "		Passport No: " + (psg.passportNumber) + "; Expiry Date: " + (dates.formatter(psg.passportExpiryDate)) + "");
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