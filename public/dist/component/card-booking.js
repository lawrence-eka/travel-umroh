yalla.framework.addComponent("/dist/component/card-booking", (function() {
  var $path = "/dist/component/card-booking";
  var $patchChanges = yalla.framework.renderToScreen;
  var $storeRef = yalla.framework.storeRef;
  var $export = {};
  var $context = {};
  var $patchRef = yalla.framework.patchRef;
  var $inject = yalla.framework.createInjector("/dist/component/card-booking");
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

  function loadPackage(packageId) {
    return new Promise(function(resolve) {
      dpd.packages.get(packageId, function(pkg) {
        resolve(pkg);
      });
    });
  }


  function loadAgent(travelAgentId) {
    return new Promise(function(resolve) {
      dpd.travelagents.get(travelAgentId, function(agent, err) {
        if (err) {
          errorMessage = JSON.stringify(err);
          $patchChanges();
        } else {
          resolve(agent);
        }
      });
    });
  }

  function $render(_data, _slotView) {
    $context["card"] = $inject("/component/card");
    var card = $context["card"];
    $context["card"].render({
      "element": "dist.component.card-booking",
      "title": 'Booking Detail',
      "onclick": function(event) {
        return _data.onclick()
      }
    }, function(slotName) {
      _elementOpenStart("div", "");
      _elementOpenEnd("div");
      (function(domNode) {
        var node = domNode.element;

        function asyncFunc__1(pkg) {
          _text("Package: " + (pkg.packageName) + "");
          _elementOpenStart("br", "");
          _elementOpenEnd("br");
          _elementClose("br");
          _text("Travel Date: " + (dates.rangePrettifier((new Date(pkg.travelDateFrom)), (new Date(pkg.travelDateUntil)))) + "");
          _elementOpenStart("br", "");
          _elementOpenEnd("br");
          _elementClose("br");
          _text("Operator:");
          _elementOpenStart("span", "");
          _elementOpenEnd("span");
          (function(domNode) {
            var node = domNode.element;

            function asyncFunc__2(data) {
              _text("" + (data.travelAgentName) + "");
            }
            var promise = loadAgent(pkg.travelAgentId);
            if (promise && typeof promise == "object" && "then" in promise) {
              _skip();
              promise.then(function(_result) {
                $patchChanges(node, function() {
                  asyncFunc__2.call(node, _result)
                });
              });
            } else {
              asyncFunc__2.call(node, promise)
            }
          })({
            element: IncrementalDOM.currentElement(),
            pointer: IncrementalDOM.currentPointer()
          });
          _elementClose("span");
          _elementOpenStart("br", "");
          _elementOpenEnd("br");
          _elementClose("br");
          _text("Land Arrangements: " + (numbers.money(_data.bkg.costLandArrangements)) + "");
          _elementOpenStart("br", "");
          _elementOpenEnd("br");
          _elementClose("br");
          _text("Tickets: " + (numbers.money(_data.bkg.costTickets)) + "");
          _elementOpenStart("br", "");
          _elementOpenEnd("br");
          _elementClose("br");
          _text("Total passenger: " + (_data.bkg.numberOfPassengers) + "");
          _elementOpenStart("br", "");
          _elementOpenEnd("br");
          _elementClose("br");
          _text("Total Price: " + (numbers.money(_data.bkg.totalPrice)) + "");
          _elementOpenStart("br", "");
          _elementOpenEnd("br");
          _elementClose("br");
          _text("Unique Code: " + (_data.bkg.uniqueCode) + "");
          _elementOpenStart("br", "");
          _elementOpenEnd("br");
          _elementClose("br");
          _text("Grand Total: " + (numbers.money(_data.bkg.totalPrice + _data.bkg.uniqueCode)) + "");
          _elementOpenStart("br", "");
          _elementOpenEnd("br");
          _elementClose("br");
          _text("Expiry Date: " + (dates.formatter(_data.bkg.waitingForPaymentUntil, false, true)) + "");
        }
        var promise = loadPackage(_data.bkg.packageId);
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
    });
    _elementOpenStart("script", "");
    _elementOpenEnd("script");
    _elementClose("script");
  }
  if (typeof $render === "function") {
    $export.render = $render;
  }
  return $export;
})());