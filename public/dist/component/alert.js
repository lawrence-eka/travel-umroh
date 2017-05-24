yalla.framework.addComponent("/dist/component/alert", (function() {
  var $path = "/dist/component/alert";
  var $patchChanges = yalla.framework.renderToScreen;
  var $storeRef = yalla.framework.storeRef;
  var $export = {};
  var $context = {};
  var $patchRef = yalla.framework.patchRef;
  var $inject = yalla.framework.createInjector("/dist/component/alert");
  var _elementOpen = IncrementalDOM.elementOpen,
    _elementClose = IncrementalDOM.elementClose,
    _elementOpenStart = IncrementalDOM.elementOpenStart,
    _elementOpenEnd = IncrementalDOM.elementOpenEnd,
    _elementVoid = IncrementalDOM.elementVoid,
    _text = IncrementalDOM.text,
    _attr = IncrementalDOM.attr,
    _skip = IncrementalDOM.skip;

  function className(alertType) {
    debugger;
    var base = "alert ";
    if (type == "error") return base + "alert-danger";
    else if (type == "success") return base + "alert-success";
    else if (type == "info") return base + "alert-info";
    else if (type == "warning") return base + "alert-warning";
    return base;
  }

  function $render(_data, _slotView) {
    if (_data.message) {
      _elementOpenStart("div", "");
      _attr("element", "dist.component.alert");
      _attr("class", "alert alert-danger");
      _attr("role", "alert");
      _elementOpenEnd("div");
      _elementOpenStart("label", "");
      _elementOpenEnd("label");
      _text("" + (_data.message) + "");
      _elementClose("label");
      _elementClose("div");
    }
    _elementOpenStart("script", "");
    _elementOpenEnd("script");
    _elementClose("script");
  }
  if (typeof $render === "function") {
    $export.render = $render;
  }
  return $export;
})());