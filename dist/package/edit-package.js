yalla.framework.addComponent("/dist/package/edit-package", (function() {
  var $patchChanges = yalla.framework.renderToScreen;
  var $inject = yalla.framework.createInjector("/dist/package/edit-package");
  var $export = {};
  var $path = "/dist/package/edit-package";
  var _elementName = "dist.package.edit-package";
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
      datePair: new DatePair($patchChanges),
      packageId: props.packageId,
      travelAgentId: props.travelAgentId,
      alert: new Alert(),
      data: {
        mutawwifs: null,
      },
    }
  }

  function getData(packageId) {
    //debugger;
    var self = this;
    return new Promise(function(resolve) {
      Promise.all([getOnePackage.bind(self)(packageId), getMutawwifs.bind(self)()]).then(function(result) {
        var retval = result[0];
        retval.mutawwifs = result[1];
        resolve(retval);
      });
    });
  }

  function getMutawwifs() {
    var self = this;
    return new Promise(function(resolve) {
      //debugger;
      dpd.mutawwifs.get({
        contactPersonId: storage.me.read().id,
        $fields: {
          firstName: 1,
          middleName: 1,
          lastName: 1
        }
      }, function(mtw) {
        //debugger;
        self.state.data.mutawwifs = (mtw.map(function(x) {
          return {
            label: x.firstName + ' ' + x.middleName + ' ' + x.lastName,
            value: x.id
          }
        }));
        resolve(self.state.data.mutawwifs);
      })
    });
  }

  function getOnePackage(id) {
    var self = this;
    return new Promise(function(resolve) {
      if (id) {
        dpd.packages.get(id, function(pkg, err) {
          self.state.alert.alert(err);
          if (err) {
            pkg = {};
          } else {
            if (!pkg) {
              pkg = {
                "travelAgentId": self.state.travelAgentId
              };
            }
          }
          resolve(pkg);
          //$patchChanges();
        });
      } else {
        var pkg = {
          "travelAgentId": self.state.travelAgentId
        };
        resolve(pkg);
      }
    });
  }

  function onSave() {
    //debugger;
    var form = this.target.form;
    var self = this;
    var package = {};

    package.id = form.elements.id.value;
    package.travelAgentId = form.elements.travelAgentId.value;
    package.packageName = form.elements.packageName.value;
    package.tourLeader = form.elements.tourLeader.value;
    package.mutawwifId = form.elements.mutawwifId.value;
    package.validFrom = (new Date(form.elements.validFrom.value)).getTime();
    package.validUntil = (new Date(form.elements.validUntil.value)).getTime();
    package.costLandArrangements = form.elements.costLandArrangements.value;
    package.costTickets = form.elements.costTickets.value;
    //package.isItineraryConfirmed = (form.elements.isItineraryConfirmed.checked);
    package.isPublished = (form.elements.isPublished.checked);

    if (form.elements.id.value == "") {
      dpd.packages.post(package, function(result, err) {
        cleanupAfterSave(result, err, self);
      });
    } else {
      dpd.packages.put(form.elements.id.value, package, function(result, err) {
        cleanupAfterSave(result, err, self);
      });
    }
  }

  function cleanupAfterSave(result, err, self) {
    //debugger;
    var form = self.target.form;
    self.state.alert.alert(err);
    if (!err) {
      form.elements.id.value = "";
      form.elements.travelAgentId.value = "";
      form.elements.packageName.value = "";
      form.elements.tourLeader.value = "";
      form.elements.validFrom.value = "";
      form.elements.validUntil.value = "";
      form.elements.costLandArrangements.value = "";
      form.elements.costTickets.value = "";
      //package.isItineraryConfirmed = (form.elements.isItineraryConfirmed.checked);
      form.elements.isPublished.checked = false;

      self.state.alert.alert(null);
      self.state.travelAgentId = null;
      self.emitEvent('close');
    }
    $patchChanges();
  }

  function onCancel() {
    this.emitEvent('close');
  }

  function $render(_props, _slotView) {
    _context["alert"] = $inject("/component/alert");
    var alert = _context["alert"];
    _context["entry"] = $inject("/component/entry");
    var entry = _context["entry"];
    _context["panel"] = $inject("/component/panel");
    var panel = _context["panel"];
    _elementOpenStart("div", "");
    _attr("element", "dist.package.edit-package");
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
    var _params = {
      "title": _state.packageId && _state.packageId != -1 ? 'Edit Package Info' : 'New Package',
      "nofooter": "nofooter"
    };
    _context["panel"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {
      if (slotName === "body") {
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
            _elementOpenStart("form", "");
            _elementOpenEnd("form");
            var _params = {
              "type": "hidden",
              "name": "id",
              "value": data.id
            };
            _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
            var _params = {
              "type": "hidden",
              "name": "travelAgentId",
              "value": data.travelAgentId
            };
            _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
            _elementOpenStart("div", "");
            _attr("class", "row");
            _elementOpenEnd("div");
            var _params = {
              "type": "text",
              "name": "packageName",
              "prompt": "Package Name",
              "value": data.packageName
            };
            _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
            var _params = {
              "type": "text",
              "name": "tourLeader",
              "prompt": "Tour Leader",
              "value": data.tourLeader
            };
            _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
            var _params = {
              "type": "lookup",
              "name": "mutawwifId",
              "prompt": "Mutawwif",
              "value": data.mutawwifId,
              "entries": data.mutawwifs
            };
            _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
            var _params = {
              "type": "hidden",
              "name": "validFrom",
              "naked": "naked",
              "value": (data.validFrom ? data.validFrom.toYYYYMMDD() : _state.datePair.defaultStartDate()),
              "min": _state.datePair.minStartDate.bind(self)(),
              "onfocusout": function(event) {
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
                _state.datePair.onStartDateFocusOut.bind(self)('validUntil');
              }
            };
            _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
            _elementOpenStart("span", "");
            _elementOpenEnd("span");
            yalla.framework.registerRef("validUntil", IncrementalDOM.currentElement(), function() {
              var _params = {
                "type": "date",
                "name": "validUntil",
                "prompt": "Registeration Open Until",
                "value": (data.validUntil ? data.validUntil.toYYYYMMDD() : _state.datePair.defaultEndDate()),
                "min": _state.datePair.minEndDate.bind(self)()
              };
              _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
            })()
            _elementClose("span");
            var _params = {
              "type": "number",
              "name": "costLandArrangements",
              "prompt": "Land Arrangements (Rp)",
              "value": data.costLandArrangements
            };
            _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
            var _params = {
              "type": "number",
              "name": "costTickets",
              "prompt": "Tickets (Rp)",
              "value": data.costTickets
            };
            _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
            var _params = {
              "type": "checkbox",
              "name": "isPublished",
              "prompt": "Published",
              "checked": data.isPublished
            };
            _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
            var _params = {
              "type": "button",
              "value": _state.packageId ? 'Save' : 'Register',
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
                onSave.bind(self)();
              }
            };
            _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
            var _params = {
              "type": "button",
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
                onCancel.bind(self)();
              }
            };
            _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
            _elementClose("div");
            var _params = {
              "alertType": _state.alert.type.bind(self)(),
              "message": _state.alert.text.bind(self)()
            };
            _context["alert"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
            _elementClose("form");
          }
          var promise = getData.bind(self)(_state.packageId);
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
    });
    _elementClose("div");
  }
  if (typeof $render === "function") {
    $export.render = $render;
  }
  return $export;
})());