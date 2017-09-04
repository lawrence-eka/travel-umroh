yalla.framework.addComponent("/dist/component/navbar", (function() {
  var $patchChanges = yalla.framework.renderToScreen;
  var $inject = yalla.framework.createInjector("/dist/component/navbar");
  var $export = {};
  var $path = "/dist/component/navbar";
  var _elementName = "dist.component.navbar";
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

  var isDrawedOpened;

  function whatButton() {
    var result = [];
    result.push('fa');
    if (isDrawedOpened) {
      result.push('fa-chevron-up');
    } else {
      result.push('fa-bars');
    }
    result.push('burger-button');
    return result.join(' ');
  }

  function drawerClass() {
    if (isDrawedOpened) return "drawer expand";
    else return "drawer";
  }

  function drawerCover() {
    if (isDrawedOpened) return "screen-cover";
    else return 'screen-uncover';
  }

  function onClick() {
    isDrawedOpened = !isDrawedOpened;
    console.log('lhars');
    this.emitEvent('click', isDrawedOpened);
    $patchChanges("burger");
  }

  function hideMenu() {
    isDrawedOpened = false;
    $patchChanges("burger");
  }

  function $render(_props, _slotView) {
    _elementOpenStart("div", "");
    _attr("element", "dist.component.navbar");
    _attr("class", "navbar-fixed-top");
    _elementOpenEnd("div");
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
    _elementOpenStart("span", "");
    _elementOpenEnd("span");
    yalla.framework.registerRef("burger", IncrementalDOM.currentElement(), function() {
      _elementOpenStart("div", "");
      _attr("class", "custom-navbar navbar-header");
      _elementOpenEnd("div");
      _elementOpenStart("i", "");
      _attr("class", whatButton.bind(self)());
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
        onClick.bind(self)();
      });
      _elementOpenEnd("i");
      _elementClose("i");
      _elementClose("div");
      _elementOpenStart("div", "");
      _attr("class", drawerCover.bind(self)());
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
      _elementOpenEnd("div");
      _elementOpenStart("div", "");
      _attr("id", "navbar");
      _attr("class", drawerClass.bind(self)());
      _elementOpenEnd("div");
      _elementOpenStart("ul", "");
      _attr("class", "nav navbar-nav menu");
      _elementOpenEnd("ul");
      var _array = mainMenu() || [];
      _array.forEach(function(menu) {
        _elementOpenStart("li", "");
        _elementOpenEnd("li");
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
          mainMenu.bind(self)(menu.addr);
        });
        _attr("class", "custom-mouse-pointer");
        _elementOpenEnd("a");
        _text("" + ((menu.long ? menu.long : menu.short)) + "");
        _elementClose("a");
        _elementClose("li");
      });
      _elementClose("ul");
      _elementClose("div");
      _elementClose("div");
    })()
    _elementClose("span");
    _elementClose("div");
  }
  if (typeof $render === "function") {
    $export.render = $render;
  }
  return $export;
})());