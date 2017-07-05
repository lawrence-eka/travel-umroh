yalla.framework.addComponent("/dist/component/header", (function() {
  var $patchChanges = yalla.framework.renderToScreen;
  var $inject = yalla.framework.createInjector("/dist/component/header");
  var $export = {};
  var $path = "/dist/component/header";
  var _elementName = "dist.component.header";
  var _context = {};
  var _parentComponent = yalla.framework.getParentComponent;
  var _merge = yalla.utils.merge;

  function ComponentEvent(type, data, target, currentTarget) {
    this.data = data;
    this.target = target;
    this.type = type;
    this.currentTarget = currentTarget;
  }

  var _elementOpen = IncrementalDOM.elementOpen;
  var _elementClose = IncrementalDOM.elementClose;
  var _elementOpenStart = IncrementalDOM.elementOpenStart;
  var _elementOpenEnd = IncrementalDOM.elementOpenEnd;
  var _elementVoid = IncrementalDOM.elementVoid;
  var _text = IncrementalDOM.text;
  var _attr = IncrementalDOM.attr;
  var _skip = IncrementalDOM.skip;

  function initState(props) {
    return {}
  };

  function onPropertyChange(event) {};


  function generateMenu(me) {
    //debugger;
    if (!me) return [];
    var menusBase = [{
        label: (me.firstName + " " + me.lastName).toTitleCase(),
        ref: '#app/user.myProfile'
      },
      {
        label: 'Find Package',
        ref: '#app/search-package.home'
      },
      {
        label: 'My Booking',
        ref: '#app/booking.home'
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
        ref: '#app/travel-agent.home'
      });
      menusBase.push({
        label: 'Payment Confirmation',
        ref: '#app/booking.paymentConfirmation'
      });
    }
    if (me.isAdmin) {
      menusBase.push({
        label: 'Approvals',
        ref: '#app/user.myApprovals'
      });
      menusBase.push({
        label: 'Manage Users',
        ref: '#app/user.home'
      });
    }
    return menusBase.concat(menuEnd);
  }


  function getMe() {
    return storage.me.read();
  }

  function logout() {
    //debugger;
    dpd.users.logout(function(err) {
      //debugger;
      storage.me.erase();
      window.location.hash = '#app';
    });
  }

  function hideMenu() {
    $('.navbar-toggle').click();
  }


  function $render(_props, _slotView) {
    _elementOpenStart("nav", "");
    _attr("element", "dist.component.header");
    _attr("class", "navbar navbar-default navbar-fixed-top");
    _elementOpenEnd("nav");
    var _component = IncrementalDOM.currentElement();
    var _validComponent = yalla.framework.validComponentName(_component, _elementName)
    _component._state = _component._state && _validComponent ? _component._state : initState.bind(_component)(_props);
    _component._state._name = _elementName;
    var _state = _component._state;
    var _self = {
      component: _component,
      properties: _props,
      state: _component._state
    };
    if (_validComponent) {
      yalla.framework.propertyCheckChanges(_component._properties, _props, onPropertyChange.bind(_self));
    }
    _component._properties = _props;
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
      var self = {
        target: node
      };
      self.properties = _props;
      if ('elements' in self.target) {
        self.elements = self.target.elements;
      }
      self.currentTarget = self.target;
      self.component = _component;
      self.component._state = self.component._state || {};
      self.state = self.component._state;

      function asyncFunc_1(data) {
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
              var self = {
                target: event.target
              };
              self.properties = _props;
              if ('elements' in self.target) {
                self.elements = self.target.elements;
              }
              self.currentTarget = this == event.target ? self.target : _parentComponent(event.currentTarget);
              self.component = _component;
              self.component._state = self.component._state || {};
              self.state = self.component._state;
              self.emitEvent = function(eventName, data) {
                var event = new ComponentEvent(eventName, data, self.target, self.currentTarget);
                if ('on' + eventName in _props) {
                  _props['on' + eventName](event);
                }
              };
              hideMenu.bind(self)();
            });
            _elementOpenEnd("a");
            _text("" + (menu.label) + "");
            _elementClose("a");
          }
          if (menu.ref == '#') {
            _elementOpenStart("a", "");
            _attr("onclick", function(event) {
              var self = {
                target: event.target
              };
              self.properties = _props;
              if ('elements' in self.target) {
                self.elements = self.target.elements;
              }
              self.currentTarget = this == event.target ? self.target : _parentComponent(event.currentTarget);
              self.component = _component;
              self.component._state = self.component._state || {};
              self.state = self.component._state;
              self.emitEvent = function(eventName, data) {
                var event = new ComponentEvent(eventName, data, self.target, self.currentTarget);
                if ('on' + eventName in _props) {
                  _props['on' + eventName](event);
                }
              };
              logout.bind(self)();
            });
            _attr("class", "custom-mouse-pointer");
            _elementOpenEnd("a");
            _text("" + (menu.label) + "");
            _elementClose("a");
          }
          _elementClose("li");
        });
        _elementClose("ul");
      }
      var promise = getMe.bind(self)();
      if (promise && typeof promise == "object" && "then" in promise) {
        _skip();
        promise.then(function(_result) {
          $patchChanges(node, function() {
            asyncFunc_1.call(self, _result)
          });
        }).catch(function(err) {
          console.log(err);
        });
      } else {
        asyncFunc_1.call(self, promise)
      }
    })({
      element: IncrementalDOM.currentElement(),
      pointer: IncrementalDOM.currentPointer()
    });
    _elementClose("div");
    _elementClose("div");
    _elementClose("nav");
  }
  if (typeof $render === "function") {
    $export.render = $render;
  }
  return $export;
})());