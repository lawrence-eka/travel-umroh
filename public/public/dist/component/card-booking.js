yalla.framework.addComponent("/dist/component/card-booking", (function() {
  var $path = "/dist/component/card-booking";
  var $patchChanges = yalla.framework.renderToScreen;
  var $storeRef = yalla.framework.storeRef;
  var $export = {};
  var $context = {};
  var $patchRef = yalla.framework.patchRef;
  var $inject = yalla.framework.createInjector("/dist/component/card-booking");
  var _elementOpen = IncrementalDOM.elementOpen,
    _elementClose = IncrementalDOM.elementClose,
    _elementOpenStart = IncrementalDOM.elementOpenStart,
    _elementOpenEnd = IncrementalDOM.elementOpenEnd,
    _elementVoid = IncrementalDOM.elementVoid,
    _text = IncrementalDOM.text,
    _attr = IncrementalDOM.attr,
    _skip = IncrementalDOM.skip;

  var dates = $inject('/common/dates');
  var numbers = $inject('/common/numbers');

  function $render(_data, _slotView) {
    $context["card"] = $inject("/component/card");
    var card = $context["card"];
    $context["card"].render({
      "element": "dist.component.card-booking",
      "title": 'Booking of ' + _data.bkg.package.packageName
    }, function(slotName) {
      _elementOpenStart("div", "");
      _elementOpenEnd("div");
      _text("Travel Date: " + (dates.rangePrettifier((new Date(_data.bkg.package.travelDateFrom)), (new Date(_data.bkg.package.travelDateUntil)))) + "");
      _elementOpenStart("br", "");
      _elementOpenEnd("br");
      _elementClose("br");
      _text("Operator: " + (_data.bkg.package.agent.travelAgentName) + "");
      _elementOpenStart("br", "");
      _elementOpenEnd("br");
      _elementClose("br");
      _text("Land Arrangements: " + (numbers.money(_data.bkg.costLandArrangements)) + "");
      _elementOpenStart("br", "");
      _elementOpenEnd("br");
      _elementClose("br");
      _text("Tickets: " + (numbers.money(_data.bkg.costTickets)) + "");
      _elementOpenStart("br", "");
      _elementOpenEnd("br");
      _elementClose("br");
      _text("Total passenger: " + (_data.bkg.numberOfPassengers) + "");
      _elementOpenStart("br", "");
      _elementOpenEnd("br");
      _elementClose("br");
      _text("Total Price: " + (numbers.money(_data.bkg.totalPrice)) + "");
      _elementOpenStart("br", "");
      _elementOpenEnd("br");
      _elementClose("br");
      _text("Unique Code: " + (_data.bkg.uniqueCode) + "");
      _elementOpenStart("br", "");
      _elementOpenEnd("br");
      _elementClose("br");
      _text("Grand Total: " + (numbers.money(_data.bkg.totalPrice + _data.bkg.uniqueCode)) + "");
      _elementOpenStart("br", "");
      _elementOpenEnd("br");
      _elementClose("br");
      _elementClose("div");
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