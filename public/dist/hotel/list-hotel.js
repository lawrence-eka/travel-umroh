yalla.framework.addComponent("/dist/hotel/list-hotel", (function() {
  var $patchChanges = yalla.framework.renderToScreen;
  var $inject = yalla.framework.createInjector("/dist/hotel/list-hotel");
  var $export = {};
  var $path = "/dist/hotel/list-hotel";
  var _elementName = "dist.hotel.list-hotel";
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

  function getHotels() {
    var self = this;
    return new Promise(function(resolve) {
      if (!self.state.contactPersonId) {
        self.state.data = [];
        resolve(self.state.data);
      } else {
        dpd.hotels.get({
          contactPersonId: self.state.contactPersonId
        }, function(hotels) {
          self.state.data = hotels;
          resolve(self.state.data);
        });
      }
    });
  }

  function onEdit(event) {
    debugger;
    this.emitEvent('edit', event.data);
  }

  function onDelete(event) {
    var hotelId = event.data;
    var self = this;
    debugger;
    if (!hotelId) return;
    else {
      var m = self.state.data.find(function(x) {
        return x.id == hotelId
      });
      if (!m) return;
      else {
        deletePict(m.pictureId).then(function() {
          dpd.hotels.del(hotelId, function(result, err) {
            debugger;
            self.emitEvent('delete', hotelId);
            $patchChanges('list');
          })
        })
      }
    }
  }

  function deletePict(pictureId) {
    return new Promise(function(resolve) {
      if (pictureId) {
        dpd.hotelphotos.del(pictureId, function(result, err) {
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
    _context["hotel"] = $inject("/hotel/card-hotel");
    var hotel = _context["hotel"];
    _elementOpenStart("div", "");
    _attr("element", "dist.hotel.list-hotel");
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
          _array.forEach(function(hotel) {
            _elementOpenStart("span", "");
            _elementOpenEnd("span");
            var _params = {
              "hotel": hotel,
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
            _context["hotel"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
            _elementClose("span");
          });
        }
        var promise = getHotels.bind(self)();
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