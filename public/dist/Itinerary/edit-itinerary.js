yalla.framework.addComponent("/dist/itinerary/edit-itinerary", (function() {
  var $patchChanges = yalla.framework.renderToScreen;
  var $inject = yalla.framework.createInjector("/dist/itinerary/edit-itinerary");
  var $export = {};
  var $path = "/dist/itinerary/edit-itinerary";
  var _elementName = "dist.itinerary.edit-itinerary";
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
      //entryType: props.defaults.entryType,
      entryType: props.entryType,
      itineraryId: props.itineraryId,
      packageId: props.packageId,
      datePair: {
        departure: new DatePair($patchChanges),
        checkIn: new DatePair($patchChanges, null, 1),
      },
      transportType: '',
      alert: new Alert(),
    };
  }

  function getItinerary() {
    //debugger;
    var self = this;
    return new Promise(function(resolve) {
      debugger;
      var q = {
        "packageId": self.state.packageId,
        "id": self.state.itineraryId,
      }
      dpd.itineraries.get(q, function(itr, err) {
        debugger;
        if (err) {
          self.state.alert.alert(err);
        } else {
          self.state.alert.alert(null);
        }
        resolve(itr.constructor === Array ? {
          entry: {}
        } : itr);
      });
    });
  }

  function onTransportTypeChange() {
    this.state.transportType = this.target.value;
    $patchChanges('spanTransport');
  }

  function whatTransportType() {
    if (this.state.transportType == 'Plane') return 'Airline';
    else return this.state.transportType + ' Info';
  }

  function onClick() {
    this.state.entryType = this.target.name == 'btnHotel' ? 'Hotel' : 'Transport';
    $patchChanges();
  }

  function setButtonClass(btn) {
    return (btn == this.state.entryType ? "form-control btn btn-info btn-block" : "form-control btn btn-default btn-block");
  }

  var errorMessage = '';

  function loadItinerary(itinerary) {
    debugger;
    itinerary = (itinerary ? itinerary : {
      entry: {}
    });
    if (this.state.entryType == "") {
      if (itinerary && itinerary.entry && itinerary.entry.hotel) this.state.entryType = 'Hotel';
      else this.state.entryType = 'Transport';
    }
    if (this.state.entryType == 'Transport')
      this.state.transportType = itinerary.entry.transportType ? itinerary.entry.transportType : 'Plane';
    return itinerary;

  }

  function onCancel() {
    debugger;
    this.emitEvent('close');
  }

  function onSave(event, itinerary) {
    debugger;
    var form = this.target.form;
    var itinerary = {};
    itinerary.id = form.elements.id.value;
    itinerary.packageId = form.elements.packageId.value;
    itinerary.entry = {};
    itinerary.remarks = form.elements.remarks.value;
    if (this.state.entryType == 'Hotel') {
      itinerary.entry.hotel = form.elements.hotel.value;
      itinerary.entry.city = form.elements.city.value;
      itinerary.entry.checkIn = (new Date(form.elements.checkIn.value)).getTime();
      itinerary.entry.checkOut = (new Date(form.elements.checkOut.value)).getTime();
    } else {
      itinerary.entry.transport = form.elements.transport.value;
      itinerary.entry.transportType = form.elements.transportType.value;
      itinerary.entry.departFrom = form.elements.departFrom.value;
      itinerary.entry.arriveAt = form.elements.arriveAt.value;
      itinerary.entry.departure = (new Date(form.elements.departure.value)).getTime();
      itinerary.entry.arrival = (new Date(form.elements.arrival.value)).getTime();
    }
    var self = this;
    if (itinerary.id == "") {
      dpd.itineraries.post(itinerary, function(result, err) {
        debugger;
        if (err) {
          self.state.alert.alert(err);
        }
        if (result) {
          self.state.alert.alert(null);
          self.emitEvent('close');
        }
        $patchChanges();
      });
    } else {
      debugger;
      dpd.itineraries.put(itinerary.id, itinerary, function(result, err) {
        debugger;
        if (err) {
          self.state.alert.alert(err);
        } else {
          self.state.alert.alert(null);
          self.emitEvent('close');
        }
        $patchChanges();
      });
    }
  }

  function isVisible(group) {
    if (this.state.entryType == group) return "";
    else return "custom-set-hidden";
  }


  function $render(_props, _slotView) {
    _elementOpenStart("link", "");
    _attr("element", "dist.itinerary.edit-itinerary");
    _attr("href", "asset/css/custom-style.css");
    _attr("rel", "stylesheet");
    _elementOpenEnd("link");
    _elementClose("link");
    _context["entry"] = $inject("/component/entry");
    var entry = _context["entry"];
    _context["alert"] = $inject("/component/alert");
    var alert = _context["alert"];
    _context["panel"] = $inject("/component/panel");
    var panel = _context["panel"];
    _elementOpenStart("div", "");
    _attr("element", "dist.itinerary.edit-itinerary");
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
      "title": ((_state.itineraryId ? 'Edit' : 'New') + ' Entry'),
      "nofooter": "nofooter"
    };
    _context["panel"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {
      if (slotName === "body") {
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
            _elementOpenStart("form", "");
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
            if (!_props.itinerary) {
              _elementOpenStart("div", "");
              _attr("class", "row");
              _elementOpenEnd("div");
              var _params = {
                "type": "button",
                "value": "Transport",
                "name": "btnTransport",
                "divClass": "col-xs-6 col-sm-6 col-md-6 col-lg-6",
                "class": setButtonClass.bind(self)('Transport'),
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
                  onClick.bind(self)();
                }
              };
              _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
              var _params = {
                "type": "button",
                "value": "Hotel",
                "name": "btnHotel",
                "divClass": "col-xs-6 col-sm-6 col-md-6 col-lg-6",
                "class": setButtonClass.bind(self)('Hotel'),
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
                  onClick.bind(self)();
                }
              };
              _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
              _elementClose("div");
            }
            _elementOpenStart("div", "");
            _attr("class", isVisible.bind(self)('Transport'));
            _elementOpenEnd("div");
            _elementOpenStart("div", "");
            _attr("class", "row");
            _elementOpenEnd("div");
            var _params = {
              "type": "select",
              "name": "transportType",
              "value": data.entry.transportType,
              "prompt": "Transport",
              "entries": ['Plane', 'Bus', 'Train', 'Car', 'Ship'],
              "onchange": function(event) {
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
                onTransportTypeChange.bind(self)();
              }
            };
            _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
            _elementClose("div");
            _elementOpenStart("div", "");
            _attr("class", "row");
            _elementOpenEnd("div");
            _elementOpenStart("div", "");
            _elementOpenEnd("div");
            yalla.framework.registerRef("spanTransport", IncrementalDOM.currentElement(), function() {
              var _params = {
                "type": "text",
                "name": "transport",
                "prompt": whatTransportType.bind(self)(),
                "value": data.entry.transport
              };
              _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
            })()
            _elementClose("div");
            var _params = {
              "type": "datetime-local",
              "name": "departure",
              "prompt": "Departure",
              "value": (data.entry.departure ? data.entry.departure.toYYYYMMDD(true) : _state.datePair.departure.defaultStartDate()),
              "min": _state.datePair.departure.minStartDate.bind(self)(),
              "onfocusout": function(event) {
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
                _state.datePair.departure.onFocusOut.bind(self)('arrival');
              }
            };
            _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
            var _params = {
              "type": "text",
              "name": "departFrom",
              "prompt": "Depart From",
              "value": data.entry.departFrom
            };
            _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
            _elementOpenStart("div", "");
            _elementOpenEnd("div");
            yalla.framework.registerRef("arrival", IncrementalDOM.currentElement(), function() {
              var _params = {
                "type": "datetime-local",
                "name": "arrival",
                "prompt": "Arrival",
                "value": (data.entry.arrival ? data.entry.arrival.toYYYYMMDD(true) : _state.datePair.departure.defaultEndDate()),
                "min": _state.datePair.departure.minEndDate.bind(self)()
              };
              _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
            })()
            _elementClose("div");
            var _params = {
              "type": "text",
              "name": "arriveAt",
              "prompt": "Arrive At",
              "value": data.entry.arriveAt
            };
            _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
            _elementClose("div");
            _elementClose("div");
            _elementOpenStart("div", "");
            _attr("class", isVisible.bind(self)('Hotel'));
            _elementOpenEnd("div");
            _elementOpenStart("div", "");
            _attr("class", "row");
            _elementOpenEnd("div");
            var _params = {
              "type": "datetime",
              "name": "checkIn",
              "class": "form-control input-sm",
              "prompt": "Check In",
              "value": (data.entry.checkIn ? data.entry.checkIn.toYYYYMMDD(true) : _state.datePair.checkIn.defaultStartDate()),
              "min": _state.datePair.checkIn.minStartDate.bind(self)(),
              "onfocusout": function(event) {
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
                _state.datePair.checkIn.onFocusOut.bind(self)('checkOut');
              }
            };
            _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
            _elementOpenStart("span", "");
            _elementOpenEnd("span");
            yalla.framework.registerRef("checkOut", IncrementalDOM.currentElement(), function() {
              var _params = {
                "type": "datetime",
                "name": "checkOut",
                "class": "form-control input-sm",
                "prompt": "Check Out",
                "value": (data.entry.checkOut ? data.entry.checkOut.toYYYYMMDD(true) : _state.datePair.checkIn.defaultEndDate()),
                "min": _state.datePair.checkIn.minEndDate.bind(self)()
              };
              _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
            })()
            _elementClose("span");
            var _params = {
              "type": "text",
              "name": "hotel",
              "prompt": "Hotel",
              "value": data.entry.hotel
            };
            _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
            var _params = {
              "type": "text",
              "name": "city",
              "prompt": "City",
              "value": data.entry.city
            };
            _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
            _elementClose("div");
            _elementClose("div");
            _elementOpenStart("div", "");
            _attr("class", "row");
            _elementOpenEnd("div");
            var _params = {
              "type": "textarea",
              "name": "remarks",
              "prompt": "Remarks",
              "value": data.remarks
            };
            _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
            _elementClose("div");
            var _params = {
              "alertType": 'error',
              "message": errorMessage
            };
            _context["alert"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
            _elementOpenStart("div", "");
            _attr("class", "row");
            _elementOpenEnd("div");
            var _params = {
              "type": "button",
              "value": "Save",
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
                onSave.bind(self)();
              }
            };
            _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
            var _params = {
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
              }
            };
            _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
            _elementClose("div");
            _elementClose("form");
          }
          var promise = getItinerary.bind(self)();
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
    });
    _elementClose("div");
  }
  if (typeof $render === "function") {
    $export.render = $render;
  }
  return $export;
})());