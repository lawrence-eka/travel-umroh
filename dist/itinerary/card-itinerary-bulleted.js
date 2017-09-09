yalla.framework.addComponent("/dist/itinerary/card-itinerary-bulleted", (function() {
  var $patchChanges = yalla.framework.renderToScreen;
  var $inject = yalla.framework.createInjector("/dist/itinerary/card-itinerary-bulleted");
  var $export = {};
  var $path = "/dist/itinerary/card-itinerary-bulleted";
  var _elementName = "dist.itinerary.card-itinerary-bulleted";
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

  var nbsp = ' ';

  function initState(props) {
    return {
      showHotel: null,
    }

  }

  function whatClass(item) {
    item = item ? item : 'hotel';
    item = item.toLowerCase();
    return "fa fa-" + item + " icon-center";
  }

  function onShowHotel(hotel) {
    //debugger;
    this.state.showHotel = hotel;
    $patchChanges('hotelPopup');
  }

  function onCloseHotel() {
    this.state.showHotel = null;
    $patchChanges('hotelPopup');
  }



  function $render(_props, _slotView) {
    _context["entry"] = $inject("/component/entry");
    var entry = _context["entry"];
    _context["hotel"] = $inject("/hotel/card-hotel");
    var hotel = _context["hotel"];
    _elementOpenStart("style", "");
    _elementOpenEnd("style");
    _text("\n[element='dist.itinerary.card-itinerary-bulleted']{/*background-color: #ffffff;*/position: relative;}\n[element='dist.itinerary.card-itinerary-bulleted'] .leftLine{width: 30px;float: left;position: absolute;top:0;bottom: 0;}\n[element='dist.itinerary.card-itinerary-bulleted'] .content{margin-left:30px;display: block;padding-top:5px;/*background: url('/asset/img/image5.jpg') no-repeat center center fixed;*/}\n[element='dist.itinerary.card-itinerary-bulleted'] .circle{border:2px solid #cccccc;border-radius: 100%;width: 30px;height: 30px;margin: auto;text-align: center;}\n[element='dist.itinerary.card-itinerary-bulleted'] .lineVertical{border-left : 2px solid #cccccc;width: 2px;margin: auto;position: absolute;top:30px;bottom: 0px;left: 14px;}\n[element='dist.itinerary.card-itinerary-bulleted'] .leftLineContainer{}\n[element='dist.itinerary.card-itinerary-bulleted'] .icon-center {font-size:1.5rem;color : #666666;margin-top:0.5rem;}\n[element='dist.itinerary.card-itinerary-bulleted'] h3{margin-top:0px;}\n[element='dist.itinerary.card-itinerary-bulleted'] h5{margin-top:0px;margin-bottom:0px;}");
    _elementClose("style");
    _elementOpenStart("div", "");
    _attr("element", "dist.itinerary.card-itinerary-bulleted");
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
    _elementOpenStart("div", "");
    _attr("class", "leftLine");
    _elementOpenEnd("div");
    _elementOpenStart("div", "");
    _attr("class", "leftLineContainer");
    _elementOpenEnd("div");
    _elementOpenStart("div", "");
    _attr("class", "circle");
    _elementOpenEnd("div");
    _elementOpenStart("i", "");
    _attr("class", whatClass.bind(self)(_props.itr.entry.transportType));
    _attr("aria-hidden", "true");
    _elementOpenEnd("i");
    _elementClose("i");
    _elementClose("div");
    _elementOpenStart("div", "");
    _attr("class", "lineVertical");
    _elementOpenEnd("div");
    _elementClose("div");
    _elementClose("div");
    _elementClose("div");
    _elementOpenStart("div", "");
    _attr("class", "content");
    _elementOpenEnd("div");
    _elementOpenStart("div", "");
    _attr("class", "row custom-itinerary-row");
    _elementOpenEnd("div");
    var _params = {
      "naked": "naked",
      "type": "label",
      "prompt": ((_props.itr.entry.departure ? _props.itr.entry.departure : _props.itr.entry.checkIn).toDateComponents(false)),
      "class": "custom-itinerary-head"
    };
    _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
    _elementClose("div");
    if (_props.itr.entry.transport) {
      _elementOpenStart("div", "");
      _elementOpenEnd("div");
      _elementOpenStart("div", "");
      _attr("class", "row custom-itinerary-row");
      _elementOpenEnd("div");
      var _params = {
        "naked": "naked",
        "type": "label",
        "prompt": "Dep:",
        "class": "custom-itinerary-prompt"
      };
      _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
      var _params = {
        "naked": "naked",
        "type": "label",
        "prompt": (_props.itr.entry.departure.toTimeComponents()),
        "class": "custom-itinerary-value"
      };
      _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
      _text("" + (nbsp) + "");
      var _params = {
        "naked": "naked",
        "type": "label",
        "prompt": " / Arr:",
        "class": "custom-itinerary-prompt"
      };
      _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
      var _params = {
        "naked": "naked",
        "type": "label",
        "prompt": (_props.itr.entry.arrival.toTimeComponents() + (_props.itr.entry.departure.toDayOffset(_props.itr.entry.arrival) ? ' ' + _props.itr.entry.departure.toDayOffset(_props.itr.entry.arrival) : '')),
        "class": "custom-itinerary-value"
      };
      _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
      _elementClose("div");
      _elementOpenStart("div", "");
      _attr("class", "row custom-itinerary-row");
      _elementOpenEnd("div");
      var _params = {
        "naked": "naked",
        "type": "label",
        "prompt": (_props.itr.entry.transportType == 'Plane' ? 'Airline' : _props.itr.entry.transportType) + ':',
        "class": "custom-itinerary-prompt"
      };
      _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
      var _params = {
        "naked": "naked",
        "type": "label",
        "prompt": (_props.itr.entry.transport),
        "class": "custom-itinerary-value"
      };
      _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
      _text("" + (nbsp) + "");
      if (_props.itr.entry.flight) {
        var _params = {
          "naked": "naked",
          "type": "label",
          "prompt": "Flight:",
          "class": "custom-itinerary-prompt"
        };
        _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
      }
      if (_props.itr.entry.flight) {
        var _params = {
          "naked": "naked",
          "type": "label",
          "prompt": (_props.itr.entry.flight),
          "class": "custom-itinerary-value"
        };
        _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
      }
      _elementClose("div");
      _elementOpenStart("div", "");
      _attr("class", "row custom-itinerary-row");
      _elementOpenEnd("div");
      var _params = {
        "naked": "naked",
        "type": "label",
        "prompt": "From: ",
        "class": "custom-itinerary-prompt"
      };
      _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
      var _params = {
        "naked": "naked",
        "type": "label",
        "prompt": (_props.itr.entry.departFrom),
        "class": "custom-itinerary-value"
      };
      _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
      _text("" + (nbsp) + "");
      if (_props.itr.entry.departureCity) {
        var _params = {
          "naked": "naked",
          "type": "label",
          "prompt": "- ",
          "class": "custom-itinerary-prompt"
        };
        _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
      }
      _text("" + (nbsp) + "");
      if (_props.itr.entry.departureCity) {
        var _params = {
          "naked": "naked",
          "type": "label",
          "prompt": (_props.itr.entry.departureCity),
          "class": "custom-itinerary-value"
        };
        _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
      }
      _elementClose("div");
      _elementOpenStart("div", "");
      _attr("class", "row custom-itinerary-row");
      _elementOpenEnd("div");
      var _params = {
        "naked": "naked",
        "type": "label",
        "prompt": "To: ",
        "class": "custom-itinerary-prompt"
      };
      _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
      var _params = {
        "naked": "naked",
        "type": "label",
        "prompt": (_props.itr.entry.arriveAt),
        "class": "custom-itinerary-value"
      };
      _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
      _text("" + (nbsp) + "");
      if (_props.itr.entry.arrivalCity) {
        var _params = {
          "naked": "naked",
          "type": "label",
          "prompt": "- ",
          "class": "custom-itinerary-prompt"
        };
        _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
      }
      _text("" + (nbsp) + "");
      if (_props.itr.entry.arrivalCity) {
        var _params = {
          "naked": "naked",
          "type": "label",
          "prompt": (_props.itr.entry.arrivalCity),
          "class": "custom-itinerary-value"
        };
        _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
      }
      _elementClose("div");
      _elementClose("div");
    }
    if (_props.itr.entry.hotel) {
      _elementOpenStart("div", "");
      _elementOpenEnd("div");
      _elementOpenStart("div", "");
      _attr("class", "row custom-itinerary-row");
      _elementOpenEnd("div");
      var _params = {
        "naked": "naked",
        "type": "label",
        "prompt": "Check out:",
        "class": "custom-itinerary-prompt"
      };
      _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
      var _params = {
        "naked": "naked",
        "type": "label",
        "prompt": (_props.itr.entry.checkOut.toDateComponents()),
        "class": "custom-itinerary-value"
      };
      _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
      _elementClose("div");
      _elementOpenStart("div", "");
      _attr("class", "row custom-itinerary-row");
      _elementOpenEnd("div");
      var _params = {
        "naked": "naked",
        "type": "label",
        "prompt": "Hotel:",
        "class": "custom-itinerary-prompt"
      };
      _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
      var _params = {
        "naked": "naked",
        "type": _props.itr.entry.hotelName ? 'hyperlink' : 'label',
        "prompt": (_props.itr.entry.hotelName ? _props.itr.entry.hotelName : _props.itr.entry.hotel),
        "class": "custom-itinerary-value",
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
          onShowHotel.bind(self)(_props.itr.entry.hotel);
        }
      };
      _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
      _elementClose("div");
      _elementOpenStart("div", "");
      _attr("class", "row custom-itinerary-row");
      _elementOpenEnd("div");
      var _params = {
        "naked": "naked",
        "type": "label",
        "prompt": "City:",
        "class": "custom-itinerary-prompt"
      };
      _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
      var _params = {
        "naked": "naked",
        "type": "label",
        "prompt": (_props.itr.entry.city),
        "class": "custom-itinerary-value"
      };
      _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
      _elementClose("div");
      _elementClose("div");
    }
    if (_props.itr.remarks) {
      var _params = {
        "naked": "naked",
        "type": "label",
        "prompt": (_props.itr.remarks),
        "class": "custom-itinerary-prompt"
      };
      _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
    }
    _elementClose("div");
    _elementOpenStart("span", "");
    _elementOpenEnd("span");
    yalla.framework.registerRef("hotelPopup", IncrementalDOM.currentElement(), function() {
      if (_state.showHotel) {
        var _params = {
          "hotel": _state.showHotel,
          "aspopup": "aspopup",
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
            onCloseHotel.bind(self)();
          }
        };
        _context["hotel"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
      }
    })()
    _elementClose("span");
    _elementClose("div");
  }
  if (typeof $render === "function") {
    $export.render = $render;
  }
  return $export;
})());