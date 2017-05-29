yalla.framework.addComponent("/dist/component/header-two", (function() {
  var $path = "/dist/component/header-two";
  var $patchChanges = yalla.framework.renderToScreen;
  var $storeRef = yalla.framework.storeRef;
  var $export = {};
  var $context = {};
  var $patchRef = yalla.framework.patchRef;
  var $inject = yalla.framework.createInjector("/dist/component/header-two");
  var _elementOpen = IncrementalDOM.elementOpen,
    _elementClose = IncrementalDOM.elementClose,
    _elementOpenStart = IncrementalDOM.elementOpenStart,
    _elementOpenEnd = IncrementalDOM.elementOpenEnd,
    _elementVoid = IncrementalDOM.elementVoid,
    _text = IncrementalDOM.text,
    _attr = IncrementalDOM.attr,
    _skip = IncrementalDOM.skip;

  function $render(_data, _slotView) {
    _elementOpenStart("nav", "");
    _attr("element", "dist.component.header-two");
    _attr("class", "navbar navbar-default navbar-fixed-top");
    _elementOpenEnd("nav");
    _elementOpenStart("div", "");
    _attr("class", "container");
    _elementOpenEnd("div");
    _elementOpenStart("div", "");
    _attr("class", "navbar-header");
    _elementOpenEnd("div");
    _elementOpenStart("button", "");
    _attr("type", "button");
    _attr("class", "navbar-toggle collapsed");
    _attr("data-toggle", "collapse");
    _attr("data-target", "#navbar");
    _attr("aria-expanded", "false");
    _attr("aria-controls", "navbar");
    _elementOpenEnd("button");
    _elementOpenStart("span", "");
    _attr("class", "sr-only");
    _elementOpenEnd("span");
    _text("Toggle navigation");
    _elementClose("span");
    _elementOpenStart("span", "");
    _attr("class", "icon-bar");
    _elementOpenEnd("span");
    _elementClose("span");
    _elementOpenStart("span", "");
    _attr("class", "icon-bar");
    _elementOpenEnd("span");
    _elementClose("span");
    _elementOpenStart("span", "");
    _attr("class", "icon-bar");
    _elementOpenEnd("span");
    _elementClose("span");
    _elementClose("button");
    _elementOpenStart("a", "");
    _attr("class", "navbar-brand");
    _attr("href", "#");
    _elementOpenEnd("a");
    _elementClose("a");
    _elementClose("div");
    _elementOpenStart("div", "");
    _attr("id", "navbar");
    _attr("class", "collapse navbar-collapse");
    _elementOpenEnd("div");
    _elementOpenStart("ul", "");
    _attr("class", "nav navbar-nav");
    _elementOpenEnd("ul");
    _elementOpenStart("li", "");
    _elementOpenEnd("li");
    _elementOpenStart("a", "");
    _elementOpenEnd("a");
    _text("Hello World");
    _elementClose("a");
    _elementClose("li");
    _elementClose("ul");
    _elementClose("div");
    _elementClose("div");
    _elementClose("nav");
    _elementOpenStart("script", "");
    _elementOpenEnd("script");
    _elementClose("script");
  }
  if (typeof $render === "function") {
    $export.render = $render;
  }
  return $export;
})());