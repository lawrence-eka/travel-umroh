yalla.framework.addComponent("/dist/component/card-package", (function() {
  var $path = "/dist/component/card-package";
  var $patchChanges = yalla.framework.renderToScreen;
  var $storeRef = yalla.framework.storeRef;
  var $export = {};
  var $context = {};
  var $patchRef = yalla.framework.patchRef;
  var $inject = yalla.framework.createInjector("/dist/component/card-package");
  var _elementOpen = IncrementalDOM.elementOpen,
    _elementClose = IncrementalDOM.elementClose,
    _elementOpenStart = IncrementalDOM.elementOpenStart,
    _elementOpenEnd = IncrementalDOM.elementOpenEnd,
    _elementVoid = IncrementalDOM.elementVoid,
    _text = IncrementalDOM.text,
    _attr = IncrementalDOM.attr,
    _skip = IncrementalDOM.skip;

  var numbers = $inject('/common/numbers');
  var dates = $inject('/common/dates');

  function $render(_data, _slotView) {
    $context["card"] = $inject("/component/card");
    var card = $context["card"];
    $context["card"].render({
      "element": "dist.component.card-package",
      "title": _data.pkg.packageName,
      "onclick": function(event) {
        return _data.onclick()
      }
    }, function(slotName) {
      _elementOpenStart("div", "");
      _elementOpenEnd("div");
      _text("Travel Date: " + (dates.rangePrettifier((new Date(_data.pkg.travelDateFrom)), (new Date(_data.pkg.travelDateUntil)))) + "");
      _elementOpenStart("br", "");
      _elementOpenEnd("br");
      _elementClose("br");
      _text("Land Arrangements: " + (numbers.money(_data.pkg.costLandArrangements)) + "");
      _elementOpenStart("br", "");
      _elementOpenEnd("br");
      _elementClose("br");
      _text("Tickets: " + (numbers.money(_data.pkg.costTickets)) + "");
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