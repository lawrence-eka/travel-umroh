yalla.framework.addComponent("/dist/component/userProfile", (function() {
  var $path = "/dist/component/userProfile";
  var $patchChanges = yalla.framework.renderToScreen;
  var $storeRef = yalla.framework.storeRef;
  var $export = {};
  var $context = {};
  var $patchRef = yalla.framework.patchRef;
  var $inject = yalla.framework.createInjector("/dist/component/userProfile");
  var _elementOpen = IncrementalDOM.elementOpen,
    _elementClose = IncrementalDOM.elementClose,
    _elementOpenStart = IncrementalDOM.elementOpenStart,
    _elementOpenEnd = IncrementalDOM.elementOpenEnd,
    _elementVoid = IncrementalDOM.elementVoid,
    _text = IncrementalDOM.text,
    _attr = IncrementalDOM.attr,
    _skip = IncrementalDOM.skip;


  var errorMessage = '';

  function loadProfile(profile) {
    return profile ? profile : {};
  }

  function register(form, onSave) {
    errorMessage = "";
    if (form.form) form = form.form;
    var profile = {};
    profile.id = form.elements.id.value;
    profile.firstName = form.elements.firstName.value;
    profile.lastName = form.elements.lastName.value;
    profile.email = form.elements.email.value;
    profile.phone = form.elements.phone.value;
    profile.username = form.elements.email.value;

    if (form.elements.password.value != '') profile.password = form.elements.password.value;
    var repeatPassword = form.elements.repeatPassword.value;

    profile.address1 = form.elements.address1.value;
    profile.city = form.elements.city.value;
    profile.isAdmin = (form.elements.isAdmin.value == "on");
    profile.isTravelAgent = (form.elements.isTravelAgent.value == "on");

    onSave(profile).then(function(err) {
      debugger;
      if (err) {
        errorMessage = err;
      }
      $patchChanges();
    });

  }

  function $render(_data, _slotView) {
    _elementOpenStart("link", "");
    _attr("element", "dist.component.userProfile");
    _attr("href", "asset/css/registration.css");
    _attr("rel", "stylesheet");
    _elementOpenEnd("link");
    _elementClose("link");
    $context["alert"] = $inject("/component/alert");
    var alert = $context["alert"];
    _elementOpenStart("div", "");
    _attr("element", "dist.component.userProfile");
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
    if (_data.profile) {
      _elementOpenStart("h3", "");
      _attr("class", "panel-title");
      _elementOpenEnd("h3");
      _text("Your Profile");
      _elementClose("h3");
    }
    if (!_data.profile) {
      _elementOpenStart("h3", "");
      _attr("class", "panel-title");
      _elementOpenEnd("h3");
      _text("Please Sign Up");
      _elementOpenStart("small", "");
      _elementOpenEnd("small");
      _text("It's free!");
      _elementClose("small");
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
        _attr("name", "firstName");
        _attr("class", "form-control input-sm");
        _attr("placeholder", "First Name");
        _attr("value", data.firstName);
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
        _attr("name", "lastName");
        _attr("class", "form-control input-sm");
        _attr("placeholder", "Last Name");
        _attr("value", data.lastName);
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
        _attr("type", "email");
        _attr("name", "email");
        _attr("class", "form-control input-sm");
        _attr("placeholder", "Email Address");
        _attr("value", data.email);
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
        _attr("name", "phone");
        _attr("class", "form-control input-sm");
        _attr("placeholder", "Phone");
        _attr("value", data.phone);
        _elementOpenEnd("input");
        _elementClose("input");
        _elementClose("div");
        _elementClose("div");
        _elementClose("div");
        _elementOpenStart("div", "");
        _attr("class", "form-group");
        _elementOpenEnd("div");
        _elementOpenStart("textarea", "");
        _attr("name", "address1");
        _attr("class", "form-control input-sm");
        _attr("placeholder", "Address");
        _elementOpenEnd("textarea");
        _text("" + ((data.address1 ? data.address1 : '')) + "");
        _elementClose("textarea");
        _elementClose("div");
        _elementOpenStart("div", "");
        _attr("class", "form-group");
        _elementOpenEnd("div");
        _elementOpenStart("input", "");
        _attr("type", "text");
        _attr("name", "city");
        _attr("class", "form-control input-sm");
        _attr("placeholder", "City");
        _attr("value", data.city);
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
        _attr("name", "isTravelAgent");
        _attr("id", "isTravelAgent");
        _attr("autocomplete", "off");
        _attr("checked", data.isTravelAgent);
        _elementOpenEnd("input");
        _elementClose("input");
        _elementOpenStart("div", "");
        _attr("class", "btn-group");
        _elementOpenEnd("div");
        _elementOpenStart("label", "");
        _attr("for", "isTravelAgent");
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
        _attr("for", "isTravelAgent");
        _attr("class", "btn btn-default active btn-checkbox");
        _elementOpenEnd("label");
        _text("Travel Agent");
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
        _attr("name", "isAdmin");
        _attr("id", "isAdmin");
        _attr("autocomplete", "off");
        _attr("checked", data.isAdmin);
        _elementOpenEnd("input");
        _elementClose("input");
        _elementOpenStart("div", "");
        _attr("class", "btn-group");
        _elementOpenEnd("div");
        _elementOpenStart("label", "");
        _attr("for", "isAdmin");
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
        _attr("for", "isAdmin");
        _attr("class", "btn btn-default active btn-checkbox");
        _elementOpenEnd("label");
        _text("Administrator");
        _elementClose("label");
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
        _elementOpenStart("input", "");
        _attr("type", "password");
        _attr("name", "password");
        _attr("class", "form-control input-sm");
        _attr("placeholder", "Password");
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
        _attr("type", "password");
        _attr("name", "repeatPassword");
        _attr("class", "form-control input-sm");
        _attr("placeholder", "Confirm Password");
        _elementOpenEnd("input");
        _elementClose("input");
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
        _attr("value", _data.profile ? 'Save' : 'Register');
        _attr("class", "btn btn-info btn-block");
        _attr("onclick", function(event) {
          return register(this, _data.onsave);
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
          return _data.oncancel();
        });
        _elementOpenEnd("input");
        _elementClose("input");
        _elementClose("div");
        _elementClose("div");
        _elementClose("div");
        _elementClose("form");
      }
      var promise = loadProfile(_data.profile);
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