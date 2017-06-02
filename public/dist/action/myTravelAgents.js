yalla.framework.addComponent("/dist/action/myTravelAgents", (function() {
  var $path = "/dist/action/myTravelAgents";
  var $patchChanges = yalla.framework.renderToScreen;
  var $export = {};
  var _context = {};
  var _parentComponent = yalla.framework.getParentComponent;
  var _merge = yalla.utils.merge;
  var $inject = yalla.framework.createInjector("/dist/action/myTravelAgents");

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

  function onPropertyChange(event) {
    return {}
  };


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
    debugger;
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
        debugger;
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
    // The component of this object
    var __component = IncrementalDOM.currentElement();
    __component.__state = __component.__state || initState.bind(__component)(_props);
    var __state = __component.__state;
    var __self = {
      component: __component,
      properties: _props,
      state: __component.__state
    };
    yalla.framework.propertyCheckChanges(__component.__properties, _props, onPropertyChange.bind(__self));
    __component.__properties = _props;
    _elementClose("link");
    _elementOpenStart("div", "");
    _attr("element", "dist.action.myTravelAgents");
    _elementOpenEnd("div");
    // The component of this object
    var __component = IncrementalDOM.currentElement();
    __component.__state = __component.__state || initState.bind(__component)(_props);
    var __state = __component.__state;
    var __self = {
      component: __component,
      properties: _props,
      state: __component.__state
    };
    yalla.framework.propertyCheckChanges(__component.__properties, _props, onPropertyChange.bind(__self));
    __component.__properties = _props;
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
        var __params = {
          "title": (_props.travelAgentId ? 'Edit' : 'New') + ' Travel Agent',
          "nofooter": "nofooter"
        };
        _context["panel"].render(typeof arguments[1] === "object" ? _merge(arguments[1], __params) : __params, function(slotName, slotProps) {
          if (slotName == "body") {
            _elementOpenStart("div", "");
            _elementOpenEnd("div");
            var __params = {
              "alertType": "error",
              "message": _props.errorMessage
            };
            _context["alert"].render(typeof arguments[1] === "object" ? _merge(arguments[1], __params) : __params, function(slotName, slotProps) {});
            _elementOpenStart("form", "");
            _attr("role", "form");
            _elementOpenEnd("form");
            _elementOpenStart("div", "");
            _attr("class", "row");
            _elementOpenEnd("div");
            var __params = {
              "type": "hidden",
              "name": "id",
              "value": data.id
            };
            _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], __params) : __params, function(slotName, slotProps) {});
            var __params = {
              "type": "hidden",
              "name": "contactPersonId",
              "value": data.contactPersonId
            };
            _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], __params) : __params, function(slotName, slotProps) {});
            var __params = {
              "type": "text",
              "prompt": "Name",
              "name": "travelAgentName",
              "value": data.travelAgentName
            };
            _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], __params) : __params, function(slotName, slotProps) {});
            var __params = {
              "type": "textarea",
              "prompt": "Address",
              "name": "address",
              "value": data.address
            };
            _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], __params) : __params, function(slotName, slotProps) {});
            var __params = {
              "type": "text",
              "prompt": "City",
              "name": "city",
              "value": data.city
            };
            _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], __params) : __params, function(slotName, slotProps) {});
            _elementClose("div");
            _elementOpenStart("div", "");
            _attr("class", "row");
            _elementOpenEnd("div");
            var __params = {
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
                self.component = __component;
                self.component.__state = self.component.__state || {};
                self.state = self.component.__state;
                self.emitEvent = function(eventName, data) {
                  var event = new ComponentEvent(eventName, data, self.target, self.currentTarget);
                  if ('on' + eventName in _props) {
                    _props['on' + eventName](event);
                  }
                };
                return register.bind(self)();
              }
            };
            _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], __params) : __params, function(slotName, slotProps) {});
            if (_props.travelAgentId) {
              var __params = {
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
                  self.component = __component;
                  self.component.__state = self.component.__state || {};
                  self.state = self.component.__state;
                  self.emitEvent = function(eventName, data) {
                    var event = new ComponentEvent(eventName, data, self.target, self.currentTarget);
                    if ('on' + eventName in _props) {
                      _props['on' + eventName](event);
                    }
                  };
                  return cancel.bind(self)();
                }
              };
              _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], __params) : __params, function(slotName, slotProps) {});
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
          self.component = __component;
          self.component.__state = self.component.__state || {};
          self.state = self.component.__state;

          function asyncFunc__2(data) {
            var _array = data || [];
            _array.forEach(function(ta) {
              _elementOpenStart("p", "");
              _elementOpenEnd("p");
              var __params = {
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
                  self.component = __component;
                  self.component.__state = self.component.__state || {};
                  self.state = self.component.__state;
                  self.emitEvent = function(eventName, data) {
                    var event = new ComponentEvent(eventName, data, self.target, self.currentTarget);
                    if ('on' + eventName in _props) {
                      _props['on' + eventName](event);
                    }
                  };
                  return onEditTA.bind(self)(event);
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
                  self.component = __component;
                  self.component.__state = self.component.__state || {};
                  self.state = self.component.__state;
                  self.emitEvent = function(eventName, data) {
                    var event = new ComponentEvent(eventName, data, self.target, self.currentTarget);
                    if ('on' + eventName in _props) {
                      _props['on' + eventName](event);
                    }
                  };
                  return onShowPackages.bind(self)(event);
                }
              };
              _context["card-travel-agent"].render(typeof arguments[1] === "object" ? _merge(arguments[1], __params) : __params, function(slotName, slotProps) {});
              _elementClose("p");
            });
          }
          var promise = getTravelAgents.bind(self)(_props.travelAgentId);
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
      var promise = getOneTravelAgent.bind(self)(_props.travelAgentId);
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
  }
  if (typeof $render === "function") {
    $export.render = $render;
  }
  return $export;
})());