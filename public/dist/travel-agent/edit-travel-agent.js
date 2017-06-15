yalla.framework.addComponent("/dist/travel-agent/edit-travel-agent", (function() {
  var $patchChanges = yalla.framework.renderToScreen;
  var $inject = yalla.framework.createInjector("/dist/travel-agent/edit-travel-agent");
  var $export = {};
  var $path = "/dist/travel-agent/edit-travel-agent";
  var _elementName = "dist.travel-agent.edit-travel-agent";
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
      alert: new Alert(null, $patchChanges, "alert"),
      travelAgentId: props.travelAgentId
    }
  }

  function getOneTravelAgent(id) {
    var self = this;
    return new Promise(function(resolve) {
      if (id) {
        dpd.travelagents.get(id, function(ta, err) {
          self.state.alert.alert(err);
          if (err) {
            ta = {};
          } else {
            if (!ta) {
              ta = {
                "contactPersonId": storage.me.read().id
              };
            }
          }
          resolve(ta);
        });
      } else {
        ta = {
          "contactPersonId": storage.me.read().id
        };
        resolve(ta);
      }
    });
  }

  function cancel() {
    this.state.travelAgentId = null;
    this.emitEvent('close')
  }

  function register() {
    //debugger;
    var form = this.target.form;
    var self = this;
    var q = {
      "travelAgentName": form.elements.travelAgentName.value,
      "address": form.elements.address.value,
      "city": form.elements.city.value,
      "contactPersonId": form.elements.contactPersonId.value
    };
    if (form.elements.id.value == "") {
      dpd.travelagents.post(q, function(result, err) {
        cleanupAfterSave(result, err, self);
      });
    } else {
      dpd.travelagents.put(form.elements.id.value, q, function(result, err) {
        cleanupAfterSave(result, err, self);
      });
    }
  }

  function cleanupAfterSave(result, err, self) {
    var form = self.target.form;
    self.state.alert.alert(err);
    if (!err) {
      form.elements.id.value = '';
      form.elements.travelAgentName.value = '';
      form.elements.address.value = '';
      form.elements.city.value = '';
      form.elements.contactPersonId.value = '';

      self.state.alert.alert(null);
      self.state.travelAgentId = null;
      self.emitEvent('close');
    }
  }


  function $render(_props, _slotView) {
    _elementOpenStart("link", "");
    _attr("element", "dist.travel-agent.edit-travel-agent");
    _attr("href", "asset/css/custom-style.css");
    _attr("rel", "stylesheet");
    _elementOpenEnd("link");
    _elementClose("link");
    _context["alert"] = $inject("/component/alert");
    var alert = _context["alert"];
    _context["entry"] = $inject("/component/entry");
    var entry = _context["entry"];
    _context["panel"] = $inject("/component/panel");
    var panel = _context["panel"];
    _elementOpenStart("div", "");
    _attr("element", "dist.travel-agent.edit-travel-agent");
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
          "title": (_state.travelAgentId ? 'Edit' : 'New') + ' Travel Agent',
          "nofooter": "nofooter"
        };
        _context["panel"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {
          if (slotName === "body") {
            _elementOpenStart("div", "");
            _elementOpenEnd("div");
            _elementOpenStart("span", "");
            _elementOpenEnd("span");
            yalla.framework.registerRef("alert", IncrementalDOM.currentElement(), function() {
              var _params = {
                "alertType": _state.alert.type.bind(self)(),
                "message": _state.alert.text.bind(self)()
              };
              _context["alert"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
            })()
            _elementClose("span");
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
              "value": (_state.travelAgentId ? 'Save' : 'Register'),
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
            if (_state.travelAgentId) {
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
      }
      var promise = getOneTravelAgent.bind(self)(_state.travelAgentId);
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