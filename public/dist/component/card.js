yalla.framework.addComponent("/dist/component/card", (function() {
  var $path = "/dist/component/card";
  var $patchChanges = yalla.framework.renderToScreen;
  var $storeRef = yalla.framework.storeRef;
  var $export = {};
  var $context = {};
  var $patchRef = yalla.framework.patchRef;
  var $inject = yalla.framework.createInjector("/dist/component/card");
  var _elementOpen = IncrementalDOM.elementOpen,
    _elementClose = IncrementalDOM.elementClose,
    _elementOpenStart = IncrementalDOM.elementOpenStart,
    _elementOpenEnd = IncrementalDOM.elementOpenEnd,
    _elementVoid = IncrementalDOM.elementVoid,
    _text = IncrementalDOM.text,
    _attr = IncrementalDOM.attr,
    _skip = IncrementalDOM.skip;


  function isClickable(hasOnClick) {
    if (hasOnClick) {
      return 'cursor:pointer';
    }
    return '';
  }


  function $render(_data, _slotView) {
    _elementOpenStart("div", "");
    _attr("element", "dist.component.card");
    _elementOpenEnd("div");
    _elementOpenStart("div", "");
    _attr("class", "container all-5px");
    _elementOpenEnd("div");
    _elementOpenStart("div", "");
    _attr("class", "row centered-form no-top-margin");
    _elementOpenEnd("div");
    _elementOpenStart("div", "");
    _attr("class", "col-xs-12 col-sm-12 col-md-12 col-lg-12");
    _elementOpenEnd("div");
    _elementOpenStart("div", "");
    _attr("onclick", function(event) {
      return _data.onclick();
    });
    _attr("class", "panel panel-default");
    _attr("style", isClickable(_data.onclick));
    _elementOpenEnd("div");
    if (_data.title) {
      _elementOpenStart("div", "");
      _attr("class", "panel-heading");
      _elementOpenEnd("div");
      _elementOpenStart("h3", "");
      _attr("class", "panel-title");
      _elementOpenEnd("h3");
      _text("" + (_data.title) + "");
      _elementClose("h3");
      _elementClose("div");
    }
    if (!_data.titleOnly) {
      _elementOpenStart("div", "");
      _elementOpenEnd("div");
      _elementOpenStart("div", "");
      _attr("class", "panel-body");
      _elementOpenEnd("div");
      _slotView("default");
      _elementClose("div");
      if (_data.remarks) {
        _elementOpenStart("div", "");
        _attr("class", "panel-footer");
        _elementOpenEnd("div");
        _text("" + (_data.remarks) + "");
        _elementClose("div");
      }
      _elementClose("div");
    }
    _elementClose("div");
    _elementClose("div");
    _elementClose("div");
    _elementClose("div");
    _elementClose("div");
    _elementOpenStart("script", "");
    _elementOpenEnd("script");
    _elementClose("script");
  }
  if (typeof $render === "function") {
    $export.render = $render;
  }
  return $export;
})());