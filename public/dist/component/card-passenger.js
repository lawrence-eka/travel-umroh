yalla.framework.addComponent("/dist/component/card-passenger", (function() {
  var $path = "/dist/component/card-passenger";
  var $patchChanges = yalla.framework.renderToScreen;
  var $storeRef = yalla.framework.storeRef;
  var $export = {};
  var $context = {};
  var $patchRef = yalla.framework.patchRef;
  var $inject = yalla.framework.createInjector("/dist/component/card-passenger");
  var _elementOpen = IncrementalDOM.elementOpen,
    _elementClose = IncrementalDOM.elementClose,
    _elementOpenStart = IncrementalDOM.elementOpenStart,
    _elementOpenEnd = IncrementalDOM.elementOpenEnd,
    _elementVoid = IncrementalDOM.elementVoid,
    _text = IncrementalDOM.text,
    _attr = IncrementalDOM.attr,
    _skip = IncrementalDOM.skip;

  function $render(_data, _slotView) {
    $context["card"] = $inject("/component/card");
    var card = $context["card"];
    $context["card"].render({
      "element": "dist.component.card-passenger",
      "title": (_data.passenger.firstName + ' ' + _data.passenger.lastName).toTitleCase()
    }, function(slotName) {
      _elementOpenStart("div", "");
      _attr("class", "");
      _elementOpenEnd("div");
      _text("First Name: " + (_data.passenger.firstName) + "; Middle Name: " + (_data.passenger.middleName) + "; Last Name: " + (_data.passenger.lastName) + ";");
      _elementOpenStart("br", "");
      _elementOpenEnd("br");
      _elementClose("br");
      _text("Birth Place: " + (_data.passenger.birthPlace) + "; Birth Date: " + ((_data.passenger.birthday).toDateComponents()) + "");
      _elementOpenStart("br", "");
      _elementOpenEnd("br");
      _elementClose("br");
      _text("Passport No: " + (_data.passenger.passportNumber) + "; Expiry Date: " + ((_data.passenger.passportExpiryDate).toDateComponents()) + "");
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