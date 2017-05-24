yalla.framework.addComponent("/dist/action/myProfile", (function() {
  var $path = "/dist/action/myProfile";
  var $patchChanges = yalla.framework.renderToScreen;
  var $storeRef = yalla.framework.storeRef;
  var $export = {};
  var $context = {};
  var $patchRef = yalla.framework.patchRef;
  var $inject = yalla.framework.createInjector("/dist/action/myProfile");
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
    _attr("element", "dist.action.myProfile");
    _elementOpenEnd("div");
    _text("this is My Profile screen");
    _elementClose("div");
  }
  if (typeof $render === "function") {
    $export.render = $render;
  }
  return $export;
})());