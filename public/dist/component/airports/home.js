yalla.framework.addComponent("/dist/component/airports/home", (function() {
  var $patchChanges = yalla.framework.renderToScreen;
  var $inject = yalla.framework.createInjector("/dist/component/airports/home");
  var $export = {};
  var $path = "/dist/component/airports/home";
  var _elementName = "dist.component.airports.home";
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


  function onSubmit() {
    debugger;
    console.log()
  }

  function getAirports() {
    return new Promise(function(resolve) {
      dpd.airports.get({
        $fields: {
          IATA: 1,
          airport: 1
        }
      }, function(airports) {
        //debugger;
        resolve(airports.map(function(x) {
          return {
            label: x.IATA + ' - ' + x.airport,
            value: x.IATA
          }
        }));
      })
    })
  }

  function getAirlines() {
    return new Promise(function(resolve) {
      dpd.airlines.get({
        $fields: {
          IATA: 1,
          airline: 1
        }
      }, function(airlines) {
        //debugger;
        resolve(airlines.map(function(x) {
          return {
            label: x.IATA + ' - ' + x.airline,
            value: x.IATA
          }
        }));
      })
    })
  }

  function $render(_props, _slotView) {
    _context["entry"] = $inject("/component/entry");
    var entry = _context["entry"];
    _elementOpenStart("div", "");
    _attr("element", "dist.component.airports.home");
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
    _attr("class", "row");
    _elementOpenEnd("div");
    _elementOpenStart("form", "");
    _elementOpenEnd("form");
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
          "type": "lookup",
          "prompt": "Airport",
          "name": "airport",
          "entries": data,
          "value": "CGK"
        };
        _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
      }
      var promise = getAirports.bind(self)();
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
          "type": "lookup",
          "prompt": "Airline",
          "name": "airline",
          "entries": data,
          "value": "GA"
        };
        _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
      }
      var promise = getAirlines.bind(self)();
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
    var _params = {
      "type": "button",
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
        onSubmit.bind(self)();
      }
    };
    _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
    _elementClose("form");
    _elementClose("div");
    _elementClose("div");
  }
  if (typeof $render === "function") {
    $export.render = $render;
  }
  return $export;
})());