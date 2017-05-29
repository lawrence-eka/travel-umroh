yalla.framework.addComponent("/dist/component/test", (function() {
  var $path = "/dist/component/test";
  var $patchChanges = yalla.framework.renderToScreen;
  var $storeRef = yalla.framework.storeRef;
  var $export = {};
  var $context = {};
  var $patchRef = yalla.framework.patchRef;
  var $inject = yalla.framework.createInjector("/dist/component/test");
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
    _elementOpenStart("div", "");
    _attr("element", "dist.component.test");
    _elementOpenEnd("div");
    _text("" + (JSON.stringify(_data.itr)) + "");
    _elementOpenStart("div", "");
    _elementOpenEnd("div");
    _text("" + (dates.formatter(_data.itr.fromDateTime)) + "");
    _elementClose("div");
    _elementClose("div");
    _elementOpenStart("script", "");
    _elementOpenEnd("script");
    _elementClose("script");
  }
  if (typeof $render === "function") {
    $export.render = $render;
  }
  return $export;
})());