yalla.framework.addComponent("/dist/old home", (function() {
  var $path = "/dist/old home";
  var $patchChanges = yalla.framework.renderToScreen;
  var $export = {};
  var $context = {};
  var _parentComponent = yalla.framework.getParentComponent;
  var $inject = yalla.framework.createInjector("/dist/old home");

  function ComponentEvent(type, data, target, currentTarget) {
    this.data = data;
    this.target = target;
    this.type = type;
    this.currentTarget = currentTarget;
  }

  var _elementOpen = IncrementalDOM.elementOpen,
    _elementClose = IncrementalDOM.elementClose,
    _elementOpenStart = IncrementalDOM.elementOpenStart,
    _elementOpenEnd = IncrementalDOM.elementOpenEnd,
    _elementVoid = IncrementalDOM.elementVoid,
    _text = IncrementalDOM.text,
    _attr = IncrementalDOM.attr,
    _skip = IncrementalDOM.skip;

  function initState(props) {
    return {}
  };

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


  function $render(_props, _slotView) {
    _elementOpenStart("style", "");
    _elementOpenEnd("style");
    // The component of this object
    var __component = IncrementalDOM.currentElement();
    __component.__state = __component.__state || initState.bind(__component)(_props);
    var __state = __component.__state;
    _text("\n[element='dist.old home'] .menu {list-style-type: none;margin : 0px;padding : 0px;}\n[element='dist.old home'] .menu-item {display: inline-block;padding-left: 1rem;}");
    _elementClose("style");
    _elementOpenStart("div", "");
    _attr("element", "dist.old home");
    _elementOpenEnd("div");
    // The component of this object
    var __component = IncrementalDOM.currentElement();
    __component.__state = __component.__state || initState.bind(__component)(_props);
    var __state = __component.__state;
    _elementOpenStart("div", "");
    _attr("class", "menu");
    _attr("bgcolor", "ff0000");
    _elementOpenEnd("div");
    (function(domNode) {
      var node = domNode.element;
      var self = {
        target: node
      };
      self.properties = _props;
      if ('elements' in self.target) {
        self.elements = self.target.elements;
      }
      self.currentTarget = self.target;
      self.component = __component;
      self.component.__state = self.component.__state || {};
      self.state = self.component.__state;

      function asyncFunc__1(data) {
        _elementOpenStart("p", "");
        _elementOpenEnd("p");
        _text("Hello, " + (data.firstName) + " " + (data.lastName) + "");
        _elementClose("p");
        var _array = generateMenu(data) || [];
        _array.forEach(function(menu) {
          _elementOpenStart("div", "");
          _attr("class", "menu-item");
          _elementOpenEnd("div");
          _elementOpenStart("a", "");
          _attr("href", menu.ref);
          _attr("onclick", function(event) {
            var self = {
              target: event.target
            };
            self.properties = _props;
            if ('elements' in self.target) {
              self.elements = self.target.elements;
            }
            self.currentTarget = this == event.target ? self.target : _parentComponent(event.currentTarget);
            self.component = __component;
            self.component.__state = self.component.__state || {};
            self.state = self.component.__state;
            self.emitEvent = function(eventName, data) {
              var event = new ComponentEvent(eventName, data, self.target, self.currentTarget);
              if ('on' + eventName in _props) {
                _props['on' + eventName](event);
              }
            };
            return menu.clickTrigger ? menu.clickTrigger.bind(self)() : null;
          });
          _elementOpenEnd("a");
          _text("" + (menu.label) + "");
          _elementClose("a");
          _elementClose("div");
        });
      }
      var promise = getMe.bind(self)();
      if (promise && typeof promise == "object" && "then" in promise) {
        _skip();
        promise.then(function(_result) {
          $patchChanges(node, function() {
            asyncFunc__1.call(self, _result)
          });
        }).catch(function(err) {
          console.log(err);
        });
      } else {
        asyncFunc__1.call(self, promise)
      }
    })({
      element: IncrementalDOM.currentElement(),
      pointer: IncrementalDOM.currentPointer()
    });
    _elementClose("div");
    _slotView("default");
    _elementClose("div");
  }
  if (typeof $render === "function") {
    $export.render = $render;
  }
  return $export;
})());