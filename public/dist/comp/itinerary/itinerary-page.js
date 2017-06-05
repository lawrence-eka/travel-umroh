yalla.framework.addComponent("/dist/comp/itinerary/itinerary-page", (function() {
  var $patchChanges = yalla.framework.renderToScreen;
  var $inject = yalla.framework.createInjector("/dist/comp/itinerary/itinerary-page");
  var $export = {};
  var $path = "/dist/comp/itinerary/itinerary-page";
  var _elementName = "dist.comp.itinerary.itinerary-page";
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

  var items = ['one', 'two', 'three', 'four', 'one', 'two', 'three', 'four']

  function $render(_props, _slotView) {
    _context["card"] = $inject("/comp/card");
    var card = _context["card"];
    _elementOpenStart("div", "");
    _attr("element", "dist.comp.itinerary.itinerary-page");
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
    _elementOpenStart("h1", "");
    _elementOpenEnd("h1");
    _text("Schedule for Package One");
    _elementClose("h1");
    _elementOpenStart("hr", "");
    _elementOpenEnd("hr");
    _elementClose("hr");
    var _array = items || [];
    _array.forEach(function(item) {
      var _params = {};
      _context["card"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
    });
    _elementClose("div");
  }
  if (typeof $render === "function") {
    $export.render = $render;
  }
  return $export;
})());