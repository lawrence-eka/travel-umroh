yalla.framework.addComponent("/dist/satu", (function() {
  var $path = "/dist/satu";
  var $patchChanges = yalla.framework.renderToScreen;
  var $storeRef = yalla.framework.storeRef;
  var $export = {};
  var $context = {};
  var $patchRef = yalla.framework.patchRef;
  var $inject = yalla.framework.createInjector("/dist/satu");
  var elementOpen = IncrementalDOM.elementOpen,
    elementClose = IncrementalDOM.elementClose,
    elementOpenStart = IncrementalDOM.elementOpenStart,
    elementOpenEnd = IncrementalDOM.elementOpenEnd,
    elementVoid = IncrementalDOM.elementVoid,
    text = IncrementalDOM.text,
    attr = IncrementalDOM.attr,
    skip = IncrementalDOM.skip;

  function $render(_data, _slotView) {
    $context["dua"] = $inject("/dua");
    var dua = $context["dua"];
    $context["tiga"] = $inject("/tiga");
    var tiga = $context["tiga"];
    elementOpenStart("div", "");
    attr("element", "dist.satu");
    elementOpenEnd("div");
    text("Satu");
    elementClose("div");
    _slotView("default");
    $context["dua"].render({
      "element": "dist.satu"
    }, function(slotName) {});
    $context["tiga"].render({
      "element": "dist.satu",
      "hallo": "Eka"
    }, function(slotName) {});
  }
  if (typeof $render === "function") {
    $export.render = $render;
  }
  return $export;
})());