yalla.framework.addComponent("/dist/user/card-user-approvals", (function() {
  var $patchChanges = yalla.framework.renderToScreen;
  var $inject = yalla.framework.createInjector("/dist/user/card-user-approvals");
  var $export = {};
  var $path = "/dist/user/card-user-approvals";
  var _elementName = "dist.user.card-user-approvals";
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

  function onApprove(user) {
    this.emitEvent('approve', user);
  }

  function onReject(user) {
    this.emitEvent('reject', user);
  }

  function fullName(firstName, lastName) {
    return ((firstName ? firstName : 'NoFirstName') + ' ' + (lastName ? lastName : 'NoLastName')).toTitleCase()
  }

  function $render(_props, _slotView) {
    _context["panel"] = $inject("/component/panel");
    var panel = _context["panel"];
    _context["entry"] = $inject("/component/entry");
    var entry = _context["entry"];
    _elementOpenStart("div", "");
    _attr("element", "dist.user.card-user-approvals");
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
      "title": fullName.bind(self)(_props.user.firstName, _props.user.lastName),
      "nofooter": "nofooter"
    };
    _context["panel"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {
      if (slotName === "body") {
        _elementOpenStart("div", "");
        _elementOpenEnd("div");
        _text("Admin: " + (_props.user.needApproval.isAdmin ? 'Yes' : 'No') + "");
        _elementOpenStart("br", "");
        _elementOpenEnd("br");
        _elementClose("br");
        _text("Travel Agent: " + (_props.user.needApproval.isTravelAgent ? 'Yes' : 'No') + "");
        _elementOpenStart("br", "");
        _elementOpenEnd("br");
        _elementClose("br");
        _elementOpenStart("div", "");
        _attr("class", "row");
        _elementOpenEnd("div");
        var _params = {
          "type": "button",
          "value": "Approve",
          "divClass": "col-xs-6 col-sm-6 col-md-6 col-lg-6",
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
            onApprove.bind(self)(_props.user);
          }
        };
        _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
        var _params = {
          "type": "button",
          "value": "Reject",
          "divClass": "col-xs-6 col-sm-6 col-md-6 col-lg-6",
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
            onReject.bind(self)(_props.user);
          }
        };
        _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
        _elementClose("div");
        _elementClose("div");
      }
    });
    _elementClose("div");
  }
  if (typeof $render === "function") {
    $export.render = $render;
  }
  return $export;
})());