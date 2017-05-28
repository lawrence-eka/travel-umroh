yalla.framework.addComponent("/dist/action/showPackage", (function() {
  var $path = "/dist/action/showPackage";
  var $patchChanges = yalla.framework.renderToScreen;
  var $storeRef = yalla.framework.storeRef;
  var $export = {};
  var $context = {};
  var $patchRef = yalla.framework.patchRef;
  var $inject = yalla.framework.createInjector("/dist/action/showPackage");

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

  var errorMessage = "";

  function book(packageId) {
    dpd.users.me(function(me) {
      queryPackage(packageId).then(function(pkg) {
        var q = {
          "userId": me.id,
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
            window.location.hash = '#app/action.bookPackage:bookingId=' + bookingId;
          }
        });
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
    $context["card-package"] = $inject("/component/card-package");
    var cardPackage = $context["card-package"];
    $context["itrLines"] = $inject("/component/card-itinerary");
    var itrLines = $context["itrLines"];
    if (errorMessage != '') {
      _elementOpenStart("div", "");
      _attr("element", "dist.action.showPackage");
      _elementOpenEnd("div");
      _text("" + (errorMessage) + "");
      _elementClose("div");
    }
    _elementOpenStart("div", "");
    _attr("element", "dist.action.showPackage");
    _attr("class", "form-group");
    _elementOpenEnd("div");
    _elementOpenStart("input", "");
    _attr("type", "button");
    _attr("value", "Book This!");
    _attr("class", "form-control btn btn-info btn-block margin-top-15px");
    _attr("onclick", function(event) {
      this.emitEvent = function(eventName, data) {
        var event = new ComponentEvent(eventName, data, this);
        if ('on' + eventName in _data) {
          _data['on' + eventName](event);
        }
      };
      return book.bind(this)(_data.packageId);
    });
    _elementOpenEnd("input");
    _elementClose("input");
    _elementClose("div");
    _elementOpenStart("div", "");
    _attr("element", "dist.action.showPackage");
    _elementOpenEnd("div");
    (function(domNode) {
      var node = domNode.element;

      function asyncFunc__1(data) {
        $context["card-package"].render({
          "pkg": data
        }, function(slotName) {});
      }
      var promise = queryPackage(_data.packageId);
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
    _attr("element", "dist.action.showPackage");
    _elementOpenEnd("div");
    (function(domNode) {
      var node = domNode.element;

      function asyncFunc__1(data) {
        var _array = data || [];
        _array.forEach(function(itr) {
          _elementOpenStart("p", "");
          _elementOpenEnd("p");
          $context["itrLines"].render({
            "itr": itr
          }, function(slotName) {});
          _elementClose("p");
        });
      }
      var promise = queryItineraries(_data.packageId);
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
    _attr("element", "dist.action.showPackage");
    _attr("class", "form-group");
    _elementOpenEnd("div");
    _elementOpenStart("input", "");
    _attr("type", "button");
    _attr("value", "Book This!");
    _attr("class", "form-control btn btn-info btn-block margin-top-15px");
    _attr("onclick", function(event) {
      this.emitEvent = function(eventName, data) {
        var event = new ComponentEvent(eventName, data, this);
        if ('on' + eventName in _data) {
          _data['on' + eventName](event);
        }
      };
      return book.bind(this)(_data.packageId);
    });
    _elementOpenEnd("input");
    _elementClose("input");
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