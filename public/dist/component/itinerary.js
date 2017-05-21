yalla.framework.addComponent("/dist/component/itinerary", (function() {
  var $path = "/dist/component/itinerary";
  var $patchChanges = yalla.framework.renderToScreen;
  var $storeRef = yalla.framework.storeRef;
  var $export = {};
  var $context = {};
  var $patchRef = yalla.framework.patchRef;
  var $inject = yalla.framework.createInjector("/dist/component/itinerary");
  var elementOpen = IncrementalDOM.elementOpen,
    elementClose = IncrementalDOM.elementClose,
    elementOpenStart = IncrementalDOM.elementOpenStart,
    elementOpenEnd = IncrementalDOM.elementOpenEnd,
    elementVoid = IncrementalDOM.elementVoid,
    text = IncrementalDOM.text,
    attr = IncrementalDOM.attr,
    skip = IncrementalDOM.skip;

  var dates = $inject('/common/dates');

  function $render(_data, _slotView) {
    elementOpenStart("div", "");
    attr("element", "dist.component.itinerary");
    elementOpenEnd("div");
    elementOpenStart("div", "");
    elementOpenEnd("div");
    text("" + (dates.formatter(_data.itr.fromDateTime)) + "");
    elementClose("div");
    if (_data.itr.entry.transport) {
      elementOpenStart("div", "");
      elementOpenEnd("div");
      text("Airline: " + (_data.itr.entry.transport) + "");
      elementOpenStart("br", "");
      elementOpenEnd("br");
      elementClose("br");
      text("Departure: " + (dates.formatter(_data.itr.entry.departure, false, true)) + "");
      elementOpenStart("br", "");
      elementOpenEnd("br");
      elementClose("br");
      text("From: " + (_data.itr.entry.departFrom) + "");
      elementOpenStart("br", "");
      elementOpenEnd("br");
      elementClose("br");
      text("Arrival: " + (dates.formatter(_data.itr.entry.arrival, false, true)) + "");
      elementOpenStart("br", "");
      elementOpenEnd("br");
      elementClose("br");
      text("At: " + (_data.itr.entry.arriveAt) + "");
      elementOpenStart("br", "");
      elementOpenEnd("br");
      elementClose("br");
      elementClose("div");
    }
    if (_data.itr.entry.hotel) {
      elementOpenStart("div", "");
      elementOpenEnd("div");
      text("Hotel: " + (_data.itr.entry.hotel) + "");
      elementOpenStart("br", "");
      elementOpenEnd("br");
      elementClose("br");
      text("City: " + (_data.itr.entry.city) + "");
      elementOpenStart("br", "");
      elementOpenEnd("br");
      elementClose("br");
      text("Check in: " + (dates.formatter(_data.itr.entry.checkIn)) + "");
      elementOpenStart("br", "");
      elementOpenEnd("br");
      elementClose("br");
      text("Check out: " + (dates.formatter(_data.itr.entry.checkOut)) + "");
      elementOpenStart("br", "");
      elementOpenEnd("br");
      elementClose("br");
      elementClose("div");
    }
    if (_data.itr.remarks) {
      elementOpenStart("div", "");
      elementOpenEnd("div");
      text("" + (_data.itr.remarks) + "");
      elementClose("div");
    }
    elementClose("div");
    elementOpenStart("script", "");
    elementOpenEnd("script");
    elementClose("script");
  }
  if (typeof $render === "function") {
    $export.render = $render;
  }
  return $export;
})());