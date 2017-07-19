yalla.framework.addComponent("/dist/component/footer", (function() {
  var $patchChanges = yalla.framework.renderToScreen;
  var $inject = yalla.framework.createInjector("/dist/component/footer");
  var $export = {};
  var $path = "/dist/component/footer";
  var _elementName = "dist.component.footer";
  var _context = {};
  var _parentComponent = yalla.framework.getParentComponent;
  var _merge = yalla.utils.merge;

  function ComponentEvent(type, data, target, currentTarget) {
    this.data = data;
    this.target = target;
    this.type = type;
    this.currentTarget = currentTarget;
  }

  var _elementOpen = IncrementalDOM.elementOpen;
  var _elementClose = IncrementalDOM.elementClose;
  var _elementOpenStart = IncrementalDOM.elementOpenStart;
  var _elementOpenEnd = IncrementalDOM.elementOpenEnd;
  var _elementVoid = IncrementalDOM.elementVoid;
  var _text = IncrementalDOM.text;
  var _attr = IncrementalDOM.attr;
  var _skip = IncrementalDOM.skip;

  function initState(props) {
    return {}
  };

  function onPropertyChange(event) {};

  function $render(_props, _slotView) {
    _elementOpenStart("footer", "");
    _attr("element", "dist.component.footer");
    _attr("class", "footer");
    _elementOpenEnd("footer");
    var _component = IncrementalDOM.currentElement();
    var _validComponent = yalla.framework.validComponentName(_component, _elementName)
    _component._state = _component._state && _validComponent ? _component._state : initState.bind(_component)(_props);
    _component._state._name = _elementName;
    var _state = _component._state;
    var _self = {
      component: _component,
      properties: _props,
      state: _component._state
    };
    if (_validComponent) {
      yalla.framework.propertyCheckChanges(_component._properties, _props, onPropertyChange.bind(_self));
    }
    _component._properties = _props;
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