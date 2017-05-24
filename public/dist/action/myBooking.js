yalla.framework.addComponent("/dist/action/myBooking", (function() {
  var $path = "/dist/action/myBooking";
  var $patchChanges = yalla.framework.renderToScreen;
  var $storeRef = yalla.framework.storeRef;
  var $export = {};
  var $context = {};
  var $patchRef = yalla.framework.patchRef;
  var $inject = yalla.framework.createInjector("/dist/action/myBooking");
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

  function queryBookings(userId) {
    return new Promise(function(resolve) {
      var q = {
        "userId": userId
      };
      dpd.bookings.get(q, function(bkg, err) {
        if (err) {
          errorMessage = err.message;
          $patchChanges();
        } else {
          resolve(bkg);
        };
      });
    });
  }

  function getBookings() {
    return new Promise(function(resolve) {
      dpd.users.me(function(me) {
        queryBookings(me.id).then(function(bkg) {
          debugger;
          resolve(bkg);
        });

      });
    });
  }

  function generateLink(id) {
    window.location.hash = '#app/action.bookPackage:bookingId=' + id;
  }

  function $render(_data, _slotView) {
    $context["card-booking"] = $inject("/component/card-booking");
    var cardBooking = $context["card-booking"];
    $context["card"] = $inject("/component/card");
    var card = $context["card"];
    _elementOpenStart("div", "");
    _attr("element", "dist.action.myBooking");
    _elementOpenEnd("div");
    (function(domNode) {
      var node = domNode.element;

      function asyncFunc__1(data) {
        var _array = data || [];
        _array.forEach(function(bkg) {
          _elementOpenStart("p", "");
          _elementOpenEnd("p");
          $context["card-booking"].render({
            "bkg": bkg,
            "onclick": function(event) {
              return generateLink(bkg.id)
            }
          }, function(slotName) {});
          _elementClose("p");
        });
      }
      var promise = getBookings();
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