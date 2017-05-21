yalla.framework.addComponent("/dist/component/test", (function() {
  var $path = "/dist/component/test";
  var $patchChanges = yalla.framework.renderToScreen;
  var $storeRef = yalla.framework.storeRef;
  var $export = {};
  var $context = {};
  var $patchRef = yalla.framework.patchRef;
  var $inject = yalla.framework.createInjector("/dist/component/test");
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
    attr("element", "dist.component.test");
    elementOpenEnd("div");
    text("" + (JSON.stringify(_data.itr)) + "");
    elementOpenStart("div", "");
    elementOpenEnd("div");
    text("" + (dates.formatter(_data.itr.fromDateTime)) + "");
    elementClose("div");
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