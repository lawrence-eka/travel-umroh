yalla.framework.addComponent("/dist/component/card-booking", (function() {
  var $path = "/dist/component/card-booking";
  var $patchChanges = yalla.framework.renderToScreen;
  var $export = {};
  var $context = {};
  var _parentComponent = yalla.framework.getParentComponent;
  var $inject = yalla.framework.createInjector("/dist/component/card-booking");

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
    $context["card"] = $inject("/component/card");
    var card = $context["card"];
    _elementOpenStart("link", "");
    _attr("element", "dist.component.card-booking");
    _attr("href", "asset/css/custom-style.css");
    _attr("rel", "stylesheet");
    _elementOpenEnd("link");
    // The component of this object
    var __component = IncrementalDOM.currentElement();
    __component.__state = __component.__state || initState.bind(__component)(_props);
    var __state = __component.__state;
    _elementClose("link");
    _elementOpenStart("div", "");
    _attr("element", "dist.component.card-booking");
    _elementOpenEnd("div");
    // The component of this object
    var __component = IncrementalDOM.currentElement();
    __component.__state = __component.__state || initState.bind(__component)(_props);
    var __state = __component.__state;
    $context["card"].render({
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
        return onClick.bind(self)(_props.bkg.id);
      }
    }, function(slotName) {
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

            function asyncFunc__2(data) {
              _text("" + (data.travelAgentName) + "");
            }
            var promise = loadAgent.bind(self)(pkg.travelAgentId);
            if (promise && typeof promise == "object" && "then" in promise) {
              _skip();
              promise.then(function(_result) {
                $patchChanges(node, function() {
                  asyncFunc__2.call(self, _result)
                });
              }).catch(function(err) {
                console.log(err);
              });
            } else {
              asyncFunc__2.call(self, promise)
            }
          })({
            element: IncrementalDOM.currentElement(),
            pointer: IncrementalDOM.currentPointer()
          });
          _elementClose("span");
          _elementOpenStart("br", "");
          _elementOpenEnd("br");
          _elementClose("br");
          _text("Land Arrangements: " + (_props.bkg.costLandArrangements.toFormattedString()) + "");
          _elementOpenStart("br", "");
          _elementOpenEnd("br");
          _elementClose("br");
          _text("Tickets: " + (_props.bkg.costTickets.toFormattedString()) + "");
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
          _text("Unique Code: " + (_props.bkg.uniqueCode) + "");
          _elementOpenStart("br", "");
          _elementOpenEnd("br");
          _elementClose("br");
          _text("Grand Total: " + ((_props.bkg.totalPrice + _props.bkg.uniqueCode).toFormattedString()) + "");
          _elementOpenStart("br", "");
          _elementOpenEnd("br");
          _elementClose("br");
          _text("Expiry Date: " + ((_props.bkg.waitingForPaymentUntil ? _props.bkg.waitingForPaymentUntil.toDateComponents(false, true) : '')) + "");
        }
        var promise = loadPackage.bind(self)(_props.bkg.packageId);
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
    });
    _elementClose("div");
  }
  if (typeof $render === "function") {
    $export.render = $render;
  }
  return $export;
})());