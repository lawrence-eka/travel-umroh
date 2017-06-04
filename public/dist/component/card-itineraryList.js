yalla.framework.addComponent("/dist/component/card-itineraryList", (function() {
  var $patchChanges = yalla.framework.renderToScreen;
  var $inject = yalla.framework.createInjector("/dist/component/card-itineraryList");
  var $export = {};
  var $path = "/dist/component/card-itineraryList";
  var _elementName = "dist.component.card-itineraryList";
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

  function $render(_props, _slotView) {
    _context["panel"] = $inject("/component/panel");
    var panel = _context["panel"];
    _elementOpenStart("style", "");
    _elementOpenEnd("style");
    _text("\n[element='dist.component.card-itineraryList'] .custom-indent {padding-left:10px !important;}");
    _elementClose("style");
    _elementOpenStart("div", "");
    _attr("element", "dist.component.card-itineraryList");
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
      "notitle": "notitle",
      "nofooter": "nofooter"
    };
    _context["panel"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {
      if (slotName == "body") {
        _elementOpenStart("div", "");
        _elementOpenEnd("div");
        var _array = _props.itinerary || [];
        _array.forEach(function(itr) {
          _elementOpenStart("div", "");
          _elementOpenEnd("div");
          _elementOpenStart("strong", "");
          _elementOpenEnd("strong");
          _text("" + (itr.fromDateTime.toDateComponents()) + "");
          _elementClose("strong");
          _elementOpenStart("div", "");
          _attr("class", "custom-indent");
          _elementOpenEnd("div");
          if (itr.entry.transport) {
            _elementOpenStart("div", "");
            _elementOpenEnd("div");
            _text("Airline: " + (itr.entry.transport) + "");
            _elementOpenStart("br", "");
            _elementOpenEnd("br");
            _elementClose("br");
            _text("Departure: " + (itr.entry.departure.toDateComponents(false, true)) + "");
            _elementOpenStart("br", "");
            _elementOpenEnd("br");
            _elementClose("br");
            _text("From: " + (itr.entry.departFrom) + "");
            _elementOpenStart("br", "");
            _elementOpenEnd("br");
            _elementClose("br");
            _text("Arrival: " + (itr.entry.arrival.toDateComponents(false, true)) + "");
            _elementOpenStart("br", "");
            _elementOpenEnd("br");
            _elementClose("br");
            _text("At: " + (itr.entry.arriveAt) + "");
            _elementOpenStart("br", "");
            _elementOpenEnd("br");
            _elementClose("br");
            _elementClose("div");
          }
          if (itr.entry.hotel) {
            _elementOpenStart("div", "");
            _elementOpenEnd("div");
            _text("Hotel: " + (itr.entry.hotel) + "");
            _elementOpenStart("br", "");
            _elementOpenEnd("br");
            _elementClose("br");
            _text("City: " + (itr.entry.city) + "");
            _elementOpenStart("br", "");
            _elementOpenEnd("br");
            _elementClose("br");
            _text("Check in: " + (itr.entry.checkIn.toDateComponents()) + "");
            _elementOpenStart("br", "");
            _elementOpenEnd("br");
            _elementClose("br");
            _text("Check out: " + (itr.entry.checkOut.toDateComponents()) + "");
            _elementOpenStart("br", "");
            _elementOpenEnd("br");
            _elementClose("br");
            _elementClose("div");
          }
          _elementClose("div");
          _elementOpenStart("br", "");
          _elementOpenEnd("br");
          _elementClose("br");
          _elementClose("div");
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