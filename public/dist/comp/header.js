yalla.framework.addComponent("/dist/comp/header", (function() {
  var $patchChanges = yalla.framework.renderToScreen;
  var $inject = yalla.framework.createInjector("/dist/comp/header");
  var $export = {};
  var $path = "/dist/comp/header";
  var _elementName = "dist.comp.header";
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

  function onBurgerButtonClicked() {
    this.emitEvent('burger-button-clicked');
  }

  function initBurgerButtonClass(drawerOpened) {
    var result = [];
    result.push('fa');
    if (drawerOpened) {
      result.push('fa-chevron-left');
    } else {
      result.push('fa-bars');
    }
    result.push('burger-button');
    return result.join(' ');
  }

  function $render(_props, _slotView) {
    _elementOpenStart("style", "");
    _elementOpenEnd("style");
    _text("\n[element='dist.comp.header'] {width : 100%;background-color: #999999;color: #ffffff;border-bottom: 1px solid #666666;}\n[element='dist.comp.header'] .burger-button{font-size: 3rem;padding: 1rem;}");
    _elementClose("style");
    _elementOpenStart("div", "");
    _attr("element", "dist.comp.header");
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
    _elementOpenStart("i", "");
    _attr("class", initBurgerButtonClass.bind(self)(_props.drawerOpened));
    _attr("aria-hidden", "true");
    _attr("onclick", function(event) {
      var self = {
        target: event.target
      };
      self.properties = _props;
      if ('elements' in self.target) {
        self.elements = self.target.elements;
      }
      self.currentTarget = this == event.target ? self.target : _parentComponent(event.currentTarget);
      self.component = _component;
      self.component._state = self.component._state || {};
      self.state = self.component._state;
      self.emitEvent = function(eventName, data) {
        var event = new ComponentEvent(eventName, data, self.target, self.currentTarget);
        if ('on' + eventName in _props) {
          _props['on' + eventName](event);
        }
      };
      onBurgerButtonClicked.bind(self)();
    });
    _elementOpenEnd("i");
    _elementClose("i");
    _elementClose("div");
  }
  if (typeof $render === "function") {
    $export.render = $render;
  }
  return $export;
})());