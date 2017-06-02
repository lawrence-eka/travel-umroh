yalla.framework.addComponent("/dist/component/edit-package", (function() {
  var $path = "/dist/component/edit-package";
  var $patchChanges = yalla.framework.renderToScreen;
  var $export = {};
  var _context = {};
  var _parentComponent = yalla.framework.getParentComponent;
  var _merge = yalla.utils.merge;
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

  function onPropertyChange(event) {
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
    package.isItineraryConfirmed = (form.elements.isItineraryConfirmed.checked);
    package.isPublished = (form.elements.isPublished.checked);
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
    var __self = {
      component: __component,
      properties: _props,
      state: __component.__state
    };
    yalla.framework.propertyCheckChanges(__component.__properties, _props, onPropertyChange.bind(__self));
    __component.__properties = _props;
    _elementClose("link");
    _context["alert"] = $inject("/component/alert");
    var alert = _context["alert"];
    _context["entry"] = $inject("/component/entry");
    var entry = _context["entry"];
    _context["panel"] = $inject("/component/panel");
    var panel = _context["panel"];
    _elementOpenStart("div", "");
    _attr("element", "dist.component.edit-package");
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
      "title": _props.package ? 'Edit Package Info' : 'New Package',
      "nofooter": "nofooter"
    };
    _context["panel"].render(typeof arguments[1] === "object" ? _merge(arguments[1], __params) : __params, function(slotName, slotProps) {
      if (slotName == "body") {
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
          self.component = __component;
          self.component.__state = self.component.__state || {};
          self.state = self.component.__state;

          function asyncFunc__1(data) {
            _elementOpenStart("form", "");
            _elementOpenEnd("form");
            var __params = {
              "type": "hidden",
              "name": "id",
              "value": data.id
            };
            _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], __params) : __params, function(slotName, slotProps) {});
            var __params = {
              "type": "hidden",
              "name": "travelAgentId",
              "value": data.travelAgentId
            };
            _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], __params) : __params, function(slotName, slotProps) {});
            _elementOpenStart("div", "");
            _attr("class", "row");
            _elementOpenEnd("div");
            var __params = {
              "type": "text",
              "name": "packageName",
              "prompt": "Package Name",
              "value": data.packageName
            };
            _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], __params) : __params, function(slotName, slotProps) {});
            var __params = {
              "type": "text",
              "name": "tourLeader",
              "prompt": "Tour Leader",
              "value": data.tourLeader
            };
            _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], __params) : __params, function(slotName, slotProps) {});
            var __params = {
              "type": "date",
              "name": "validFrom",
              "prompt": "Valid From",
              "value": (data.validFrom ? data.validFrom.toYYYYMMDD() : '')
            };
            _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], __params) : __params, function(slotName, slotProps) {});
            var __params = {
              "type": "date",
              "name": "validUntil",
              "prompt": "Valid Until",
              "value": (data.validUntil ? data.validUntil.toYYYYMMDD() : '')
            };
            _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], __params) : __params, function(slotName, slotProps) {});
            var __params = {
              "type": "number",
              "name": "costLandArrangements",
              "prompt": "Land Arrangements",
              "value": data.costLandArrangements
            };
            _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], __params) : __params, function(slotName, slotProps) {});
            var __params = {
              "type": "number",
              "name": "costTickets",
              "prompt": "Tickets",
              "value": data.costTickets
            };
            _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], __params) : __params, function(slotName, slotProps) {});
            var __params = {
              "type": "checkbox",
              "name": "isItineraryConfirmed",
              "prompt": "Itinerary Confirmed",
              "checked": data.isItineraryConfirmed
            };
            _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], __params) : __params, function(slotName, slotProps) {});
            var __params = {
              "type": "checkbox",
              "name": "isPublished",
              "prompt": "Published",
              "checked": data.isPublished
            };
            _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], __params) : __params, function(slotName, slotProps) {});
            var __params = {
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
            };
            _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], __params) : __params, function(slotName, slotProps) {});
            var __params = {
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
            };
            _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], __params) : __params, function(slotName, slotProps) {});
            _elementClose("div");
            var __params = {
              "alertType": 'error',
              "message": errorMessage
            };
            _context["alert"].render(typeof arguments[1] === "object" ? _merge(arguments[1], __params) : __params, function(slotName, slotProps) {});
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
      }
    });
    _elementClose("div");
  }
  if (typeof $render === "function") {
    $export.render = $render;
  }
  return $export;
})());