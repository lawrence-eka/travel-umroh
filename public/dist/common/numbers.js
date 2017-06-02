yalla.framework.addComponent("/dist/common/numbers", (function() {
  var $path = "/dist/common/numbers";
  var $patchChanges = yalla.framework.renderToScreen;
  var $export = {};
  var _context = {};
  var _parentComponent = yalla.framework.getParentComponent;
  var _merge = yalla.utils.merge;
  var $inject = yalla.framework.createInjector("/dist/common/numbers");

  function ComponentEvent(type, data, target, currentTarget) {
    this.data = data;
    this.target = target;
    this.type = type;
    this.currentTarget = currentTarget;
  }

  /**
   * Created by Lawrence Eka on 24-May-2017.
   */

  if (typeof $render === "function") {
    $export.render = $render;
  }
  return $export;
})());