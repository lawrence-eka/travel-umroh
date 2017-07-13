yalla.framework.addComponent("/dist/passenger/list-passenger", (function() {
  var $patchChanges = yalla.framework.renderToScreen;
  var $inject = yalla.framework.createInjector("/dist/passenger/list-passenger");
  var $export = {};
  var $path = "/dist/passenger/list-passenger";
  var _elementName = "dist.passenger.list-passenger";
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
    return {
      booking: props.booking,
      alert: new Alert(),
    }
  }
  /*
      function onPropertyChange(props){
      	debugger;
      	if(props.booking) this.state.booking = props.booking.newValue;
      	if(props.bookingStatus) this.state.bookingStatus = props.bookingStatus.newValue;
      }
  */
  function getPassengers() {
    var self = this;
    var booking = self.state.booking;
    return new Promise(function(resolve) {
      dpd.passengers.get({
        "bookingId": booking.id
      }, function(passengers, err) {
        debugger;
        self.state.alert.alert(err);
        if (!err) {
          booking.numberOfPassengers = passengers.length;
          booking.totalPrice = booking.numberOfPassengers * (booking.costTickets + booking.costLandArrangements);
          dpd.bookings.put(booking.id, booking, function(res, err) {
            debugger;
            self.state.alert.alert(err);
            if (!err) resolve(passengers);
          });
        }
      });
    });
  }

  function onEdit(event) {
    this.emitEvent('edit', event.data);
  }

  function onDelete(event) {
    var self = this;
    dpd.passengers.del(event.data, function(res) {
      //debugger;
      self.state.alert.alert(null);
      self.emitEvent('delete', event.data);
    });
  }

  function $render(_props, _slotView) {
    _context["card-passenger"] = $inject("/passenger/card-passenger");
    var cardPassenger = _context["card-passenger"];
    _context["alert"] = $inject("/component/alert");
    var alert = _context["alert"];
    _elementOpenStart("div", "");
    _attr("element", "dist.passenger.list-passenger");
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
    _elementOpenStart("span", "");
    _elementOpenEnd("span");
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
        _array.forEach(function(psg) {
          _elementOpenStart("span", "");
          _elementOpenEnd("span");
          var _params = {
            "passenger": psg,
            "booking": _state.booking,
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
          _context["card-passenger"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
          _elementClose("span");
        });
      }
      var promise = getPassengers.bind(self)();
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
    _elementClose("span");
    _elementClose("div");
  }
  if (typeof $render === "function") {
    $export.render = $render;
  }
  return $export;
})());