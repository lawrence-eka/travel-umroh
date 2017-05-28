yalla.framework.addComponent("/dist/action/paymentDetails", (function() {
  var $path = "/dist/action/paymentDetails";
  var $patchChanges = yalla.framework.renderToScreen;
  var $storeRef = yalla.framework.storeRef;
  var $export = {};
  var $context = {};
  var $patchRef = yalla.framework.patchRef;
  var $inject = yalla.framework.createInjector("/dist/action/paymentDetails");

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
          window.location.hash = '#app/action.paymentConfirmation:bookingId=' + booking.id;
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
    $context["card"] = $inject("/component/card");
    var card = $context["card"];
    if (errorMessage) {
      _elementOpenStart("div", "");
      _attr("element", "dist.action.paymentDetails");
      _elementOpenEnd("div");
      _text("" + (errorMessage) + "");
      _elementClose("div");
    }
    _elementOpenStart("div", "");
    _attr("element", "dist.action.paymentDetails");
    _elementOpenEnd("div");
    (function(domNode) {
      var node = domNode.element;

      function asyncFunc__1(data) {
        $context["card-booking"].render({
          "bkg": data
        }, function(slotName) {});
        $context["card"].render({
          "title": "Payment Info",
          "remarks": "Please make the payment before booking expires to avoid automatic cancellation of your booking"
        }, function(slotName) {
          _elementOpenStart("div", "");
          _elementOpenEnd("div");
          _text("Total: " + (numbers.money(booking.totalPrice + booking.uniqueCode)) + "");
          _elementOpenStart("br", "");
          _elementOpenEnd("br");
          _elementClose("br");
          _text("Bank: Bank Central Asia");
          _elementOpenStart("br", "");
          _elementOpenEnd("br");
          _elementClose("br");
          _text("Branch: Sidoarjo");
          _elementOpenStart("br", "");
          _elementOpenEnd("br");
          _elementClose("br");
          _text("Account No:1234567890");
          _elementOpenStart("br", "");
          _elementOpenEnd("br");
          _elementClose("br");
          _text("Name: PT Pete Tbk.");
          _elementOpenStart("br", "");
          _elementOpenEnd("br");
          _elementClose("br");
          _elementClose("div");
        });
        _elementOpenStart("div", "");
        _attr("class", "container all-5px");
        _elementOpenEnd("div");
        _elementOpenStart("div", "");
        _attr("class", "row centered-form no-top-margin");
        _elementOpenEnd("div");
        _elementOpenStart("div", "");
        _attr("class", "col-xs-12 col-sm-12 col-md-12 col-lg-12");
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
        _text("Payment Confirmation");
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
          return paymentConfirmation.bind(this)(this);
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
        _attr("name", "fromBank");
        _attr("class", "form-control input-sm");
        _attr("placeholder", "Bank Name");
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
        _attr("name", "fromBranch");
        _attr("class", "form-control input-sm");
        _attr("placeholder", "Branch");
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
        _attr("name", "fromAcountNumber");
        _attr("class", "form-control input-sm");
        _attr("placeholder", "Account Number");
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
        _attr("name", "fromAcountHolder");
        _attr("class", "form-control input-sm");
        _attr("placeholder", "Account Holder Name");
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
        _attr("type", "number");
        _attr("name", "actualPayment");
        _attr("class", "form-control input-sm");
        _attr("placeholder", "Amount Transfered");
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
        _attr("type", "datetime-local");
        _attr("name", "paymentDate");
        _attr("class", "form-control input-sm");
        _attr("placeholder", "Transfer Date & Time");
        _elementOpenEnd("input");
        _elementClose("input");
        _elementClose("div");
        _elementClose("div");
        _elementClose("div");
        _elementOpenStart("input", "");
        _attr("type", "submit");
        _attr("value", "Payment Confirmation");
        _attr("class", "btn btn-info btn-block btn-default");
        _elementOpenEnd("input");
        _elementClose("input");
        _elementClose("form");
        _elementClose("div");
        _elementClose("div");
        _elementClose("div");
        _elementClose("div");
        _elementClose("div");
      }
      var promise = getPaymentDetails(_data.bookingId);
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