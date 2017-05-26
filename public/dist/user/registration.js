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

  function register(profile) {
    dpd.users.post(profile, function(user, err) {
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
    $context["profile"] = $inject("/component/userProfile");
    var profile = $context["profile"];
    $context["profile"].render({
      "element": "dist.user.registration",
      "onsave": function(event) {
        return register(event);
      },
      "oncancel": function(event) {
        return cancelRegistration();
      }
    }, function(slotName) {});
    _elementOpenStart("script", "");
    _elementOpenEnd("script");
    _elementClose("script");
  }
  if (typeof $render === "function") {
    $export.render = $render;
  }
  return $export;
})());