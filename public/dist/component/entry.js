yalla.framework.addComponent("/dist/component/entry", (function() {
  var $path = "/dist/component/entry";
  var $patchChanges = yalla.framework.renderToScreen;
  var $export = {};
  var $context = {};
  var _parentComponent = yalla.framework.getParentComponent;
  var $inject = yalla.framework.createInjector("/dist/component/entry");

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

  function whatDivClass(divClass) {
    if (divClass) return divClass;
    else return "col-xs-12 col-sm-6 col-md-6 col-lg-6";
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
    // The component of this object
    var __component = IncrementalDOM.currentElement();
    __component.__state = __component.__state || initState.bind(__component)(_props);
    var __state = __component.__state;
    _elementClose("link");
    _elementOpenStart("div", "");
    _attr("element", "dist.component.entry");
    _attr("class", whatDivClass(_props.divClass));
    _elementOpenEnd("div");
    // The component of this object
    var __component = IncrementalDOM.currentElement();
    __component.__state = __component.__state || initState.bind(__component)(_props);
    var __state = __component.__state;
    _elementOpenStart("div", "");
    _attr("class", "form-group custom-entry-margin");
    _elementOpenEnd("div");
    if (_props.prompt && whatType(_props.type) != 'checkbox') {
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
      _attr("placeholder", _props.placeholder ? _props.placeholder : '');
      _attr("value", _props.value ? _props.value : '');
      _elementOpenEnd("input");
      _elementClose("input");
    }
    if (whatType(_props.type) == 'hidden') {
      _elementOpenStart("input", "");
      _attr("type", _props.type);
      _attr("name", _props.name);
      _attr("value", _props.value ? _props.value : '');
      _elementOpenEnd("input");
      _elementClose("input");
    }
    if (whatType(_props.type) == 'button') {
      _elementOpenStart("input", "");
      _attr("type", _props.type);
      _attr("name", _props.name);
      _attr("class", _props.class ? _props.class : 'form-control btn btn-info btn-block');
      _attr("value", _props.value ? _props.value : '');
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
        return buttonClicked.bind(self)();
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
      _text("" + (_props.value ? _props.value : '') + "");
      _elementClose("textarea");
    }
    if (whatType(_props.type) == 'hyperlink') {
      _elementOpenStart("a", "");
      _attr("href", _props.href);
      _attr("class", _props.class ? _props.class : '');
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
      _attr("checked", _props.value);
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