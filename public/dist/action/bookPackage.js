yalla.framework.addComponent("/dist/action/bookPackage", (function() {
  var $path = "/dist/action/bookPackage";
  var $patchChanges = yalla.framework.renderToScreen;
  var $storeRef = yalla.framework.storeRef;
  var $export = {};
  var $context = {};
  var $patchRef = yalla.framework.patchRef;
  var $inject = yalla.framework.createInjector("/dist/action/bookPackage");
  var elementOpen = IncrementalDOM.elementOpen,
    elementClose = IncrementalDOM.elementClose,
    elementOpenStart = IncrementalDOM.elementOpenStart,
    elementOpenEnd = IncrementalDOM.elementOpenEnd,
    elementVoid = IncrementalDOM.elementVoid,
    text = IncrementalDOM.text,
    attr = IncrementalDOM.attr,
    skip = IncrementalDOM.skip;

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
    var nop = booking.numBeRofpassengers ? booking.numBeRofpassengers : 0;
    booking = bkg;
    booking.numBeRofpassengers = nop;
  }

  function setNumBeRofpassengers(numBeRofpassengers) {
    booking.numBeRofpassengers = numBeRofpassengers
  }

  function getBooking() {
    return booking;
  }

  function calculatePaymentDetail(userId, packageId) {
    //doCalculatePaymentDetail(userId, packageId);
    window.location.hash = '#app/home/action.paymentDetails:bookingId=' + booking.id;
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
          setNumBeRofpassengers(passengers.length);
          resolve(passengers);
        }
      });
    });
  }

  function registerPassenger(form) {
    booking.uniqueCode = Math.floor(Math.random() * 1000);
    booking.totalPrice = booking.numBeRofpassengers * (booking.costTickets + booking.costLandArrangements);
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
            //debugger;
            resolve(bkg);
          });
        }
      });
    });
  }

  function $render(_data, _slotView) {
    elementOpenStart("div", "");
    attr("element", "dist.action.bookPackage");
    elementOpenEnd("div");
    text("Book This Package:");
    if (errorMessage != '') {
      elementOpenStart("div", "");
      elementOpenEnd("div");
      text("" + (errorMessage) + "");
      elementClose("div");
    }
    elementOpenStart("div", "");
    elementOpenEnd("div");
    (function(domNode) {
      var node = domNode.element;

      function asyncFunc__1(data) {
        text("Package: " + (package.packageName) + "");
        elementOpenStart("br", "");
        elementOpenEnd("br");
        elementClose("br");
        text("Travel Date: " + (dates.rangePrettifier((new Date(package.travelDateFrom)), (new Date(package.travelDateUntil)))) + "");
        elementOpenStart("br", "");
        elementOpenEnd("br");
        elementClose("br");
        text("Operator: " + (package.agent.travelAgentName) + "");
        elementOpenStart("br", "");
        elementOpenEnd("br");
        elementClose("br");
        text("Land Arrangements: " + (numbers.money(booking.costLandArrangements)) + "");
        elementOpenStart("br", "");
        elementOpenEnd("br");
        elementClose("br");
        text("Tickets: " + (numbers.money(booking.costTickets)) + "");
        elementOpenStart("br", "");
        elementOpenEnd("br");
        elementClose("br");
        text("Total passenger: " + (booking.numberOfPassengers) + "");
        elementOpenStart("br", "");
        elementOpenEnd("br");
        elementClose("br");
        text("Total Price: " + (numbers.money(booking.numberOfPassengers * (booking.costTickets + booking.costLandArrangements))) + "");
        elementOpenStart("br", "");
        elementOpenEnd("br");
        elementClose("br");
        elementOpenStart("form", "");
        attr("onsubmit", function(event) {
          return registerPassenger(this)
        });
        elementOpenEnd("form");
        elementOpenStart("input", "");
        attr("type", "hidden");
        attr("name", "bookingId");
        attr("value", _data.bookingId);
        elementOpenEnd("input");
        elementClose("input");
        elementOpenStart("p", "");
        elementOpenEnd("p");
        text("First Name:");
        elementOpenStart("input", "");
        attr("type", "text");
        attr("name", "firstName");
        elementOpenEnd("input");
        elementClose("input");
        elementClose("p");
        elementOpenStart("p", "");
        elementOpenEnd("p");
        text("Middle Name:");
        elementOpenStart("input", "");
        attr("type", "text");
        attr("name", "middleName");
        elementOpenEnd("input");
        elementClose("input");
        elementClose("p");
        elementOpenStart("p", "");
        elementOpenEnd("p");
        text("Last Name:");
        elementOpenStart("input", "");
        attr("type", "text");
        attr("name", "lastName");
        elementOpenEnd("input");
        elementClose("input");
        elementClose("p");
        elementOpenStart("p", "");
        elementOpenEnd("p");
        text("Birth Place:");
        elementOpenStart("input", "");
        attr("type", "text");
        attr("name", "birthPlace");
        elementOpenEnd("input");
        elementClose("input");
        elementClose("p");
        elementOpenStart("p", "");
        elementOpenEnd("p");
        text("Birthday:");
        elementOpenStart("input", "");
        attr("type", "date");
        attr("name", "birthday");
        elementOpenEnd("input");
        elementClose("input");
        elementClose("p");
        elementOpenStart("p", "");
        elementOpenEnd("p");
        text("Passport No:");
        elementOpenStart("input", "");
        attr("type", "text");
        attr("name", "passportNumber");
        elementOpenEnd("input");
        elementClose("input");
        elementClose("p");
        elementOpenStart("p", "");
        elementOpenEnd("p");
        text("Passport Expiry Date:");
        elementOpenStart("input", "");
        attr("type", "date");
        attr("name", "passportExpiryDate");
        elementOpenEnd("input");
        elementClose("input");
        elementClose("p");
        elementOpenStart("p", "");
        elementOpenEnd("p");
        elementOpenStart("input", "");
        attr("type", "submit");
        attr("value", "Add Passenger");
        elementOpenEnd("input");
        elementClose("input");
        elementClose("p");
        elementClose("form");
        elementOpenStart("form", "");
        attr("onsubmit", function(event) {
          return calculatePaymentDetail()
        });
        elementOpenEnd("form");
        elementOpenStart("p", "");
        elementOpenEnd("p");
        elementOpenStart("input", "");
        attr("type", "submit");
        attr("value", "Done and Go to Payment Detail");
        elementOpenEnd("input");
        elementClose("input");
        elementClose("p");
        elementClose("form");
      }
      var promise = queryBooking(_data.bookingId);
      if (promise && typeof promise == "object" && "then" in promise) {
        skip();
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
    elementClose("div");
    elementClose("div");
    elementOpenStart("div", "");
    attr("element", "dist.action.bookPackage");
    elementOpenEnd("div");
    (function(domNode) {
      var node = domNode.element;

      function asyncFunc__1(data) {
        var _array = data || [];
        _array.forEach(function(psg) {
          elementOpenStart("p", "");
          elementOpenEnd("p");
          text("First Name: " + (psg.firstName) + "; Middle Name: " + (psg.middleName) + "; Last Name: " + (psg.lastName) + ";		Birth Place: " + (psg.birthPlace) + "; Birth Date: " + (dates.formatter(psg.birthday)) + "		Passport No: " + (psg.passportNumber) + "; Expiry Date: " + (dates.formatter(psg.passportExpiryDate)) + "");
          elementClose("p");
        });
      }
      var promise = getPassengers(_data.bookingId);
      if (promise && typeof promise == "object" && "then" in promise) {
        skip();
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
    elementClose("div");
    elementOpenStart("script", "");
    elementOpenEnd("script");
    elementClose("script");
  }
  if (typeof $render === "function") {
    $export.render = $render;
  }
  return $export;
})());