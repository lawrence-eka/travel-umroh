yalla.framework.addComponent("/dist/user/myProfile", (function() {
  var $patchChanges = yalla.framework.renderToScreen;
  var $inject = yalla.framework.createInjector("/dist/user/myProfile");
  var $export = {};
  var $path = "/dist/user/myProfile";
  var _elementName = "dist.user.myProfile";
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



  function initState(props) {
    //debugger;
    return {
      editedUserId: props.editedUserId,
      error: {
        message: ''
      }
    };
  }

  function onPropertyChange(props) {
    if (props.editedUserId) this.state.editedUserId = props.editedUserId.newValue;
  }

  function getMyProfile() {
    var self = this;
    return new Promise(function(resolve) {
      //debugger;
      if (!self.state.editedUserId) {
        dpd.users.me(function(me) {
          //debugger;
          if (!me) {
            storage.me.erase();
            window.location.hash = "#app";
          }
          resolve(me);
        });
      } else {
        dpd.users.get(self.state.editedUserId, function(user, err) {
          debugger;
          resolve(user);
        });
      }
    });
  }

  function onCancel() {
    window.location.hash = "#app/search-package.home";
  }

  function onSave() {
    window.location.hash = '#app/search-package.home';
  }

  function $render(_props, _slotView) {
    _context["profile"] = $inject("/user/userProfile");
    var profile = _context["profile"];
    _elementOpenStart("div", "");
    _attr("element", "dist.user.myProfile");
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
        var _params = {
          "profile": data,
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
            onSave.bind(self)(event);
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
            onCancel.bind(self)();
          },
          "error": _state.error.message
        };
        _context["profile"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
      }
      var promise = getMyProfile.bind(self)();
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
  }
  if (typeof $render === "function") {
    $export.render = $render;
  }
  return $export;
})());