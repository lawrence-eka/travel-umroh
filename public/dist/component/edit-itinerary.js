yalla.framework.addComponent("/dist/component/edit-itinerary", (function() {
  var $path = "/dist/component/edit-itinerary";
  var $patchChanges = yalla.framework.renderToScreen;
  var $storeRef = yalla.framework.storeRef;
  var $export = {};
  var $context = {};
  var $patchRef = yalla.framework.patchRef;
  var $inject = yalla.framework.createInjector("/dist/component/edit-itinerary");
  var _elementOpen = IncrementalDOM.elementOpen,
    _elementClose = IncrementalDOM.elementClose,
    _elementOpenStart = IncrementalDOM.elementOpenStart,
    _elementOpenEnd = IncrementalDOM.elementOpenEnd,
    _elementVoid = IncrementalDOM.elementVoid,
    _text = IncrementalDOM.text,
    _attr = IncrementalDOM.attr,
    _skip = IncrementalDOM.skip;


  var errorMessage = '';
  var x = "";

  function loadItinerary(data, itinerary) {
    itinerary = (itinerary ? itinerary : {
      entry: {}
    });
    if (x == "") x = entryType(itinerary);
    return itinerary;

  }

  function save(form, onSave) {
    var package = {};
    itinerary.id = form.elements.id.value;
    itinerary.travelAgentId = form.elements.travelAgentId.value;
    itinerary.packageName = form.elements.packageName.value;
    itinerary.tourLeader = form.elements.tourLeader.value;
    itinerary.validFrom = (new Date(form.elements.validFrom.value)).getTime();
    itinerary.validUntil = (new Date(form.elements.validUntil.value)).getTime();
    itinerary.costLandArrangements = form.elements.costLandArrangements.value;
    itinerary.costTickets = form.elements.costTickets.value;
    itinerary.isItineraryConfirmed = (form.elements.isItineraryConfirmed.value == "on");
    itinerary.isPublished = (form.elements.isPublished.value == "on");
    onSave(package);
  }

  function xx(c) {
    return x == c;
  }

  function onEntryTypeChanged(et, data) {
    data.entry = {};
    if (et.value == 'Hotel') data.entry.hotel = "";
    else data.entry.transport = "";
    x = entryType(data);
    $patchChanges();
  }

  function entryType(data) {
    if (data.entry && data.entry.hotel != null) return 'Hotel';
    else return 'Transport';
  }


  function $render(_data, _slotView) {
    _elementOpenStart("link", "");
    _attr("element", "dist.component.edit-itinerary");
    _attr("href", "asset/css/registration.css");
    _attr("rel", "stylesheet");
    _elementOpenEnd("link");
    _elementClose("link");
    $context["alert"] = $inject("/component/alert");
    var alert = $context["alert"];
    _elementOpenStart("div", "");
    _attr("element", "dist.component.edit-itinerary");
    _attr("class", "container all-5px");
    _elementOpenEnd("div");
    _elementOpenStart("div", "");
    _attr("class", "row centered-form no-top-margin");
    _elementOpenEnd("div");
    _elementOpenStart("div", "");
    _attr("class", "form-panel col-xs-12 col-sm-12 col-md-12 col-lg-12");
    _elementOpenEnd("div");
    _elementOpenStart("div", "");
    _attr("class", "panel panel-default");
    _elementOpenEnd("div");
    _elementOpenStart("div", "");
    _attr("class", "panel-heading");
    _elementOpenEnd("div");
    if (_data.itinerary) {
      _elementOpenStart("h3", "");
      _attr("class", "panel-title");
      _elementOpenEnd("h3");
      _text("Edit Package Info");
      _elementClose("h3");
    }
    if (!_data.itinerary) {
      _elementOpenStart("h3", "");
      _attr("class", "panel-title");
      _elementOpenEnd("h3");
      _text("New Package");
      _elementClose("h3");
    }
    _elementClose("div");
    _elementOpenStart("div", "");
    _attr("class", "panel-body");
    _elementOpenEnd("div");
    (function(domNode) {
      var node = domNode.element;

      function asyncFunc__1(data) {
        _elementOpenStart("form", "");
        _attr("role", "form");
        _attr("onsubmit", function(event) {
          return save(this, _data.onsave);
        });
        _elementOpenEnd("form");
        _elementOpenStart("input", "");
        _attr("type", "hidden");
        _attr("name", "id");
        _attr("value", data.id);
        _elementOpenEnd("input");
        _elementClose("input");
        _elementOpenStart("input", "");
        _attr("type", "hidden");
        _attr("name", "packageId");
        _attr("value", data.packageId);
        _elementOpenEnd("input");
        _elementClose("input");
        _elementOpenStart("div", "");
        _attr("class", "row");
        _elementOpenEnd("div");
        _elementOpenStart("div", "");
        _attr("class", "col-xs-12 col-sm-6 col-md-6 col-lg-6");
        _elementOpenEnd("div");
        _elementOpenStart("div", "");
        _attr("class", "form-group");
        _elementOpenEnd("div");
        _elementOpenStart("select", "");
        _attr("class", "form-control");
        _attr("name", "entryType");
        _attr("id", "entryType");
        _attr("onchange", function(event) {
          return onEntryTypeChanged(this, data);
        });
        _elementOpenEnd("select");
        _elementOpenStart("option", "");
        _attr("value", "Hotel");
        _attr("selected", entryType(data) == 'Hotel');
        _elementOpenEnd("option");
        _text("Hotel");
        _elementClose("option");
        _elementOpenStart("option", "");
        _attr("value", "Transport");
        _attr("selected", entryType(data) == 'Transport');
        _elementOpenEnd("option");
        _text("Airline");
        _elementClose("option");
        _elementOpenStart("option", "");
        _attr("value", "Train");
        _attr("selected", entryType(data) == 'Train');
        _elementOpenEnd("option");
        _text("Train");
        _elementClose("option");
        _elementOpenStart("option", "");
        _attr("value", "Bus/Car");
        _attr("selected", entryType(data) == 'Bus/Car');
        _elementOpenEnd("option");
        _text("Bus/Car");
        _elementClose("option");
        _elementClose("select");
        _elementClose("div");
        _elementClose("div");
        _elementClose("div");
        if (!xx('Hotel')) {
          _elementOpenStart("div", "");
          _elementOpenEnd("div");
          _elementOpenStart("div", "");
          _attr("class", "row");
          _elementOpenEnd("div");
          _elementOpenStart("div", "");
          _attr("class", "col-xs-12 col-sm-6 col-md-6 col-lg-6");
          _elementOpenEnd("div");
          _elementOpenStart("div", "");
          _attr("class", "form-group");
          _elementOpenEnd("div");
          _elementOpenStart("input", "");
          _attr("type", "datetime-local");
          _attr("name", "departure");
          _attr("class", "form-control input-sm");
          _attr("placeholder", "Departure");
          _attr("value", (data.entry.departure ? data.entry.departure.toYYYYMMDD(true) : ''));
          _elementOpenEnd("input");
          _elementClose("input");
          _elementClose("div");
          _elementClose("div");
          _elementClose("div");
          _elementOpenStart("div", "");
          _attr("class", "row");
          _elementOpenEnd("div");
          _elementOpenStart("div", "");
          _attr("class", "col-xs-12 col-sm-6 col-md-6 col-lg-6");
          _elementOpenEnd("div");
          _elementOpenStart("div", "");
          _attr("class", "form-group");
          _elementOpenEnd("div");
          _elementOpenStart("input", "");
          _attr("type", "text");
          _attr("name", "departFrom");
          _attr("class", "form-control input-sm");
          _attr("placeholder", "Depart From");
          _attr("value", data.entry.departFrom);
          _elementOpenEnd("input");
          _elementClose("input");
          _elementClose("div");
          _elementClose("div");
          _elementClose("div");
          _elementOpenStart("div", "");
          _attr("class", "row");
          _elementOpenEnd("div");
          _elementOpenStart("div", "");
          _attr("class", "col-xs-12 col-sm-6 col-md-6 col-lg-6");
          _elementOpenEnd("div");
          _elementOpenStart("div", "");
          _attr("class", "form-group");
          _elementOpenEnd("div");
          _elementOpenStart("input", "");
          _attr("type", "datetime-local");
          _attr("name", "arrival");
          _attr("class", "form-control input-sm");
          _attr("placeholder", "Arrival");
          _attr("value", (data.entry.arrival ? data.entry.arrival.toYYYYMMDD(true) : ''));
          _elementOpenEnd("input");
          _elementClose("input");
          _elementClose("div");
          _elementClose("div");
          _elementClose("div");
          _elementOpenStart("div", "");
          _attr("class", "row");
          _elementOpenEnd("div");
          _elementOpenStart("div", "");
          _attr("class", "col-xs-12 col-sm-6 col-md-6 col-lg-6");
          _elementOpenEnd("div");
          _elementOpenStart("div", "");
          _attr("class", "form-group");
          _elementOpenEnd("div");
          _elementOpenStart("input", "");
          _attr("type", "text");
          _attr("name", "arriveAt");
          _attr("class", "form-control input-sm");
          _attr("placeholder", "Arrive At");
          _attr("value", data.entry.arriveAt);
          _elementOpenEnd("input");
          _elementClose("input");
          _elementClose("div");
          _elementClose("div");
          _elementClose("div");
          _elementOpenStart("div", "");
          _attr("class", "row");
          _elementOpenEnd("div");
          _elementOpenStart("div", "");
          _attr("class", "col-xs-12 col-sm-6 col-md-6 col-lg-6");
          _elementOpenEnd("div");
          _elementOpenStart("div", "");
          _attr("class", "form-group");
          _elementOpenEnd("div");
          _elementOpenStart("input", "");
          _attr("type", "text");
          _attr("name", "airline");
          _attr("class", "form-control input-sm");
          _attr("placeholder", "Airline");
          _attr("value", data.entry.airline);
          _elementOpenEnd("input");
          _elementClose("input");
          _elementClose("div");
          _elementClose("div");
          _elementClose("div");
          _elementClose("div");
        }
        if (xx('Hotel')) {
          _elementOpenStart("div", "");
          _elementOpenEnd("div");
          _elementOpenStart("div", "");
          _attr("class", "row");
          _elementOpenEnd("div");
          _elementOpenStart("div", "");
          _attr("class", "col-xs-12 col-sm-6 col-md-6 col-lg-6");
          _elementOpenEnd("div");
          _elementOpenStart("div", "");
          _attr("class", "form-group");
          _elementOpenEnd("div");
          _elementOpenStart("input", "");
          _attr("type", "datetime-local");
          _attr("name", "checkIn");
          _attr("class", "form-control input-sm");
          _attr("placeholder", "Check In");
          _attr("value", (data.entry.checkIn ? data.entry.checkIn.toYYYYMMDD(true) : ''));
          _elementOpenEnd("input");
          _elementClose("input");
          _elementClose("div");
          _elementClose("div");
          _elementClose("div");
          _elementOpenStart("div", "");
          _attr("class", "row");
          _elementOpenEnd("div");
          _elementOpenStart("div", "");
          _attr("class", "col-xs-12 col-sm-6 col-md-6 col-lg-6");
          _elementOpenEnd("div");
          _elementOpenStart("div", "");
          _attr("class", "form-group");
          _elementOpenEnd("div");
          _elementOpenStart("input", "");
          _attr("type", "datetime-local");
          _attr("name", "checkOut");
          _attr("class", "form-control input-sm");
          _attr("placeholder", "Check Out");
          _attr("value", (data.entry.checkOut ? data.entry.checkOut.toYYYYMMDD(true) : ''));
          _elementOpenEnd("input");
          _elementClose("input");
          _elementClose("div");
          _elementClose("div");
          _elementClose("div");
          _elementOpenStart("div", "");
          _attr("class", "row");
          _elementOpenEnd("div");
          _elementOpenStart("div", "");
          _attr("class", "col-xs-12 col-sm-6 col-md-6 col-lg-6");
          _elementOpenEnd("div");
          _elementOpenStart("div", "");
          _attr("class", "form-group");
          _elementOpenEnd("div");
          _elementOpenStart("input", "");
          _attr("type", "text");
          _attr("name", "hotel");
          _attr("class", "form-control input-sm");
          _attr("placeholder", "Hotel");
          _attr("value", data.entry.hotel);
          _elementOpenEnd("input");
          _elementClose("input");
          _elementClose("div");
          _elementClose("div");
          _elementClose("div");
          _elementOpenStart("div", "");
          _attr("class", "row");
          _elementOpenEnd("div");
          _elementOpenStart("div", "");
          _attr("class", "col-xs-12 col-sm-6 col-md-6 col-lg-6");
          _elementOpenEnd("div");
          _elementOpenStart("div", "");
          _attr("class", "form-group");
          _elementOpenEnd("div");
          _elementOpenStart("input", "");
          _attr("type", "text");
          _attr("name", "city");
          _attr("class", "form-control input-sm");
          _attr("placeholder", "City");
          _attr("value", data.entry.city);
          _elementOpenEnd("input");
          _elementClose("input");
          _elementClose("div");
          _elementClose("div");
          _elementClose("div");
          _elementClose("div");
        }
        _elementOpenStart("div", "");
        _attr("class", "row");
        _elementOpenEnd("div");
        _elementOpenStart("div", "");
        _attr("class", "col-xs-12 col-sm-6 col-md-6 col-lg-6");
        _elementOpenEnd("div");
        _elementOpenStart("div", "");
        _attr("class", "form-group");
        _elementOpenEnd("div");
        _elementOpenStart("textarea", "");
        _attr("name", "remarks");
        _attr("class", "form-control input-sm");
        _attr("placeholder", "Remarks");
        _attr("value", data.remarks);
        _elementOpenEnd("textarea");
        _elementClose("textarea");
        _elementClose("div");
        _elementClose("div");
        _elementClose("div");
        $context["alert"].render({
          "alertType": 'error',
          "message": errorMessage
        }, function(slotName) {});
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
        _attr("type", "submit");
        _attr("value", _data.itinerary ? 'Save' : 'Register');
        _attr("class", "btn btn-info btn-block");
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
        _attr("value", "Cancel");
        _attr("class", "form-control btn btn-info btn-block");
        _attr("onclick", function(event) {
          return _data.oncancel();
        });
        _elementOpenEnd("input");
        _elementClose("input");
        _elementClose("div");
        _elementClose("div");
        _elementClose("div");
        _elementClose("form");
      }
      var promise = loadItinerary(_data.itinerary);
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