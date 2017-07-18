yalla.framework.addComponent("/dist/buangaja/buangaja", (function() {
  var $patchChanges = yalla.framework.renderToScreen;
  var $inject = yalla.framework.createInjector("/dist/buangaja/buangaja");
  var $export = {};
  var $path = "/dist/buangaja/buangaja";
  var _elementName = "dist.buangaja.buangaja";
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