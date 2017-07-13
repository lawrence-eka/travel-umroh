yalla.framework.addComponent("/dist/test-event/event", (function() {
  var $patchChanges = yalla.framework.renderToScreen;
  var $inject = yalla.framework.createInjector("/dist/test-event/event");
  var $export = {};
  var $path = "/dist/test-event/event";
  var _elementName = "dist.test-event.event";
  var _context = {};
  var _parentComponent = yalla.framework.getParentComponent;
  var _merge = yalla.utils.merge;

  function ComponentEvent(type, data, target, currentTarget) {
    this.data = data;
    this.target = target;
    this.type = type;
    this.currentTarget = currentTarget;
  }

  $export = {
    listeners: [],
    publish: function(data) {
      this.listeners.forEach(function(listener) {
        listener(data);
      });
    },
    subscribe: function(listener) {
      this.listeners.push(listener);
    },
    unsubscribe: function(listener) {
      this.listeners.splice(this.listeners.indexOf(listener), 1);
    }
  }
  if (typeof $render === "function") {
    $export.render = $render;
  }
  return $export;
})());