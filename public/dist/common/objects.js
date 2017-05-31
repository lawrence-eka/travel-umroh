yalla.framework.addComponent("/dist/common/objects", (function() {
  var $path = "/dist/common/objects";
  var $patchChanges = yalla.framework.renderToScreen;
  var $export = {};
  var $context = {};
  var _parentComponent = yalla.framework.getParentComponent;
  var $inject = yalla.framework.createInjector("/dist/common/objects");

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