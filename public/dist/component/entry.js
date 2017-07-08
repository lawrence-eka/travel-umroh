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
    if (divClass) return divClass + " custom-entry";
    else return "col-xs-12 col-sm-6 col-md-6 col-lg-6 custom-entry";
  }

  function whatInnerDivClass(innerDivClass) {
    if (innerDivClass) return innerDivClass;
    else return "form-group custom-entry-margin";
  }

  function onClick(event) {
    this.emitEvent('click', event && event.data ? event.data : null);
  }

  function onFocusOut() {
    this.emitEvent("focusout");
  }

  function onChange() {
    this.emitEvent('change');
  }

  function $render(_props, _slotView) {
    _context["entry-naked"] = $inject("/component/entry-naked");
    var entryNaked = _context["entry-naked"];
    _elementOpenStart("span", "");
    _attr("element", "dist.component.entry");
    _elementOpenEnd("span");
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
    if (_props.naked || _props.type == 'hidden') {
      var _params = {
        "type": _props.type,
        "prompt": _props.prompt,
        "href": _props.href,
        "value": _props.value,
        "name": _props.name,
        "class": _props.class,
        "required": _props.required,
        "placeholder": _props.placeholder,
        "min": _props.min,
        "max": _props.max,
        "checked": _props.checked,
        "entries": _props.entries,
        "alert": _props.alert,
        "alias": _props.alias,
        "glyph": _props.glyph,
        "margin": _props.margin,
        "deleted": _props.deleted,
        "onchange": function(event) {
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
          onChange.bind(self)();
        },
        "onclick": function(event) {
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
        },
        "onfocusout": function(event) {
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
          onFocusOut.bind(self)();
        }
      };
      _context["entry-naked"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
    }
    if (!_props.naked && _props.type != 'hidden') {
      _elementOpenStart("div", "");
      _attr("class", whatDivClass.bind(self)(_props.divClass));
      _elementOpenEnd("div");
      _elementOpenStart("div", "");
      _attr("class", whatInnerDivClass.bind(self)(_props.innerDivClass));
      _elementOpenEnd("div");
      var _params = {
        "type": _props.type,
        "prompt": _props.prompt,
        "href": _props.href,
        "value": _props.value,
        "name": _props.name,
        "class": _props.class,
        "required": _props.required,
        "placeholder": _props.placeholder,
        "min": _props.min,
        "max": _props.max,
        "checked": _props.checked,
        "entries": _props.entries,
        "alert": _props.alert,
        "alias": _props.alias,
        "glyph": _props.glyph,
        "margin": _props.margin,
        "deleted": _props.deleted,
        "onchange": function(event) {
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
          onChange.bind(self)();
        },
        "onclick": function(event) {
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
          onClick.bind(self)(event);
        },
        "onfocusout": function(event) {
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
          onFocusOut.bind(self)();
        }
      };
      _context["entry-naked"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
      _elementClose("div");
      _elementClose("div");
    }
    _elementClose("span");
  }
  if (typeof $render === "function") {
    $export.render = $render;
  }
  return $export;
})());