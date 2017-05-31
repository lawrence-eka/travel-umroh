yalla.framework.addComponent("/dist/action/myPackages", (function() {
  var $path = "/dist/action/myPackages";
  var $patchChanges = yalla.framework.renderToScreen;
  var $export = {};
  var $context = {};
  var _parentComponent = yalla.framework.getParentComponent;
  var $inject = yalla.framework.createInjector("/dist/action/myPackages");

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
    debugger;
    pkg = pkg.data;
    pkg.travelAgentId = travelAgentId;
    dpd.packages.post(pkg, function(result, err) {
      window.location.hash = "#app/action.myPackages:travelAgentId=" + travelAgentId;
      $patchChanges();
    });
  }

  function onEditPackage(packageId, travelAgentId) {
    debugger;
    window.location.hash = "#app/action.myPackages:travelAgentId=" + travelAgentId + ":editPackageId=" + packageId.data;
  }

  function onShowItinerary(packageId) {
    debugger;
    window.location.hash = "#app/action.myItinerary:packageId=" + packageId.data;
  }

  function onNewPackage(event) {
    debugger;
    window.location.hash = "#app/action.myPackages:travelAgentId=" + event + ":editPackageId=-1";
  }

  function $render(_props, _slotView) {
    _elementOpenStart("link", "");
    _attr("element", "dist.action.myPackages");
    _attr("href", "asset/css/custom-style.css");
    _attr("rel", "stylesheet");
    _elementOpenEnd("link");
    // The component of this object
    var __component = IncrementalDOM.currentElement();
    __component.__state = __component.__state || initState.bind(__component)(_props);
    var __state = __component.__state;
    _elementClose("link");
    $context["entry"] = $inject("/component/entry");
    var entry = $context["entry"];
    $context["card"] = $inject("/component/card");
    var card = $context["card"];
    $context["card-package"] = $inject("/component/card-package");
    var cardPackage = $context["card-package"];
    $context["edit-package"] = $inject("/component/edit-package");
    var editPackage = $context["edit-package"];
    _elementOpenStart("div", "");
    _attr("element", "dist.action.myPackages");
    _elementOpenEnd("div");
    // The component of this object
    var __component = IncrementalDOM.currentElement();
    __component.__state = __component.__state || initState.bind(__component)(_props);
    var __state = __component.__state;
    _elementOpenStart("div", "");
    _attr("class", "container all-5px");
    _elementOpenEnd("div");
    _elementOpenStart("div", "");
    _attr("class", "row centered-form no-top-margin");
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
        $context["card"].render({
          "title": data.travelAgentName
        }, function(slotName) {
          if (!_props.editPackageId) {
            $context["entry"].render({
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
                self.component = __component;
                self.component.__state = self.component.__state || {};
                self.state = self.component.__state;
                self.emitEvent = function(eventName, data) {
                  var event = new ComponentEvent(eventName, data, self.target, self.currentTarget);
                  if ('on' + eventName in _props) {
                    _props['on' + eventName](event);
                  }
                };
                return onNewPackage.bind(self)(_props.travelAgentId);
              }
            }, function(slotName) {});
          }
        });
        if (_props.editPackageId == -1) {
          $context["edit-package"].render({
            "onsave": function(event) {
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
              return onSavePackage.bind(self)(event, _props.travelAgentId);
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
              self.component = __component;
              self.component.__state = self.component.__state || {};
              self.state = self.component.__state;
              self.emitEvent = function(eventName, data) {
                var event = new ComponentEvent(eventName, data, self.target, self.currentTarget);
                if ('on' + eventName in _props) {
                  _props['on' + eventName](event);
                }
              };
              return onCancelEdit.bind(self)(_props.travelAgentId);
            }
          }, function(slotName) {});
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
          self.component = __component;
          self.component.__state = self.component.__state || {};
          self.state = self.component.__state;

          function asyncFunc__2(data) {
            var _array = data || [];
            _array.forEach(function(pkg) {
              _elementOpenStart("div", "");
              _elementOpenEnd("div");
              if (_props.editPackageId != pkg.id) {
                $context["card-package"].render({
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
                    self.component = __component;
                    self.component.__state = self.component.__state || {};
                    self.state = self.component.__state;
                    self.emitEvent = function(eventName, data) {
                      var event = new ComponentEvent(eventName, data, self.target, self.currentTarget);
                      if ('on' + eventName in _props) {
                        _props['on' + eventName](event);
                      }
                    };
                    return onEditPackage.bind(self)(event, _props.travelAgentId);
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
                    self.component = __component;
                    self.component.__state = self.component.__state || {};
                    self.state = self.component.__state;
                    self.emitEvent = function(eventName, data) {
                      var event = new ComponentEvent(eventName, data, self.target, self.currentTarget);
                      if ('on' + eventName in _props) {
                        _props['on' + eventName](event);
                      }
                    };
                    return onShowItinerary.bind(self)(event);
                  }
                }, function(slotName) {});
              }
              if (_props.editPackageId == pkg.id) {
                $context["edit-package"].render({
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
                    self.component = __component;
                    self.component.__state = self.component.__state || {};
                    self.state = self.component.__state;
                    self.emitEvent = function(eventName, data) {
                      var event = new ComponentEvent(eventName, data, self.target, self.currentTarget);
                      if ('on' + eventName in _props) {
                        _props['on' + eventName](event);
                      }
                    };
                    return onSavePackage.bind(self)(event, _props.travelAgentId);
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
                    self.component = __component;
                    self.component.__state = self.component.__state || {};
                    self.state = self.component.__state;
                    self.emitEvent = function(eventName, data) {
                      var event = new ComponentEvent(eventName, data, self.target, self.currentTarget);
                      if ('on' + eventName in _props) {
                        _props['on' + eventName](event);
                      }
                    };
                    return onCancelEdit.bind(self)(_props.travelAgentId);
                  }
                }, function(slotName) {});
              }
              _elementClose("div");
            });
          }
          var promise = getPackages.bind(self)(_props.travelAgentId);
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
        _elementClose("div");
      }
      var promise = getTravelAgentName.bind(self)(_props.travelAgentId);
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
    _elementClose("div");
    _elementClose("div");
  }
  if (typeof $render === "function") {
    $export.render = $render;
  }
  return $export;
})());