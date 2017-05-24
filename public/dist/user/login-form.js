yalla.framework.addComponent("/dist/user/login-form", (function() {
  var $path = "/dist/user/login-form";
  var $patchChanges = yalla.framework.renderToScreen;
  var $storeRef = yalla.framework.storeRef;
  var $export = {};
  var $context = {};
  var $patchRef = yalla.framework.patchRef;
  var $inject = yalla.framework.createInjector("/dist/user/login-form");
  var _elementOpen = IncrementalDOM.elementOpen,
    _elementClose = IncrementalDOM.elementClose,
    _elementOpenStart = IncrementalDOM.elementOpenStart,
    _elementOpenEnd = IncrementalDOM.elementOpenEnd,
    _elementVoid = IncrementalDOM.elementVoid,
    _text = IncrementalDOM.text,
    _attr = IncrementalDOM.attr,
    _skip = IncrementalDOM.skip;


  var errorMessage = '';

  function login(form) {
    errorMessage = "";
    $patchChanges();
    var userName = form.elements.userName.value;
    var password = form.elements.password.value;
    dpd.users.login({
      "username": userName,
      "password": password
    }, function(user, err) {
      if (err) {
        errorMessage = err.message;
      }
      $patchChanges();
    });
    return false;
  }

  function $render(_data, _slotView) {
    $context["alert"] = $inject("/component/alert");
    var alert = $context["alert"];
    _elementOpenStart("html", "");
    _attr("element", "dist.user.login-form");
    _attr("lang", "en");
    _elementOpenEnd("html");
    _elementOpenStart("head", "");
    _elementOpenEnd("head");
    _elementOpenStart("meta", "");
    _attr("charset", "utf-8");
    _elementOpenEnd("meta");
    _elementClose("meta");
    _elementOpenStart("meta", "");
    _attr("http-equiv", "X-UA-Compatible");
    _attr("content", "IE=edge");
    _elementOpenEnd("meta");
    _elementClose("meta");
    _elementOpenStart("meta", "");
    _attr("name", "viewport");
    _attr("content", "width=device-width, initial-scale=1");
    _elementOpenEnd("meta");
    _elementClose("meta");
    _elementOpenStart("meta", "");
    _attr("name", "description");
    _attr("content", "");
    _elementOpenEnd("meta");
    _elementClose("meta");
    _elementOpenStart("meta", "");
    _attr("name", "author");
    _attr("content", "");
    _elementOpenEnd("meta");
    _elementClose("meta");
    _elementOpenStart("link", "");
    _attr("rel", "icon");
    _attr("href", "../asset/favicon.ico");
    _elementOpenEnd("link");
    _elementClose("link");
    _elementOpenStart("title", "");
    _elementOpenEnd("title");
    _text("Signin Template for Bootstrap");
    _elementClose("title");
    _elementOpenStart("link", "");
    _attr("href", "../asset/css/bootstrap.min.css");
    _attr("rel", "stylesheet");
    _elementOpenEnd("link");
    _elementClose("link");
    _elementOpenStart("link", "");
    _attr("href", "../assets/css/ie10-viewport-bug-workaround.css");
    _attr("rel", "stylesheet");
    _elementOpenEnd("link");
    _elementClose("link");
    _elementOpenStart("link", "");
    _attr("href", "/asset/css/signin.css");
    _attr("rel", "stylesheet");
    _elementOpenEnd("link");
    _elementClose("link");
    _elementClose("head");
    _elementOpenStart("body", "");
    _elementOpenEnd("body");
    _elementOpenStart("div", "");
    _attr("class", "container");
    _elementOpenEnd("div");
    _elementOpenStart("form", "");
    _attr("class", "form-signin");
    _attr("onsubmit", function(event) {
      return login(this)
    });
    _elementOpenEnd("form");
    _elementOpenStart("h2", "");
    _attr("class", "form-signin-heading");
    _elementOpenEnd("h2");
    _text("Please sign in");
    _elementClose("h2");
    _elementOpenStart("label", "");
    _attr("for", "userName");
    _attr("class", "sr-only");
    _elementOpenEnd("label");
    _text("Username");
    _elementClose("label");
    _elementOpenStart("input", "");
    _attr("type", "text");
    _attr("id", "userName");
    _attr("class", "form-control");
    _attr("placeholder", "Username");
    _attr("required", "required");
    _attr("autofocus", "autofocus");
    _elementOpenEnd("input");
    _elementClose("input");
    _elementOpenStart("label", "");
    _attr("for", "password");
    _attr("class", "sr-only");
    _elementOpenEnd("label");
    _text("Password");
    _elementClose("label");
    _elementOpenStart("input", "");
    _attr("type", "password");
    _attr("id", "password");
    _attr("class", "form-control");
    _attr("placeholder", "Password");
    _attr("required", "required");
    _elementOpenEnd("input");
    _elementClose("input");
    _elementOpenStart("div", "");
    _attr("class", "checkbox");
    _elementOpenEnd("div");
    _elementOpenStart("label", "");
    _elementOpenEnd("label");
    _elementOpenStart("input", "");
    _attr("type", "checkbox");
    _attr("value", "remember-me");
    _elementOpenEnd("input");
    _elementClose("input");
    _text("Remember me");
    _elementClose("label");
    _elementClose("div");
    $context["alert"].render({
      "alertType": 'error',
      "message": errorMessage
    }, function(slotName) {});
    _elementOpenStart("button", "");
    _attr("class", "btn btn-lg btn-primary btn-block");
    _attr("type", "submit");
    _elementOpenEnd("button");
    _text("Sign in");
    _elementClose("button");
    _elementOpenStart("a", "");
    _attr("href", "#user.registration");
    _elementOpenEnd("a");
    _text("New to MarKiMroh? Register here");
    _elementClose("a");
    _elementClose("form");
    _elementClose("div");
    _elementOpenStart("script", "");
    _attr("src", "../assets/js/ie10-viewport-bug-workaround.js");
    _elementOpenEnd("script");
    _elementClose("script");
    _elementClose("body");
    _elementClose("html");
    _elementOpenStart("script", "");
    _elementOpenEnd("script");
    _elementClose("script");
  }
  if (typeof $render === "function") {
    $export.render = $render;
  }
  return $export;
})());