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

  function register(form) {
    var firstName = form.elements.firstName.value;
    var lastName = form.elements.lastName.value;
    var email = form.elements.email.value;
    var username = form.elements.username.value;
    var password = form.elements.password.value;
    var repeatPassword = form.elements.repeatPassword.value;
    dpd.users.post({
      "username": username,
      "password": password,
      "firstName": firstName,
      "lastName": lastName,
      "email": email
    }, function(user, err) {
      if (err) {
        errorMessage = JSON.stringify(err);
        $patchChanges();
      } else {
        dpd.users.login({
          "username": username,
          "password": password
        }, function(user, err) {
          if (err) {
            errorMessage = JSON.stringify(err);
            $patchChanges();
          } else {
            window.location.hash = '#app/home';
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
    _elementOpenStart("div", "");
    _attr("element", "dist.user.registration");
    _attr("class", "container");
    _elementOpenEnd("div");
    _elementOpenStart("div", "");
    _attr("class", "row centered-form");
    _elementOpenEnd("div");
    _elementOpenStart("div", "");
    _attr("class", "col-xs-12 col-sm-8 col-md-4 col-sm-offset-2 col-md-offset-4");
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
    _elementOpenEnd("form");
    _elementOpenStart("div", "");
    _attr("class", "row");
    _elementOpenEnd("div");
    _elementOpenStart("div", "");
    _attr("class", "col-xs-6 col-sm-6 col-md-6");
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
    _attr("class", "col-xs-6 col-sm-6 col-md-6");
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
    _attr("class", "col-xs-6 col-sm-6 col-md-6");
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
    _attr("class", "col-xs-6 col-sm-6 col-md-6");
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
    _attr("class", "col-xs-6 col-sm-6 col-md-6");
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
    _attr("class", "btn btn-default");
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
    _attr("class", "btn btn-default active");
    _elementOpenEnd("label");
    _text("Travel Agent");
    _elementClose("label");
    _elementClose("div");
    _elementClose("div");
    _elementClose("div");
    _elementOpenStart("div", "");
    _attr("class", "col-xs-6 col-sm-6 col-md-6");
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
    _attr("class", "btn btn-default");
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
    _attr("class", "btn btn-default active");
    _elementOpenEnd("label");
    _text("Admin");
    _elementClose("label");
    _elementClose("div");
    _elementClose("div");
    _elementClose("div");
    _elementClose("div");
    _elementOpenStart("div", "");
    _attr("class", "row");
    _elementOpenEnd("div");
    _elementOpenStart("div", "");
    _attr("class", "col-xs-6 col-sm-6 col-md-6");
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
    _attr("class", "col-xs-6 col-sm-6 col-md-6");
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
    _elementOpenStart("input", "");
    _attr("type", "submit");
    _attr("value", "Register");
    _attr("class", "btn btn-info btn-block");
    _elementOpenEnd("input");
    _elementClose("input");
    _elementClose("form");
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