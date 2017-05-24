yalla.framework.addComponent("/dist/component/footer", (function() {
  var $path = "/dist/component/footer";
  var $patchChanges = yalla.framework.renderToScreen;
  var $storeRef = yalla.framework.storeRef;
  var $export = {};
  var $context = {};
  var $patchRef = yalla.framework.patchRef;
  var $inject = yalla.framework.createInjector("/dist/component/footer");
  var _elementOpen = IncrementalDOM.elementOpen,
    _elementClose = IncrementalDOM.elementClose,
    _elementOpenStart = IncrementalDOM.elementOpenStart,
    _elementOpenEnd = IncrementalDOM.elementOpenEnd,
    _elementVoid = IncrementalDOM.elementVoid,
    _text = IncrementalDOM.text,
    _attr = IncrementalDOM.attr,
    _skip = IncrementalDOM.skip;

  function $render(_data, _slotView) {
    _elementOpenStart("footer", "");
    _attr("element", "dist.component.footer");
    _attr("class", "footer");
    _elementOpenEnd("footer");
    _elementOpenStart("div", "");
    _attr("class", "container");
    _elementOpenEnd("div");
    _elementOpenStart("p", "");
    _attr("class", "text-muted");
    _elementOpenEnd("p");
    _text("Place sticky footer content here.");
    _elementClose("p");
    _elementClose("div");
    _elementClose("footer");
  }
  if (typeof $render === "function") {
    $export.render = $render;
  }
  return $export;
})());