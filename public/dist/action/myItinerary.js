yalla.framework.addComponent("/dist/action/myItinerary", (function() {
  var $patchChanges = yalla.framework.renderToScreen;
  var $inject = yalla.framework.createInjector("/dist/action/myItinerary");
  var $export = {};
  var $path = "/dist/action/myItinerary";
  var _elementName = "dist.action.myItinerary";
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
      itinerary: [],
      editItineraryId: null,
      alert: new Alert(),
    }
  }

  function queryItineraries() {
    var self = this;
    return new Promise(function(resolve) {
      var q = {
        "packageId": self.state.packageId,
        "$sort": {
          "fromDateTime": 1
        }
      }
      dpd.itineraries.get(q, function(itr, err) {
        if (err) {
          self.state.alert.alert(err);
          self.state.itinerary = [];
        } else {
          self.state.alert.alert(null);
          self.state.itinerary = itr;
        }
        resolve(self.state.itinerary);
      });
    });
  }

  function getPackage() {
    var self = this;
    return new Promise(function(resolve) {
      dpd.packages.get(self.state.packageId, function(result, err) {
        resolve(result);
      });
    });
  }

  function onSaveItinerary(itinerary) {
    debugger;
    itinerary = itinerary.data;
    itinerary.packageId = this.state.packageId;
    var self = this;
    if (itinerary.id == "") {
      dpd.itineraries.post(itinerary, function(result, err) {
        debugger;
        if (err) {
          self.state.alert.alert(err);
        }
        if (result) {
          self.state.alert.alert(null);
          self.state.editItineraryId = -1;
        }
        $patchChanges();
      });
    } else {
      debugger;
      dpd.itineraries.put(itinerary.id, itinerary, function(result, err) {
        debugger;
        if (err) {
          self.state.alert.alert(err);
        } else {
          self.state.alert.alert(null);
          self.state.editItineraryId = null;
        }
        $patchChanges();
      });
    }
  }

  function calculateDefaults() {
    var result = {
      date: {
        default: (new Date())
      },
      entryType: 'Transport'
    };
    if (this.state && this.state.itinerary && this.state.itinerary.length > 0) {
      if (itineraryId != -1) {
        for (var i = 0; i < this.state.itinerary.length; i++) {
          if (this.state.itinerary[i].id == this.state.editItineraryId) {
            if (i > 0) {
              result.date.min = this.state.itinerary[i - 1].toDateTime;
            }
            if (i < this.state.itinerary.length - 1) {
              result.date.max = this.state.itinerary[i + 1].fromDateTime;
            }
            return result;
          }
        }
      } else {
        result.date.default = this.state.itinerary[this.state.itinerary.length - 1].toDateTime;
        result.entryType = this.state.itinerary[this.state.itinerary.length - 1].entry.transport ? 'Hotel' : 'Transport';
      }
    }
    return result;
  }

  function onCancelEdit() {
    this.state.editItineraryId = null;
    $patchChanges();
  }

  function onAddItinerary() {
    this.state.editItineraryId = -1;
    $patchChanges();
  }

  function onEdit(itineraryId) {
    this.state.editItineraryId = itineraryId.data;
    $patchChanges();
  }

  function onDelete(itineraryId) {
    //debugger;
    var self = this;
    dpd.itineraries.del(itineraryId.data, function(err) {
      debugger;
      if (err) {
        if (err) {
          self.state.alert.alert(err);
        }
      } else {
        self.state.alert.alert(null);
      }
      $patchChanges();
    });
  }

  function $render(_props, _slotView) {
    _context["card"] = $inject("/component/panel");
    var card = _context["card"];
    _context["entry"] = $inject("/component/entry");
    var entry = _context["entry"];
    _context["card-itinerary"] = $inject("/component/card-itinerary");
    var cardItinerary = _context["card-itinerary"];
    _context["edit-itinerary"] = $inject("/component/edit-itinerary");
    var editItinerary = _context["edit-itinerary"];
    _context["alert"] = $inject("/component/alert");
    var alert = _context["alert"];
    _elementOpenStart("div", "");
    _attr("element", "dist.action.myItinerary");
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
        var _params = {
          "title": data.packageName,
          "nofooter": "nofooter"
        };
        _context["card"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {
          if (slotName === "body") {
            _elementOpenStart("div", "");
            _elementOpenEnd("div");
            if (!_state.editItineraryId) {
              var _params = {
                "type": "button",
                "value": "Add Transport",
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
                  onAddItinerary.bind(self)();
                }
              };
              _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
            }
            if (!_state.editItineraryId) {
              var _params = {
                "type": "button",
                "value": "Add Hotel",
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
                  onAddItinerary.bind(self)();
                }
              };
              _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
            }
            _elementClose("div");
          }
        });
        var _params = {
          "alertType": _state.alert.type.bind(self)(),
          "message": _state.alert.text.bind(self)()
        };
        _context["alert"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
        if (_state.editItineraryId == -1) {
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
              onSaveItinerary.bind(self)(event);
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
              onCancelEdit.bind(self)();
            },
            "defaults": calculateDefaults.bind(self)()
          };
          _context["edit-itinerary"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
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
            _array.forEach(function(itr) {
              _elementOpenStart("p", "");
              _elementOpenEnd("p");
              if (itr.id != _state.editItineraryId) {
                var _params = {
                  "itr": itr,
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
                    onEdit.bind(self)(event);
                  },
                  "ondelete": function(event) {
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
                    onDelete.bind(self)(event);
                  }
                };
                _context["card-itinerary"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
              }
              if (itr.id == _state.editItineraryId) {
                var _params = {
                  "itinerary": itr,
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
                    onSaveItinerary.bind(self)(event);
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
                    onCancelEdit.bind(self)();
                  },
                  "defaults": calculateDefaults.bind(self)()
                };
                _context["edit-itinerary"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
              }
              _elementClose("p");
            });
          }
          var promise = queryItineraries.bind(self)();
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
      var promise = getPackage.bind(self)();
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