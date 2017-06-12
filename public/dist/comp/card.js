yalla.framework.addComponent("/dist/comp/card", (function() {
  var $patchChanges = yalla.framework.renderToScreen;
  var $inject = yalla.framework.createInjector("/dist/comp/card");
  var $export = {};
  var $path = "/dist/comp/card";
  var _elementName = "dist.comp.card";
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

  function whatClass(item) {
    return "fa fa-" + item + " icon-center";
  }

  function $render(_props, _slotView) {
    _elementOpenStart("style", "");
    _elementOpenEnd("style");
    _text("\n[element='dist.comp.card']{/*background-color: #ffffff;*/position: relative;}\n[element='dist.comp.card'] .leftLine{width: 50px;float: left;position: absolute;top:0;bottom: 0;}\n[element='dist.comp.card'] .content{margin-left:50px;display: block;padding-top:5px;}\n[element='dist.comp.card'] .circle{border:2px solid #cccccc;border-radius: 100%;width: 30px;height: 30px;margin: auto;text-align: center;}\n[element='dist.comp.card'] .lineVertical{border-left : 2px solid #cccccc;width: 2px;margin: auto;position: absolute;top:30px;bottom: -20px;left: 25px;}\n[element='dist.comp.card'] .leftLineContainer{}\n[element='dist.comp.card'] .icon-center {font-size:1.5rem;color : #666666;margin-top:0.5rem;}\n[element='dist.comp.card'] h3{margin-top:0px;}");
    _elementClose("style");
    _elementOpenStart("div", "");
    _attr("element", "dist.comp.card");
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
    _elementOpenStart("div", "");
    _attr("class", "leftLine");
    _elementOpenEnd("div");
    _elementOpenStart("div", "");
    _attr("class", "leftLineContainer");
    _elementOpenEnd("div");
    _elementOpenStart("div", "");
    _attr("class", "circle");
    _elementOpenEnd("div");
    _elementOpenStart("i", "");
    _attr("class", whatClass.bind(self)(_props.item));
    _attr("aria-hidden", "true");
    _elementOpenEnd("i");
    _elementClose("i");
    _elementClose("div");
    _elementOpenStart("div", "");
    _attr("class", "lineVertical");
    _elementOpenEnd("div");
    _elementClose("div");
    _elementClose("div");
    _elementClose("div");
    _elementOpenStart("div", "");
    _attr("class", "content");
    _elementOpenEnd("div");
    _elementOpenStart("h3", "");
    _elementOpenEnd("h3");
    _text("This is the heading");
    _elementClose("h3");
    _elementOpenStart("h5", "");
    _elementOpenEnd("h5");
    _text("Departure Time :");
    _elementOpenStart("label", "");
    _elementOpenEnd("label");
    _text("22:30");
    _elementClose("label");
    _text("/ Arrival :");
    _elementOpenStart("label", "");
    _elementOpenEnd("label");
    _text("01:55");
    _elementClose("label");
    _elementClose("h5");
    _elementOpenStart("p", "");
    _elementOpenEnd("p");
    _text("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
    _elementClose("p");
    _elementClose("div");
    _elementClose("div");
  }
  if (typeof $render === "function") {
    $export.render = $render;
  }
  return $export;
})());