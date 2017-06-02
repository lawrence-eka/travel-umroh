yalla.framework.addComponent("/dist/component/panel", (function() {
  var $path = "/dist/component/panel";
  var $patchChanges = yalla.framework.renderToScreen;
  var $export = {};
  var _context = {};
  var _parentComponent = yalla.framework.getParentComponent;
  var _merge = yalla.utils.merge;
  var $inject = yalla.framework.createInjector("/dist/component/panel");

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

  function onPropertyChange(event) {
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
    _attr("element", "dist.component.panel");
    _attr("href", "asset/css/custom-style.css");
    _attr("rel", "stylesheet");
    _elementOpenEnd("link");
    // The component of this object
    var __component = IncrementalDOM.currentElement();
    __component.__state = __component.__state || initState.bind(__component)(_props);
    var __state = __component.__state;
    var __self = {
      component: __component,
      properties: _props,
      state: __component.__state
    };
    yalla.framework.propertyCheckChanges(__component.__properties, _props, onPropertyChange.bind(__self));
    __component.__properties = _props;
    _elementClose("link");
    _elementOpenStart("div", "");
    _attr("element", "dist.component.panel");
    _elementOpenEnd("div");
    // The component of this object
    var __component = IncrementalDOM.currentElement();
    __component.__state = __component.__state || initState.bind(__component)(_props);
    var __state = __component.__state;
    var __self = {
      component: __component,
      properties: _props,
      state: __component.__state
    };
    yalla.framework.propertyCheckChanges(__component.__properties, _props, onPropertyChange.bind(__self));
    __component.__properties = _props;
    _elementOpenStart("div", "");
    _attr("class", "container custom-container-layout");
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
    _attr("style", isClickable.bind(__self)());
    _elementOpenEnd("div");
    _elementOpenStart("div", "");
    _attr("class", "row centered-form no-top-margin");
    _elementOpenEnd("div");
    _elementOpenStart("div", "");
    _attr("class", "form-panel col-xs-12 col-sm-12 col-md-12 col-lg-12");
    _elementOpenEnd("div");
    _elementOpenStart("div", "");
    _attr("class", "panel panel-default ");
    _elementOpenEnd("div");
    if (_props.test || !_props.notitle || _props.title) {
      _elementOpenStart("div", "");
      _attr("class", "panel-heading custom-panel-layout");
      _elementOpenEnd("div");
      _elementOpenStart("h3", "");
      _attr("class", "panel-title");
      _elementOpenEnd("h3");
      _text("" + ((_props.title ? _props.title : '')) + "");
      if (_props.test) {
        _elementOpenStart("div", "");
        _elementOpenEnd("div");
        _text("PANEL HEADER");
        _elementClose("div");
      }
      _elementClose("h3");
      _slotView("header", {});
      _elementClose("div");
    }
    _elementOpenStart("div", "");
    _attr("class", "panel-body custom-panel-layout");
    _elementOpenEnd("div");
    _text("" + (_props.body ? _props.body : '') + "");
    if (_props.test) {
      _elementOpenStart("div", "");
      _elementOpenEnd("div");
      _text("PANEL BODY");
      _elementClose("div");
    }
    _slotView("body", {});
    _elementClose("div");
    if (_props.test || !_props.nofooter || _props.footer) {
      _elementOpenStart("div", "");
      _attr("class", "panel-footer custom-panel-layout");
      _elementOpenEnd("div");
      _text("" + (_props.footer ? _props.footer : '') + "");
      if (_props.test) {
        _elementOpenStart("div", "");
        _elementOpenEnd("div");
        _text("PANEL FOOTER");
        _elementClose("div");
      }
      _slotView("footer", {});
      _elementClose("div");
    }
    _elementClose("div");
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