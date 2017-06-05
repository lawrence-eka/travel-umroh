yalla.framework.addComponent("/dist/comp/shell", (function() {
  var $patchChanges = yalla.framework.renderToScreen;
  var $inject = yalla.framework.createInjector("/dist/comp/shell");
  var $export = {};
  var $path = "/dist/comp/shell";
  var _elementName = "dist.comp.shell";
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

  function toggleDrawer() {
    this.state.toggleDrawer = !this.state.toggleDrawer;
    $patchChanges();
  }

  function $render(_props, _slotView) {
    _context["header"] = $inject("/comp/header");
    var header = _context["header"];
    _context["drawer"] = $inject("/comp/drawer");
    var drawer = _context["drawer"];
    _context["content"] = $inject("/comp/content");
    var content = _context["content"];
    _elementOpenStart("style", "");
    _elementOpenEnd("style");
    _text("\n[element='dist.comp.shell'] {background-color: #0f0f0f;position: fixed;top:0;left: 0;right: 0;bottom: 0;}");
    _elementClose("style");
    _elementOpenStart("div", "");
    _attr("element", "dist.comp.shell");
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
    var _params = {
      "onburger-button-clicked": function(event) {
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
        toggleDrawer.bind(self)();
      },
      "drawerOpened": _state.toggleDrawer
    };
    _context["header"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
    var _params = {};
    _context["content"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {
      _slotView("default", {});
    });
    var _params = {
      "displayDrawer": _state.toggleDrawer
    };
    _context["drawer"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
    _elementClose("div");
  }
  if (typeof $render === "function") {
    $export.render = $render;
  }
  return $export;
})());