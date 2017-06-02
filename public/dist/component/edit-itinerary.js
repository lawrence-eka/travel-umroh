yalla.framework.addComponent("/dist/component/edit-itinerary", (function() {
  var $path = "/dist/component/edit-itinerary";
  var $patchChanges = yalla.framework.renderToScreen;
  var $export = {};
  var _context = {};
  var _parentComponent = yalla.framework.getParentComponent;
  var _merge = yalla.utils.merge;
  var $inject = yalla.framework.createInjector("/dist/component/edit-itinerary");

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


  function onClick() {
    x = this.target.name == 'btnHotel' ? 'Hotel' : 'Transport';
    $patchChanges();
  }

  function setButtonClass(btn) {
    return (btn == x ? "form-control btn btn-info btn-block" : "form-control btn btn-default btn-block");
  }

  var errorMessage = '';
  var x = "";

  function loadItinerary(itinerary) {
    itinerary = (itinerary ? itinerary : {
      entry: {}
    });
    if (x == "") {
      if (itinerary && itinerary.entry && itinerary.entry.hotel) x = 'Hotel';
      else x = 'Transport';
    }
    return itinerary;

  }

  function onCancel() {
    debugger;
    this.emitEvent('cancel');
  }

  function onSave(event, itinerary) {
    debugger;
    var form = this.target.form;
    var itinerary = {};
    itinerary.id = form.elements.id.value;
    itinerary.entry = {};
    itinerary.remarks = form.elements.remarks.value;
    if (x == 'Hotel') {
      itinerary.entry.hotel = form.elements.hotel.value;
      itinerary.entry.city = form.elements.city.value;
      itinerary.entry.checkIn = (new Date(form.elements.checkIn.value)).getTime();
      itinerary.entry.checkOut = (new Date(form.elements.checkOut.value)).getTime();
    } else {
      itinerary.entry.transport = form.elements.airline.value;
      itinerary.entry.departFrom = form.elements.departFrom.value;
      itinerary.entry.arriveAt = form.elements.arriveAt.value;
      itinerary.entry.departure = (new Date(form.elements.departure.value)).getTime();
      itinerary.entry.arrival = (new Date(form.elements.arrival.value)).getTime();
    }
    this.emitEvent('save', itinerary);
  }

  function isVisible(group) {
    if (x == group) return "";
    else return "custom-set-hidden";
  }

  function entryType(data) {
    if (!entry) return 'Transport';
    else return entry.transport;
  }


  function $render(_props, _slotView) {
    _elementOpenStart("link", "");
    _attr("element", "dist.component.edit-itinerary");
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
    _context["entry"] = $inject("/component/entry");
    var entry = _context["entry"];
    _context["alert"] = $inject("/component/alert");
    var alert = _context["alert"];
    _context["panel"] = $inject("/component/panel");
    var panel = _context["panel"];
    _elementOpenStart("div", "");
    _attr("element", "dist.component.edit-itinerary");
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
      "title": ((_props.itinerary ? 'Edit' : 'New') + ' Entry'),
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
            _attr("role", "form");
            _elementOpenEnd("form");
            _elementOpenStart("input", "");
            _attr("type", "hidden");
            _attr("name", "id");
            _attr("value", data.id);
            _elementOpenEnd("input");
            _elementClose("input");
            _elementOpenStart("input", "");
            _attr("type", "hidden");
            _attr("name", "packageId");
            _attr("value", data.packageId);
            _elementOpenEnd("input");
            _elementClose("input");
            _elementOpenStart("div", "");
            _attr("class", "row");
            _elementOpenEnd("div");
            var __params = {
              "type": "button",
              "value": "Hotel",
              "name": "btnHotel",
              "divClass": "col-xs-6 col-sm-6 col-md-6 col-lg-6",
              "class": setButtonClass.bind(__self)('Hotel'),
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
                return onClick.bind(self)();
              }
            };
            _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], __params) : __params, function(slotName, slotProps) {});
            var __params = {
              "type": "button",
              "value": "Transport",
              "name": "btnTransport",
              "divClass": "col-xs-6 col-sm-6 col-md-6 col-lg-6",
              "class": setButtonClass.bind(__self)('Transport'),
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
                return onClick.bind(self)();
              }
            };
            _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], __params) : __params, function(slotName, slotProps) {});
            _elementClose("div");
            _elementOpenStart("div", "");
            _attr("class", isVisible.bind(__self)('Transport'));
            _elementOpenEnd("div");
            _elementOpenStart("div", "");
            _attr("class", "row");
            _elementOpenEnd("div");
            var __params = {
              "type": "datetime-local",
              "name": "departure",
              "prompt": "Departure",
              "value": (data.entry.departure ? data.entry.departure.toYYYYMMDD(true) : '')
            };
            _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], __params) : __params, function(slotName, slotProps) {});
            var __params = {
              "type": "text",
              "name": "departFrom",
              "prompt": "Depart From",
              "value": data.entry.departFrom
            };
            _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], __params) : __params, function(slotName, slotProps) {});
            var __params = {
              "type": "datetime-local",
              "name": "arrival",
              "prompt": "Arrival",
              "value": (data.entry.arrival ? data.entry.arrival.toYYYYMMDD(true) : '')
            };
            _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], __params) : __params, function(slotName, slotProps) {});
            var __params = {
              "type": "text",
              "name": "arriveAt",
              "prompt": "Arrive At",
              "value": data.entry.arriveAt
            };
            _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], __params) : __params, function(slotName, slotProps) {});
            var __params = {
              "type": "text",
              "name": "airline",
              "prompt": "Airline",
              "value": data.entry.transport
            };
            _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], __params) : __params, function(slotName, slotProps) {});
            _elementClose("div");
            _elementClose("div");
            _elementOpenStart("div", "");
            _attr("class", isVisible.bind(__self)('Hotel'));
            _elementOpenEnd("div");
            _elementOpenStart("div", "");
            _attr("class", "row");
            _elementOpenEnd("div");
            var __params = {
              "type": "datetime-local",
              "name": "checkIn",
              "class": "form-control input-sm",
              "prompt": "Check In",
              "value": (data.entry.checkIn ? data.entry.checkIn.toYYYYMMDD(true) : '')
            };
            _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], __params) : __params, function(slotName, slotProps) {});
            var __params = {
              "type": "datetime-local",
              "name": "checkOut",
              "class": "form-control input-sm",
              "prompt": "Check Out",
              "value": (data.entry.checkOut ? data.entry.checkOut.toYYYYMMDD(true) : '')
            };
            _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], __params) : __params, function(slotName, slotProps) {});
            var __params = {
              "type": "text",
              "name": "hotel",
              "prompt": "Hotel",
              "value": data.entry.hotel
            };
            _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], __params) : __params, function(slotName, slotProps) {});
            var __params = {
              "type": "text",
              "name": "city",
              "prompt": "City",
              "value": data.entry.city
            };
            _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], __params) : __params, function(slotName, slotProps) {});
            _elementClose("div");
            _elementClose("div");
            _elementOpenStart("div", "");
            _attr("class", "row");
            _elementOpenEnd("div");
            var __params = {
              "type": "textarea",
              "name": "remarks",
              "prompt": "Remarks",
              "value": data.remarks
            };
            _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], __params) : __params, function(slotName, slotProps) {});
            _elementClose("div");
            var __params = {
              "alertType": 'error',
              "message": errorMessage
            };
            _context["alert"].render(typeof arguments[1] === "object" ? _merge(arguments[1], __params) : __params, function(slotName, slotProps) {});
            _elementOpenStart("div", "");
            _attr("class", "row");
            _elementOpenEnd("div");
            var __params = {
              "type": "button",
              "value": _props.itinerary ? 'Save' : 'Register',
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
            _elementClose("form");
          }
          var promise = loadItinerary.bind(self)(_props.itinerary);
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