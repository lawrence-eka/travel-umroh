yalla.framework.addComponent("/dist/common/numbers", (function() {
  var $path = "/dist/common/numbers";
  var $patchChanges = yalla.framework.renderToScreen;
  var $storeRef = yalla.framework.storeRef;
  var $export = {};
  var $context = {};
  var $patchRef = yalla.framework.patchRef;
  var $inject = yalla.framework.createInjector("/dist/common/numbers");

  function ComponentEvent(type, data, target) {
    this.data = data;
    this.target = target;
    this.type = type;
  }

  /**
   * Created by Lawrence Eka on 24-May-2017.
   */

  if (typeof $render === "function") {
    $export.render = $render;
  }
  return $export;
})());