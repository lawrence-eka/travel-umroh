yalla.framework.addComponent("/dist/user/registration", (function() {
  var $path = "/dist/user/registration";
  var $patchChanges = yalla.framework.renderToScreen;
  var $storeRef = yalla.framework.storeRef;
  var $export = {};
  var $context = {};
  var $patchRef = yalla.framework.patchRef;
  var $inject = yalla.framework.createInjector("/dist/user/registration");
  var elementOpen = IncrementalDOM.elementOpen,
    elementClose = IncrementalDOM.elementClose,
    elementOpenStart = IncrementalDOM.elementOpenStart,
    elementOpenEnd = IncrementalDOM.elementOpenEnd,
    elementVoid = IncrementalDOM.elementVoid,
    text = IncrementalDOM.text,
    attr = IncrementalDOM.attr,
    skip = IncrementalDOM.skip;


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
    elementOpenStart("div", "");
    attr("element", "dist.user.registration");
    elementOpenEnd("div");
    elementOpenStart("div", "");
    elementOpenEnd("div");
    text("" + (errorMessage) + "");
    elementClose("div");
    elementOpenStart("form", "");
    attr("onsubmit", function(event) {
      return register(this)
    });
    elementOpenEnd("form");
    elementOpenStart("p", "");
    elementOpenEnd("p");
    text("First Name:");
    elementOpenStart("input", "");
    attr("type", "text");
    attr("name", "firstName");
    elementOpenEnd("input");
    elementClose("input");
    elementClose("p");
    elementOpenStart("p", "");
    elementOpenEnd("p");
    text("Last Name:");
    elementOpenStart("input", "");
    attr("type", "text");
    attr("name", "lastName");
    elementOpenEnd("input");
    elementClose("input");
    elementClose("p");
    elementOpenStart("p", "");
    elementOpenEnd("p");
    text("Username:");
    elementOpenStart("input", "");
    attr("type", "text");
    attr("name", "username");
    elementOpenEnd("input");
    elementClose("input");
    elementClose("p");
    elementOpenStart("p", "");
    elementOpenEnd("p");
    text("Email:");
    elementOpenStart("input", "");
    attr("type", "text");
    attr("name", "email");
    elementOpenEnd("input");
    elementClose("input");
    elementClose("p");
    elementOpenStart("p", "");
    elementOpenEnd("p");
    text("Password:");
    elementOpenStart("input", "");
    attr("type", "password");
    attr("name", "password");
    elementOpenEnd("input");
    elementClose("input");
    elementClose("p");
    elementOpenStart("p", "");
    elementOpenEnd("p");
    text("Repeat Password:");
    elementOpenStart("input", "");
    attr("type", "password");
    attr("name", "repeatPassword");
    elementOpenEnd("input");
    elementClose("input");
    elementClose("p");
    elementOpenStart("p", "");
    elementOpenEnd("p");
    elementOpenStart("input", "");
    attr("type", "submit");
    attr("value", "Register");
    elementOpenEnd("input");
    elementClose("input");
    elementClose("p");
    elementClose("form");
    elementClose("div");
    elementOpenStart("script", "");
    elementOpenEnd("script");
    elementClose("script");
  }
  if (typeof $render === "function") {
    $export.render = $render;
  }
  return $export;
})());