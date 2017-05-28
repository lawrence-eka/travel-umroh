yalla.framework.addComponent("/dist/component/card-booking", (function() {
  var $path = "/dist/component/card-booking";
  var $patchChanges = yalla.framework.renderToScreen;
  var $storeRef = yalla.framework.storeRef;
  var $export = {};
  var $context = {};
  var $patchRef = yalla.framework.patchRef;
  var $inject = yalla.framework.createInjector("/dist/component/card-booking");

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
      "onclick": function(event) {
        this.emitEvent = function(eventName, data) {
          var event = new ComponentEvent(eventName, data, this);
          if ('on' + eventName in _data) {
            _data['on' + eventName](event);
          }
        };
        return _data.onclick.bind(this)();
      }
    }, function(slotName) {
      _elementOpenStart("div", "");
      _elementOpenEnd("div");
      (function(domNode) {
        var node = domNode.element;

        function asyncFunc__1(pkg) {
          _elementOpenStart("p", "");
          _attr("class", "bg-primary");
          _elementOpenEnd("p");
          _text("Package: " + (pkg.packageName) + "");
          _elementClose("p");
          _text("Travel Date: " + ((pkg.travelDateFrom).toStringDateRange(pkg.travelDateUntil)) + "");
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
          _text("Land Arrangements: " + (_data.bkg.costLandArrangements.toFormattedString()) + "");
          _elementOpenStart("br", "");
          _elementOpenEnd("br");
          _elementClose("br");
          _text("Tickets: " + (_data.bkg.costTickets.toFormattedString()) + "");
          _elementOpenStart("br", "");
          _elementOpenEnd("br");
          _elementClose("br");
          _text("Total passenger: " + (_data.bkg.numberOfPassengers) + "");
          _elementOpenStart("br", "");
          _elementOpenEnd("br");
          _elementClose("br");
          _text("Total Price: " + ((_data.bkg.totalPrice ? _data.bkg.totalPrice.toFormattedString() : '')) + "");
          _elementOpenStart("br", "");
          _elementOpenEnd("br");
          _elementClose("br");
          _text("Unique Code: " + (_data.bkg.uniqueCode) + "");
          _elementOpenStart("br", "");
          _elementOpenEnd("br");
          _elementClose("br");
          _text("Grand Total: " + ((_data.bkg.totalPrice + _data.bkg.uniqueCode).toFormattedString()) + "");
          _elementOpenStart("br", "");
          _elementOpenEnd("br");
          _elementClose("br");
          _text("Expiry Date: " + ((_data.bkg.waitingForPaymentUntil ? _data.bkg.waitingForPaymentUntil.toDateComponents(false, true) : '')) + "");
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