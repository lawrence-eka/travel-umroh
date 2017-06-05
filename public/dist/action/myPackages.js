yalla.framework.addComponent("/dist/action/myPackages", (function() {
  var $patchChanges = yalla.framework.renderToScreen;
  var $inject = yalla.framework.createInjector("/dist/action/myPackages");
  var $export = {};
  var $path = "/dist/action/myPackages";
  var _elementName = "dist.action.myPackages";
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

  function getTravelAgentName(id) {
    return new Promise(function(resolve) {
      dpd.travelagents.get(id, function(ta, err) {
        if (err) {
          errorMessage = err.message;
          $patchChanges();
        } else {
          resolve(ta);
        }
      });
    });
  }

  function getPackages(travelAgentId) {
    return new Promise(function(resolve) {
      var q = {
        "travelAgentId": travelAgentId
      }
      dpd.packages.get(q, function(result, err) {
        resolve(result);
      });
    });
    0
  }

  function onCancelEdit(travelAgentId) {
    debugger;
    window.location.hash = "#app/action.myPackages:travelAgentId=" + travelAgentId;
  }

  function onSavePackage(pkg, travelAgentId) {
    pkg = pkg.data;
    pkg.travelAgentId = travelAgentId;
    dpd.packages.post(pkg, function(result, err) {
      window.location.hash = "#app/action.myPackages:travelAgentId=" + travelAgentId;
      $patchChanges();
    });
  }

  function onEditPackage(packageId, travelAgentId) {
    window.location.hash = "#app/action.myPackages:travelAgentId=" + travelAgentId + ":editPackageId=" + packageId.data;
  }

  function onShowItinerary(packageId) {
    window.location.hash = "#app/action.myItinerary:packageId=" + packageId.data;
  }

  function onNewPackage(event) {
    window.location.hash = "#app/action.myPackages:travelAgentId=" + event + ":editPackageId=-1";
  }

  function $render(_props, _slotView) {
    _elementOpenStart("link", "");
    _attr("element", "dist.action.myPackages");
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
    _context["entry"] = $inject("/component/entry");
    var entry = _context["entry"];
    _context["card"] = $inject("/component/panel");
    var card = _context["card"];
    _context["card-package"] = $inject("/component/card-package");
    var cardPackage = _context["card-package"];
    _context["edit-package"] = $inject("/component/edit-package");
    var editPackage = _context["edit-package"];
    _elementOpenStart("div", "");
    _attr("element", "dist.action.myPackages");
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
          "title": data.travelAgentName,
          "nofooter": "nofooter"
        };
        _context["card"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {
          if (slotName === "body") {
            _elementOpenStart("div", "");
            _elementOpenEnd("div");
            if (!_props.editPackageId) {
              var _params = {
                "type": "button",
                "value": "New Package",
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
                  onNewPackage.bind(self)(_props.travelAgentId);
                }
              };
              _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
            }
            _elementClose("div");
          }
        });
        if (_props.editPackageId == -1) {
          var _params = {
            "onsave": function(event) {
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
              onSavePackage.bind(self)(event, _props.travelAgentId);
            },
            "oncancel": function(event) {
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
              onCancelEdit.bind(self)(_props.travelAgentId);
            }
          };
          _context["edit-package"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
        }
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
              _elementOpenStart("div", "");
              _elementOpenEnd("div");
              if (_props.editPackageId != pkg.id) {
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
                    onEditPackage.bind(self)(event, _props.travelAgentId);
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
              }
              if (_props.editPackageId == pkg.id) {
                var _params = {
                  "package": pkg,
                  "onsave": function(event) {
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
                    onSavePackage.bind(self)(event, _props.travelAgentId);
                  },
                  "oncancel": function(event) {
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
                    onCancelEdit.bind(self)(_props.travelAgentId);
                  }
                };
                _context["edit-package"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
              }
              _elementClose("div");
            });
          }
          var promise = getPackages.bind(self)(_props.travelAgentId);
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
      var promise = getTravelAgentName.bind(self)(_props.travelAgentId);
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