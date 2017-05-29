yalla.framework.addComponent("/dist/component/card-itinerary", (function() {
  var $path = "/dist/component/card-itinerary";
  var $patchChanges = yalla.framework.renderToScreen;
  var $storeRef = yalla.framework.storeRef;
  var $export = {};
  var $context = {};
  var $patchRef = yalla.framework.patchRef;
  var $inject = yalla.framework.createInjector("/dist/component/card-itinerary");
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
      "element": "dist.component.card-itinerary",
      "title": _data.itr.fromDateTime.toDateComponents(),
      "remarks": _data.itr.remarks
    }, function(slotName) {
      if (_data.itr.entry.transport) {
        _elementOpenStart("div", "");
        _elementOpenEnd("div");
        _text("Airline: " + (_data.itr.entry.transport) + "");
        _elementOpenStart("br", "");
        _elementOpenEnd("br");
        _elementClose("br");
        _text("Departure: " + (_data.itr.entry.departure.toDateComponents(false, true)) + "");
        _elementOpenStart("br", "");
        _elementOpenEnd("br");
        _elementClose("br");
        _text("From: " + (_data.itr.entry.departFrom) + "");
        _elementOpenStart("br", "");
        _elementOpenEnd("br");
        _elementClose("br");
        _text("Arrival: " + (_data.itr.entry.arrival.toDateComponents(false, true)) + "");
        _elementOpenStart("br", "");
        _elementOpenEnd("br");
        _elementClose("br");
        _text("At: " + (_data.itr.entry.arriveAt) + "");
        _elementOpenStart("br", "");
        _elementOpenEnd("br");
        _elementClose("br");
        _elementClose("div");
      }
      if (_data.itr.entry.hotel) {
        _elementOpenStart("div", "");
        _elementOpenEnd("div");
        _text("Hotel: " + (_data.itr.entry.hotel) + "");
        _elementOpenStart("br", "");
        _elementOpenEnd("br");
        _elementClose("br");
        _text("City: " + (_data.itr.entry.city) + "");
        _elementOpenStart("br", "");
        _elementOpenEnd("br");
        _elementClose("br");
        _text("Check in: " + (_data.itr.entry.checkIn.toDateComponents()) + "");
        _elementOpenStart("br", "");
        _elementOpenEnd("br");
        _elementClose("br");
        _text("Check out: " + (_data.itr.entry.checkOut.toDateComponents()) + "");
        _elementOpenStart("br", "");
        _elementOpenEnd("br");
        _elementClose("br");
        _elementClose("div");
      }
      if (_data.onedit || _data.ondelete) {
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
          return _data.onedit(_data.itr.id);
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
        _attr("value", "Delete");
        _attr("class", "form-control btn btn-info btn-block");
        _attr("onclick", function(event) {
          return _data.ondelete(_data.itr.id);
        });
        _elementOpenEnd("input");
        _elementClose("input");
        _elementClose("div");
        _elementClose("div");
        _elementClose("div");
      }
    });
  }
  if (typeof $render === "function") {
    $export.render = $render;
  }
  return $export;
})());