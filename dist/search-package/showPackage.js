yalla.framework.addComponent("/dist/search-package/showPackage", (function() {
  var $patchChanges = yalla.framework.renderToScreen;
  var $inject = yalla.framework.createInjector("/dist/search-package/showPackage");
  var $export = {};
  var $path = "/dist/search-package/showPackage";
  var _elementName = "dist.search-package.showPackage";
  var _context = {};
  var _parentComponent = yalla.framework.getParentComponent;
  var _merge = yalla.utils.merge;

  function ComponentEvent(type, data, target, currentTarget) {
    this.data = data;
    this.target = target;
    this.type = type;
    this.currentTarget = currentTarget;
  }

  var _elementOpen = IncrementalDOM.elementOpen;
  var _elementClose = IncrementalDOM.elementClose;
  var _elementOpenStart = IncrementalDOM.elementOpenStart;
  var _elementOpenEnd = IncrementalDOM.elementOpenEnd;
  var _elementVoid = IncrementalDOM.elementVoid;
  var _text = IncrementalDOM.text;
  var _attr = IncrementalDOM.attr;
  var _skip = IncrementalDOM.skip;

  function initState(props) {
    return {}
  };

  function onPropertyChange(event) {};

  function initState(props) {
    return {
      packageId: props.packageId,
      alert: new Alert(null, $patchChanges, "alert"),
    }
  }

  function onPropertyChange(props) {
    debugger;
  }

  function book() {
    var me = storage.me.read();
    var self = this;
    dpd.packages.get(self.state.packageId, function(pkg, err) {
      self.state.alert.alert(err);
      if (!err) {
        var q = {
          "userId": me.id,
          "packageId": self.state.packageId,
          "costTickets": pkg.costTickets,
          "costLandArrangements": pkg.costLandArrangements
        };
        dpd.bookings.post(q, function(booking, err) {
          self.state.alert.alert(err);
          if (!err) {
            var bookingId = (booking.message ? JSON.parse(booking.message).booking.id : booking.id);
            window.location.hash = '#app/booking.home:bookingId=' + bookingId;
          }

        });
      }
    });
  }


  function queryPackage() {
    var self = this;
    return new Promise(function(resolve) {
      dpd.packages.get(self.state.packageId, function(pkg, err) {
        self.state.alert.alert(err);
        if (!err) {
          queryTravelAgent(pkg.travelAgentId, self).then(function(agent) {
            pkg.agent = agent;
            resolve(pkg);
          });
        }
      });
    });
  }

  function queryTravelAgent(id, self) {
    return new Promise(function(resolve) {
      dpd.travelagents.get(id, function(agent, err) {
        self.state.alert.alert(err);
        if (!err) {
          resolve(agent);
        }
      });
    });
  }

  function queryItineraries() {
    var self = this;
    return new Promise(function(resolve) {
      var q = {
        packageId: self.state.packageId,
        $sort: {
          "fromDateTime": 1
        }
      }
      dpd.itineraries.get(q, function(itineraries, err) {
        self.state.alert.alert(err);
        if (!err) {
          resolve(itineraries);
        }
      });
    });
  }


  function $render(_props, _slotView) {
    _context["alert"] = $inject("/component/alert");
    var alert = _context["alert"];
    _context["card-package"] = $inject("/package/card-package");
    var cardPackage = _context["card-package"];
    _context["card-itinerary"] = $inject("/itinerary/card-itinerary");
    var cardItinerary = _context["card-itinerary"];
    _context["card-itineraryList"] = $inject("/itinerary/card-itineraryList");
    var cardItineraryList = _context["card-itineraryList"];
    _context["entry"] = $inject("/component/entry");
    var entry = _context["entry"];
    _elementOpenStart("div", "");
    _attr("element", "dist.search-package.showPackage");
    _elementOpenEnd("div");
    var _component = IncrementalDOM.currentElement();
    var _validComponent = yalla.framework.validComponentName(_component, _elementName)
    _component._state = _component._state && _validComponent ? _component._state : initState.bind(_component)(_props);
    _component._state._name = _elementName;
    var _state = _component._state;
    var _self = {
      component: _component,
      properties: _props,
      state: _component._state
    };
    if (_validComponent) {
      yalla.framework.propertyCheckChanges(_component._properties, _props, onPropertyChange.bind(_self));
    }
    _component._properties = _props;
    _elementOpenStart("span", "");
    _elementOpenEnd("span");
    yalla.framework.registerRef("alert", IncrementalDOM.currentElement(), function() {
      var _params = {
        "alertType": _state.alert.type.bind(self)(),
        "message": _state.alert.text.bind(self)()
      };
      _context["alert"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
    })()
    _elementClose("span");
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
      self.component = _component;
      self.component._state = self.component._state || {};
      self.state = self.component._state;

      function asyncFunc_1(data) {
        var _params = {
          "pkg": data
        };
        _context["card-package"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
      }
      var promise = queryPackage.bind(self)();
      if (promise && typeof promise == "object" && "then" in promise) {
        _skip();
        promise.then(function(_result) {
          $patchChanges(node, function() {
            asyncFunc_1.call(self, _result)
          });
        }).catch(function(err) {
          console.log(err);
        });
      } else {
        asyncFunc_1.call(self, promise)
      }
    })({
      element: IncrementalDOM.currentElement(),
      pointer: IncrementalDOM.currentPointer()
    });
    _elementClose("div");
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
      self.component = _component;
      self.component._state = self.component._state || {};
      self.state = self.component._state;

      function asyncFunc_1(data) {
        var _params = {
          "itinerary": data,
          "onbook": function(event) {
            var self = {
              target: event.target
            };
            self.properties = _props;
            if ('elements' in self.target) {
              self.elements = self.target.elements;
            }
            self.currentTarget = this == event.target ? self.target : _parentComponent(event.currentTarget);
            self.component = _component;
            self.component._state = self.component._state || {};
            self.state = self.component._state;
            self.emitEvent = function(eventName, data) {
              var event = new ComponentEvent(eventName, data, self.target, self.currentTarget);
              if ('on' + eventName in _props) {
                _props['on' + eventName](event);
              }
            };
            book.bind(self)();
          }
        };
        _context["card-itineraryList"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
      }
      var promise = queryItineraries.bind(self)();
      if (promise && typeof promise == "object" && "then" in promise) {
        _skip();
        promise.then(function(_result) {
          $patchChanges(node, function() {
            asyncFunc_1.call(self, _result)
          });
        }).catch(function(err) {
          console.log(err);
        });
      } else {
        asyncFunc_1.call(self, promise)
      }
    })({
      element: IncrementalDOM.currentElement(),
      pointer: IncrementalDOM.currentPointer()
    });
    _elementClose("div");
    _elementClose("div");
  }
  if (typeof $render === "function") {
    $export.render = $render;
  }
  return $export;
})());