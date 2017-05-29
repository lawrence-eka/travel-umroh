yalla.framework.addComponent("/dist/component/card-user-approvals", (function() {
  var $path = "/dist/component/card-user-approvals";
  var $patchChanges = yalla.framework.renderToScreen;
  var $storeRef = yalla.framework.storeRef;
  var $export = {};
  var $context = {};
  var $patchRef = yalla.framework.patchRef;
  var $inject = yalla.framework.createInjector("/dist/component/card-user-approvals");
  var _elementOpen = IncrementalDOM.elementOpen,
    _elementClose = IncrementalDOM.elementClose,
    _elementOpenStart = IncrementalDOM.elementOpenStart,
    _elementOpenEnd = IncrementalDOM.elementOpenEnd,
    _elementVoid = IncrementalDOM.elementVoid,
    _text = IncrementalDOM.text,
    _attr = IncrementalDOM.attr,
    _skip = IncrementalDOM.skip;

  function fullName(firstName, lastName) {
    return ((firstName ? firstName : 'NoFirstName') + ' ' + (lastName ? lastName : 'NoLastName')).toTitleCase()
  }

  function $render(_data, _slotView) {
    $context["card"] = $inject("/component/card");
    var card = $context["card"];
    $context["card"].render({
      "element": "dist.component.card-user-approvals",
      "title": fullName(_data.user.firstName, _data.user.lastName)
    }, function(slotName) {
      _elementOpenStart("div", "");
      _elementOpenEnd("div");
      _text("Admin: " + (_data.user.needApproval.isAdmin ? 'Yes' : 'No') + "");
      _elementOpenStart("br", "");
      _elementOpenEnd("br");
      _elementClose("br");
      _text("Travel Agent: " + (_data.user.needApproval.isTravelAgent ? 'Yes' : 'No') + "");
      _elementOpenStart("br", "");
      _elementOpenEnd("br");
      _elementClose("br");
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
      _attr("value", "Approve");
      _attr("class", "form-control btn btn-info btn-block margin-top-15px");
      _attr("onclick", function(event) {
        return _data.onapprove(_data.user);
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
      _attr("value", "Reject");
      _attr("class", "form-control btn btn-info btn-block margin-top-15px");
      _attr("onclick", function(event) {
        return _data.onreject(_data.user);
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