yalla.framework.addComponent("/dist/app", (function() {
  var $path = "/dist/app";
  var $patchChanges = yalla.framework.renderToScreen;
  var $storeRef = yalla.framework.storeRef;
  var $export = {};
  var $context = {};
  var $patchRef = yalla.framework.patchRef;
  var $inject = yalla.framework.createInjector("/dist/app");
  var elementOpen = IncrementalDOM.elementOpen,
    elementClose = IncrementalDOM.elementClose,
    elementOpenStart = IncrementalDOM.elementOpenStart,
    elementOpenEnd = IncrementalDOM.elementOpenEnd,
    elementVoid = IncrementalDOM.elementVoid,
    text = IncrementalDOM.text,
    attr = IncrementalDOM.attr,
    skip = IncrementalDOM.skip;


  function hasPageRequest() {
    return (window.location.hash !== '' && window.location.hash !== '#app');
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
    $context["home"] = $inject("/home");
    var home = $context["home"];
    elementOpenStart("div", "");
    attr("element", "dist.app");
    elementOpenEnd("div");
    elementOpenStart("div", "");
    elementOpenEnd("div");
    (function(domNode) {
      var node = domNode.element;

      function asyncFunc__1(data) {
        if (data) {
          elementOpenStart("div", "");
          elementOpenEnd("div");
          if (hasPageRequest()) {
            elementOpenStart("div", "");
            elementOpenEnd("div");
            _slotView("default");
            elementClose("div");
          }
          if (!hasPageRequest()) {
            elementOpenStart("div", "");
            elementOpenEnd("div");
            $context["home"].render({}, function(slotName) {});
            elementClose("div");
          }
          elementClose("div");
        }
        if (!data) {
          elementOpenStart("div", "");
          elementOpenEnd("div");
          elementOpenStart("p", "");
          elementOpenEnd("p");
          $context["login-panel"].render({}, function(slotName) {});
          elementClose("p");
          elementClose("div");
        }
      }
      var promise = checkCurrentUser();
      if (promise && typeof promise == "object" && "then" in promise) {
        skip();
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
    elementClose("div");
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