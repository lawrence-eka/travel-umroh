yalla.framework.addComponent("/dist/component/alert", (function() {
  var $path = "/dist/component/alert";
  var $patchChanges = yalla.framework.renderToScreen;
  var $export = {};
  var _context = {};
  var _parentComponent = yalla.framework.getParentComponent;
  var _merge = yalla.utils.merge;
  var $inject = yalla.framework.createInjector("/dist/component/alert");

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

  function className(alertType) {
    var base = "alert custom-alert ";
    if (alertType == "error") base = base + "alert-danger";
    else if (alertType == "success") base = base + "alert-success";
    else if (alertType == "info") base = base + "alert-info";
    else if (alertType == "warning") base = base + "alert-warning";
    return base;
  }

  toErrorMessages = function(err) {
    var result = [];
    if (typeof err === "string") {
      result.push(err);
    } else if (err.hasOwnProperty("error")) {
      result.push(err.error);
    } else if (err.hasOwnProperty("errors")) {
      var errorList = [];
      if (!err.errors.length) errorList.push(err.errors)
      else errorList = err.errors;

      for (var i in errorList) {
        for (var name in errorList[i]) {
          if (errorList[i].hasOwnProperty(name)) {
            result.push(name + ": " + errorList[i][name]);
          }
        }
      }
    }
    return result;
  }

  function messages(msg, alertType, titleCase) {
    var msgs = [];
    if (alertType != "error") {
      msgs.push(titleCase ? msg.toTitleCase() : msg.toSentenceCase());
    } else {
      var msgs = toErrorMessages(msg);
      for (var i = 0; i < msgs.length; i++) msgs[i] = msgs[i].toSentenceCase();
    }
    return msgs;
  }


  function $render(_props, _slotView) {
    _elementOpenStart("link", "");
    _attr("element", "dist.component.alert");
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
    if (_props.message) {
      _elementOpenStart("div", "");
      _attr("element", "dist.component.alert");
      _attr("class", className.bind(__self)(_props.alertType));
      _attr("role", "alert");
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
      var _array = messages(_props.message, _props.alertType, _props.titleCase) || [];
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