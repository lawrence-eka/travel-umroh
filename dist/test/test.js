yalla.framework.addComponent("/dist/test/test", (function() {
  var $patchChanges = yalla.framework.renderToScreen;
  var $inject = yalla.framework.createInjector("/dist/test/test");
  var $export = {};
  var $path = "/dist/test/test";
  var _elementName = "dist.test.test";
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
    var state = {}

    state.name = props.name;
    state.entries = props.entries;
    return state;
  }

  function initAwesomplete(value) {
    debugger;
    //		var as = new Awesomplete(this.target, {list:[{label:'katy perry', value:'kp'}, {label:'taylor swift', value:'ts'}, {label:'selena gomez', value:'sg'}]});
    //var as = new Awesomplete(this.target, {list:['katy perry', 'selena gomez', 'taylor swift']});
    var as = new Awesomplete(this.target, {
      list: this.state.entries
    });
    this.target.addEventListener('awesomplete-select', onAwesompleteSelect.bind(this));
    as.replace = awesompleteReplace;
    if (as._list[0].label && as._list[0].value) {
      var item = (as._list.find(function(x) {
        return x.value == value
      }));
      if (item) {
        as.input.value = item.label;
      } else {
        as.input.value = ''
      }
    } else {
      as.input.value = value;
    }
  }

  function awesompleteReplace(text) {
    debugger;
    this.input.value = text;
  }

  function onAwesompleteSelect(event) {
    debugger;
    document.getElementsByName(this.state.name)[0].value = event.text.value ? event.text.value : event.text;
  }

  function $render(_props, _slotView) {
    _elementOpenStart("div", "");
    _attr("element", "dist.test.test");
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
    _attr("class", "form-control input-sm");
    _attr("name", _state.name + '-display');
    _attr("data-minchars", "1");
    _attr("required", _props.required);
    _attr("oncreated", function(event) {
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
      initAwesomplete.bind(self)(_props.value);
    });
    _elementOpenEnd("input");
    _elementClose("input");
    _elementOpenStart("input", "");
    _attr("name", _state.name);
    _attr("value", _props.value);
    _attr("type", "hidden");
    _elementOpenEnd("input");
    _elementClose("input");
    _elementClose("div");
  }
  if (typeof $render === "function") {
    $export.render = $render;
  }
  return $export;
})());