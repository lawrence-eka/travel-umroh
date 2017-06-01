yalla.framework.addComponent("/dist/component/card-passenger", (function() {
  var $path = "/dist/component/card-passenger";
  var $patchChanges = yalla.framework.renderToScreen;
  var $export = {};
  var $context = {};
  var _parentComponent = yalla.framework.getParentComponent;
  var $inject = yalla.framework.createInjector("/dist/component/card-passenger");

  function ComponentEvent(type, data, target, currentTarget) {
    this.data = data;
    this.target = target;
    this.type = type;
    this.currentTarget = currentTarget;
  }

  var _elementOpen = IncrementalDOM.elementOpen,
    _elementClose = IncrementalDOM.elementClose,
    _elementOpenStart = IncrementalDOM.elementOpenStart,
    _elementOpenEnd = IncrementalDOM.elementOpenEnd,
    _elementVoid = IncrementalDOM.elementVoid,
    _text = IncrementalDOM.text,
    _attr = IncrementalDOM.attr,
    _skip = IncrementalDOM.skip;

  function initState(props) {
    return {}
  };

  function $render(_props, _slotView) {
    $context["card"] = $inject("/component/panel");
    var card = $context["card"];
    _elementOpenStart("div", "");
    _attr("element", "dist.component.card-passenger");
    _elementOpenEnd("div");
    // The component of this object
    var __component = IncrementalDOM.currentElement();
    __component.__state = __component.__state || initState.bind(__component)(_props);
    var __state = __component.__state;
    $context["card"].render({
      "title": (_props.passenger.firstName + ' ' + _props.passenger.lastName).toTitleCase(),
      "nofooter": "nofooter"
    }, function(slotName) {
      if (slotName == "body") {
        _elementOpenStart("div", "");
        _elementOpenEnd("div");
        _text("First Name: " + (_props.passenger.firstName) + "; Middle Name: " + (_props.passenger.middleName) + "; Last Name: " + (_props.passenger.lastName) + ";");
        _elementOpenStart("br", "");
        _elementOpenEnd("br");
        _elementClose("br");
        _text("Birth Place: " + (_props.passenger.birthPlace) + "; Birth Date: " + ((_props.passenger.birthday).toDateComponents()) + "");
        _elementOpenStart("br", "");
        _elementOpenEnd("br");
        _elementClose("br");
        _text("Passport No: " + (_props.passenger.passportNumber) + "; Expiry Date: " + ((_props.passenger.passportExpiryDate).toDateComponents()) + "");
        _elementOpenStart("br", "");
        _elementOpenEnd("br");
        _elementClose("br");
        _elementClose("div");
      }
    });
    _elementClose("div");
  }
  if (typeof $render === "function") {
    $export.render = $render;
  }
  return $export;
})());