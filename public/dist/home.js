yalla.framework.addComponent("/dist/home", (function() {
  var $path = "/dist/home";
  var $patchChanges = yalla.framework.renderToScreen;
  var $storeRef = yalla.framework.storeRef;
  var $export = {};
  var $context = {};
  var $patchRef = yalla.framework.patchRef;
  var $inject = yalla.framework.createInjector("/dist/home");
  var elementOpen = IncrementalDOM.elementOpen,
    elementClose = IncrementalDOM.elementClose,
    elementOpenStart = IncrementalDOM.elementOpenStart,
    elementOpenEnd = IncrementalDOM.elementOpenEnd,
    elementVoid = IncrementalDOM.elementVoid,
    text = IncrementalDOM.text,
    attr = IncrementalDOM.attr,
    skip = IncrementalDOM.skip;

  function generateMenu(me) {
    var menusBase = [{
        label: 'Find Package',
        ref: '#app/home/action.searchPackage'
      },
      {
        label: 'My Booking',
        ref: '#app/home/action.myBooking'
      }
    ];

    var menuEnd = [{
        label: 'My Profile',
        ref: '#app/home/action.myProfile'
      },
      {
        label: 'Logout',
        ref: '#',
        clickTrigger: logout
      }
    ];

    if (me.isTravelAgent) {
      menusBase.push({
        label: 'My Travel Agent',
        ref: '#app/home/action.myTravelAgents'
      });
    }
    if (me.isAdmin) {
      menusBase.push({
        label: 'Approvals',
        ref: '#app/home/action.approvals'
      });
    }
    return menusBase.concat(menuEnd);
  }


  function getMe() {
    return new Promise(function(resolve) {
      dpd.users.me(function(me) {
        resolve(me);
      });
    });
  }

  function logout() {
    dpd.users.logout(function(err) {
      window.location.hash = '#app';
    });
  }


  function $render(_data, _slotView) {
    elementOpenStart("style", "");
    elementOpenEnd("style");
    text("\r\n[element='dist.home'] .menu {list-style-type: none;margin : 0px;padding : 0px;}\r\n[element='dist.home'] .menu-item {display: inline-block;padding-left: 1rem;}");
    elementClose("style");
    elementOpenStart("div", "");
    attr("element", "dist.home");
    elementOpenEnd("div");
    elementOpenStart("div", "");
    elementOpenEnd("div");
    (function(domNode) {
      var node = domNode.element;

      function asyncFunc__1(data) {
        text("Hello, " + (data.firstName) + " " + (data.lastName) + "");
        elementOpenStart("ul", "");
        attr("class", "menu");
        elementOpenEnd("ul");
        var _array = generateMenu(data) || [];
        _array.forEach(function(menu) {
          elementOpenStart("li", "");
          attr("class", "menu-item");
          elementOpenEnd("li");
          elementOpenStart("a", "");
          attr("href", menu.ref);
          attr("onclick", function(event) {
            return menu.clickTrigger()
          });
          elementOpenEnd("a");
          text("" + (menu.label) + "");
          elementClose("a");
          elementClose("li");
        });
        elementClose("ul");
        _slotView("default");
      }
      var promise = getMe();
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