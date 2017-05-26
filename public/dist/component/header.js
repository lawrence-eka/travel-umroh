yalla.framework.addComponent("/dist/component/header", (function() {
  var $path = "/dist/component/header";
  var $patchChanges = yalla.framework.renderToScreen;
  var $storeRef = yalla.framework.storeRef;
  var $export = {};
  var $context = {};
  var $patchRef = yalla.framework.patchRef;
  var $inject = yalla.framework.createInjector("/dist/component/header");
  var _elementOpen = IncrementalDOM.elementOpen,
    _elementClose = IncrementalDOM.elementClose,
    _elementOpenStart = IncrementalDOM.elementOpenStart,
    _elementOpenEnd = IncrementalDOM.elementOpenEnd,
    _elementVoid = IncrementalDOM.elementVoid,
    _text = IncrementalDOM.text,
    _attr = IncrementalDOM.attr,
    _skip = IncrementalDOM.skip;


  var strings = $inject("/common/strings");

  function generateMenu(me) {
    if (!me) return [];
    var menusBase = [{
        label: (me.firstName + " " + me.lastName).toTitleCase(),
        ref: '#app/action.myProfile'
      },
      {
        label: 'Find Package',
        ref: '#app/action.searchPackage'
      },
      {
        label: 'My Booking',
        ref: '#app/action.myBooking'
      }
    ];

    var menuEnd = [{
      label: 'Logout',
      ref: '#',
      clickTrigger: logout
    }];

    if (me.isTravelAgent) {
      menusBase.push({
        label: 'My Travel Agent',
        ref: '#app/action.myTravelAgents'
      });
    }
    if (me.isAdmin) {
      menusBase.push({
        label: 'Approvals',
        ref: '#app/action.approvals'
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

  function hideMenu() {
    $('.navbar-toggle').click();
  }


  function $render(_data, _slotView) {
    _elementOpenStart("nav", "");
    _attr("element", "dist.component.header");
    _attr("class", "navbar navbar-default navbar-fixed-top");
    _elementOpenEnd("nav");
    _elementOpenStart("div", "");
    _attr("class", "container");
    _elementOpenEnd("div");
    _elementOpenStart("div", "");
    _attr("class", "navbar-header");
    _elementOpenEnd("div");
    _elementOpenStart("button", "");
    _attr("type", "button");
    _attr("class", "navbar-toggle collapsed");
    _attr("data-toggle", "collapse");
    _attr("data-target", "#navbar");
    _attr("aria-expanded", "false");
    _attr("aria-controls", "navbar");
    _elementOpenEnd("button");
    _elementOpenStart("span", "");
    _attr("class", "sr-only");
    _elementOpenEnd("span");
    _text("Toggle navigation");
    _elementClose("span");
    _elementOpenStart("span", "");
    _attr("class", "icon-bar");
    _elementOpenEnd("span");
    _elementClose("span");
    _elementOpenStart("span", "");
    _attr("class", "icon-bar");
    _elementOpenEnd("span");
    _elementClose("span");
    _elementOpenStart("span", "");
    _attr("class", "icon-bar");
    _elementOpenEnd("span");
    _elementClose("span");
    _elementClose("button");
    _elementOpenStart("a", "");
    _attr("class", "navbar-brand");
    _attr("href", "#");
    _elementOpenEnd("a");
    _elementClose("a");
    _elementClose("div");
    _elementOpenStart("div", "");
    _attr("id", "navbar");
    _attr("class", "collapse navbar-collapse");
    _elementOpenEnd("div");
    (function(domNode) {
      var node = domNode.element;

      function asyncFunc__1(data) {
        _elementOpenStart("ul", "");
        _attr("class", "nav navbar-nav");
        _elementOpenEnd("ul");
        var _array = generateMenu(data) || [];
        _array.forEach(function(menu) {
          _elementOpenStart("li", "");
          _elementOpenEnd("li");
          if (menu.ref != '#') {
            _elementOpenStart("a", "");
            _attr("href", menu.ref);
            _attr("onclick", function(event) {
              return hideMenu();
            });
            _elementOpenEnd("a");
            _text("" + (menu.label) + "");
            _elementClose("a");
          }
          if (menu.ref == '#') {
            _elementOpenStart("a", "");
            _attr("href", "#");
            _attr("onclick", function(event) {
              return logout();
            });
            _elementOpenEnd("a");
            _text("" + (menu.label) + "");
            _elementClose("a");
          }
          _elementClose("li");
        });
        _elementClose("ul");
      }
      var promise = getMe();
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
    _elementClose("nav");
    _elementOpenStart("script", "");
    _elementOpenEnd("script");
    _elementClose("script");
  }
  if (typeof $render === "function") {
    $export.render = $render;
  }
  return $export;
})());