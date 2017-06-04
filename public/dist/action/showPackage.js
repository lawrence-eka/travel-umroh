yalla.framework.addComponent("/dist/action/showPackage", (function() {
  var $patchChanges = yalla.framework.renderToScreen;
  var $inject = yalla.framework.createInjector("/dist/action/showPackage");
  var $export = {};
  var $path = "/dist/action/showPackage";
  var _elementName = "dist.action.showPackage";
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

  var errorMessage = "";

  function book(packageId) {
    var me = storage.me.read();
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
    _context["card-package"] = $inject("/component/card-package");
    var cardPackage = _context["card-package"];
    _context["card-itinerary"] = $inject("/component/card-itinerary");
    var cardItinerary = _context["card-itinerary"];
    _context["card-itineraryList"] = $inject("/component/card-itineraryList");
    var cardItineraryList = _context["card-itineraryList"];
    _context["entry"] = $inject("/component/entry");
    var entry = _context["entry"];
    _elementOpenStart("link", "");
    _attr("element", "dist.action.showPackage");
    _attr("href", "asset/css/custom-style.css");
    _attr("rel", "stylesheet");
    _elementOpenEnd("link");
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
    _elementClose("link");
    _elementOpenStart("div", "");
    _attr("element", "dist.action.showPackage");
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
      var promise = queryPackage.bind(self)(_props.packageId);
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
          "itinerary": data
        };
        _context["card-itineraryList"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
      }
      var promise = queryItineraries.bind(self)(_props.packageId);
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
    var _params = {
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
        self.component = _component;
        self.component._state = self.component._state || {};
        self.state = self.component._state;
        self.emitEvent = function(eventName, data) {
          var event = new ComponentEvent(eventName, data, self.target, self.currentTarget);
          if ('on' + eventName in _props) {
            _props['on' + eventName](event);
          }
        };
        book.bind(self)(_props.packageId);
      }
    };
    _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
    _elementClose("div");
    _elementClose("div");
  }
  if (typeof $render === "function") {
    $export.render = $render;
  }
  return $export;
})());