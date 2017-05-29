yalla.framework.addComponent("/dist/component/alert", (function() {
  var $path = "/dist/component/alert";
  var $patchChanges = yalla.framework.renderToScreen;
  var $storeRef = yalla.framework.storeRef;
  var $export = {};
  var $context = {};
  var $patchRef = yalla.framework.patchRef;
  var $inject = yalla.framework.createInjector("/dist/component/alert");
  var _elementOpen = IncrementalDOM.elementOpen,
    _elementClose = IncrementalDOM.elementClose,
    _elementOpenStart = IncrementalDOM.elementOpenStart,
    _elementOpenEnd = IncrementalDOM.elementOpenEnd,
    _elementVoid = IncrementalDOM.elementVoid,
    _text = IncrementalDOM.text,
    _attr = IncrementalDOM.attr,
    _skip = IncrementalDOM.skip;

  function messages(msg, alertType, titleCase) {
    if (alertType != "error") {
      return (titleCase ? msg.toTitleCase() : msg.toSentenceCase());
    } else {
      var msgs = toErrorMessages(msg);
      for (var i = 0; i < msgs.length; i++) msgs[i] = msgs[i].toSentenceCase();
      return msgs;
    }
  }

  function className(alertType) {
    var base = "alert ";
    if (alertType == "error") return base + "alert-danger";
    else if (alertType == "success") return base + "alert-success";
    else if (alertType == "info") return base + "alert-info";
    else if (alertType == "warning") return base + "alert-warning";
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

  function $render(_data, _slotView) {
    if (_data.message) {
      _elementOpenStart("div", "");
      _attr("element", "dist.component.alert");
      _attr("class", className(_data.alertType));
      _attr("role", "alert");
      _elementOpenEnd("div");
      var _array = messages(_data.message, _data.alertType, _data.titleCase) || [];
      _array.forEach(function(error) {
        _elementOpenStart("p", "");
        _elementOpenEnd("p");
        _text("" + (error) + "");
        _elementClose("p");
      });
      _elementClose("div");
    }
    _elementOpenStart("script", "");
    _elementOpenEnd("script");
    _elementClose("script");
  }
  if (typeof $render === "function") {
    $export.render = $render;
  }
  return $export;
})());