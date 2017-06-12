yalla.framework.addComponent("/dist/user/registration", (function() {
  var $patchChanges = yalla.framework.renderToScreen;
  var $inject = yalla.framework.createInjector("/dist/user/registration");
  var $export = {};
  var $path = "/dist/user/registration";
  var _elementName = "dist.user.registration";
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

  function initState() {
    return {
      alert: new Alert(),
    }
    //{
    //    error : {
    //        message : ''
    //    }
    //};
  }

  function cancelRegistration() {
    window.location.hash = "#app";
  }

  function register(profile) {
    profile = profile.data;
    var self = this;
    dpd.users.post(profile, function(user, err) {
      if (err) {
        //self.state.error.message = err;
        self.state.alert.alert(err);
        $patchChanges();
      } else {
        dpd.users.login({
          "username": profile.username,
          "password": profile.password
        }, function(user, err) {
          if (err) {
            //self.state.error.message = err;
            self.state.alert.alert(err);
            $patchChanges();
          } else {
            window.location.hash = '#app';
          }
        });
      }

    });
  }

  function $render(_props, _slotView) {
    _context["profile"] = $inject("/component/userProfile");
    var profile = _context["profile"];
    _elementOpenStart("div", "");
    _attr("element", "dist.user.registration");
    _attr("class", "container small-margin-top");
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
    var _params = {
      "onsave": function(event) {
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
        register.bind(self)(event);
      },
      "oncancel": function(event) {
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
        cancelRegistration.bind(self)();
      },
      "errorMessage": _state.alert.text.bind(self)()
    };
    _context["profile"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
    _elementClose("div");
  }
  if (typeof $render === "function") {
    $export.render = $render;
  }
  return $export;
})());