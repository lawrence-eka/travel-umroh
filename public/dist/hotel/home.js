yalla.framework.addComponent("/dist/hotel/home", (function() {
  var $patchChanges = yalla.framework.renderToScreen;
  var $inject = yalla.framework.createInjector("/dist/hotel/home");
  var $export = {};
  var $path = "/dist/hotel/home";
  var _elementName = "dist.hotel.home";
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
    var state = {
      isEditMode: false,
      contactPersonId: storage.me.read().id,
    }
    //debugger;
    return state;
  }

  function onEdit(event) {
    this.state.hotelId = event.data;
    this.state.isEditMode = true;
    $patchChanges();
  }

  function onCloseEdit() {
    this.state.hotelId = null;
    this.state.isEditMode = false;
    debugger;
    $patchChanges();
  }

  function onAddHotel() {
    this.state.hotelId = null;
    this.state.isEditMode = true;
    $patchChanges();
  }

  function $render(_props, _slotView) {
    _context["panel"] = $inject("/component/panel");
    var panel = _context["panel"];
    _context["entry"] = $inject("/component/entry");
    var entry = _context["entry"];
    _context["home"] = $inject("/component/home-button");
    var home = _context["home"];
    _context["list"] = $inject("/hotel/list-hotel");
    var list = _context["list"];
    _context["edit"] = $inject("/hotel/edit-hotel");
    var edit = _context["edit"];
    _elementOpenStart("div", "");
    _attr("element", "dist.hotel.home");
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
    if (!_state.isEditMode) {
      _elementOpenStart("div", "");
      _elementOpenEnd("div");
      var _params = {
        "title": "Hotel",
        "nofooter": "nofooter"
      };
      _context["panel"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {
        if (slotName === "body") {
          _elementOpenStart("div", "");
          _elementOpenEnd("div");
          _elementOpenStart("div", "");
          _attr("class", "row");
          _elementOpenEnd("div");
          var _params = {
            "type": "button",
            "value": "Add Hotel",
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
              onAddHotel.bind(self)();
            }
          };
          _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
          var _params = {};
          _context["home"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
          _elementClose("div");
          _elementClose("div");
        }
      });
      var _params = {
        "contactPersonId": _state.contactPersonId,
        "onedit": function(event) {
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
          onEdit.bind(self)(event);
        }
      };
      _context["list"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
      _elementClose("div");
    }
    if (_state.isEditMode) {
      _elementOpenStart("div", "");
      _elementOpenEnd("div");
      var _params = {
        "contactPersonId": _state.contactPersonId,
        "hotelId": _state.hotelId,
        "onclose": function(event) {
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
          onCloseEdit.bind(self)();
        }
      };
      _context["edit"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
      _elementClose("div");
    }
    _elementClose("div");
  }
  if (typeof $render === "function") {
    $export.render = $render;
  }
  return $export;
})());