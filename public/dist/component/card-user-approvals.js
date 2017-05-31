yalla.framework.addComponent("/dist/component/card-user-approvals", (function() {
  var $path = "/dist/component/card-user-approvals";
  var $patchChanges = yalla.framework.renderToScreen;
  var $export = {};
  var $context = {};
  var _parentComponent = yalla.framework.getParentComponent;
  var $inject = yalla.framework.createInjector("/dist/component/card-user-approvals");

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

  function fullName(firstName, lastName) {
    return ((firstName ? firstName : 'NoFirstName') + ' ' + (lastName ? lastName : 'NoLastName')).toTitleCase()
  }

  function $render(_props, _slotView) {
    $context["card"] = $inject("/component/card");
    var card = $context["card"];
    $context["card"].render({
      "element": "dist.component.card-user-approvals",
      "title": fullName(_props.user.firstName, _props.user.lastName)
    }, function(slotName) {
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
      _elementOpenStart("div", "");
      _attr("class", "col-xs-6 col-sm-6 col-md-6 col-lg-6");
      _elementOpenEnd("div");
      _elementOpenStart("div", "");
      _attr("class", "form-group");
      _elementOpenEnd("div");
      _elementOpenStart("input", "");
      _attr("type", "button");
      _attr("value", "Approve");
      _attr("class", "form-control btn btn-info btn-block margin-top-15px");
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
        return _props.onapprove.bind(self)(_props.user);
      });
      _elementOpenEnd("input");
      _elementClose("input");
      _elementClose("div");
      _elementClose("div");
      _elementOpenStart("div", "");
      _attr("class", "col-xs-6 col-sm-6 col-md-6 col-lg-6");
      _elementOpenEnd("div");
      _elementOpenStart("div", "");
      _attr("class", "form-group");
      _elementOpenEnd("div");
      _elementOpenStart("input", "");
      _attr("type", "button");
      _attr("value", "Reject");
      _attr("class", "form-control btn btn-info btn-block margin-top-15px");
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
        return _props.onreject.bind(self)(_props.user);
      });
      _elementOpenEnd("input");
      _elementClose("input");
      _elementClose("div");
      _elementClose("div");
      _elementClose("div");
      _elementClose("div");
    });
  }
  if (typeof $render === "function") {
    $export.render = $render;
  }
  return $export;
})());