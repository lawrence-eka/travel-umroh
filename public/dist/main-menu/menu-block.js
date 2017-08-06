yalla.framework.addComponent("/dist/main-menu/menu-block", (function() {
  var $patchChanges = yalla.framework.renderToScreen;
  var $inject = yalla.framework.createInjector("/dist/main-menu/menu-block");
  var $export = {};
  var $path = "/dist/main-menu/menu-block";
  var _elementName = "dist.main-menu.menu-block";
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

  function whatIcon(icon) {
    return "fa fa-" + icon + " menu-icon";
  }

  function onClick() {
    this.emitEvent('click');
  }

  function $render(_props, _slotView) {
    _elementOpenStart("div", "");
    _attr("element", "dist.main-menu.menu-block");
    _attr("class", "col-xs-6 col-sm-4 col-md-3 col-lg-3");
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
    _attr("class", "menu-block");
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
      onClick.bind(self)();
    });
    _elementOpenEnd("div");
    _elementOpenStart("div", "");
    _attr("class", "row");
    _elementOpenEnd("div");
    _elementOpenStart("div", "");
    _attr("class", "menu-center");
    _elementOpenEnd("div");
    _elementOpenStart("i", "");
    _attr("class", whatIcon.bind(self)(_props.icon));
    _elementOpenEnd("i");
    _elementClose("i");
    _elementClose("div");
    _elementClose("div");
    _elementOpenStart("div", "");
    _attr("class", "row");
    _elementOpenEnd("div");
    _elementOpenStart("div", "");
    _attr("class", "menu-center");
    _elementOpenEnd("div");
    _elementOpenStart("strong", "");
    _elementOpenEnd("strong");
    _text("" + (_props.text) + "");
    _elementClose("strong");
    _elementClose("div");
    _elementClose("div");
    _elementClose("div");
    _elementClose("div");
  }
  if (typeof $render === "function") {
    $export.render = $render;
  }
  return $export;
})());