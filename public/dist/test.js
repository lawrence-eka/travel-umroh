yalla.framework.addComponent("/dist/test", (function() {
  var $path = "/dist/test";
  var $patchChanges = yalla.framework.renderToScreen;
  var $storeRef = yalla.framework.storeRef;
  var $export = {};
  var $context = {};
  var $patchRef = yalla.framework.patchRef;
  var $inject = yalla.framework.createInjector("/dist/test");
  var _elementOpen = IncrementalDOM.elementOpen,
    _elementClose = IncrementalDOM.elementClose,
    _elementOpenStart = IncrementalDOM.elementOpenStart,
    _elementOpenEnd = IncrementalDOM.elementOpenEnd,
    _elementVoid = IncrementalDOM.elementVoid,
    _text = IncrementalDOM.text,
    _attr = IncrementalDOM.attr,
    _skip = IncrementalDOM.skip;

  var x = 1;

  function onclick() {
    x = (x == 1 ? 2 : 1);
    $patchChanges();
  }

  function isVisible(obj, num) {

    if (x == num)
    else return "hideThis"
  }

  function $render(_data, _slotView) {
    _elementOpenStart("style", "");
    _elementOpenEnd("style");
    _text("\r\n[element='dist.test'] .hideThis {display:none;}");
    _elementClose("style");
    _elementOpenStart("div", "");
    _attr("element", "dist.test");
    _elementOpenEnd("div");
    _elementOpenStart("input", "");
    _attr("type", "button");
    _attr("onclick", function(event) {
      return onclick();
    });
    _elementOpenEnd("input");
    _elementClose("input");
    _elementOpenStart("form", "");
    _elementOpenEnd("form");
    _elementOpenStart("div", "");
    _attr("name", "hello");
    _attr("class", isVisible(this, 1));
    _elementOpenEnd("div");
    _elementOpenStart("input", "");
    _attr("type", "text");
    _attr("name", "hello");
    _attr("value", "hello");
    _elementOpenEnd("input");
    _elementClose("input");
    _elementClose("div");
    _elementOpenStart("div", "");
    _attr("name", "world");
    _attr("class", isVisible(this, 2));
    _elementOpenEnd("div");
    _elementOpenStart("input", "");
    _attr("type", "text");
    _attr("name", "world");
    _attr("value", "world");
    _elementOpenEnd("input");
    _elementClose("input");
    _elementClose("div");
    _elementClose("form");
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