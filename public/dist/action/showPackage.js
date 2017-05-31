yalla.framework.addComponent("/dist/action/showPackage", (function() {
  var $path = "/dist/action/showPackage";
  var $patchChanges = yalla.framework.renderToScreen;
  var $export = {};
  var $context = {};
  var _parentComponent = yalla.framework.getParentComponent;
  var $inject = yalla.framework.createInjector("/dist/action/showPackage");

  function ComponentEvent(type, data, target, currentTarget) {
    this.data = data;
    this.target = target;
    this.type = type;
    this.currentTarget = currentTarget;
  }

  var _elementOpen = IncrementalDOM.elementOpen,
    _elementClose = IncrementalDOM.elementClose,
    _elementOpenStart = IncrementalDOM.elementOpenStart,
    _elementOpenEnd = IncrementalDOM.elementOpenEnd,
    _elementVoid = IncrementalDOM.elementVoid,
    _text = IncrementalDOM.text,
    _attr = IncrementalDOM.attr,
    _skip = IncrementalDOM.skip;

  function initState(props) {
    return {}
  };

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


  function $render(_props, _slotView) {
    $context["card-package"] = $inject("/component/card-package");
    var cardPackage = $context["card-package"];
    $context["itrLines"] = $inject("/component/card-itinerary");
    var itrLines = $context["itrLines"];
    $context["entry"] = $inject("/component/entry");
    var entry = $context["entry"];
    _elementOpenStart("link", "");
    _attr("element", "dist.action.showPackage");
    _attr("href", "asset/css/custom-style.css");
    _attr("rel", "stylesheet");
    _elementOpenEnd("link");
    // The component of this object
    var __component = IncrementalDOM.currentElement();
    __component.__state = __component.__state || initState.bind(__component)(_props);
    var __state = __component.__state;
    _elementClose("link");
    _elementOpenStart("div", "");
    _attr("element", "dist.action.showPackage");
    _elementOpenEnd("div");
    // The component of this object
    var __component = IncrementalDOM.currentElement();
    __component.__state = __component.__state || initState.bind(__component)(_props);
    var __state = __component.__state;
    _elementOpenStart("div", "");
    _attr("class", "row");
    _elementOpenEnd("div");
    _elementOpenStart("div", "");
    _elementOpenEnd("div");
    (function(domNode) {
      var node = domNode.element;
      var self = {
        target: node
      };
      self.properties = _props;
      if ('elements' in self.target) {
        self.elements = self.target.elements;
      }
      self.currentTarget = self.target;
      self.component = __component;
      self.component.__state = self.component.__state || {};
      self.state = self.component.__state;

      function asyncFunc__1(data) {
        $context["card-package"].render({
          "pkg": data
        }, function(slotName) {});
      }
      var promise = queryPackage.bind(self)(_props.packageId);
      if (promise && typeof promise == "object" && "then" in promise) {
        _skip();
        promise.then(function(_result) {
          $patchChanges(node, function() {
            asyncFunc__1.call(self, _result)
          });
        }).catch(function(err) {
          console.log(err);
        });
      } else {
        asyncFunc__1.call(self, promise)
      }
    })({
      element: IncrementalDOM.currentElement(),
      pointer: IncrementalDOM.currentPointer()
    });
    _elementClose("div");
    _elementClose("div");
    _elementOpenStart("div", "");
    _attr("class", "row");
    _elementOpenEnd("div");
    $context["entry"].render({
      "type": "button",
      "value": "Book This!",
      "onclick": function(event) {
        var self = {
          target: event.target
        };
        self.properties = _props;
        if ('elements' in self.target) {
          self.elements = self.target.elements;
        }
        self.currentTarget = this == event.target ? self.target : _parentComponent(event.currentTarget);
        self.component = __component;
        self.component.__state = self.component.__state || {};
        self.state = self.component.__state;
        self.emitEvent = function(eventName, data) {
          var event = new ComponentEvent(eventName, data, self.target, self.currentTarget);
          if ('on' + eventName in _props) {
            _props['on' + eventName](event);
          }
        };
        return book.bind(self)(_props.packageId);
      }
    }, function(slotName) {});
    _elementClose("div");
    _elementOpenStart("div", "");
    _attr("class", "row");
    _elementOpenEnd("div");
    _elementOpenStart("div", "");
    _elementOpenEnd("div");
    (function(domNode) {
      var node = domNode.element;
      var self = {
        target: node
      };
      self.properties = _props;
      if ('elements' in self.target) {
        self.elements = self.target.elements;
      }
      self.currentTarget = self.target;
      self.component = __component;
      self.component.__state = self.component.__state || {};
      self.state = self.component.__state;

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
      var promise = queryItineraries.bind(self)(_props.packageId);
      if (promise && typeof promise == "object" && "then" in promise) {
        _skip();
        promise.then(function(_result) {
          $patchChanges(node, function() {
            asyncFunc__1.call(self, _result)
          });
        }).catch(function(err) {
          console.log(err);
        });
      } else {
        asyncFunc__1.call(self, promise)
      }
    })({
      element: IncrementalDOM.currentElement(),
      pointer: IncrementalDOM.currentPointer()
    });
    _elementClose("div");
    _elementClose("div");
    _elementOpenStart("div", "");
    _attr("class", "row");
    _elementOpenEnd("div");
    $context["entry"].render({
      "type": "button",
      "value": "Book This!",
      "onclick": function(event) {
        var self = {
          target: event.target
        };
        self.properties = _props;
        if ('elements' in self.target) {
          self.elements = self.target.elements;
        }
        self.currentTarget = this == event.target ? self.target : _parentComponent(event.currentTarget);
        self.component = __component;
        self.component.__state = self.component.__state || {};
        self.state = self.component.__state;
        self.emitEvent = function(eventName, data) {
          var event = new ComponentEvent(eventName, data, self.target, self.currentTarget);
          if ('on' + eventName in _props) {
            _props['on' + eventName](event);
          }
        };
        return book.bind(self)(_props.packageId);
      }
    }, function(slotName) {});
    _elementClose("div");
    _elementClose("div");
  }
  if (typeof $render === "function") {
    $export.render = $render;
  }
  return $export;
})());