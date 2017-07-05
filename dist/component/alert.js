yalla.framework.addComponent("/dist/component/alert", (function() {
  var $patchChanges = yalla.framework.renderToScreen;
  var $inject = yalla.framework.createInjector("/dist/component/alert");
  var $export = {};
  var $path = "/dist/component/alert";
  var _elementName = "dist.component.alert";
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
      messages: formatMessages(props.message, props.alertType, props.titleCase)
    };
  }

  function onPropertyChange(event) {
    this.state.messages = formatMessages(this.properties.message, this.properties.alertType, this.properties.titleCase);
  }

  function className(alertType) {
    var base = "alert custom-alert ";
    if (alertType == "error") base = base + "alert-danger";
    else if (alertType == "success") base = base + "alert-success";
    else if (alertType == "info") base = base + "alert-info";
    else if (alertType == "warning") base = base + "alert-warning";
    return base;
  }

  function formatMessages(message, alertType, titleCase) {
    var finalResult = [];
    if (message.constructor !== Array) message = [{
      message: message
    }];
    for (var i in message) {
      if (message[i].message != "") {
        var msg = message[i];
        if (msg.message.toLowerCase() == 'needrelogin') {
          debugger;
          storage.me.erase();
          window.location.hash = "#app";
        }
        if (alertType != "error") {
          msg.message = (titleCase ? msg.message.toTitleCase() : msg.message.toSentenceCase());
        } else {
          msg.message = msg.message.toSentenceCase();
        }
        finalResult.push(msg);
      }
    }
    return finalResult;
  }

  function $render(_props, _slotView) {
    _elementOpenStart("div", "");
    _attr("element", "dist.component.alert");
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
    _elementOpenStart("div", "");
    _attr("class", "row");
    _elementOpenEnd("div");
    if (_state.messages.length != 0) {
      _elementOpenStart("div", "");
      _attr("class", className.bind(self)(_props.alertType));
      _attr("role", "alert");
      _elementOpenEnd("div");
      var _array = _state.messages || [];
      _array.forEach(function(error) {
        _elementOpenStart("div", "");
        _elementOpenEnd("div");
        _text("" + ((error.name ? error.name + ': ' : '') + error.message) + "");
        _elementClose("div");
      });
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