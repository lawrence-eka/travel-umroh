yalla.framework.addComponent("/dist/action/showPackage", (function() {
  var $path = "/dist/action/showPackage";
  var $patchChanges = yalla.framework.renderToScreen;
  var $storeRef = yalla.framework.storeRef;
  var $export = {};
  var $context = {};
  var $patchRef = yalla.framework.patchRef;
  var $inject = yalla.framework.createInjector("/dist/action/showPackage");
  var elementOpen = IncrementalDOM.elementOpen,
    elementClose = IncrementalDOM.elementClose,
    elementOpenStart = IncrementalDOM.elementOpenStart,
    elementOpenEnd = IncrementalDOM.elementOpenEnd,
    elementVoid = IncrementalDOM.elementVoid,
    text = IncrementalDOM.text,
    attr = IncrementalDOM.attr,
    skip = IncrementalDOM.skip;

  var errorMessage = "";
  var dates = $inject('/common/dates');
  var numbers = $inject('/common/numbers');
  var package = {};

  function setPackage(pkg) {
    package = pkg;
  }

  function getPackage() {
    return package;
  }

  function book(packageId) {
    return new Promise(function(resolve) {
      dpd.users.me(function(me) {
        doBooking(me.id);
      });
    });
  }

  function doBooking(userId, packageId) {
    return new Promise(function(resolve) {
      var pkg = getPackage();
      var q = {
        "userId": userId,
        "packageId": pkg.id,
        "costTickets": pkg.costTickets,
        "costLandArrangements": pkg.costLandArrangements
      };
      dpd.bookings.post(q, function(booking, err) {
        if (err) {
          errorMessage = JSON.stringify(err);
          $patchChanges();
        } else {
          var bookingId = (booking.message ? JSON.parse(booking.message).booking.id : booking.id);
          window.location.hash = '#app/home/action.bookPackage:bookingId=' + bookingId;
          resolve(booking);
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
            setPackage(pkg);
            resolve(pkg);
          });
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

  function queryItineraries(packageId) {
    return new Promise(function(resolve) {
      var q = {
        packageId: packageId,
        $sort: {
          "fromDateTime": 1
        }
      }
      dpd.itineraries.get(q, function(itineraries, err) {
        if (err) {
          errorMessage = JSON.stringify(err);
          $patchChanges();
        } else {
          resolve(itineraries);
        }
      });
    });
  }


  function $render(_data, _slotView) {
    $context["itrLines"] = $inject("/component/itinerary");
    var itrLines = $context["itrLines"];
    $context["test"] = $inject("/component/test");
    var test = $context["test"];
    if (errorMessage != '') {
      elementOpenStart("div", "");
      attr("element", "dist.action.showPackage");
      elementOpenEnd("div");
      text("" + (errorMessage) + "");
      elementClose("div");
    }
    elementOpenStart("form", "");
    attr("element", "dist.action.showPackage");
    attr("onsubmit", function(event) {
      return book(_data.packageId)
    });
    elementOpenEnd("form");
    elementOpenStart("input", "");
    attr("type", "submit");
    attr("value", "Book This!");
    elementOpenEnd("input");
    elementClose("input");
    elementClose("form");
    elementOpenStart("div", "");
    attr("element", "dist.action.showPackage");
    elementOpenEnd("div");
    (function(domNode) {
      var node = domNode.element;

      function asyncFunc__1(data) {
        text("Package: " + (data.packageName) + "");
        elementOpenStart("br", "");
        elementOpenEnd("br");
        elementClose("br");
        text("Travel Date: " + (dates.rangePrettifier((new Date(data.travelDateFrom)), (new Date(data.travelDateUntil)))) + "");
        elementOpenStart("br", "");
        elementOpenEnd("br");
        elementClose("br");
        text("Operator: " + (data.agent.travelAgentName) + "");
        elementOpenStart("br", "");
        elementOpenEnd("br");
        elementClose("br");
        text("Land Arrangements: " + (numbers.money(data.costLandArrangements)) + "");
        elementOpenStart("br", "");
        elementOpenEnd("br");
        elementClose("br");
        text("Tickets: " + (numbers.money(data.costTickets)) + "");
        elementOpenStart("br", "");
        elementOpenEnd("br");
        elementClose("br");
      }
      var promise = queryPackage(_data.packageId);
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
    elementOpenStart("div", "");
    attr("element", "dist.action.showPackage");
    elementOpenEnd("div");
    (function(domNode) {
      var node = domNode.element;

      function asyncFunc__1(data) {
        var _array = data || [];
        _array.forEach(function(itr) {
          elementOpenStart("p", "");
          elementOpenEnd("p");
          $context["itrLines"].render({
            "itr": itr
          }, function(slotName) {});
          elementClose("p");
        });
      }
      var promise = queryItineraries(_data.packageId);
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
    elementOpenStart("form", "");
    attr("element", "dist.action.showPackage");
    attr("onsubmit", function(event) {
      return book(_data.packageId)
    });
    elementOpenEnd("form");
    elementOpenStart("input", "");
    attr("type", "submit");
    attr("value", "Book This!");
    elementOpenEnd("input");
    elementClose("input");
    elementClose("form");
    elementOpenStart("script", "");
    elementOpenEnd("script");
    elementClose("script");
  }
  if (typeof $render === "function") {
    $export.render = $render;
  }
  return $export;
})());