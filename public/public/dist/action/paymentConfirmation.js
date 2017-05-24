yalla.framework.addComponent("/dist/action/paymentConfirmation", (function() {
  var $path = "/dist/action/paymentConfirmation";
  var $patchChanges = yalla.framework.renderToScreen;
  var $storeRef = yalla.framework.storeRef;
  var $export = {};
  var $context = {};
  var $patchRef = yalla.framework.patchRef;
  var $inject = yalla.framework.createInjector("/dist/action/paymentConfirmation");
  var _elementOpen = IncrementalDOM.elementOpen,
    _elementClose = IncrementalDOM.elementClose,
    _elementOpenStart = IncrementalDOM.elementOpenStart,
    _elementOpenEnd = IncrementalDOM.elementOpenEnd,
    _elementVoid = IncrementalDOM.elementVoid,
    _text = IncrementalDOM.text,
    _attr = IncrementalDOM.attr,
    _skip = IncrementalDOM.skip;

  function $render(_data, _slotView) {
    _elementOpenStart("div", "");
    _attr("element", "dist.action.paymentConfirmation");
    _elementOpenEnd("div");
    _text("Payment confirmed! Thank you and have a nice umroh!");
    _elementClose("div");
  }
  if (typeof $render === "function") {
    $export.render = $render;
  }
  return $export;
})());