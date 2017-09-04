yalla.framework.addComponent("/dist/mutawwif/list-mutawwif", (function() {
  var $patchChanges = yalla.framework.renderToScreen;
  var $inject = yalla.framework.createInjector("/dist/mutawwif/list-mutawwif");
  var $export = {};
  var $path = "/dist/mutawwif/list-mutawwif";
  var _elementName = "dist.mutawwif.list-mutawwif";
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
    var state = {
      contactPersonId: props.contactPersonId,
      data: null,
    }
    return state;
  }

  function getMutawwifs() {
    var self = this;
    return new Promise(function(resolve) {
      if (!self.state.contactPersonId) {
        self.state.data = [];
        resolve(self.state.data);
      } else {
        dpd.mutawwifs.get({
          contactPersonId: self.state.contactPersonId
        }, function(mutawwifs) {
          self.state.data = mutawwifs;
          resolve(self.state.data);
        });
      }
    });
  }

  function onEdit(event) {
    //debugger;
    this.emitEvent('edit', event.data);
  }

  function onDelete(event) {
    var mutawwifId = event.data;
    var self = this;
    debugger;
    if (!mutawwifId) return;
    else {
      var m = self.state.data.find(function(x) {
        return x.id == mutawwifId
      });
      if (!m) return;
      else {
        deletePict(m.pictureId).then(function() {
          dpd.mutawwifs.del(mutawwifId, function(result, err) {
            debugger;
            self.emitEvent('delete', mutawwifId);
            $patchChanges('list');
          })
        })
      }
    }
  }

  function deletePict(pictureId) {
    return new Promise(function(resolve) {
      if (pictureId) {
        dpd.mutawwifphotos.del(pictureId, function(result, err) {
          debugger;
          resolve();
        });
      } else {
        resolve();
      }
    });
  }

  function $render(_props, _slotView) {
    _context["panel"] = $inject("/component/panel");
    var panel = _context["panel"];
    _context["entry"] = $inject("/component/entry");
    var entry = _context["entry"];
    _context["pict"] = $inject("/component/profile-picture/home");
    var pict = _context["pict"];
    _context["mutawwif"] = $inject("/mutawwif/card-mutawwif");
    var mutawwif = _context["mutawwif"];
    _elementOpenStart("div", "");
    _attr("element", "dist.mutawwif.list-mutawwif");
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
    yalla.framework.registerRef("list", IncrementalDOM.currentElement(), function() {
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
          _array.forEach(function(mutawwif) {
            _elementOpenStart("span", "");
            _elementOpenEnd("span");
            var _params = {
              "mutawwif": mutawwif,
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
            _context["mutawwif"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
            _elementClose("span");
          });
        }
        var promise = getMutawwifs.bind(self)();
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
    })()
    _elementClose("div");
  }
  if (typeof $render === "function") {
    $export.render = $render;
  }
  return $export;
})());