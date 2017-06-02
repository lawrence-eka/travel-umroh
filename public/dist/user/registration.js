yalla.framework.addComponent("/dist/user/registration", (function() {
  var $path = "/dist/user/registration";
  var $patchChanges = yalla.framework.renderToScreen;
  var $export = {};
  var _context = {};
  var _parentComponent = yalla.framework.getParentComponent;
  var _merge = yalla.utils.merge;
  var $inject = yalla.framework.createInjector("/dist/user/registration");

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

  function onPropertyChange(event) {
    return {}
  };


  function initState() {
    return {
      error: {
        message: ''
      }
    };
  }

  function cancelRegistration() {
    window.location.hash = "#app";
  }

  function register(profile) {
    profile = profile.data;
    var self = this;
    dpd.users.post(profile, function(user, err) {
      if (err) {
        self.state.error.message = err;
        $patchChanges();
      } else {
        dpd.users.login({
          "username": profile.username,
          "password": profile.password
        }, function(user, err) {
          if (err) {
            self.state.error.message = err;
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
    // The component of this object
    var __component = IncrementalDOM.currentElement();
    __component.__state = __component.__state || initState.bind(__component)(_props);
    var __state = __component.__state;
    var __self = {
      component: __component,
      properties: _props,
      state: __component.__state
    };
    yalla.framework.propertyCheckChanges(__component.__properties, _props, onPropertyChange.bind(__self));
    __component.__properties = _props;
    var __params = {
      "error": __state.error.message,
      "onsave": function(event) {
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
        return register.bind(self)(event);
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
        self.component = __component;
        self.component.__state = self.component.__state || {};
        self.state = self.component.__state;
        self.emitEvent = function(eventName, data) {
          var event = new ComponentEvent(eventName, data, self.target, self.currentTarget);
          if ('on' + eventName in _props) {
            _props['on' + eventName](event);
          }
        };
        return cancelRegistration.bind(self)();
      },
      "errorMessage": __state.error.message
    };
    _context["profile"].render(typeof arguments[1] === "object" ? _merge(arguments[1], __params) : __params, function(slotName, slotProps) {});
    _elementClose("div");
  }
  if (typeof $render === "function") {
    $export.render = $render;
  }
  return $export;
})());