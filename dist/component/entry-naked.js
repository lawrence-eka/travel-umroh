yalla.framework.addComponent("/dist/component/entry-naked", (function() {
  var $patchChanges = yalla.framework.renderToScreen;
  var $inject = yalla.framework.createInjector("/dist/component/entry-naked");
  var $export = {};
  var $path = "/dist/component/entry-naked";
  var _elementName = "dist.component.entry-naked";
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
    if (props.alert) props.alert.onError.subscribe(errorSelector.bind(this));
    return {
      name: props.name,
      error: null,
      alias: props.alias,
    }
  }

  function calculateRootStyle(margin) {
    if (margin) {
      return 'margin-right : ' + margin;
    }
    return '';
  }

  function onCreated() {
    if (this.properties.alert) this.properties.alert.onError.subscribe(errorSelector.bind(this.target));
  }

  function errorSelector(errors) {
    this._state.error = null;
    if (errors) {
      for (var i in errors) {
        if ((this._state.name && errors[i].name == this._state.name) || (this._state.alias && errors[i].name == this._state.alias)) {
          this._state.error = errors[i].message;
          errors.splice(i, 1);
          //return;
        }
      }
    }
  }

  function setValue(value, min, max) {
    if (value && min && (value < min)) return min;
    else if (value && max && (value > max)) return max;
    else if (value) return value;
    else return '';
  }

  function whatDivClass(divClass) {
    if (divClass) return divClass;
    else return "col-xs-12 col-sm-6 col-md-6 col-lg-6";
  }

  function whatInnerDivClass(innerDivClass) {
    if (innerDivClass) return innerDivClass;
    else return "form-group custom-entry-margin";
  }

  function whatType(type) {
    if ('|textarea|label|hidden|button|checkbox|hyperlink|select|'.indexOf('|' + type + '|') >= 0) return type;
    else return 'other';
  }

  function onHyperlinkClick() {
    this.emitEvent('click');
  }

  function onPromptClick() {
    this.emitEvent('click');
  }

  function onButtonClicked() {
    this.emitEvent('click');
  }

  function onFocusOut() {
    this.emitEvent("focusout");
  }

  function onChange() {
    this.emitEvent("change");
  }

  function onCheckboxClick(event) {
    //debugger;
    this.emitEvent("click", this.target.checked);
  }


  function $render(_props, _slotView) {
    _elementOpenStart("span", "");
    _attr("element", "dist.component.entry-naked");
    _attr("style", calculateRootStyle.bind(self)(_props.margin));
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
    if ((_props.glyph || _props.prompt) && (whatType(_props.type) == 'label' || (whatType(_props.type) != 'checkbox' && whatType(_props.type) != 'hyperlink' && whatType(_props.type) != 'hidden'))) {
      _elementOpenStart("label", "");
      _attr("class", ((_props.class ? _props.class : 'custom-entry-prompt' + (_props.deleted ? ' custom-deleted-text' : ''))));
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
        onPromptClick.bind(self)();
      });
      _elementOpenEnd("label");
      _text("" + (_props.prompt ? _props.prompt : '') + "");
      if (_props.glyph) {
        _elementOpenStart("span", "");
        _attr("class", 'glyphicon glyphicon-' + _props.glyph);
        _elementOpenEnd("span");
        _elementClose("span");
      }
      _elementClose("label");
    }
    if (whatType(_props.type) == 'other') {
      _elementOpenStart("input", "");
      _attr("type", _props.type);
      _attr("name", _props.name);
      _attr("class", "form-control input-sm");
      _attr("required", _props.required);
      _attr("placeholder", _props.placeholder);
      _attr("value", setValue.bind(self)(_props.value, _props.min, _props.max));
      _attr("min", _props.min);
      _attr("max", _props.max);
      _attr("accept", _props.accept);
      _attr("onfocusout", function(event) {
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
      });
      _attr("onchange", function(event) {
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
      });
      _elementOpenEnd("input");
      _elementClose("input");
    }
    if (whatType(_props.type) == 'hidden') {
      _elementOpenStart("input", "");
      _attr("type", _props.type);
      _attr("name", _props.name);
      _attr("value", _props.value);
      _elementOpenEnd("input");
      _elementClose("input");
    }
    if (whatType(_props.type) == 'button') {
      _elementOpenStart("input", "");
      _attr("type", _props.type);
      _attr("name", _props.name);
      _attr("class", (_props.class ? _props.class : 'form-control btn btn-info btn-block'));
      _attr("value", _props.value);
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
        onButtonClicked.bind(self)();
      });
      _elementOpenEnd("input");
      _elementClose("input");
    }
    if (whatType(_props.type) == 'textarea') {
      _elementOpenStart("textarea", "");
      _attr("name", _props.name);
      _attr("required", _props.required);
      _attr("class", "form-control input-sm");
      _attr("onfocusout", function(event) {
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
      });
      _elementOpenEnd("textarea");
      _text("" + ((_props.value ? _props.value : '')) + "");
      _elementClose("textarea");
    }
    if (whatType(_props.type) == 'hyperlink') {
      _elementOpenStart("a", "");
      _attr("href", _props.href);
      _attr("class", (_props.class ? _props.class : 'custom-entry-prompt'));
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
        onHyperlinkClick.bind(self)();
      });
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
      _attr("onfocusout", function(event) {
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
      });
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
        onCheckboxClick.bind(self)(event);
      });
      _elementOpenEnd("input");
      _elementClose("input");
      _elementOpenStart("div", "");
      _attr("class", "btn-group");
      _attr("onfocusout", function(event) {
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
      });
      _elementOpenEnd("div");
      _elementOpenStart("label", "");
      _attr("for", _props.name);
      _attr("class", "btn btn-default btn-checkbox");
      _elementOpenEnd("label");
      _elementOpenStart("span", "");
      _attr("class", "glyphicon glyphicon-ok");
      _attr("onfocusout", function(event) {
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
      });
      _elementOpenEnd("span");
      _elementClose("span");
      _elementOpenStart("span", "");
      _elementOpenEnd("span");
      _elementClose("span");
      _elementClose("label");
      _elementOpenStart("label", "");
      _attr("for", _props.name);
      _attr("class", "btn btn-default active btn-checkbox");
      _attr("onfocusout", function(event) {
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
      });
      _elementOpenEnd("label");
      _text("" + (_props.prompt) + "");
      _elementClose("label");
      _elementClose("div");
      _elementClose("div");
    }
    if (whatType(_props.type) == 'select') {
      _elementOpenStart("div", "");
      _attr("onchange", function(event) {
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
      });
      _elementOpenEnd("div");
      _elementOpenStart("select", "");
      _attr("class", "form-control input-sm");
      _attr("name", _props.name);
      _elementOpenEnd("select");
      var _array = _props.entries || [];
      _array.forEach(function(entry) {
        _elementOpenStart("option", "");
        _attr("value", entry);
        _attr("selected", entry == _props.value);
        _elementOpenEnd("option");
        _text("" + (entry) + "");
        _elementClose("option");
      });
      _elementClose("select");
      _elementClose("div");
    }
    if (_state.error && whatType(_props.type) != 'hidden') {
      _elementOpenStart("label", "");
      _attr("class", "custom-entry-prompt custom-error-text");
      _elementOpenEnd("label");
      _text("" + (_state.error) + "");
      _elementClose("label");
    }
    _elementClose("span");
  }
  if (typeof $render === "function") {
    $export.render = $render;
  }
  return $export;
})());