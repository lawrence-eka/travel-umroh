yalla.framework.addComponent("/dist/component/card-package", (function() {
  var $path = "/dist/component/card-package";
  var $patchChanges = yalla.framework.renderToScreen;
  var $storeRef = yalla.framework.storeRef;
  var $export = {};
  var $context = {};
  var $patchRef = yalla.framework.patchRef;
  var $inject = yalla.framework.createInjector("/dist/component/card-package");
  var _elementOpen = IncrementalDOM.elementOpen,
    _elementClose = IncrementalDOM.elementClose,
    _elementOpenStart = IncrementalDOM.elementOpenStart,
    _elementOpenEnd = IncrementalDOM.elementOpenEnd,
    _elementVoid = IncrementalDOM.elementVoid,
    _text = IncrementalDOM.text,
    _attr = IncrementalDOM.attr,
    _skip = IncrementalDOM.skip;

  function $render(_data, _slotView) {
    $context["card"] = $inject("/component/card");
    var card = $context["card"];
    $context["card"].render({
      "element": "dist.component.card-package",
      "title": _data.pkg.packageName,
      "onclick": function(event) {
        return _data.onclick();
      }
    }, function(slotName) {
      _elementOpenStart("div", "");
      _elementOpenEnd("div");
      _text("Travel Date: " + (_data.pkg.travelDateFrom.toStringDateRange(_data.pkg.travelDateUntil)) + "");
      _elementOpenStart("br", "");
      _elementOpenEnd("br");
      _elementClose("br");
      _text("Land Arrangements: " + (_data.pkg.costLandArrangements ? _data.pkg.costLandArrangements.toFormattedString() : '') + "");
      _elementOpenStart("br", "");
      _elementOpenEnd("br");
      _elementClose("br");
      _text("Tickets: " + (_data.pkg.costTickets.toFormattedString()) + "");
      if (_data.onedit || _data.onshowItinerary) {
        _elementOpenStart("div", "");
        _attr("class", "row");
        _elementOpenEnd("div");
        _elementOpenStart("div", "");
        _attr("class", "col-xs-6 col-sm-6 col-md-6 col-lg-6");
        _elementOpenEnd("div");
        _elementOpenStart("div", "");
        _attr("class", "form-group");
        _elementOpenEnd("div");
        _elementOpenStart("input", "");
        _attr("type", "button");
        _attr("value", "Edit");
        _attr("class", "form-control btn btn-info btn-block");
        _attr("onclick", function(event) {
          return _data.onedit(_data.pkg.id);
        });
        _elementOpenEnd("input");
        _elementClose("input");
        _elementClose("div");
        _elementClose("div");
        _elementOpenStart("div", "");
        _attr("class", "col-xs-6 col-sm-6 col-md-6 col-lg-6");
        _elementOpenEnd("div");
        _elementOpenStart("div", "");
        _attr("class", "form-group");
        _elementOpenEnd("div");
        _elementOpenStart("input", "");
        _attr("type", "button");
        _attr("value", "Itinerary...");
        _attr("class", "form-control btn btn-info btn-block");
        _attr("onclick", function(event) {
          return _data.onshowItinerary(_data.pkg.id);
        });
        _elementOpenEnd("input");
        _elementClose("input");
        _elementClose("div");
        _elementClose("div");
        _elementClose("div");
      }
      _elementClose("div");
    });
  }
  if (typeof $render === "function") {
    $export.render = $render;
  }
  return $export;
})());