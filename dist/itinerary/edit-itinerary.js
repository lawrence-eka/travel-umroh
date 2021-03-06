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
      entryType: props.entryType,
      itineraryId: props.itineraryId,
      packageId: props.packageId,
      datePair: {
        departure: new DatePair($patchChanges),
        checkIn: new DatePair($patchChanges, null, 1),
      },
      data: {
        itinerary: null,
        airlines: null,
        airports: null,
        hotels: null,
      },
      transportType: (props.entryType == 'Transport' ? 'Plane' : ''),
      alert: new Alert(null, $patchChanges, "alert"),
    };
  }

  function getData() {
    //debugger;
    var self = this;
    return new Promise(function(resolve) {
      Promise.all([getAirports.bind(self)(), getAirlines.bind(self)(), getHotels.bind(self)(), getItinerary.bind(self)()]).then(function(result) {
        var retval = result[3];
        retval.airlines = result[1];
        retval.airports = result[0];
        resolve(retval);
      });
    });
  }

  function getItinerary() {
    var self = this;
    //debugger;
    return new Promise(function(resolve) {
      (new Utils()).itineraries.recommendedNewDates(self.state.packageId).then(function(data) {
        self.state.datePair.departure.setDefaults(null, null, data);
        self.state.datePair.checkIn.setDefaults(null, null, data);

        if (self.state.itineraryId) {
          var q = {
            "packageId": self.state.packageId,
            "id": self.state.itineraryId,
          }
          dpd.itineraries.get(q, function(itr, err) {
            //debugger;
            self.state.alert.alert(err);
            if (itr) {
              self.state.entryType = (itr.entry.transport ? 'Transport' : 'Hotel');
              self.state.transportType = (itr.entry.transport ? itr.entry.transportType ? itr.entry.transportType : 'Plane' : '');
              self.state.data.itinerary = itr;
              resolve(self.state.data.itinerary);
            }
          });
        } else {
          self.state.data.itinerary = {
            packageId: self.state.packageId,
            entry: {},
          };
          resolve(self.state.data.itinerary);
        }
      });
    });
  }

  function getAirlines() {
    var self = this;
    return new Promise(function(resolve) {
      if (self.state.data.airlines) resolve(self.state.data.airlines);
      else {
        dpd.airlines.get({
          $fields: {
            IATA: 1,
            airline: 1
          }
        }, function(airlines) {
          //debugger;
          self.state.data.airlines = (airlines.map(function(x) {
            return {
              label: x.IATA + ' - ' + x.airline,
              value: x.IATA
            }
          }));
          resolve(self.state.data.airlines);
        })
      }
    });
  }

  function getAirports() {
    var self = this;
    return new Promise(function(resolve) {
      if (self.state.data.airports) resolve(self.state.data.airports);
      else {
        (new Utils()).itineraries.airports().then(function(airports) {
          self.state.data.airports = airports;
          resolve(self.state.data.airports);
        });
      }
    });
  }

  function getHotels() {
    //debugger;
    var self = this;
    return new Promise(function(resolve) {
      if (self.state.data.hotels) resolve(self.state.data.hotels);
      else {
        dpd.hotels.get({
          contactPersonId: storage.me.read().id,
          $fields: {
            id: 1,
            hotelName: 1,
            city: 1
          }
        }, function(hotels) {
          //debugger;
          self.state.data.hotels = (hotels.map(function(x) {
            return {
              label: x.hotelName + ' - ' + x.city,
              city: x.city,
              value: x.id
            }
          }));
          resolve(self.state.data.hotels);
        })
      }
    });
  }

  function onTransportTypeChange() {
    this.state.transportType = this.target.value;
    //debugger;
    $patchChanges('spanTransport', 'departurePort', 'arrivalPort');
  }

  function whatTransportPrompt() {
    if (this.state.transportType == 'Plane') return 'Airline';
    else return this.state.transportType + ' Info';
  }

  function whatTransportEntryType() {
    //debugger;
    if (this.state.transportType == 'Plane') return 'lookup';
    else return 'text';
  }

  function onClick() {
    this.state.entryType = this.target.name == 'btnHotel' ? 'Hotel' : 'Transport';
    $patchChanges();
  }

  function setButtonClass(btn) {
    return (btn == this.state.entryType ? "form-control btn btn-info btn-block" : "form-control btn btn-default btn-block");
  }

  var errorMessage = '';

  function onCancel() {
    //debugger;
    this.emitEvent('close');
  }

  function onSave(event, itinerary) {
    //debugger;
    var self = this;
    var fe = this.target.form.elements;
    var itr = self.state.data.itinerary;

    itr.id = fe.id.value;
    itr.packageId = fe.packageId.value;
    itr.entry = {};
    itr.remarks = fe.remarks.value;
    if (this.state.entryType == 'Hotel') {
      itr.entry.hotel = fe.hotel.value;
      itr.entry.city = fe.city.value;
      itr.entry.checkIn = (new Date(fe.checkIn.value)).setHours(23, 35, 35);
      itr.entry.checkOut = (new Date(fe.checkOut.value)).setHours(0, 0, 1);
    } //checkout 31 des - checkin 31 des
    else {
      itr.entry.transport = fe.transport.value;
      itr.entry.departFrom = fe.departFrom.value;
      itr.entry.arriveAt = fe.arriveAt.value;
      itr.entry.departureCity = self.state.transportType == 'Plane' ? fe.departureCity.value : null;
      itr.entry.arrivalCity = self.state.transportType == 'Plane' ? fe.arrivalCity.value : null;
      itr.entry.departure = (new Date(fe.departure.value)).getTime();
      itr.entry.arrival = (new Date(fe.arrival.value)).getTime();

      itr.entry.transportType = fe.transportType.value;

      var err = {
        errors: {}
      };
      if (!fe.transport.value) {
        err.errors.transport = 'Missing value'
      }
      if (!fe.departure.value) {
        err.errors.departure = 'Missing value'
      }
      if (!fe.departFrom.value) {
        err.errors.departFrom = 'Missing value'
      }
      if (!fe.arrival.value) {
        err.errors.arrival = 'Missing value'
      }
      if (!fe.arriveAt.value) {
        err.errors.arriveAt = 'Missing value'
      }
      if (fe.transportType.value == 'Plane') {
        itr.entry.flight = fe.flight.value.toUpperCase();

        if (fe.transport.value && !this.state.data.airlines.find(function(x) {
            return x.value == fe.transport.value
          })) {
          err.errors.transport = 'Unknown airline';
        }
        if (!fe.flight.value) {
          err.errors.flight = 'Missing value'
        }
        if (fe.departFrom.value && !this.state.data.airports.find(function(x) {
            return x.value == fe.departFrom.value
          })) {
          err.errors.departFrom = 'Unknown airport';
        }
        if (fe.arriveAt.value && !this.state.data.airports.find(function(x) {
            return x.value == fe.arriveAt.value
          })) {
          err.errors.arriveAt = 'Unknown airport';
        }
      }
      this.state.alert.alert(err);
      if (Object.keys(err.errors).length != 0) return;
      debugger;
    }
    if (itr.id == "") {
      dpd.itineraries.post(itr, function(result, err) {
        //debugger;
        self.state.alert.alert(err);
        if (result) {
          self.emitEvent('close');
        }
        //$patchChanges();
      });
    } else {
      //debugger;
      dpd.itineraries.put(itr.id, itr, function(result, err) {
        //debugger;
        self.state.alert.alert(err);
        if (result) {
          self.emitEvent('close');
        }
        //$patchChanges();
      });
    }
  }

  function isVisible(group) {
    if (this.state.entryType == group) return "";
    else return "custom-set-hidden";
  }

  function onHotelSelected(event) {
    //debugger;
    this.target.form.city.value = event.data.label.split(' - ').slice(-1);
  }

  function onDepartFromSelected(event) {
    //debugger;
    this.target.form.departureCity.value = event.data.label.split(' - ').slice(-1);
  }

  function onArriveAtSelected(event) {
    //debugger;
    this.target.form.arrivalCity.value = event.data.label.split(' - ').slice(-1);
  }

  function $render(_props, _slotView) {
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
            _elementOpenStart("div", "");
            _elementOpenEnd("div");
            yalla.framework.registerRef("alert", IncrementalDOM.currentElement(), function() {
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
                  "type": whatTransportEntryType.bind(self)(),
                  "name": "transport",
                  "prompt": whatTransportPrompt.bind(self)(),
                  "value": data.entry.transport,
                  "entries": _state.data.airlines,
                  "required": "required",
                  "alert": _state.alert
                };
                _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
                if (_state.transportType == 'Plane') {
                  _elementOpenStart("div", "");
                  _elementOpenEnd("div");
                  var _params = {
                    "type": "text",
                    "name": "flight",
                    "prompt": "Flight",
                    "uppercase": "uppercase",
                    "value": data.entry.flight,
                    "required": "required",
                    "alert": _state.alert
                  };
                  _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
                  _elementClose("div");
                }
              })()
              _elementClose("div");
              var _params = {
                "type": "datetime-local",
                "name": "departure",
                "prompt": "Departure",
                "value": (data.entry.departure ? data.entry.departure.toYYYYMMDD(true) : _state.datePair.departure.defaultStartDate(true)),
                "min": _state.datePair.departure.minStartDate.bind(self)(true),
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
                  _state.datePair.departure.onStartDateFocusOut.bind(self)('arrival');
                },
                "required": "required",
                "alert": _state.alert
              };
              _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
              _elementOpenStart("div", "");
              _elementOpenEnd("div");
              yalla.framework.registerRef("departurePort", IncrementalDOM.currentElement(), function() {
                var _params = {
                  "type": whatTransportEntryType.bind(self)(),
                  "name": "departFrom",
                  "prompt": "Depart From",
                  "value": data.entry.departFrom,
                  "entries": _state.data.airports,
                  "required": "required",
                  "alert": _state.alert,
                  "lookupDelimiter": " - ",
                  "onlookupSelected": function(event) {
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
                    onDepartFromSelected.bind(self)(event);
                  }
                };
                _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
                if (_state.transportType == 'Plane') {
                  var _params = {
                    "type": "text",
                    "name": "departureCity",
                    "value": data.entry.departureCity,
                    "required": "required",
                    "alert": _state.alert
                  };
                  _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
                }
              })()
              _elementClose("div");
              _elementOpenStart("div", "");
              _elementOpenEnd("div");
              yalla.framework.registerRef("arrival", IncrementalDOM.currentElement(), function() {
                var _params = {
                  "type": "datetime-local",
                  "name": "arrival",
                  "prompt": "Arrival",
                  "value": (data.entry.arrival ? data.entry.arrival.toYYYYMMDD(true) : _state.datePair.departure.defaultEndDate(true)),
                  "min": _state.datePair.departure.minEndDate.bind(self)(true),
                  "required": "required",
                  "alert": _state.alert
                };
                _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
              })()
              _elementClose("div");
              _elementOpenStart("div", "");
              _elementOpenEnd("div");
              yalla.framework.registerRef("arrivalPort", IncrementalDOM.currentElement(), function() {
                var _params = {
                  "type": whatTransportEntryType.bind(self)(),
                  "name": "arriveAt",
                  "prompt": "Arrive At",
                  "value": data.entry.arriveAt,
                  "entries": _state.data.airports,
                  "required": "required",
                  "alert": _state.alert,
                  "lookupDelimiter": " - ",
                  "onlookupSelected": function(event) {
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
                    onArriveAtSelected.bind(self)(event);
                  }
                };
                _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
                if (_state.transportType == 'Plane') {
                  var _params = {
                    "type": "text",
                    "name": "arrivalCity",
                    "value": data.entry.arrivalCity,
                    "required": "required",
                    "alert": _state.alert
                  };
                  _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
                }
              })()
              _elementClose("div");
              _elementClose("div");
              _elementClose("div");
              _elementOpenStart("div", "");
              _attr("class", isVisible.bind(self)('Hotel'));
              _elementOpenEnd("div");
              _elementOpenStart("div", "");
              _attr("class", "row");
              _elementOpenEnd("div");
              var _params = {
                "type": "date",
                "name": "checkIn",
                "prompt": "Check In",
                "value": (data.entry.checkIn ? data.entry.checkIn.toYYYYMMDD() : _state.datePair.checkIn.defaultStartDate()),
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
                  _state.datePair.checkIn.onStartDateFocusOut.bind(self)('checkOut');
                },
                "required": "required",
                "alert": _state.alert
              };
              _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
              _elementOpenStart("span", "");
              _elementOpenEnd("span");
              yalla.framework.registerRef("checkOut", IncrementalDOM.currentElement(), function() {
                var _params = {
                  "type": "date",
                  "name": "checkOut",
                  "prompt": "Check Out",
                  "value": (data.entry.checkOut ? data.entry.checkOut.toYYYYMMDD() : _state.datePair.checkIn.defaultEndDate()),
                  "min": _state.datePair.checkIn.minEndDate.bind(self)(),
                  "required": "required",
                  "alert": _state.alert
                };
                _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
              })()
              _elementClose("span");
              var _params = {
                "type": "lookup",
                "name": "hotel",
                "prompt": "Hotel",
                "value": data.entry.hotel,
                "entries": _state.data.hotels,
                "required": "required",
                "alert": _state.alert,
                "lookupDelimiter": " - ",
                "onlookupSelected": function(event) {
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
                  onHotelSelected.bind(self)(event);
                }
              };
              _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
              var _params = {
                "type": "text",
                "name": "city",
                "prompt": "City",
                "value": data.entry.city,
                "required": "required",
                "alert": _state.alert
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
                "alertType": _state.alert.type.bind(self)(),
                "message": _state.alert.text.bind(self)()
              };
              _context["alert"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
            })()
            _elementClose("div");
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
          var promise = getData.bind(self)();
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