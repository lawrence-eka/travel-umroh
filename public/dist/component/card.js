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


  function prepareClass(hasOnClick) {
    var panelClass = 'panel panel-default ';
    var className = panelClass + (hasOnClick ? 'clickable' : '');
    return panelClass;
  }


  function $render(_data, _slotView) {
    _elementOpenStart("style", "");
    _elementOpenEnd("style");
    _text("\r\n[element='dist.component.card'] .clickable{cursor: pointer;}");
    _elementClose("style");
    _elementOpenStart("div", "");
    _attr("element", "dist.component.card");
    _attr("onclick", function(event) {
      return _data.onclick()
    });
    _attr("class", prepareClass(_data.onclick));
    _elementOpenEnd("div");
    _elementOpenStart("div", "");
    _attr("class", "panel-heading");
    _elementOpenEnd("div");
    _elementOpenStart("h3", "");
    _attr("class", "panel-title");
    _elementOpenEnd("h3");
    _text("" + (_data.title) + "");
    _elementClose("h3");
    _elementClose("div");
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
    _elementOpenStart("script", "");
    _elementOpenEnd("script");
    _elementClose("script");
  }
  if (typeof $render === "function") {
    $export.render = $render;
  }
  return $export;
})());