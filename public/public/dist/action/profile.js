yalla.framework.addComponent("/dist/action/profile", (function() {
  var $path = "/dist/action/profile";
  var $patchChanges = yalla.framework.renderToScreen;
  var $storeRef = yalla.framework.storeRef;
  var $export = {};
  var $context = {};
  var $patchRef = yalla.framework.patchRef;
  var $inject = yalla.framework.createInjector("/dist/action/profile");
  var elementOpen = IncrementalDOM.elementOpen,
    elementClose = IncrementalDOM.elementClose,
    elementOpenStart = IncrementalDOM.elementOpenStart,
    elementOpenEnd = IncrementalDOM.elementOpenEnd,
    elementVoid = IncrementalDOM.elementVoid,
    text = IncrementalDOM.text,
    attr = IncrementalDOM.attr,
    skip = IncrementalDOM.skip;

  function $render(_data, _slotView) {
    elementOpenStart("div", "");
    attr("element", "dist.action.profile");
    elementOpenEnd("div");
    text("this is My Profile screen");
    elementClose("div");
  }
  if (typeof $render === "function") {
    $export.render = $render;
  }
  return $export;
})());