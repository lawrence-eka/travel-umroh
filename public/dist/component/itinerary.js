yalla.framework.addComponent("/dist/component/itinerary", (function() {
  var $path = "/dist/component/itinerary";
  var $patchChanges = yalla.framework.renderToScreen;
  var $export = {};
  var $context = {};
  var _parentComponent = yalla.framework.getParentComponent;
  var $inject = yalla.framework.createInjector("/dist/component/itinerary");

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

  var dates = $inject('/common/dates');



  function $render(_props, _slotView) {
    _elementOpenStart("div", "");
    _attr("element", "dist.component.itinerary");
    _elementOpenEnd("div");
    // The component of this object
    var __component = IncrementalDOM.currentElement();
    __component.__state = __component.__state || initState.bind(__component)(_props);
    var __state = __component.__state;
    _elementOpenStart("div", "");
    _elementOpenEnd("div");
    _text("" + (dates.formatter(_props.itr.fromDateTime)) + "");
    _elementClose("div");
    if (_props.itr.entry.transport) {
      _elementOpenStart("div", "");
      _elementOpenEnd("div");
      _text("Airline: " + (_props.itr.entry.transport) + "");
      _elementOpenStart("br", "");
      _elementOpenEnd("br");
      _elementClose("br");
      _text("Departure: " + (dates.formatter(_props.itr.entry.departure, false, true)) + "");
      _elementOpenStart("br", "");
      _elementOpenEnd("br");
      _elementClose("br");
      _text("From: " + (_props.itr.entry.departFrom) + "");
      _elementOpenStart("br", "");
      _elementOpenEnd("br");
      _elementClose("br");
      _text("Arrival: " + (dates.formatter(_props.itr.entry.arrival, false, true)) + "");
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
      _text("Check in: " + (dates.formatter(_props.itr.entry.checkIn)) + "");
      _elementOpenStart("br", "");
      _elementOpenEnd("br");
      _elementClose("br");
      _text("Check out: " + (dates.formatter(_props.itr.entry.checkOut)) + "");
      _elementOpenStart("br", "");
      _elementOpenEnd("br");
      _elementClose("br");
      _elementClose("div");
    }
    if (_props.itr.remarks) {
      _elementOpenStart("div", "");
      _elementOpenEnd("div");
      _text("" + (_props.itr.remarks) + "");
      _elementClose("div");
    }
    _elementClose("div");
  }
  if (typeof $render === "function") {
    $export.render = $render;
  }
  return $export;
})());