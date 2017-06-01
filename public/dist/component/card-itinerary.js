yalla.framework.addComponent("/dist/component/card-itinerary", (function() {
  var $path = "/dist/component/card-itinerary";
  var $patchChanges = yalla.framework.renderToScreen;
  var $export = {};
  var $context = {};
  var _parentComponent = yalla.framework.getParentComponent;
  var $inject = yalla.framework.createInjector("/dist/component/card-itinerary");

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

  function $render(_props, _slotView) {
    $context["card"] = $inject("/component/panel");
    var card = $context["card"];
    $context["entry"] = $inject("/component/entry");
    var entry = $context["entry"];
    _elementOpenStart("div", "");
    _attr("element", "dist.component.card-itinerary");
    _elementOpenEnd("div");
    // The component of this object
    var __component = IncrementalDOM.currentElement();
    __component.__state = __component.__state || initState.bind(__component)(_props);
    var __state = __component.__state;
    $context["card"].render({
      "title": _props.itr.fromDateTime.toDateComponents(),
      "remarks": _props.itr.remarks,
      "nofooter": "nofooter"
    }, function(slotName) {
      if (slotName == "body") {
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
          $context["entry"].render({
            "type": "button",
            "value": "Edit",
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
              return _props.onedit.bind(self)(_props.itr.id);
            }
          }, function(slotName) {});
          $context["entry"].render({
            "type": "button",
            "value": "Delete",
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
              return _props.ondelete.bind(self)(_props.itr.id);
            }
          }, function(slotName) {});
          _elementClose("div");
        }
        _elementClose("div");
      }
    });
    _elementOpenStart("div", "");
    _elementOpenEnd("div");
    _elementClose("div");
    _elementClose("div");
  }
  if (typeof $render === "function") {
    $export.render = $render;
  }
  return $export;
})());