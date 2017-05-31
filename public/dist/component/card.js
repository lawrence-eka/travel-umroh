yalla.framework.addComponent("/dist/component/card", (function() {
  var $path = "/dist/component/card";
  var $patchChanges = yalla.framework.renderToScreen;
  var $export = {};
  var $context = {};
  var _parentComponent = yalla.framework.getParentComponent;
  var $inject = yalla.framework.createInjector("/dist/component/card");

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


  function onClick() {
    this.emitEvent('click');
  }

  function isClickable() {
    if (this.properties && this.properties.onclick) {
      return 'cursor:pointer';
    }
    return '';
  }


  function $render(_props, _slotView) {
    _elementOpenStart("link", "");
    _attr("element", "dist.component.card");
    _attr("href", "asset/css/custom-style.css");
    _attr("rel", "stylesheet");
    _elementOpenEnd("link");
    // The component of this object
    var __component = IncrementalDOM.currentElement();
    __component.__state = __component.__state || initState.bind(__component)(_props);
    var __state = __component.__state;
    _elementClose("link");
    _elementOpenStart("div", "");
    _attr("element", "dist.component.card");
    _attr("class", "container all-5px");
    _elementOpenEnd("div");
    // The component of this object
    var __component = IncrementalDOM.currentElement();
    __component.__state = __component.__state || initState.bind(__component)(_props);
    var __state = __component.__state;
    _elementOpenStart("div", "");
    _attr("class", "row centered-form no-top-margin");
    _elementOpenEnd("div");
    _elementOpenStart("div", "");
    _attr("class", "col-xs-12 col-sm-12 col-md-12 col-lg-12");
    _elementOpenEnd("div");
    _elementOpenStart("div", "");
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
      return onClick.bind(self)();
    });
    _attr("class", "panel panel-default custom-panel ");
    _attr("style", isClickable());
    _elementOpenEnd("div");
    if (_props.title) {
      _elementOpenStart("div", "");
      _attr("class", "panel-heading");
      _elementOpenEnd("div");
      _elementOpenStart("h3", "");
      _attr("class", "panel-title");
      _elementOpenEnd("h3");
      _text("" + (_props.title) + "");
      _elementClose("h3");
      _elementClose("div");
    }
    if (!_props.titleOnly) {
      _elementOpenStart("div", "");
      _elementOpenEnd("div");
      _elementOpenStart("div", "");
      _attr("class", "panel-body");
      _elementOpenEnd("div");
      _slotView("default");
      _elementClose("div");
      if (_props.remarks) {
        _elementOpenStart("div", "");
        _attr("class", "panel-footer");
        _elementOpenEnd("div");
        _text("" + (_props.remarks) + "");
        _elementClose("div");
      }
      _elementClose("div");
    }
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