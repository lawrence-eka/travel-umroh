yalla.framework.addComponent("/dist/Itinerary/home.htm;", (function() {
  var $patchChanges = yalla.framework.renderToScreen;
  var $inject = yalla.framework.createInjector("/dist/Itinerary/home.htm;");
  var $export = {};
  var $path = "/dist/Itinerary/home.htm;";
  var _elementName = "dist.Itinerary.home.htm;";
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
    _elementOpenStart("html", "");
    _attr("element", "dist.Itinerary.home.htm;");
    _attr("lang", "en");
    _elementOpenEnd("html");
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
    _elementOpenStart("head", "");
    _elementOpenEnd("head");
    _elementOpenStart("meta", "");
    _attr("charset", "UTF-8");
    _elementOpenEnd("meta");
    _elementClose("meta");
    _elementOpenStart("title", "");
    _elementOpenEnd("title");
    _text("$Title$");
    _elementClose("title");
    _elementClose("head");
    _elementOpenStart("body", "");
    _elementOpenEnd("body");
    _text("$END$");
    _elementClose("body");
    _elementClose("html");
  }
  if (typeof $render === "function") {
    $export.render = $render;
  }
  return $export;
})());