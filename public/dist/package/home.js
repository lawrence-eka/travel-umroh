yalla.framework.addComponent("/dist/package/home", (function() {
  var $patchChanges = yalla.framework.renderToScreen;
  var $inject = yalla.framework.createInjector("/dist/package/home");
  var $export = {};
  var $path = "/dist/package/home";
  var _elementName = "dist.package.home";
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
    //debugger;
    return {
      travelAgentId: props.travelAgentId,
      editPackageId: null,
      alert: new Alert(),
    }
  }

  function getTravelAgent() {
    debugger;
    var self = this;
    return new Promise(function(resolve) {
      dpd.travelagents.get(self.state.travelAgentId, function(ta, err) {
        debugger;
        self.state.alert.alert(err);
        if (!err) {
          resolve(ta);
        } else resolve({});
        //			    $patchChanges();
      });
    });
  }

  function getPackages() {
    //debugger;
    var self = this;
    return new Promise(function(resolve) {
      //debugger;
      var q = {
        "travelAgentId": self.state.travelAgentId
      }
      dpd.packages.get(q, function(result, err) {
        //debugger;
        self.state.alert.alert(err);
        if (!err) {
          resolve(result);
        };
      });
    });
    0
  }

  function onCloseEditor() {
    debugger;
    this.state.editPackageId = null;
    $patchChanges();
  }

  function onSavePackage(pkg) {
    pkg = pkg.data;
    var self = this;
    pkg.travelAgentId = self.state.travelAgentId;
    dpd.packages.post(pkg, function(result, err) {
      self.state.alert.alert(err);
      if (!err) {
        self.state.editackageId = null;
        resolve(result);
      };
      $patchChanges();
    });
  }

  function onEditPackage(packageId) {
    this.state.editPackageId = packageId.data;
    $patchChanges();
  }

  function onShowItinerary(packageId) {
    window.location.hash = "#app/itinerary.home:packageId=" + packageId.data;
  }

  function onAddPackage() {
    this.state.editPackageId = -1;
    $patchChanges();
    //window.location.hash="#app/action.myPackages:travelAgentId=" + event + ":editPackageId=-1";
  }

  function $render(_props, _slotView) {
    _context["card-package"] = $inject("/package/card-package");
    var cardPackage = _context["card-package"];
    _context["edit-package"] = $inject("/package/edit-package");
    var editPackage = _context["edit-package"];
    _context["entry"] = $inject("/component/entry");
    var entry = _context["entry"];
    _context["panel"] = $inject("/component/panel");
    var panel = _context["panel"];
    _elementOpenStart("link", "");
    _attr("element", "dist.package.home");
    _attr("href", "asset/css/custom-style.css");
    _attr("rel", "styleshe");
    _elementOpenEnd("link");
    _elementClose("link");
    _elementOpenStart("div", "");
    _attr("element", "dist.package.home");
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
        if (_state.editPackageId) {
          var _params = {
            "travelAgentId": _state.travelAgentId,
            "packageId": _state.editPackageId,
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
          _context["edit-package"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
        }
        if (!_state.editPackageId) {
          _elementOpenStart("span", "");
          _elementOpenEnd("span");
          var _params = {
            "title": data.travelAgentName,
            "nofooter": "nofooter"
          };
          _context["panel"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {
            if (slotName === "body") {
              _elementOpenStart("span", "");
              _elementOpenEnd("span");
              var _params = {
                "type": "button",
                "naked": "naked",
                "value": "Add New Package",
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
                  onAddPackage.bind(self)();
                }
              };
              _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
              _elementClose("span");
            }
          });
          _elementClose("span");
        }
        if (!_state.editPackageId) {
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

            function asyncFunc_2(data) {
              var _array = data || [];
              _array.forEach(function(pkg) {
                _elementOpenStart("p", "");
                _elementOpenEnd("p");
                var _params = {
                  "pkg": pkg,
                  "onedit": function(event) {
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
                    onEditPackage.bind(self)(event);
                  },
                  "onshowItinerary": function(event) {
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
                    onShowItinerary.bind(self)(event);
                  }
                };
                _context["card-package"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
                _elementClose("p");
              });
            }
            var promise = getPackages.bind(self)();
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
          _elementClose("div");
        }
      }
      var promise = getTravelAgent.bind(self)();
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
  if (typeof $render === "function") {
    $export.render = $render;
  }
  return $export;
})());