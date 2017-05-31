yalla.framework.addComponent("/dist/component/footer", (function() {
  var $path = "/dist/component/footer";
  var $patchChanges = yalla.framework.renderToScreen;
  var $export = {};
  var $context = {};
  var _parentComponent = yalla.framework.getParentComponent;
  var $inject = yalla.framework.createInjector("/dist/component/footer");

  function ComponentEvent(type, data, target, currentTarget) {
    this.data = data;
    this.target = target;
    this.type = type;
    this.currentTarget = currentTarget;
  }

  var _elementOpen = IncrementalDOM.elementOpen,
    _elementClose = IncrementalDOM.elementClose,
    _elementOpenStart = IncrementalDOM.elementOpenStart,
    _elementOpenEnd = IncrementalDOM.elementOpenEnd,
    _elementVoid = IncrementalDOM.elementVoid,
    _text = IncrementalDOM.text,
    _attr = IncrementalDOM.attr,
    _skip = IncrementalDOM.skip;

  function initState(props) {
    return {}
  };

  function $render(_props, _slotView) {
    _elementOpenStart("footer", "");
    _attr("element", "dist.component.footer");
    _attr("class", "footer");
    _elementOpenEnd("footer");
    // The component of this object
    var __component = IncrementalDOM.currentElement();
    __component.__state = __component.__state || initState.bind(__component)(_props);
    var __state = __component.__state;
    _elementOpenStart("div", "");
    _attr("class", "container");
    _elementOpenEnd("div");
    _elementOpenStart("p", "");
    _attr("class", "text-muted");
    _elementOpenEnd("p");
    _text("Place sticky footer content here.");
    _elementClose("p");
    _elementClose("div");
    _elementClose("footer");
  }
  if (typeof $render === "function") {
    $export.render = $render;
  }
  return $export;
})());