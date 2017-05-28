yalla.framework.addComponent("/dist/component/edit-itinerary", (function() {
  var $path = "/dist/component/edit-itinerary";
  var $patchChanges = yalla.framework.renderToScreen;
  var $storeRef = yalla.framework.storeRef;
  var $export = {};
  var $context = {};
  var $patchRef = yalla.framework.patchRef;
  var $inject = yalla.framework.createInjector("/dist/component/edit-itinerary");

  function ComponentEvent(type, data, target) {
    this.data = data;
    this.target = target;
    this.type = type;
  }

  var _elementOpen = IncrementalDOM.elementOpen,
    _elementClose = IncrementalDOM.elementClose,
    _elementOpenStart = IncrementalDOM.elementOpenStart,
    _elementOpenEnd = IncrementalDOM.elementOpenEnd,
    _elementVoid = IncrementalDOM.elementVoid,
    _text = IncrementalDOM.text,
    _attr = IncrementalDOM.attr,
    _skip = IncrementalDOM.skip;


  function onClick(button) {

    x = button.value;
    $patchChanges();
  }

  function setButtonClass(btn) {
    return (btn == x ? "form-control btn btn-info btn-block" : "form-control btn btn-default btn-block");
  }

  var errorMessage = '';
  var x = "";

  function loadItinerary(itinerary) {
    itinerary = (itinerary ? itinerary : {
      entry: {}
    });
    debugger;
    if (x == "") {
      if (itinerary && itinerary.entry && itinerary.entry.hotel) x = 'Hotel';
      else x = 'Transport';
    }
    return itinerary;

  }

  function save(form, onSave) {
    if (form.form != null) form = form.form;
    var itinerary = {};
    itinerary.id = form.elements.id.value;
    itinerary.entry = {};
    itinerary.remarks = form.elements.remarks.value;
    if (x == 'Hotel') {
      itinerary.entry.hotel = form.elements.hotel.value;
      itinerary.entry.city = form.elements.city.value;
      itinerary.entry.checkIn = (new Date(form.elements.checkIn.value)).getTime();
      itinerary.entry.checkOut = (new Date(form.elements.checkOut.value)).getTime();
    } else {
      itinerary.entry.transport = form.elements.airline.value;
      itinerary.entry.departFrom = form.elements.departFrom.value;
      itinerary.entry.arriveAt = form.elements.arriveAt.value;
      itinerary.entry.departure = (new Date(form.elements.departure.value)).getTime();
      itinerary.entry.arrival = (new Date(form.elements.arrival.value)).getTime();
    }
    onSave(itinerary).then(function(err) {
      if (err) {
        debugger;
        errorMessage = JSON.stringify(err);
      } else {
        errorMessage = "";
      }
      $patchChanges();
    });
  }

  function isVisible(group) {
    if (x == group) return "";
    else return "setHidden";
  }

  function entryType(data) {
    if (!entry) return 'Transport';
    else return entry.transport;
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
    _elementOpenStart("style", "");
    _elementOpenEnd("style");
    _text("\n[element='dist.component.edit-itinerary'] .setHidden {display:none;}");
    _elementClose("style");
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
        _attr("class", "col-xs-6 col-sm-6 col-md-6 col-lg-6");
        _elementOpenEnd("div");
        _elementOpenStart("div", "");
        _attr("class", "form-group");
        _elementOpenEnd("div");
        _elementOpenStart("input", "");
        _attr("type", "button");
        _attr("value", "Hotel");
        _attr("name", "btnHotel");
        _attr("class", setButtonClass('Hotel'));
        _attr("onclick", function(event) {
          this.emitEvent = function(eventName, data) {
            var event = new ComponentEvent(eventName, data, this);
            if ('on' + eventName in _data) {
              _data['on' + eventName](event);
            }
          };
          return onClick.bind(this)(this);
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
        _attr("value", "Transport");
        _attr("name", "btnTransport");
        _attr("class", setButtonClass('Transport'));
        _attr("onclick", function(event) {
          this.emitEvent = function(eventName, data) {
            var event = new ComponentEvent(eventName, data, this);
            if ('on' + eventName in _data) {
              _data['on' + eventName](event);
            }
          };
          return onClick.bind(this)(this);
        });
        _elementOpenEnd("input");
        _elementClose("input");
        _elementClose("div");
        _elementClose("div");
        _elementClose("div");
        _elementOpenStart("div", "");
        _attr("class", isVisible('Transport'));
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
        _attr("value", data.entry.transport);
        _elementOpenEnd("input");
        _elementClose("input");
        _elementClose("div");
        _elementClose("div");
        _elementClose("div");
        _elementClose("div");
        _elementOpenStart("div", "");
        _attr("class", isVisible('Hotel'));
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
        _elementOpenEnd("textarea");
        _text("" + (data.remarks) + "");
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
        _attr("type", "button");
        _attr("value", _data.itinerary ? 'Save' : 'Register');
        _attr("class", "btn btn-info btn-block");
        _attr("onclick", function(event) {
          this.emitEvent = function(eventName, data) {
            var event = new ComponentEvent(eventName, data, this);
            if ('on' + eventName in _data) {
              _data['on' + eventName](event);
            }
          };
          return save.bind(this)(this, _data.onsave);
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
        _attr("value", "Cancel");
        _attr("class", "form-control btn btn-info btn-block");
        _attr("onclick", function(event) {
          this.emitEvent = function(eventName, data) {
            var event = new ComponentEvent(eventName, data, this);
            if ('on' + eventName in _data) {
              _data['on' + eventName](event);
            }
          };
          return _data.oncancel.bind(this)();
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