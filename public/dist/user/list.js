yalla.framework.addComponent("/dist/user/list", (function() {
  var $patchChanges = yalla.framework.renderToScreen;
  var $inject = yalla.framework.createInjector("/dist/user/list");
  var $export = {};
  var $path = "/dist/user/list";
  var _elementName = "dist.user.list";
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

  var nbsp = " ";

  function initState(props) {
    return {
      query: props.query,
      alert: new Alert(null, $patchChanges, "alert"),
      onRecordsFound: props.onRecordsFound,
    }
  }

  function onPropertyChange(props) {
    for (var key in this.state) {
      if (props.hasOwnProperty(key)) {
        this.state[key] = props[key]["newValue"];
      }
    }
  }

  function searchUsers() {
    var self = this;
    return new Promise(function(resolve) {
      //debugger;
      if (Object.keys(self.state.query).length > 0) {
        dpd.users.get(self.state.query, function(users, err) {
          self.state.alert.alert(err);
          var recordsFound = (users.length > 0 ? users.length.toString() + ' user' + (users.length == 1 ? '' : 's') : 'No user') + ' found';
          //debugger;
          self.state.onRecordsFound.publish(recordsFound);
          resolve(users);
        });
      } else {
        //debugger;
        self.state.onRecordsFound.publish('Please enter search parameter');
        resolve(null);
      }
    });
  }

  function onManageUser(event) {
    //debugger;
    this.emitEvent('manageUser', event);
  }

  function $render(_props, _slotView) {
    _context["panel"] = $inject("/component/panel");
    var panel = _context["panel"];
    _context["alert"] = $inject("/component/alert");
    var alert = _context["alert"];
    _context["entry"] = $inject("/component/entry");
    var entry = _context["entry"];
    _elementOpenStart("div", "");
    _attr("element", "dist.user.list");
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
    yalla.framework.registerRef("alert", IncrementalDOM.currentElement(), function() {
      var _params = {
        "alertType": _state.alert.type.bind(self)(),
        "message": _state.alert.text.bind(self)()
      };
      _context["alert"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
    })()
    _elementClose("span");
    _elementOpenStart("div", "");
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
        if (data) {
          _elementOpenStart("span", "");
          _elementOpenEnd("span");
          var _array = data || [];
          _array.forEach(function(user) {
            var _params = {
              "nofooter": "nofooter",
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
                onManageUser.bind(self)(user.id);
              }
            };
            _context["panel"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {
              if (slotName === "title") {
                _elementOpenStart("div", "");
                _elementOpenEnd("div");
                _elementOpenStart("strong", "");
                _elementOpenEnd("strong");
                _text("" + ((user.firstName + ' ' + user.lastName).toTitleCase()) + "");
                _elementClose("strong");
                _elementClose("div");
              }
              if (slotName === "body") {
                _elementOpenStart("div", "");
                _elementOpenEnd("div");
                _text("Email:" + (nbsp) + "" + (user.email) + "");
                _elementOpenStart("br", "");
                _elementOpenEnd("br");
                _elementClose("br");
                _text("Phone:" + (nbsp) + "" + (user.phone) + "");
                _elementOpenStart("br", "");
                _elementOpenEnd("br");
                _elementClose("br");
                _text("Address:" + (nbsp) + "" + (user.address1) + "");
                _elementOpenStart("br", "");
                _elementOpenEnd("br");
                _elementClose("br");
                _text("City:" + (nbsp) + "" + (user.city) + "");
                _elementOpenStart("br", "");
                _elementOpenEnd("br");
                _elementClose("br");
                _text("Admin:" + (nbsp) + "" + (user.isAdmin ? 'YES' : 'NO') + "");
                _elementOpenStart("br", "");
                _elementOpenEnd("br");
                _elementClose("br");
                _text("Travel Agent:" + (nbsp) + "" + (user.isTravelAgent ? 'YES' : 'NO') + "");
                _elementOpenStart("br", "");
                _elementOpenEnd("br");
                _elementClose("br");
                _elementClose("div");
              }
            });
          });
          _elementClose("span");
        }
      }
      var promise = searchUsers.bind(self)();
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
  }
  if (typeof $render === "function") {
    $export.render = $render;
  }
  return $export;
})());