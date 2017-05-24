yalla.framework.addComponent("/dist/app", (function() {
  var $path = "/dist/app";
  var $patchChanges = yalla.framework.renderToScreen;
  var $storeRef = yalla.framework.storeRef;
  var $export = {};
  var $context = {};
  var $patchRef = yalla.framework.patchRef;
  var $inject = yalla.framework.createInjector("/dist/app");
  var _elementOpen = IncrementalDOM.elementOpen,
    _elementClose = IncrementalDOM.elementClose,
    _elementOpenStart = IncrementalDOM.elementOpenStart,
    _elementOpenEnd = IncrementalDOM.elementOpenEnd,
    _elementVoid = IncrementalDOM.elementVoid,
    _text = IncrementalDOM.text,
    _attr = IncrementalDOM.attr,
    _skip = IncrementalDOM.skip;

  function path() {
    return $path;
  }

  function checkCurrentUser() {
    return new Promise(function(resolve) {
      dpd.users.me(function(me) {
        //alert('current user');
        resolve(me);
      });
    });
  }


  function $render(_data, _slotView) {
    $context["login-panel"] = $inject("/user/login-form");
    var loginPanel = $context["login-panel"];
    $context["registration-panel"] = $inject("/user/registration");
    var registrationPanel = $context["registration-panel"];
    $context["app-header"] = $inject("/component/header");
    var appHeader = $context["app-header"];
    $context["app-footer"] = $inject("/component/footer");
    var appFooter = $context["app-footer"];
    _elementOpenStart("div", "");
    _attr("element", "dist.app");
    _attr("class", "container");
    _elementOpenEnd("div");
    _elementOpenStart("div", "");
    _elementOpenEnd("div");
    (function(domNode) {
      var node = domNode.element;

      function asyncFunc__1(data) {
        if (data) {
          _elementOpenStart("div", "");
          _elementOpenEnd("div");
          $context["app-header"].render({}, function(slotName) {});
          _slotView("default");
          $context["app-footer"].render({}, function(slotName) {});
          _elementClose("div");
        }
        if (!data) {
          _elementOpenStart("div", "");
          _elementOpenEnd("div");
          if (path().indexOf('registration') >= 0) {
            _elementOpenStart("div", "");
            _elementOpenEnd("div");
            $context["registration-panel"].render({}, function(slotName) {});
            _elementClose("div");
          }
          if (path().indexOf('registration') < 0) {
            _elementOpenStart("div", "");
            _elementOpenEnd("div");
            $context["login-panel"].render({}, function(slotName) {});
            _elementClose("div");
          }
          _elementClose("div");
        }
      }
      var promise = checkCurrentUser();
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
    _elementOpenStart("script", "");
    _elementOpenEnd("script");
    _elementClose("script");
  }
  if (typeof $render === "function") {
    $export.render = $render;
  }
  return $export;
})());