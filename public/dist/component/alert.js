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
      messages: toArrayofMessages(props.message, props.alertType, props.titleCase)
    };
  }

  function className(alertType) {
    var base = "alert custom-alert ";
    if (alertType == "error") base = base + "alert-danger";
    else if (alertType == "success") base = base + "alert-success";
    else if (alertType == "info") base = base + "alert-info";
    else if (alertType == "warning") base = base + "alert-warning";
    return base;
  }

  function toArrayofMessages(message, alertType, titleCase) {
    var result = [];
    if (!message) {
      result = [];
    } else if (typeof message === "string") {
      result.push(message);
    } else if (message.hasOwnProperty("error")) {
      result.push(message.error);
    } else if (message.hasOwnProperty("errors")) {
      var errorList = [];
      if (!message.errors.length) errorList.push(message.errors)
      else errorList = message.errors;

      for (var i in errorList) {
        for (var name in errorList[i]) {
          if (errorList[i].hasOwnProperty(name)) {
            result.push(name + ": " + errorList[i][name]);
          }
        }
      }
    }
    var finalResult = [];
    for (i = 0; i < result.length; i++) {
      if (result[i] != "") {
        var msg = result[i];
        if (alertType != "error") {
          msg = (titleCase ? msg.toTitleCase() : msg.toSentenceCase());
        } else {
          msg = msgs.toSentenceCase();
        }
        finalResult.push(msg);
      }
    }
    return finalResult;
  }

  function $render(_props, _slotView) {
    _elementOpenStart("link", "");
    _attr("element", "dist.component.alert");
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
    if (_state.messages.length != 0) {
      _elementOpenStart("div", "");
      _attr("element", "dist.component.alert");
      _attr("class", className.bind(self)(_props.alertType));
      _attr("role", "alert");
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
      var _array = _state.messages || [];
      _array.forEach(function(error) {
        _elementOpenStart("div", "");
        _elementOpenEnd("div");
        _text("" + (error) + "");
        _elementClose("div");
      });
      _elementClose("div");
    }
  }
  if (typeof $render === "function") {
    $export.render = $render;
  }
  return $export;
})());