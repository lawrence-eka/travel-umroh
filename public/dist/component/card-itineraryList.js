yalla.framework.addComponent("/dist/component/card-itineraryList", (function() {
  var $path = "/dist/component/card-itineraryList";
  var $patchChanges = yalla.framework.renderToScreen;
  var $export = {};
  var _context = {};
  var _parentComponent = yalla.framework.getParentComponent;
  var _merge = yalla.utils.merge;
  var $inject = yalla.framework.createInjector("/dist/component/card-itineraryList");

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
    var __params = {
      "notitle": "notitle",
      "nofooter": "nofooter"
    };
    _context["panel"].render(typeof arguments[1] === "object" ? _merge(arguments[1], __params) : __params, function(slotName, slotProps) {
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