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

  var x = "";

  function onEntryTypeChanged(form) {
    x = form.value;
    $patchChanges();
  }

  function loadData(y) {
    //if(x=="")
    x = y;
  }

  function $render(_data, _slotView) {
    _elementOpenStart("div", "");
    _attr("element", "dist.test");
    _elementOpenEnd("div");
    (function(domNode) {
      var node = domNode.element;

      function asyncFunc__1(data) {
        _elementOpenStart("select", "");
        _attr("class", "form-control");
        _attr("name", "entryType");
        _attr("id", "entryType");
        _attr("onchange", function(event) {
          return onEntryTypeChanged(this);
        });
        _elementOpenEnd("select");
        _elementOpenStart("option", "");
        _attr("value", "Hotel");
        _attr("selected", x == 'Hotel');
        _elementOpenEnd("option");
        _text("Hotel");
        _elementClose("option");
        _elementOpenStart("option", "");
        _attr("value", "Transport");
        _attr("selected", x == 'Transport');
        _elementOpenEnd("option");
        _text("Airline");
        _elementClose("option");
        _elementOpenStart("option", "");
        _attr("value", "Train");
        _attr("selected", x == 'Train');
        _elementOpenEnd("option");
        _text("Train");
        _elementClose("option");
        _elementOpenStart("option", "");
        _attr("value", "Bus/Car");
        _attr("selected", x == 'Bus/Car');
        _elementOpenEnd("option");
        _text("Bus/Car");
        _elementClose("option");
        _elementClose("select");
        if (x != 'Hotel') {
          _elementOpenStart("div", "");
          _elementOpenEnd("div");
          _text("ini transport");
          _elementClose("div");
        }
        if (x == 'Hotel') {
          _elementOpenStart("div", "");
          _elementOpenEnd("div");
          _text("ini hotel");
          _elementClose("div");
        }
      }
      var promise = loadData('Transport');
      if (promise && typeof promise == "object" && "then" in promise) {
        _skip();
        promise.then(function(_result) {
          $patchChanges(node, function() {
            asyncFunc__1.call(node, _result)
          });
        });
      } else {
        asyncFunc__1.call(node, promise)
      }
    })({
      element: IncrementalDOM.currentElement(),
      pointer: IncrementalDOM.currentPointer()
    });
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