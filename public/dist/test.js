yalla.framework.addComponent("/dist/test", (function() {
  var $path = "/dist/test";
  var $patchChanges = yalla.framework.renderToScreen;
  var $export = {};
  var $context = {};
  var _parentComponent = yalla.framework.getParentComponent;
  var $inject = yalla.framework.createInjector("/dist/test");

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

  var x = 1;

  function onclick() {
    x = (x == 1 ? 2 : 1);
    $patchChanges();
  }

  function isVisible(obj, num) {

    if (x == num)
    else return "hideThis"
  }

  function $render(_props, _slotView) {
    _elementOpenStart("style", "");
    _elementOpenEnd("style");
    // The component of this object
    var __component = IncrementalDOM.currentElement();
    __component.__state = __component.__state || initState.bind(__component)(_props);
    var __state = __component.__state;
    _text("\n[element='dist.test'] .hideThis {display:none;}");
    _elementClose("style");
    _elementOpenStart("div", "");
    _attr("element", "dist.test");
    _elementOpenEnd("div");
    // The component of this object
    var __component = IncrementalDOM.currentElement();
    __component.__state = __component.__state || initState.bind(__component)(_props);
    var __state = __component.__state;
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
      self.component = __component;
      self.component.__state = self.component.__state || {};
      self.state = self.component.__state;
      self.emitEvent = function(eventName, data) {
        var event = new ComponentEvent(eventName, data, self.target, self.currentTarget);
        if ('on' + eventName in _props) {
          _props['on' + eventName](event);
        }
      };
      return onclick.bind(self)();
    });
    _elementOpenEnd("input");
    _elementClose("input");
    _elementOpenStart("form", "");
    _elementOpenEnd("form");
    _elementOpenStart("div", "");
    _attr("name", "hello");
    _attr("class", isVisible(this, 1));
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
    _attr("class", isVisible(this, 2));
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