yalla.framework.addComponent("/dist/comp/drawer", (function() {
  var $patchChanges = yalla.framework.renderToScreen;
  var $inject = yalla.framework.createInjector("/dist/comp/drawer");
  var $export = {};
  var $path = "/dist/comp/drawer";
  var _elementName = "dist.comp.drawer";
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


  function initRootStyle(displayDrawer) {
    if (!displayDrawer) {
      return 'transform:translateX(-100%)'
    }
    return '';
  }


  function $render(_props, _slotView) {
    _elementOpenStart("style", "");
    _elementOpenEnd("style");
    _text("\n[element='dist.comp.drawer'] {position: fixed;top:50px;left: 0;right: 0;bottom: 0;background-color: #5e5e5e;transition: 0.5s all ease;padding:1rem;color: white;}\n[element='dist.comp.drawer'] .close{-webkit-transform: translateX(-100%);-moz-transform: translateX(-100%);-ms-transform: translateX(-100%);-o-transform: translateX(-100%);transform: translateX(-100%);}");
    _elementClose("style");
    _elementOpenStart("div", "");
    _attr("element", "dist.comp.drawer");
    _attr("style", initRootStyle.bind(self)(_props.displayDrawer));
    _elementOpenEnd("div");
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
    _text("THIS IS THE MENU");
    _elementClose("div");
  }
  if (typeof $render === "function") {
    $export.render = $render;
  }
  return $export;
})());