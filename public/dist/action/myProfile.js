yalla.framework.addComponent("/dist/action/myProfile", (function() {
  var $path = "/dist/action/myProfile";
  var $patchChanges = yalla.framework.renderToScreen;
  var $storeRef = yalla.framework.storeRef;
  var $export = {};
  var $context = {};
  var $patchRef = yalla.framework.patchRef;
  var $inject = yalla.framework.createInjector("/dist/action/myProfile");
  var _elementOpen = IncrementalDOM.elementOpen,
    _elementClose = IncrementalDOM.elementClose,
    _elementOpenStart = IncrementalDOM.elementOpenStart,
    _elementOpenEnd = IncrementalDOM.elementOpenEnd,
    _elementVoid = IncrementalDOM.elementVoid,
    _text = IncrementalDOM.text,
    _attr = IncrementalDOM.attr,
    _skip = IncrementalDOM.skip;


  var errorMessage = '';

  function getMyProfile() {

    return new Promise(function(resolve) {
      dpd.users.me(function(me) {
        resolve(me);
      });
    });
  }

  function cancel() {
    window.location.hash = "#app";
  }

  function save(profile) {
    return new Promise(function(resolve) {
      dpd.users.put(profile.id, profile, function(user, err) {
        if (err) {
          resolve(err)
        } else {
          window.location.hash = '#app';
        }
      });
    });
  }

  function $render(_data, _slotView) {
    _elementOpenStart("link", "");
    _attr("element", "dist.action.myProfile");
    _attr("href", "asset/css/registration.css");
    _attr("rel", "stylesheet");
    _elementOpenEnd("link");
    _elementClose("link");
    $context["alert"] = $inject("/component/alert");
    var alert = $context["alert"];
    $context["profile"] = $inject("/component/userProfile");
    var profile = $context["profile"];
    _elementOpenStart("div", "");
    _attr("element", "dist.action.myProfile");
    _elementOpenEnd("div");
    $context["profile"].render({
      "profile": getMyProfile(),
      "onsave": function(event) {
        return save(event);
      },
      "oncancel": function(event) {
        return cancel();
      }
    }, function(slotName) {});
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