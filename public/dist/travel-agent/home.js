yalla.framework.addComponent("/dist/travel-agent/home", (function() {
  var $patchChanges = yalla.framework.renderToScreen;
  var $inject = yalla.framework.createInjector("/dist/travel-agent/home");
  var $export = {};
  var $path = "/dist/travel-agent/home";
  var _elementName = "dist.travel-agent.home";
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
      alert: new Alert(),
      editTravelAgentId: null
    }
  }

  function getTravelAgents() {
    var self = this;
    return new Promise(function(resolve) {
      var me = storage.me.read();
      var q = {
        "contactPersonId": me.id
      };
      dpd.travelagents.get(q, function(ta, err) {
        if (err) {
          self.state.alert.alert(err);
          resolve(null);
        } else {
          self.state.alert.alert(null);
          resolve(ta);
        };
      });
    });
  }

  function onAddTA() {
    this.state.editTravelAgentId = -1;
    $patchChanges();
  }

  function onEditTA(event) {
    this.state.editTravelAgentId = event.data;
    $patchChanges();
  }

  function onCloseEditor() {
    this.state.editTravelAgentId = null;
    $patchChanges();
  }

  function onShowPackages(event) {
    //debugger;
    window.location.hash = "#app/package.home:travelAgentId=" + event.data;
  }

  function $render(_props, _slotView) {
    _context["card-travel-agent"] = $inject("/travel-agent/card-travel-agent");
    var cardTravelAgent = _context["card-travel-agent"];
    _context["edit-travel-agent"] = $inject("/travel-agent/edit-travel-agent");
    var editTravelAgent = _context["edit-travel-agent"];
    _context["entry"] = $inject("/component/entry");
    var entry = _context["entry"];
    _context["panel"] = $inject("/component/panel");
    var panel = _context["panel"];
    _elementOpenStart("link", "");
    _attr("element", "dist.travel-agent.home");
    _attr("href", "asset/css/custom-style.css");
    _attr("rel", "stylesheet");
    _elementOpenEnd("link");
    _elementClose("link");
    _elementOpenStart("div", "");
    _attr("element", "dist.travel-agent.home");
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
    if (_state.editTravelAgentId) {
      var _params = {
        "travelAgentId": _state.editTravelAgentId,
        "onclose": function(event) {
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
          onCloseEditor.bind(self)();
        }
      };
      _context["edit-travel-agent"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
    }
    if (!_state.editTravelAgentId) {
      var _params = {
        "nofooter": "nofooter",
        "title": "My Travel Agencies"
      };
      _context["panel"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {
        if (slotName === "body") {
          _elementOpenStart("span", "");
          _elementOpenEnd("span");
          var _params = {
            "type": "button",
            "naked": "naked",
            "value": "Add New Travel Agency",
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
              onAddTA.bind(self)();
            }
          };
          _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
          _elementClose("span");
        }
      });
    }
    if (!_state.editTravelAgentId) {
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
          var _array = data || [];
          _array.forEach(function(ta) {
            _elementOpenStart("p", "");
            _elementOpenEnd("p");
            var _params = {
              "travelAgent": ta,
              "oneditTA": function(event) {
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
                onEditTA.bind(self)(event);
              },
              "onshowPackages": function(event) {
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
                onShowPackages.bind(self)(event);
              }
            };
            _context["card-travel-agent"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
            _elementClose("p");
          });
        }
        var promise = getTravelAgents.bind(self)();
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
    }
    _elementClose("div");
  }
  if (typeof $render === "function") {
    $export.render = $render;
  }
  return $export;
})());