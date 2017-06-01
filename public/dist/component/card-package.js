yalla.framework.addComponent("/dist/component/card-package", (function() {
  var $path = "/dist/component/card-package";
  var $patchChanges = yalla.framework.renderToScreen;
  var $export = {};
  var $context = {};
  var _parentComponent = yalla.framework.getParentComponent;
  var $inject = yalla.framework.createInjector("/dist/component/card-package");

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

  function onClick(packageId) {
    this.emitEvent('click', packageId);
  }

  function onItineraryClicked(packageId) {
    this.emitEvent('showItinerary', packageId);
  }

  function onEdit(packageId) {
    this.emitEvent('edit', packageId);
  }


  function $render(_props, _slotView) {
    $context["card"] = $inject("/component/panel");
    var card = $context["card"];
    $context["entry"] = $inject("/component/entry");
    var entry = $context["entry"];
    _elementOpenStart("div", "");
    _attr("element", "dist.component.card-package");
    _elementOpenEnd("div");
    // The component of this object
    var __component = IncrementalDOM.currentElement();
    __component.__state = __component.__state || initState.bind(__component)(_props);
    var __state = __component.__state;
    $context["card"].render({
      "title": _props.pkg.packageName,
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
        self.component = __component;
        self.component.__state = self.component.__state || {};
        self.state = self.component.__state;
        self.emitEvent = function(eventName, data) {
          var event = new ComponentEvent(eventName, data, self.target, self.currentTarget);
          if ('on' + eventName in _props) {
            _props['on' + eventName](event);
          }
        };
        return onClick.bind(self)(_props.pkg.id);
      }
    }, function(slotName) {
      if (slotName == "body") {
        _elementOpenStart("div", "");
        _elementOpenEnd("div");
        _text("Travel Date: " + (_props.pkg.travelDateFrom ? _props.pkg.travelDateFrom.toStringDateRange(_props.pkg.travelDateUntil) : '') + "");
        _elementOpenStart("br", "");
        _elementOpenEnd("br");
        _elementClose("br");
        _text("Land Arrangements: " + (_props.pkg.costLandArrangements ? _props.pkg.costLandArrangements.toFormattedString() : '') + "");
        _elementOpenStart("br", "");
        _elementOpenEnd("br");
        _elementClose("br");
        _text("Tickets: " + (_props.pkg.costTickets ? _props.pkg.costTickets.toFormattedString() : '') + "");
        if (_props.onedit || _props.onshowItinerary) {
          _elementOpenStart("div", "");
          _attr("class", "row");
          _elementOpenEnd("div");
          $context["entry"].render({
            "type": "button",
            "value": "Edit",
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
              self.component = __component;
              self.component.__state = self.component.__state || {};
              self.state = self.component.__state;
              self.emitEvent = function(eventName, data) {
                var event = new ComponentEvent(eventName, data, self.target, self.currentTarget);
                if ('on' + eventName in _props) {
                  _props['on' + eventName](event);
                }
              };
              return onEdit.bind(self)(_props.pkg.id);
            }
          }, function(slotName) {});
          $context["entry"].render({
            "type": "button",
            "value": "Itinerary...",
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
              self.component = __component;
              self.component.__state = self.component.__state || {};
              self.state = self.component.__state;
              self.emitEvent = function(eventName, data) {
                var event = new ComponentEvent(eventName, data, self.target, self.currentTarget);
                if ('on' + eventName in _props) {
                  _props['on' + eventName](event);
                }
              };
              return onItineraryClicked.bind(self)(_props.pkg.id);
            }
          }, function(slotName) {});
          _elementClose("div");
        }
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