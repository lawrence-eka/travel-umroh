yalla.framework.addComponent("/dist/component/edit-package", (function() {
  var $path = "/dist/component/edit-package";
  var $patchChanges = yalla.framework.renderToScreen;
  var $storeRef = yalla.framework.storeRef;
  var $export = {};
  var $context = {};
  var $patchRef = yalla.framework.patchRef;
  var $inject = yalla.framework.createInjector("/dist/component/edit-package");
  var _elementOpen = IncrementalDOM.elementOpen,
    _elementClose = IncrementalDOM.elementClose,
    _elementOpenStart = IncrementalDOM.elementOpenStart,
    _elementOpenEnd = IncrementalDOM.elementOpenEnd,
    _elementVoid = IncrementalDOM.elementVoid,
    _text = IncrementalDOM.text,
    _attr = IncrementalDOM.attr,
    _skip = IncrementalDOM.skip;


  var errorMessage = '';

  function loadPackage(package) {
    return package ? package : {};
  }

  function save(form, onSave) {
    var package = {};
    package.id = form.elements.id.value;
    package.travelAgentId = form.elements.travelAgentId.value;
    package.packageName = form.elements.packageName.value;
    package.tourLeader = form.elements.tourLeader.value;
    package.validFrom = (new Date(form.elements.validFrom.value)).getTime();
    package.validUntil = (new Date(form.elements.validUntil.value)).getTime();
    package.costLandArrangements = form.elements.costLandArrangements.value;
    package.costTickets = form.elements.costTickets.value;
    package.isItineraryConfirmed = (form.elements.isItineraryConfirmed.value == "on");
    package.isPublished = (form.elements.isPublished.value == "on");
    onSave(package);
  }

  function $render(_data, _slotView) {
    _elementOpenStart("link", "");
    _attr("element", "dist.component.edit-package");
    _attr("href", "asset/css/registration.css");
    _attr("rel", "stylesheet");
    _elementOpenEnd("link");
    _elementClose("link");
    $context["alert"] = $inject("/component/alert");
    var alert = $context["alert"];
    _elementOpenStart("div", "");
    _attr("element", "dist.component.edit-package");
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
    if (_data.package) {
      _elementOpenStart("h3", "");
      _attr("class", "panel-title");
      _elementOpenEnd("h3");
      _text("Edit Package Info");
      _elementClose("h3");
    }
    if (!_data.package) {
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
        _attr("name", "travelAgentId");
        _attr("value", data.travelAgentId);
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
        _elementOpenStart("input", "");
        _attr("type", "text");
        _attr("name", "packageName");
        _attr("class", "form-control input-sm");
        _attr("placeholder", "Package Name");
        _attr("value", data.packageName);
        _elementOpenEnd("input");
        _elementClose("input");
        _elementClose("div");
        _elementClose("div");
        _elementOpenStart("div", "");
        _attr("class", "col-xs-12 col-sm-6 col-md-6 col-lg-6");
        _elementOpenEnd("div");
        _elementOpenStart("div", "");
        _attr("class", "form-group");
        _elementOpenEnd("div");
        _elementOpenStart("input", "");
        _attr("type", "text");
        _attr("name", "tourLeader");
        _attr("class", "form-control input-sm");
        _attr("placeholder", "Tour Leader");
        _attr("value", data.tourLeader);
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
        _attr("type", "date");
        _attr("name", "validFrom");
        _attr("class", "form-control input-sm");
        _attr("placeholder", "Valid From");
        _attr("value", data.validFrom);
        _elementOpenEnd("input");
        _elementClose("input");
        _elementClose("div");
        _elementClose("div");
        _elementOpenStart("div", "");
        _attr("class", "col-xs-12 col-sm-6 col-md-6 col-lg-6");
        _elementOpenEnd("div");
        _elementOpenStart("div", "");
        _attr("class", "form-group");
        _elementOpenEnd("div");
        _elementOpenStart("input", "");
        _attr("type", "date");
        _attr("name", "validUntil");
        _attr("class", "form-control input-sm");
        _attr("placeholder", "Valid Until");
        _attr("value", data.validUntil);
        _elementOpenEnd("input");
        _elementClose("input");
        _elementClose("div");
        _elementClose("div");
        _elementClose("div");
        _elementOpenStart("div", "");
        _attr("class", "form-group");
        _elementOpenEnd("div");
        _elementOpenStart("input", "");
        _attr("type", "number");
        _attr("name", "costLandArrangements");
        _attr("class", "form-control input-sm");
        _attr("placeholder", "Land Arrangements");
        _attr("value", data.costLandArrangements);
        _elementOpenEnd("input");
        _elementClose("input");
        _elementClose("div");
        _elementOpenStart("div", "");
        _attr("class", "form-group");
        _elementOpenEnd("div");
        _elementOpenStart("input", "");
        _attr("type", "number");
        _attr("name", "costTickets");
        _attr("class", "form-control input-sm");
        _attr("placeholder", "Tickets");
        _attr("value", data.costTickets);
        _elementOpenEnd("input");
        _elementClose("input");
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
        _attr("type", "checkbox");
        _attr("name", "isItineraryConfirmed");
        _attr("id", "isItineraryConfirmed");
        _attr("autocomplete", "off");
        _attr("checked", data.isItineraryConfirmed);
        _elementOpenEnd("input");
        _elementClose("input");
        _elementOpenStart("div", "");
        _attr("class", "btn-group");
        _elementOpenEnd("div");
        _elementOpenStart("label", "");
        _attr("for", "isItineraryConfirmed");
        _attr("class", "btn btn-default btn-checkbox");
        _elementOpenEnd("label");
        _elementOpenStart("span", "");
        _attr("class", "glyphicon glyphicon-ok");
        _elementOpenEnd("span");
        _elementClose("span");
        _elementOpenStart("span", "");
        _elementOpenEnd("span");
        _elementClose("span");
        _elementClose("label");
        _elementOpenStart("label", "");
        _attr("for", "isItineraryConfirmed");
        _attr("class", "btn btn-default active btn-checkbox");
        _elementOpenEnd("label");
        _text("Itinerary Confirmed");
        _elementClose("label");
        _elementClose("div");
        _elementClose("div");
        _elementClose("div");
        _elementOpenStart("div", "");
        _attr("class", "col-xs-12 col-sm-6 col-md-6 col-lg-6");
        _elementOpenEnd("div");
        _elementOpenStart("div", "");
        _attr("class", "form-group");
        _elementOpenEnd("div");
        _elementOpenStart("input", "");
        _attr("type", "checkbox");
        _attr("name", "isPublished");
        _attr("id", "isPublished");
        _attr("autocomplete", "off");
        _attr("checked", data.isPublished);
        _elementOpenEnd("input");
        _elementClose("input");
        _elementOpenStart("div", "");
        _attr("class", "btn-group");
        _elementOpenEnd("div");
        _elementOpenStart("label", "");
        _attr("for", "isPublished");
        _attr("class", "btn btn-default btn-checkbox");
        _elementOpenEnd("label");
        _elementOpenStart("span", "");
        _attr("class", "glyphicon glyphicon-ok");
        _elementOpenEnd("span");
        _elementClose("span");
        _elementOpenStart("span", "");
        _elementOpenEnd("span");
        _elementClose("span");
        _elementClose("label");
        _elementOpenStart("label", "");
        _attr("for", "isPublished");
        _attr("class", "btn btn-default active btn-checkbox");
        _elementOpenEnd("label");
        _text("Published");
        _elementClose("label");
        _elementClose("div");
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
        _attr("value", _data.package ? 'Save' : 'Register');
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
      var promise = loadPackage(_data.package);
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