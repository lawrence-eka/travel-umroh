yalla.framework.addComponent("/dist/itinerary/card-itinerary", (function() {
  var $patchChanges = yalla.framework.renderToScreen;
  var $inject = yalla.framework.createInjector("/dist/itinerary/card-itinerary");
  var $export = {};
  var $path = "/dist/itinerary/card-itinerary";
  var _elementName = "dist.itinerary.card-itinerary";
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

  function onEdit(itineraryId) {
    //debugger;
    this.emitEvent('edit', itineraryId);
  }

  function onDelete(itineraryId) {
    //debugger;
    this.emitEvent('delete', itineraryId);
  }

  function $render(_props, _slotView) {
    _context["card"] = $inject("/component/panel");
    var card = _context["card"];
    _context["entry"] = $inject("/component/entry");
    var entry = _context["entry"];
    _elementOpenStart("div", "");
    _attr("element", "dist.itinerary.card-itinerary");
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
      "title": (_props.itr.fromDateTime.toDateComponents()),
      "remarks": _props.itr.remarks,
      "nofooter": "nofooter"
    };
    _context["card"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {
      if (slotName === "body") {
        _elementOpenStart("div", "");
        _elementOpenEnd("div");
        if (_props.itr.entry.transport) {
          _elementOpenStart("div", "");
          _elementOpenEnd("div");
          _text("Airline: " + (_props.itr.entry.transport) + "");
          _elementOpenStart("br", "");
          _elementOpenEnd("br");
          _elementClose("br");
          _text("Departure: " + (_props.itr.entry.departure.toDateComponents(false, true)) + "");
          _elementOpenStart("br", "");
          _elementOpenEnd("br");
          _elementClose("br");
          _text("From: " + (_props.itr.entry.departFrom) + "");
          _elementOpenStart("br", "");
          _elementOpenEnd("br");
          _elementClose("br");
          _text("Arrival: " + (_props.itr.entry.arrival.toDateComponents(false, true)) + "");
          _elementOpenStart("br", "");
          _elementOpenEnd("br");
          _elementClose("br");
          _text("At: " + (_props.itr.entry.arriveAt) + "");
          _elementOpenStart("br", "");
          _elementOpenEnd("br");
          _elementClose("br");
          _elementClose("div");
        }
        if (_props.itr.entry.hotel) {
          _elementOpenStart("div", "");
          _elementOpenEnd("div");
          _text("Hotel: " + (_props.itr.entry.hotel) + "");
          _elementOpenStart("br", "");
          _elementOpenEnd("br");
          _elementClose("br");
          _text("City: " + (_props.itr.entry.city) + "");
          _elementOpenStart("br", "");
          _elementOpenEnd("br");
          _elementClose("br");
          _text("Check in: " + (_props.itr.entry.checkIn.toDateComponents()) + "");
          _elementOpenStart("br", "");
          _elementOpenEnd("br");
          _elementClose("br");
          _text("Check out: " + (_props.itr.entry.checkOut.toDateComponents()) + "");
          _elementOpenStart("br", "");
          _elementOpenEnd("br");
          _elementClose("br");
          _elementClose("div");
        }
        if (_props.onedit || _props.ondelete) {
          _elementOpenStart("div", "");
          _attr("class", "row");
          _elementOpenEnd("div");
          var _params = {
            "type": "button",
            "value": "Edit",
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
              onEdit.bind(self)(_props.itr.id);
            }
          };
          _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
          var _params = {
            "type": "button",
            "value": "Delete",
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
              onDelete.bind(self)(_props.itr.id);
            }
          };
          _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
          _elementClose("div");
        }
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