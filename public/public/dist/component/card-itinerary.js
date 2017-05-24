yalla.framework.addComponent("/dist/component/card-itinerary", (function() {
  var $path = "/dist/component/card-itinerary";
  var $patchChanges = yalla.framework.renderToScreen;
  var $storeRef = yalla.framework.storeRef;
  var $export = {};
  var $context = {};
  var $patchRef = yalla.framework.patchRef;
  var $inject = yalla.framework.createInjector("/dist/component/card-itinerary");
  var _elementOpen = IncrementalDOM.elementOpen,
    _elementClose = IncrementalDOM.elementClose,
    _elementOpenStart = IncrementalDOM.elementOpenStart,
    _elementOpenEnd = IncrementalDOM.elementOpenEnd,
    _elementVoid = IncrementalDOM.elementVoid,
    _text = IncrementalDOM.text,
    _attr = IncrementalDOM.attr,
    _skip = IncrementalDOM.skip;

  var dates = $inject('/common/dates');

  function $render(_data, _slotView) {
    $context["card"] = $inject("/component/card");
    var card = $context["card"];
    $context["card"].render({
      "element": "dist.component.card-itinerary",
      "title": dates.formatter(_data.itr.fromDateTime),
      "remarks": _data.itr.remarks
    }, function(slotName) {
      if (_data.itr.entry.transport) {
        _elementOpenStart("div", "");
        _elementOpenEnd("div");
        _text("Airline: " + (_data.itr.entry.transport) + "");
        _elementOpenStart("br", "");
        _elementOpenEnd("br");
        _elementClose("br");
        _text("Departure: " + (dates.formatter(_data.itr.entry.departure, false, true)) + "");
        _elementOpenStart("br", "");
        _elementOpenEnd("br");
        _elementClose("br");
        _text("From: " + (_data.itr.entry.departFrom) + "");
        _elementOpenStart("br", "");
        _elementOpenEnd("br");
        _elementClose("br");
        _text("Arrival: " + (dates.formatter(_data.itr.entry.arrival, false, true)) + "");
        _elementOpenStart("br", "");
        _elementOpenEnd("br");
        _elementClose("br");
        _text("At: " + (_data.itr.entry.arriveAt) + "");
        _elementOpenStart("br", "");
        _elementOpenEnd("br");
        _elementClose("br");
        _elementClose("div");
      }
      if (_data.itr.entry.hotel) {
        _elementOpenStart("div", "");
        _elementOpenEnd("div");
        _text("Hotel: " + (_data.itr.entry.hotel) + "");
        _elementOpenStart("br", "");
        _elementOpenEnd("br");
        _elementClose("br");
        _text("City: " + (_data.itr.entry.city) + "");
        _elementOpenStart("br", "");
        _elementOpenEnd("br");
        _elementClose("br");
        _text("Check in: " + (dates.formatter(_data.itr.entry.checkIn)) + "");
        _elementOpenStart("br", "");
        _elementOpenEnd("br");
        _elementClose("br");
        _text("Check out: " + (dates.formatter(_data.itr.entry.checkOut)) + "");
        _elementOpenStart("br", "");
        _elementOpenEnd("br");
        _elementClose("br");
        _elementClose("div");
      }
    });
    _elementOpenStart("script", "");
    _elementOpenEnd("script");
    _elementClose("script");
  }
  if (typeof $render === "function") {
    $export.render = $render;
  }
  return $export;
})());