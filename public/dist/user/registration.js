yalla.framework.addComponent("/dist/user/registration", (function() {
  var $path = "/dist/user/registration";
  var $patchChanges = yalla.framework.renderToScreen;
  var $storeRef = yalla.framework.storeRef;
  var $export = {};
  var $context = {};
  var $patchRef = yalla.framework.patchRef;
  var $inject = yalla.framework.createInjector("/dist/user/registration");
  var _elementOpen = IncrementalDOM.elementOpen,
    _elementClose = IncrementalDOM.elementClose,
    _elementOpenStart = IncrementalDOM.elementOpenStart,
    _elementOpenEnd = IncrementalDOM.elementOpenEnd,
    _elementVoid = IncrementalDOM.elementVoid,
    _text = IncrementalDOM.text,
    _attr = IncrementalDOM.attr,
    _skip = IncrementalDOM.skip;


  var errorMessage = '';

  function cancelRegistration() {
    window.location.hash = "#app";
  }

  function register(form) {
    var q = {};
    q.firstName = form.elements.firstName.value;
    q.lastName = form.elements.lastName.value;
    q.email = form.elements.email.value;
    q.phone = form.elements.phone.value;
    q.username = form.elements.email.value;
    q.password = form.elements.password.value;
    var repeatPassword = form.elements.repeatPassword.value;
    q.address1 = form.elements.address1.value;
    q.address2 = form.elements.address2.value;
    q.city = form.elements.city.value;
    q.isAdmin = (form.elements.isAdmin.value == "on");
    q.isTravelAgent = (form.elements.isTravelAgent.value == "on");
    dpd.users.post(q, function(user, err) {
      if (err) {
        errorMessage = err.message;
        $patchChanges();
      } else {
        dpd.users.login({
          "username": q.username,
          "password": q.password
        }, function(user, err) {
          if (err) {
            errorMessage = err.message;
            $patchChanges();
          } else {
            window.location.hash = '#app';
          }
        });
      }
    });
    return false;
  }

  function $render(_data, _slotView) {
    _elementOpenStart("link", "");
    _attr("element", "dist.user.registration");
    _attr("href", "asset/css/registration.css");
    _attr("rel", "stylesheet");
    _elementOpenEnd("link");
    _elementClose("link");
    $context["alert"] = $inject("/component/alert");
    var alert = $context["alert"];
    _elementOpenStart("div", "");
    _attr("element", "dist.user.registration");
    _attr("class", "container all-5px");
    _elementOpenEnd("div");
    _elementOpenStart("div", "");
    _attr("class", "row centered-form no-top-margin");
    _elementOpenEnd("div");
    _elementOpenStart("div", "");
    _attr("class", "col-xs-12 col-sm-12 col-md-12 col-lg-12");
    _elementOpenEnd("div");
    _elementOpenStart("div", "");
    _attr("class", "panel panel-default");
    _elementOpenEnd("div");
    _elementOpenStart("div", "");
    _attr("class", "panel-heading");
    _elementOpenEnd("div");
    _elementOpenStart("h3", "");
    _attr("class", "panel-title");
    _elementOpenEnd("h3");
    _text("Please Sign Up");
    _elementOpenStart("small", "");
    _elementOpenEnd("small");
    _text("It's free!");
    _elementClose("small");
    _elementClose("h3");
    _elementClose("div");
    _elementOpenStart("div", "");
    _attr("class", "panel-body");
    _elementOpenEnd("div");
    _elementOpenStart("form", "");
    _attr("role", "form");
    _attr("onsubmit", function(event) {
      return register(this)
    });
    _elementOpenEnd("form");
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
    _elementOpenEnd("input");
    _elementClose("input");
    _elementClose("div");
    _elementClose("div");
    _elementClose("div");
    _elementOpenStart("div", "");
    _attr("class", "form-group");
    _elementOpenEnd("div");
    _elementOpenStart("input", "");
    _attr("type", "text");
    _attr("name", "address1");
    _attr("class", "form-control input-sm");
    _attr("placeholder", "Address");
    _elementOpenEnd("input");
    _elementClose("input");
    _elementClose("div");
    _elementOpenStart("div", "");
    _attr("class", "form-group");
    _elementOpenEnd("div");
    _elementOpenStart("input", "");
    _attr("type", "text");
    _attr("name", "address2");
    _attr("class", "form-control input-sm");
    _attr("placeholder", "Address");
    _elementOpenEnd("input");
    _elementClose("input");
    _elementClose("div");
    _elementOpenStart("div", "");
    _attr("class", "form-group");
    _elementOpenEnd("div");
    _elementOpenStart("input", "");
    _attr("type", "text");
    _attr("name", "city");
    _attr("class", "form-control input-sm");
    _attr("placeholder", "City");
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
    _elementOpenStart("input", "");
    _attr("type", "submit");
    _attr("value", "Register");
    _attr("class", "btn btn-info btn-block");
    _elementOpenEnd("input");
    _elementClose("input");
    _elementClose("form");
    _elementOpenStart("div", "");
    _attr("class", "form-group");
    _elementOpenEnd("div");
    _elementOpenStart("input", "");
    _attr("type", "button");
    _attr("value", "Cancel");
    _attr("class", "form-control btn btn-info btn-block margin-top-15px");
    _attr("onclick", function(event) {
      return cancelRegistration()
    });
    _elementOpenEnd("input");
    _elementClose("input");
    _elementClose("div");
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