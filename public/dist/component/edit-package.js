yalla.framework.addComponent("/dist/component/edit-package", (function() {
  var $path = "/dist/component/edit-package";
  var $patchChanges = yalla.framework.renderToScreen;
  var $export = {};
  var $context = {};
  var _parentComponent = yalla.framework.getParentComponent;
  var $inject = yalla.framework.createInjector("/dist/component/edit-package");

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


  var errorMessage = '';

  function loadPackage(package) {
    return package ? package : {};
  }

  function onSave() {
    var form = this.target.form;
    var package = {};
    package.id = form.elements.id.value;
    package.travelAgentId = form.elements.travelAgentId.value;
    package.packageName = form.elements.packageName.value;
    package.tourLeader = form.elements.tourLeader.value;
    package.validFrom = (new Date(form.elements.validFrom.value)).getTime();
    package.validUntil = (new Date(form.elements.validUntil.value)).getTime();
    package.costLandArrangements = form.elements.costLandArrangements.value;
    package.costTickets = form.elements.costTickets.value;
    package.isItineraryConfirmed = (form.elements.isItineraryConfirmed.value == "on");
    package.isPublished = (form.elements.isPublished.value == "on");
    this.emitEvent('save', package);
  }

  function onCancel() {
    this.emitEvent('cancel');
  }

  function $render(_props, _slotView) {
    _elementOpenStart("link", "");
    _attr("element", "dist.component.edit-package");
    _attr("href", "asset/css/custom-style.css");
    _attr("rel", "stylesheet");
    _elementOpenEnd("link");
    // The component of this object
    var __component = IncrementalDOM.currentElement();
    __component.__state = __component.__state || initState.bind(__component)(_props);
    var __state = __component.__state;
    _elementClose("link");
    $context["alert"] = $inject("/component/alert");
    var alert = $context["alert"];
    $context["entry"] = $inject("/component/entry");
    var entry = $context["entry"];
    _elementOpenStart("div", "");
    _attr("element", "dist.component.edit-package");
    _attr("class", "container all-5px");
    _elementOpenEnd("div");
    // The component of this object
    var __component = IncrementalDOM.currentElement();
    __component.__state = __component.__state || initState.bind(__component)(_props);
    var __state = __component.__state;
    _elementOpenStart("div", "");
    _attr("class", "row centered-form no-top-margin");
    _elementOpenEnd("div");
    _elementOpenStart("div", "");
    _attr("class", "form-panel col-xs-12 col-sm-12 col-md-12 col-lg-12");
    _elementOpenEnd("div");
    _elementOpenStart("div", "");
    _attr("class", "panel panel-default custom-panel");
    _elementOpenEnd("div");
    _elementOpenStart("div", "");
    _attr("class", "panel-heading");
    _elementOpenEnd("div");
    if (_props.package) {
      _elementOpenStart("h3", "");
      _attr("class", "panel-title");
      _elementOpenEnd("h3");
      _text("Edit Package Info");
      _elementClose("h3");
    }
    if (!_props.package) {
      _elementOpenStart("h3", "");
      _attr("class", "panel-title");
      _elementOpenEnd("h3");
      _text("New Package");
      _elementClose("h3");
    }
    _elementClose("div");
    _elementOpenStart("div", "");
    _attr("class", "panel-body");
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
      self.component = __component;
      self.component.__state = self.component.__state || {};
      self.state = self.component.__state;

      function asyncFunc__1(data) {
        _elementOpenStart("form", "");
        _attr("role", "form");
        _elementOpenEnd("form");
        $context["entry"].render({
          "type": "hidden",
          "name": "id",
          "value": data.id
        }, function(slotName) {});
        $context["entry"].render({
          "type": "hidden",
          "name": "travelAgentId",
          "value": data.travelAgentId
        }, function(slotName) {});
        _elementOpenStart("div", "");
        _attr("class", "row");
        _elementOpenEnd("div");
        $context["entry"].render({
          "type": "text",
          "name": "packageName",
          "prompt": "Package Name",
          "value": data.packageName
        }, function(slotName) {});
        $context["entry"].render({
          "type": "text",
          "name": "tourLeader",
          "prompt": "Tour Leader",
          "value": data.tourLeader
        }, function(slotName) {});
        $context["entry"].render({
          "type": "date",
          "name": "validFrom",
          "prompt": "Valid From",
          "value": data.validFrom
        }, function(slotName) {});
        $context["entry"].render({
          "type": "date",
          "name": "validUntil",
          "prompt": "Valid Until",
          "value": data.validUntil
        }, function(slotName) {});
        $context["entry"].render({
          "type": "number",
          "name": "costLandArrangements",
          "prompt": "Land Arrangements",
          "value": data.costLandArrangements
        }, function(slotName) {});
        $context["entry"].render({
          "type": "number",
          "name": "costTickets",
          "prompt": "Tickets",
          "value": data.costTickets
        }, function(slotName) {});
        $context["entry"].render({
          "type": "checkbox",
          "name": "isItineraryConfirmed",
          "prompt": "Itinerary Confirmed",
          "value": data.isItineraryConfirmed
        }, function(slotName) {});
        $context["entry"].render({
          "type": "checkbox",
          "name": "isPublished",
          "prompt": "Published",
          "value": data.isPublished
        }, function(slotName) {});
        $context["entry"].render({
          "type": "button",
          "value": _props.package ? 'Save' : 'Register',
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
            return onSave.bind(self)();
          }
        }, function(slotName) {});
        $context["entry"].render({
          "type": "button",
          "value": "Cancel",
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
            return onCancel.bind(self)();
          }
        }, function(slotName) {});
        _elementClose("div");
        $context["alert"].render({
          "alertType": 'error',
          "message": errorMessage
        }, function(slotName) {});
        _elementClose("form");
      }
      var promise = loadPackage.bind(self)(_props.package);
      if (promise && typeof promise == "object" && "then" in promise) {
        _skip();
        promise.then(function(_result) {
          $patchChanges(node, function() {
            asyncFunc__1.call(self, _result)
          });
        }).catch(function(err) {
          console.log(err);
        });
      } else {
        asyncFunc__1.call(self, promise)
      }
    })({
      element: IncrementalDOM.currentElement(),
      pointer: IncrementalDOM.currentPointer()
    });
    _elementClose("div");
    _elementClose("div");
    _elementClose("div");
    _elementClose("div");
    _elementClose("div");
  }
  if (typeof $render === "function") {
    $export.render = $render;
  }
  return $export;
})());