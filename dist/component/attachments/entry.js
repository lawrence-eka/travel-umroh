yalla.framework.addComponent("/dist/component/attachments/entry", (function() {
  var $patchChanges = yalla.framework.renderToScreen;
  var $inject = yalla.framework.createInjector("/dist/component/attachments/entry");
  var $export = {};
  var $path = "/dist/component/attachments/entry";
  var _elementName = "dist.component.attachments.entry";
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
    if (!props.file) {
      props.file = {
        filename: 'test.test',
        originalFilename: 'original.test'
      };
    }
    if (!props.folder) {
      props.folder = 'upload/';
    }
    //debugger;
    return {
      file: props.file,
      folder: props.folder,
      deleted: false,
    }
  }

  function onPropertyChange(props) {
    if (props.file) this.state.file = props.file.newValue;
    if (props.folder) this.state.folder = props.folder.newValue
  }

  function onDelete() {
    //debugger;
    if (!this.state.file.originalFilename) return;
    var self = this;
    self.state.deleted = true;
    self.emitEvent("delete", self.state.file.id);
    $patchChanges("local");
  }

  function onCancelAdd() {
    debugger;
    var self = this;
    self.emitEvent("cancelAdd", self.state.file);
  }

  function onUndelete() {
    if (!this.state.file.originalFilename) return;
    var self = this;
    self.state.deleted = false;
    self.emitEvent("undelete", self.state.file.id);
    $patchChanges("local");
  }


  function $render(_props, _slotView) {
    _context["entry"] = $inject("/component/entry-naked");
    var entry = _context["entry"];
    _elementOpenStart("div", "");
    _attr("element", "dist.component.attachments.entry");
    _attr("class", "container");
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
    _elementOpenStart("span", "");
    _elementOpenEnd("span");
    yalla.framework.registerRef("local", IncrementalDOM.currentElement(), function() {
      if (_state.deleted) {
        _elementOpenStart("div", "");
        _elementOpenEnd("div");
        var _params = {
          "naked": "naked",
          "type": "label",
          "glyph": "repeat",
          "margin": "5px",
          "deleted": "deleted",
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
            onUndelete.bind(self)();
          }
        };
        _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
        var _params = {
          "naked": "naked",
          "type": "label",
          "prompt": _state.file.originalFilename,
          "deleted": "deleted"
        };
        _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
        _elementClose("div");
      }
      if (!_state.deleted && _state.file.originalFilename) {
        _elementOpenStart("div", "");
        _elementOpenEnd("div");
        var _params = {
          "naked": "naked",
          "type": "label",
          "glyph": _props.readonly ? 'paperclip' : 'trash',
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
            _props.readonly ? null : onDelete.bind(self)();
          },
          "margin": "5px"
        };
        _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
        var _params = {
          "naked": "naked",
          "type": "hyperlink",
          "href": _state.folder + _state.file.filename,
          "prompt": _state.file.originalFilename
        };
        _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
        _elementClose("div");
      }
      if (!_state.deleted && !_state.file.originalFilename) {
        _elementOpenStart("div", "");
        _elementOpenEnd("div");
        var _params = {
          "naked": "naked",
          "type": "label",
          "glyph": "trash",
          "margin": "5px",
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
            onCancelAdd.bind(self)();
          }
        };
        _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
        var _params = {
          "naked": "naked",
          "type": "label",
          "prompt": _state.file.name
        };
        _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
        _elementClose("div");
      }
    })()
    _elementClose("span");
    _elementClose("div");
  }
  if (typeof $render === "function") {
    $export.render = $render;
  }
  return $export;
})());