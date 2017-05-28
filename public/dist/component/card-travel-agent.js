yalla.framework.addComponent("/dist/component/card-travel-agent", (function() {
  var $path = "/dist/component/card-travel-agent";
  var $patchChanges = yalla.framework.renderToScreen;
  var $storeRef = yalla.framework.storeRef;
  var $export = {};
  var $context = {};
  var $patchRef = yalla.framework.patchRef;
  var $inject = yalla.framework.createInjector("/dist/component/card-travel-agent");

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

  function $render(_data, _slotView) {
    $context["card"] = $inject("/component/card");
    var card = $context["card"];
    $context["card"].render({
      "element": "dist.component.card-travel-agent",
      "title": _data.travelAgent.travelAgentName
    }, function(slotName) {
      _elementOpenStart("div", "");
      _elementOpenEnd("div");
      _text("Address: " + (_data.travelAgent.address) + "");
      _elementOpenStart("br", "");
      _elementOpenEnd("br");
      _elementClose("br");
      _text("City: " + (_data.travelAgent.city) + "");
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
      _attr("value", "Edit Info");
      _attr("class", "form-control btn btn-info btn-block margin-top-15px");
      _attr("onclick", function(event) {
        this.emitEvent = function(eventName, data) {
          var event = new ComponentEvent(eventName, data, this);
          if ('on' + eventName in _data) {
            _data['on' + eventName](event);
          }
        };
        return _data.oneditTA.bind(this)();
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
      _attr("value", "Packages...");
      _attr("class", "form-control btn btn-info btn-block margin-top-15px");
      _attr("onclick", function(event) {
        this.emitEvent = function(eventName, data) {
          var event = new ComponentEvent(eventName, data, this);
          if ('on' + eventName in _data) {
            _data['on' + eventName](event);
          }
        };
        return _data.onshowPackages.bind(this)();
      });
      _elementOpenEnd("input");
      _elementClose("input");
      _elementClose("div");
      _elementClose("div");
      _elementClose("div");
      _elementClose("div");
    });
    _elementOpenStart("script", "");
    _elementOpenEnd("script");
    _elementClose("script");
  }
  if (typeof $render === "function") {
    $export.render = $render;
  }
  return $export;
})());