yalla.framework.addComponent("/dist/main-menu/menu-grid", (function() {
  var $patchChanges = yalla.framework.renderToScreen;
  var $inject = yalla.framework.createInjector("/dist/main-menu/menu-grid");
  var $export = {};
  var $path = "/dist/main-menu/menu-grid";
  var _elementName = "dist.main-menu.menu-grid";
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

  function onClick(path) {
    window.location.hash = path;
  }

  function onLogin() {
    if (storage.me.read()) {
      dpd.users.logout(function(err) {
        //debugger;
        storage.me.erase();
        window.location.hash = '#app';
      });
    } else {
      window.location.hash = '#user.login-form';
    }
  }

  function $render(_props, _slotView) {
    _context["menu-block"] = $inject("/main-menu/menu-block");
    var menuBlock = _context["menu-block"];
    _elementOpenStart("div", "");
    _attr("element", "dist.main-menu.menu-grid");
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
    _elementOpenStart("div", "");
    _attr("class", "row menu-grid");
    _elementOpenEnd("div");
    var _array = mainMenu() || [];
    _array.forEach(function(item) {
      _elementOpenStart("span", "");
      _elementOpenEnd("span");
      var _params = {
        "icon": item.icon,
        "text": item.short,
        "onclick": function(event) {
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
          (item.addr ? onClick(item.addr) : onLogin());
        }
      };
      _context["menu-block"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
      _elementClose("span");
    });
    _elementClose("div");
    _elementClose("div");
  }
  if (typeof $render === "function") {
    $export.render = $render;
  }
  return $export;
})());