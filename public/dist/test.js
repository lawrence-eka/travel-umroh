yalla.framework.addComponent("/dist/test", (function() {
  var $patchChanges = yalla.framework.renderToScreen;
  var $inject = yalla.framework.createInjector("/dist/test");
  var $export = {};
  var $path = "/dist/test";
  var _elementName = "dist.test";
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

  var x = 1;

  function onclick() {
    x = (x == 1 ? 2 : 1);
    $patchChanges();
  }

  function isVisible(obj, num) {

    if (x == num) return '';
    else return "hideThis";
  }

  function $render(_props, _slotView) {
    _elementOpenStart("style", "");
    _elementOpenEnd("style");
    _text("\n[element='dist.test'] .hideThis {display:none;}");
    _elementClose("style");
    _elementOpenStart("div", "");
    _attr("element", "dist.test");
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
    _elementOpenStart("input", "");
    _attr("type", "button");
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
      onclick.bind(self)();
    });
    _elementOpenEnd("input");
    _elementClose("input");
    _elementOpenStart("form", "");
    _elementOpenEnd("form");
    _elementOpenStart("div", "");
    _attr("name", "hello");
    _attr("class", isVisible.bind(self)(this, 1));
    _elementOpenEnd("div");
    _elementOpenStart("input", "");
    _attr("type", "text");
    _attr("name", "hello");
    _attr("value", "hello");
    _elementOpenEnd("input");
    _elementClose("input");
    _elementClose("div");
    _elementOpenStart("div", "");
    _attr("name", "world");
    _attr("class", isVisible.bind(self)(this, 2));
    _elementOpenEnd("div");
    _elementOpenStart("input", "");
    _attr("type", "text");
    _attr("name", "world");
    _attr("value", "world");
    _elementOpenEnd("input");
    _elementClose("input");
    _elementClose("div");
    _elementClose("form");
    _elementClose("div");
  }
  if (typeof $render === "function") {
    $export.render = $render;
  }
  return $export;
})());