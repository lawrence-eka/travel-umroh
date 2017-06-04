yalla.framework.addComponent("/dist/action/myTravelAgents", (function() {
  var $patchChanges = yalla.framework.renderToScreen;
  var $inject = yalla.framework.createInjector("/dist/action/myTravelAgents");
  var $export = {};
  var $path = "/dist/action/myTravelAgents";
  var _elementName = "dist.action.myTravelAgents";
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


  var tempForm = null;

  var errorMessage = "";

  function queryTravelAgents(userId, travelAgentId) {
    return new Promise(function(resolve) {

      var q = {
        "contactPersonId": userId,
        "id": {
          "$ne": (travelAgentId ? travelAgentId : "-1")
        }
      };
      dpd.travelagents.get(q, function(ta, err) {
        if (err) {
          errorMessage = err.message;
          $patchChanges();
        } else {
          resolve(ta);
        };
      });
    });
  }

  function getTravelAgents(travelAgentId) {
    return new Promise(function(resolve) {
      var me = storage.me.read();
      queryTravelAgents(me.id, travelAgentId).then(function(ta) {
        resolve(ta);
      });
    });
  }

  function onEditTA(event) {
    window.location.hash = "#app/action.myTravelAgents:travelAgentId=" + event.data;
  }

  function onShowPackages(event) {
    window.location.hash = "#app/action.myPackages:travelAgentId=" + event.data;
  }

  function getOneTravelAgent(id) {
    return new Promise(function(resolve) {
      if (id) {
        dpd.travelagents.get(id, function(ta, err) {
          if (err) {
            errorMessage = err.message;
            $patchChanges();
          } else {
            debugger;
            resolve(ta);
          }
        });
      } else {
        var ta = {
          "contactPersonId": storage.me.read().id
        };
        resolve(ta);
      }
    });
  }

  function cancel() {
    debugger;
    window.location.hash = "#app/action.myTravelAgents";
  }

  function register() {
    debugger;
    var form = this.target.form;
    tempForm = this.target.form;
    var q = {
      "travelAgentName": form.elements.travelAgentName.value,
      "address": form.elements.address.value,
      "city": form.elements.city.value,
      "contactPersonId": form.elements.contactPersonId.value
    };
    if (form.elements.id.value == "") {
      dpd.travelagents.post(q, cleanupAfterSave);
    } else {
      dpd.travelagents.put(form.elements.id.value, q, cleanupAfterSave);
    }
  }

  function cleanupAfterSave(result, err) {
    debugger;
    if (err) errorMessage = err.message;
    else {
      var form = tempForm;
      form.elements.id.value = '';
      form.elements.travelAgentName.value = '';
      form.elements.address.value = '';
      form.elements.city.value = '';
      form.elements.contactPersonId.value = '';

      errorMessage = '';
      window.location.hash = "#app/action.myTravelAgents";
    }
    $patchChanges();
  }


  function $render(_props, _slotView) {
    _context["card-travel-agent"] = $inject("/component/card-travel-agent");
    var cardTravelAgent = _context["card-travel-agent"];
    _context["alert"] = $inject("/component/alert");
    var alert = _context["alert"];
    _context["entry"] = $inject("/component/entry");
    var entry = _context["entry"];
    _context["panel"] = $inject("/component/panel");
    var panel = _context["panel"];
    _elementOpenStart("link", "");
    _attr("element", "dist.action.myTravelAgents");
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
    _attr("element", "dist.action.myTravelAgents");
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
          "title": (_props.travelAgentId ? 'Edit' : 'New') + ' Travel Agent',
          "nofooter": "nofooter"
        };
        _context["panel"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {
          if (slotName == "body") {
            _elementOpenStart("div", "");
            _elementOpenEnd("div");
            var _params = {
              "alertType": "error",
              "message": _props.errorMessage
            };
            _context["alert"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
            _elementOpenStart("form", "");
            _attr("role", "form");
            _elementOpenEnd("form");
            _elementOpenStart("div", "");
            _attr("class", "row");
            _elementOpenEnd("div");
            var _params = {
              "type": "hidden",
              "name": "id",
              "value": data.id
            };
            _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
            var _params = {
              "type": "hidden",
              "name": "contactPersonId",
              "value": data.contactPersonId
            };
            _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
            var _params = {
              "type": "text",
              "prompt": "Name",
              "name": "travelAgentName",
              "value": data.travelAgentName
            };
            _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
            var _params = {
              "type": "textarea",
              "prompt": "Address",
              "name": "address",
              "value": data.address
            };
            _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
            var _params = {
              "type": "text",
              "prompt": "City",
              "name": "city",
              "value": data.city
            };
            _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
            _elementClose("div");
            _elementOpenStart("div", "");
            _attr("class", "row");
            _elementOpenEnd("div");
            var _params = {
              "type": "button",
              "name": "btnSave",
              "value": (_props.travelAgentId ? 'Save' : 'Register'),
              "divClass": "col-xs-6 col-sm-6 col-md-6 col-lg-6",
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
                register.bind(self)();
              }
            };
            _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
            if (_props.travelAgentId) {
              var _params = {
                "type": "button",
                "name": "btnCancel",
                "value": "Cancel",
                "divClass": "col-xs-6 col-sm-6 col-md-6 col-lg-6",
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
                  cancel.bind(self)();
                }
              };
              _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
            }
            _elementClose("div");
            _elementClose("form");
            _elementClose("div");
          }
        });
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
          var promise = getTravelAgents.bind(self)(_props.travelAgentId);
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
      var promise = getOneTravelAgent.bind(self)(_props.travelAgentId);
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