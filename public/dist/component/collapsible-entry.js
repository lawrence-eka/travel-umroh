yalla.framework.addComponent("/dist/component/collapsible-entry", (function() {
  var $patchChanges = yalla.framework.renderToScreen;
  var $inject = yalla.framework.createInjector("/dist/component/collapsible-entry");
  var $export = {};
  var $path = "/dist/component/collapsible-entry";
  var _elementName = "dist.component.collapsible-entry";
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

  function initState(props) {
    return {
      class: "fa fa-plus-square-o",
      name: props.name,
      isLastEntry: props.isLastEntry,
      isExpanded: false,
    }
  }

  function onExpand() {
    if (this.state.class == "fa fa-minus-square-o") this.state.class = "fa fa-plus-square-o";
    else this.state.class = "fa fa-minus-square-o";
    this.state.isExpanded = (this.state.class == "fa fa-minus-square-o");
    this.emitEvent('expand', {
      isExpand: this.state.isExpanded,
      name: this.state.name
    });
    $patchChanges();
  }

  function $render(_props, _slotView) {
    _context["entry"] = $inject("/component/entry-naked");
    var entry = _context["entry"];
    _elementOpenStart("div", "");
    _attr("element", "dist.component.collapsible-entry");
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
    _attr("class", "row");
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
      onExpand.bind(self)();
    });
    _elementOpenEnd("div");
    _elementOpenStart("div", "");
    _attr("class", "col-xs-1");
    _elementOpenEnd("div");
    _elementOpenStart("i", "");
    _attr("class", _state.class);
    _elementOpenEnd("i");
    _elementClose("i");
    _elementClose("div");
    _elementOpenStart("div", "");
    _attr("class", "col-xs-10 custom-prayer");
    _elementOpenEnd("div");
    var _params = {
      "type": "label",
      "prompt": _state.name,
      "class": "custom-bold-text"
    };
    _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
    _elementClose("div");
    _elementClose("div");
    if (_state.isExpanded) {
      _elementOpenStart("span", "");
      _elementOpenEnd("span");
      _elementOpenStart("div", "");
      _attr("class", "row");
      _elementOpenEnd("div");
      _slotView("detail", {});
      _elementClose("div");
      if (!_state.isLastEntry) {
        _elementOpenStart("div", "");
        _attr("class", "custom-bottom-border");
        _elementOpenEnd("div");
        var _params = {
          "type": "label",
          "prompt": " ",
          "class": "custom-normal-text"
        };
        _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
        _elementClose("div");
      }
      _elementClose("span");
    }
    _elementClose("div");
  }
  if (typeof $render === "function") {
    $export.render = $render;
  }
  return $export;
})());