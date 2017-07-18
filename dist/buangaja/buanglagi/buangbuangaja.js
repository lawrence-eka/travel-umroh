yalla.framework.addComponent("/dist/buangaja/buanglagi/buangbuangaja", (function() {
  var $patchChanges = yalla.framework.renderToScreen;
  var $inject = yalla.framework.createInjector("/dist/buangaja/buanglagi/buangbuangaja");
  var $export = {};
  var $path = "/dist/buangaja/buanglagi/buangbuangaja";
  var _elementName = "dist.buangaja.buanglagi.buangbuangaja";
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