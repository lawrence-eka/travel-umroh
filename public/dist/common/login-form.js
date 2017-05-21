yalla.framework.addComponent("/dist/common/login-form", (function() {
  var $path = "/dist/common/login-form";
  var $patchChanges = yalla.framework.renderToScreen;
  var $storeRef = yalla.framework.storeRef;
  var $export = {};
  var $context = {};
  var $patchRef = yalla.framework.patchRef;
  var $inject = yalla.framework.createInjector("/dist/common/login-form");
  var elementOpen = IncrementalDOM.elementOpen,
    elementClose = IncrementalDOM.elementClose,
    elementOpenStart = IncrementalDOM.elementOpenStart,
    elementOpenEnd = IncrementalDOM.elementOpenEnd,
    elementVoid = IncrementalDOM.elementVoid,
    text = IncrementalDOM.text,
    attr = IncrementalDOM.attr,
    skip = IncrementalDOM.skip;


  var errorMessage = '';

  function login(form) {
    var userName = form.elements.userName.value;
    var password = form.elements.password.value;
    dpd.users.login({
      "username": userName,
      "password": password
    }, function(user, err) {
      if (err) {
        errorMessage = JSON.stringify(err);
        $patchChanges();
      } else {
        window.location.hash = '#app/home';
      }
    });
    return false;
  }

  function $render(_data, _slotView) {
    elementOpenStart("div", "");
    attr("element", "dist.common.login-form");
    elementOpenEnd("div");
    text("" + (errorMessage) + "");
    elementClose("div");
    elementOpenStart("div", "");
    attr("element", "dist.common.login-form");
    elementOpenEnd("div");
    elementOpenStart("form", "");
    attr("onsubmit", function(event) {
      return login(this)
    });
    elementOpenEnd("form");
    elementOpenStart("input", "");
    attr("type", "text");
    attr("name", "userName");
    elementOpenEnd("input");
    elementClose("input");
    elementOpenStart("input", "");
    attr("type", "password");
    attr("name", "password");
    elementOpenEnd("input");
    elementClose("input");
    elementOpenStart("input", "");
    attr("type", "submit");
    attr("value", "Login");
    elementOpenEnd("input");
    elementClose("input");
    elementOpenStart("a", "");
    attr("href", "#app/register");
    elementOpenEnd("a");
    text("" + (_data.name) + "");
    elementClose("a");
    elementClose("form");
    elementClose("div");
    elementOpenStart("div", "");
    attr("element", "dist.common.login-form");
    elementOpenEnd("div");
    text("" + (errorMessage) + "");
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