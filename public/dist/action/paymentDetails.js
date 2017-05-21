yalla.framework.addComponent("/dist/action/paymentDetails", (function() {
  var $path = "/dist/action/paymentDetails";
  var $patchChanges = yalla.framework.renderToScreen;
  var $storeRef = yalla.framework.storeRef;
  var $export = {};
  var $context = {};
  var $patchRef = yalla.framework.patchRef;
  var $inject = yalla.framework.createInjector("/dist/action/paymentDetails");
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
  var errorMessage = "";

  var package = {};
  var booking = {};

  function setPackage(pkg) {
    package = pkg;
  }

  function getPackage() {
    return package;
  }

  function setBooking(bkg) {
    booking = bkg;
  }

  function getBooking() {
    return booking;
  }

  function paymentConfirmation(form) {
    booking.fromBank = form.elements.fromBank.value;
    booking.fromBranch = form.elements.fromBranch.value;
    booking.fromAccountNumber = form.elements.fromAccountNumber.value;
    booking.fromAccountHolder = form.elements.fromAccountHolder.value;
    booking.actualPayment = form.elements.actualPayment.value;
    booking.paymentDate = (new Date(form.elements.paymentDate.value)).getTime();
    doPaymentConfirmation();
    return false;
  }

  function doPaymentConfirmation() {
    return new Promise(function(resolve) {
      dpd.bookings.put(booking, function(bkg, err) {
        if (err) {
          errorMessage = JSON.stringify(err);
          $patchChanges();
        } else {
          window.location.hash = '#app/home/action.paymentConfirmation:bookingId=' + booking.id;
        }
      });
    });
  }

  function queryTravelAgent(id) {
    return new Promise(function(resolve) {
      dpd.travelagents.get(id, function(agent, err) {
        if (err) {
          errorMessage = JSON.stringify(err);
          $patchChanges();
        } else {
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

  function getPaymentDetails(bookingId) {
    return new Promise(function(resolve) {
      dpd.bookings.get(bookingId, function(bkg, err) {
        if (err) {
          errorMessage = JSON.stringify(err);
          $patchChanges();
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
    attr("element", "dist.action.paymentDetails");
    elementOpenEnd("div");
    (function(domNode) {
      var node = domNode.element;

      function asyncFunc__1(data) {
        if (errorMessage) {
          elementOpenStart("div", "");
          elementOpenEnd("div");
          text("" + (errorMessage) + "");
          elementClose("div");
        }
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
        text("Total Price: " + (numbers.money(booking.totalPrice)) + "");
        elementOpenStart("br", "");
        elementOpenEnd("br");
        elementClose("br");
        text("Unique Code: " + (booking.uniqueCode) + "");
        elementOpenStart("br", "");
        elementOpenEnd("br");
        elementClose("br");
        text("Grand Total: " + (numbers.money(booking.totalPrice + booking.uniqueCode)) + "");
        elementOpenStart("br", "");
        elementOpenEnd("br");
        elementClose("br");
        elementOpenStart("br", "");
        elementOpenEnd("br");
        elementClose("br");
        text("Please make the payment with the following information:");
        elementOpenStart("br", "");
        elementOpenEnd("br");
        elementClose("br");
        text("Total: " + (numbers.money(booking.totalPrice + booking.uniqueCode)) + "");
        elementOpenStart("br", "");
        elementOpenEnd("br");
        elementClose("br");
        text("Bank: Bank Central Asia");
        elementOpenStart("br", "");
        elementOpenEnd("br");
        elementClose("br");
        text("Branch: Sidoarjo");
        elementOpenStart("br", "");
        elementOpenEnd("br");
        elementClose("br");
        text("Account No:1234567890");
        elementOpenStart("br", "");
        elementOpenEnd("br");
        elementClose("br");
        text("Name: PT Pete Tbk.");
        elementOpenStart("br", "");
        elementOpenEnd("br");
        elementClose("br");
        elementOpenStart("br", "");
        elementOpenEnd("br");
        elementClose("br");
        text("Within the next 3 hours to avoid automatic cancellation of your booking.");
        elementOpenStart("br", "");
        elementOpenEnd("br");
        elementClose("br");
        elementOpenStart("form", "");
        attr("onsubmit", function(event) {
          return paymentConfirmation(this)
        });
        elementOpenEnd("form");
        elementOpenStart("p", "");
        elementOpenEnd("p");
        text("Put your payment confirmation here:");
        elementClose("p");
        elementOpenStart("p", "");
        elementOpenEnd("p");
        text("Bank:");
        elementOpenStart("input", "");
        attr("type", "text");
        attr("name", "fromBank");
        elementOpenEnd("input");
        elementClose("input");
        elementClose("p");
        elementOpenStart("p", "");
        elementOpenEnd("p");
        text("Branch:");
        elementOpenStart("input", "");
        attr("type", "text");
        attr("name", "fromBranch");
        elementOpenEnd("input");
        elementClose("input");
        elementClose("p");
        elementOpenStart("p", "");
        elementOpenEnd("p");
        text("Account Number:");
        elementOpenStart("input", "");
        attr("type", "text");
        attr("name", "fromAccountNumber");
        elementOpenEnd("input");
        elementClose("input");
        elementClose("p");
        elementOpenStart("p", "");
        elementOpenEnd("p");
        text("Account Holder:");
        elementOpenStart("input", "");
        attr("type", "text");
        attr("name", "fromAccountHolder");
        elementOpenEnd("input");
        elementClose("input");
        elementClose("p");
        elementOpenStart("p", "");
        elementOpenEnd("p");
        text("Payment:");
        elementOpenStart("input", "");
        attr("type", "number");
        attr("name", "actualPayment");
        elementOpenEnd("input");
        elementClose("input");
        elementClose("p");
        elementOpenStart("p", "");
        elementOpenEnd("p");
        text("Payment Time:");
        elementOpenStart("input", "");
        attr("type", "datetime-local");
        attr("name", "paymentDate");
        elementOpenEnd("input");
        elementClose("input");
        elementClose("p");
        elementOpenStart("p", "");
        elementOpenEnd("p");
        elementOpenStart("input", "");
        attr("type", "submit");
        attr("value", "Payment Confirmation");
        elementOpenEnd("input");
        elementClose("input");
        elementClose("p");
        elementClose("form");
      }
      var promise = getPaymentDetails(_data.bookingId);
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