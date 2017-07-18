yalla.framework.addComponent("/dist/buangaja/buangjuga", (function() {
  var $patchChanges = yalla.framework.renderToScreen;
  var $inject = yalla.framework.createInjector("/dist/buangaja/buangjuga");
  var $export = {};
  var $path = "/dist/buangaja/buangjuga";
  var _elementName = "dist.buangaja.buangjuga";
  var _context = {};
  var _parentComponent = yalla.framework.getParentComponent;
  var _merge = yalla.utils.merge;

  function ComponentEvent(type, data, target, currentTarget) {
    this.data = data;
    this.target = target;
    this.type = type;
    this.currentTarget = currentTarget;
  }

  /**
   * Created by gal9569 on 7/18/2017.
   */

  if (typeof $render === "function") {
    $export.render = $render;
  }
  return $export;
})());