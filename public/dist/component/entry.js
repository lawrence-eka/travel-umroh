yalla.framework.addComponent("/dist/component/entry", (function() {
  var $patchChanges = yalla.framework.renderToScreen;
  var $inject = yalla.framework.createInjector("/dist/component/entry");
  var $export = {};
  var $path = "/dist/component/entry";
  var _elementName = "dist.component.entry";
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

  function whatDivClass(divClass) {
    if (divClass) return divClass;
    else return "col-xs-12 col-sm-6 col-md-6 col-lg-6";
  }

  function whatInnerDivClass(innerDivClass) {
    if (innerDivClass) return innerDivClass;
    else return "form-group custom-entry-margin";
  }

  function whatType(type) {
    if (type == 'textarea') return 'textarea';
    else if (type == 'hidden') return 'hidden';
    else if (type == 'button') return 'button';
    else if (type == 'checkbox') return 'checkbox';
    else if (type == 'hyperlink') return 'hyperlink';
    else return 'other'
  }

  function buttonClicked() {
    this.emitEvent('click');
  }

  function $render(_props, _slotView) {
    _elementOpenStart("link", "");
    _attr("element", "dist.component.entry");
    _attr("href", "asset/css/custom-style.css");
    _attr("rel", "stylesheet");
    _elementOpenEnd("link");
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
    _elementClose("link");
    _elementOpenStart("div", "");
    _attr("element", "dist.component.entry");
    _attr("class", whatDivClass.bind(self)(_props.divClass));
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
    _attr("class", whatInnerDivClass.bind(self)(_props.innerDivClass));
    _elementOpenEnd("div");
    if (_props.prompt && whatType(_props.type) != 'checkbox' && whatType(_props.type) != 'hyperlink') {
      _elementOpenStart("label", "");
      _attr("class", "custom-entry-prompt");
      _elementOpenEnd("label");
      _text("" + (_props.prompt) + "");
      _elementClose("label");
    }
    if (whatType(_props.type) == 'other') {
      _elementOpenStart("input", "");
      _attr("type", _props.type);
      _attr("name", _props.name);
      _attr("class", "form-control input-sm");
      _attr("required", _props.required);
      _attr("placeholder", (_props.placeholder ? _props.placeholder : ''));
      _attr("value", (_props.value ? _props.value : ''));
      _attr("min", _props.min);
      _attr("max", _props.max);
      _elementOpenEnd("input");
      _elementClose("input");
    }
    if (whatType(_props.type) == 'hidden') {
      _elementOpenStart("input", "");
      _attr("type", _props.type);
      _attr("name", _props.name);
      _attr("value", (_props.value ? _props.value : ''));
      _elementOpenEnd("input");
      _elementClose("input");
    }
    if (whatType(_props.type) == 'button') {
      _elementOpenStart("input", "");
      _attr("type", _props.type);
      _attr("name", _props.name);
      _attr("class", (_props.class ? _props.class : 'form-control btn btn-info btn-block'));
      _attr("value", (_props.value ? _props.value : ''));
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
        buttonClicked.bind(self)();
      });
      _elementOpenEnd("input");
      _elementClose("input");
    }
    if (whatType(_props.type) == 'textarea') {
      _elementOpenStart("textarea", "");
      _attr("name", _props.name);
      _attr("required", _props.required);
      _attr("class", "form-control input-sm");
      _elementOpenEnd("textarea");
      _text("" + ((_props.value ? _props.value : '')) + "");
      _elementClose("textarea");
    }
    if (whatType(_props.type) == 'hyperlink') {
      _elementOpenStart("a", "");
      _attr("href", _props.href);
      _attr("class", _props.class ? _props.class : 'custom-entry-prompt');
      _elementOpenEnd("a");
      _text("" + (_props.prompt) + "");
      _elementClose("a");
    }
    if (whatType(_props.type) == 'checkbox') {
      _elementOpenStart("div", "");
      _elementOpenEnd("div");
      _elementOpenStart("input", "");
      _attr("type", "checkbox");
      _attr("name", _props.name);
      _attr("id", _props.name);
      _attr("autocomplete", "off");
      _attr("checked", _props.checked);
      _elementOpenEnd("input");
      _elementClose("input");
      _elementOpenStart("div", "");
      _attr("class", "btn-group");
      _elementOpenEnd("div");
      _elementOpenStart("label", "");
      _attr("for", _props.name);
      _attr("class", "btn btn-default btn-checkbox");
      _elementOpenEnd("label");
      _elementOpenStart("span", "");
      _attr("class", "glyphicon glyphicon-ok");
      _elementOpenEnd("span");
      _elementClose("span");
      _elementOpenStart("span", "");
      _elementOpenEnd("span");
      _elementClose("span");
      _elementClose("label");
      _elementOpenStart("label", "");
      _attr("for", _props.name);
      _attr("class", "btn btn-default active btn-checkbox");
      _elementOpenEnd("label");
      _text("" + (_props.prompt) + "");
      _elementClose("label");
      _elementClose("div");
      _elementClose("div");
    }
    _elementClose("div");
    _elementClose("div");
  }
  if (typeof $render === "function") {
    $export.render = $render;
  }
  return $export;
})());