yalla.framework.addComponent("/dist/booking/card-booking", (function() {
  var $patchChanges = yalla.framework.renderToScreen;
  var $inject = yalla.framework.createInjector("/dist/booking/card-booking");
  var $export = {};
  var $path = "/dist/booking/card-booking";
  var _elementName = "dist.booking.card-booking";
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


  function onClick(bookingId) {
    debugger;
    this.emitEvent('click', bookingId);
  }

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

  function $render(_props, _slotView) {
    _context["card"] = $inject("/component/panel");
    var card = _context["card"];
    _elementOpenStart("link", "");
    _attr("element", "dist.booking.card-booking");
    _attr("href", "asset/css/custom-style.css");
    _attr("rel", "stylesheet");
    _elementOpenEnd("link");
    _elementClose("link");
    _elementOpenStart("div", "");
    _attr("element", "dist.booking.card-booking");
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

      function asyncFunc_1(pkg) {
        var _params = {
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
            onClick.bind(self)(_props.bkg.id);
          },
          "title": 'Package: ' + pkg.packageName,
          "nofooter": "nofooter"
        };
        _context["card"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {
          if (slotName === "body") {
            _elementOpenStart("div", "");
            _elementOpenEnd("div");
            _text("Travel Date: " + ((pkg.travelDateFrom).toStringDateRange(pkg.travelDateUntil)) + "");
            _elementOpenStart("br", "");
            _elementOpenEnd("br");
            _elementClose("br");
            _text("Operator:");
            _elementOpenStart("span", "");
            _elementOpenEnd("span");
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

              function asyncFunc_2(ta) {
                _text("" + (ta.travelAgentName) + "");
              }
              var promise = loadAgent.bind(self)(pkg.travelAgentId);
              if (promise && typeof promise == "object" && "then" in promise) {
                _skip();
                promise.then(function(_result) {
                  $patchChanges(node, function() {
                    asyncFunc_2.call(self, _result)
                  });
                }).catch(function(err) {
                  console.log(err);
                });
              } else {
                asyncFunc_2.call(self, promise)
              }
            })({
              element: IncrementalDOM.currentElement(),
              pointer: IncrementalDOM.currentPointer()
            });
            _elementClose("span");
            _elementOpenStart("br", "");
            _elementOpenEnd("br");
            _elementClose("br");
            _text("Land Arrangements: " + (_props.bkg.costLandArrangements ? _props.bkg.costLandArrangements.toFormattedString() : '') + "");
            _elementOpenStart("br", "");
            _elementOpenEnd("br");
            _elementClose("br");
            _text("Tickets: " + (_props.bkg.costTickets ? _props.bkg.costTickets.toFormattedString() : '') + "");
            _elementOpenStart("br", "");
            _elementOpenEnd("br");
            _elementClose("br");
            _text("Total passenger: " + (_props.bkg.numberOfPassengers) + "");
            _elementOpenStart("br", "");
            _elementOpenEnd("br");
            _elementClose("br");
            _text("Total Price: " + ((_props.bkg.totalPrice ? _props.bkg.totalPrice.toFormattedString() : '')) + "");
            _elementOpenStart("br", "");
            _elementOpenEnd("br");
            _elementClose("br");
            _text("Unique Code: " + (_props.bkg.uniqueCode ? _props.bkg.uniqueCode : '') + "");
            _elementOpenStart("br", "");
            _elementOpenEnd("br");
            _elementClose("br");
            _text("Grand Total: " + ((_props.bkg.totalPrice + _props.bkg.uniqueCode) ? (_props.bkg.totalPrice + _props.bkg.uniqueCode).toFormattedString() : '') + "");
            _elementOpenStart("br", "");
            _elementOpenEnd("br");
            _elementClose("br");
            _text("Expiry Date: " + ((_props.bkg.waitingForPaymentUntil ? _props.bkg.waitingForPaymentUntil.toDateComponents(false, true) : '')) + "");
            _elementClose("div");
          }
        });
      }
      var promise = loadPackage.bind(self)(_props.bkg.packageId);
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