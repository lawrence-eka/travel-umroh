yalla.framework.addComponent("/dist/component/list-editor", (function() {
  var $patchChanges = yalla.framework.renderToScreen;
  var $inject = yalla.framework.createInjector("/dist/component/list-editor");
  var $export = {};
  var $path = "/dist/component/list-editor";
  var _elementName = "dist.component.list-editor";
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

  var message = "";
  var alertType = "";

  function queryItineraries(packageId) {
    return new Promise(function(resolve) {
      var q = {
        "packageId": packageId,
        "$sort": {
          "fromDateTime": 1
        }
      }
      dpd.itineraries.get(q, function(itr, err) {
        if (err) {
          errorMessage = err.message;
          alertType = "error";
          $patchChanges();
        } else {
          resolve(itr);
        }
      });
    });
  }

  function getPackage(id) {
    return new Promise(function(resolve) {
      dpd.packages.get(id, function(result, err) {
        resolve(result);
      });
    });
  }

  function onSaveItinerary(itinerary, packageId) {
    return new Promise(function(resolve) {
      debugger;
      itinerary.packageId = packageId;
      if (itinerary.id == "") {
        dpd.itineraries.post(itinerary, function(result, err) {
          debugger;
          if (err) {
            message = JSON.stringify(err);
            alertType = "error";
          }
          if (result) {
            window.location.hash = "#app/action.myItinerary:packageId=" + packageId;
          }
        });
      } else {
        debugger;
        dpd.itineraries.put(itinerary.id, itinerary, function(result, err) {
          debugger;
          if (result) {
            window.location.hash = "#app/action.myItinerary:packageId=" + packageId;
          }
        });
      }
      debugger;
    });
    return false;
  }

  function onCancelEdit(packageId) {
    window.location.hash = "#app/action.myItinerary:packageId=" + packageId;
  }

  function onAddItinerary(packageId) {
    window.location.hash = "#app/action.myItinerary:packageId=" + packageId + ":editItineraryId=-1";
  }

  function onEdit(itineraryId, packageId) {
    window.location.hash = "#app/action.myItinerary:packageId=" + packageId + ":editItineraryId=" + itineraryId;
  }

  function onDelete(itineraryId, packageId) {
    debugger;
    return new Promise(function(resolve) {
      dpd.itineraries.del(itineraryId, function(err) {
        debugger;
        if (err) {
          if (err) {
            message = JSON.stringify(err);
            alertType = "error";
          }
        } else {
          window.location.hash = "#app/action.myItinerary:packageId=" + packageId;
        }
      });
    });
  }

  function $render(_props, _slotView) {
    _context["card"] = $inject("/component/card");
    var card = _context["card"];
    _context["card-itinerary"] = $inject("/component/card-itinerary");
    var cardItinerary = _context["card-itinerary"];
    _context["edit-itinerary"] = $inject("/component/edit-itinerary");
    var editItinerary = _context["edit-itinerary"];
    _context["alert"] = $inject("/component/alert");
    var alert = _context["alert"];
    _text("<div\">");
    _text("<");
    _text("div\">");
    var _params = {
      "element": "dist.component.list-editor",
      "title": _props.listTitle
    };
    _context["card"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {
      if (!_props.editItineraryId) {
        _elementOpenStart("input", "");
        _attr("type", "button");
        _attr("value", _props.addButtonTitle);
        _attr("class", "form-control btn btn-info btn-block");
        _attr("onclick", function(event) {
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
          onAdd.bind(self)(_props.packageId);
        });
        _elementOpenEnd("input");
        _elementClose("input");
      }
    });
    if (message) {
      var _params = {
        "element": "dist.component.list-editor",
        "alertType": alertType,
        "message": "message"
      };
      _context["alert"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
    }
    if (_props.editItineraryId == -1) {
      var _params = {
        "element": "dist.component.list-editor",
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
          onSaveItinerary.bind(self)(event, _props.packageId);
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
          onCancelEdit.bind(self)(_props.packageId);
        }
      };
      _context["edit-itinerary"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
    }
    _elementOpenStart("div", "");
    _attr("element", "dist.component.list-editor");
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
        var _array = data || [];
        _array.forEach(function(itr) {
          _elementOpenStart("p", "");
          _elementOpenEnd("p");
          if (itr.id != _props.editItineraryId) {
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
                onEdit.bind(self)(event, _props.packageId);
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
          if (itr.id == _props.editItineraryId) {
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
                onSaveItinerary.bind(self)(event, _props.packageId);
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
                onCancelEdit.bind(self)(_props.packageId);
              }
            };
            _context["edit-itinerary"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
          }
          _elementClose("p");
        });
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
  }
  if (typeof $render === "function") {
    $export.render = $render;
  }
  return $export;
})());