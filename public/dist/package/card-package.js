yalla.framework.addComponent("/dist/package/card-package", (function() {
  var $patchChanges = yalla.framework.renderToScreen;
  var $inject = yalla.framework.createInjector("/dist/package/card-package");
  var $export = {};
  var $path = "/dist/package/card-package";
  var _elementName = "dist.package.card-package";
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
      showMutawwif: null,
    }

  }

  function whatStatus(pkg) {
    var today = new Date();
    if (!pkg.isPublished) return "Draft";
    else if (pkg.validFrom > today) return "Published, Not Open Yet";
    else if (pkg.validFrom <= today && pkg.validUntil >= today) return "Registration Open";
    else if (pkg.validUntil <= today && pkg.travelDateFrom >= today) return "Registration Closed";
    else if (pkg.travelDateFrom <= today && pkg.travelDateUntil >= today) return "On Going";
    else return "Done";
  }

  function onClick(packageId) {
    this.emitEvent('click', packageId);
  }

  function onItineraryClicked(packageId) {
    this.emitEvent('showItinerary', packageId);
  }

  function onEdit(packageId) {
    this.emitEvent('edit', packageId);
  }

  function onShowMutawwif(mutawwif) {
    this.state.showMutawwif = mutawwif;
    $patchChanges();
  }

  function onCloseMutawwif() {
    this.state.showMutawwif = null;
    $patchChanges();
  }


  function $render(_props, _slotView) {
    _context["card"] = $inject("/component/panel");
    var card = _context["card"];
    _context["entry"] = $inject("/component/entry");
    var entry = _context["entry"];
    _context["mtw"] = $inject("/mutawwif/card-mutawwif");
    var mtw = _context["mtw"];
    _elementOpenStart("div", "");
    _attr("element", "dist.package.card-package");
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
        self.component = _component;
        self.component._state = self.component._state || {};
        self.state = self.component._state;
        self.emitEvent = function(eventName, data) {
          var event = new ComponentEvent(eventName, data, self.target, self.currentTarget);
          if ('on' + eventName in _props) {
            _props['on' + eventName](event);
          }
        };
        onClick.bind(self)(_props.pkg.id);
      }
    };
    _context["card"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {
      if (slotName === "body") {
        _elementOpenStart("div", "");
        _elementOpenEnd("div");
        _elementOpenStart("strong", "");
        _elementOpenEnd("strong");
        _text("Status:" + (whatStatus(_props.pkg)) + "");
        _elementClose("strong");
        _elementOpenStart("br", "");
        _elementOpenEnd("br");
        _elementClose("br");
        _elementOpenStart("div", "");
        _attr("class", "container");
        _elementOpenEnd("div");
        _elementOpenStart("div", "");
        _attr("class", "row");
        _elementOpenEnd("div");
        _elementOpenStart("div", "");
        _attr("class", "col");
        _elementOpenEnd("div");
        var _params = {
          "type": "label",
          "prompt": "Travel Date:",
          "naked": "naked"
        };
        _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
        _text("" + (nbsp) + "");
        var _params = {
          "type": "label",
          "prompt": (_props.pkg.travelDateFrom ? _props.pkg.travelDateFrom.toStringDateRange(_props.pkg.travelDateUntil) : ''),
          "naked": "naked"
        };
        _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
        _elementClose("div");
        _elementClose("div");
        _elementOpenStart("div", "");
        _attr("class", "row");
        _elementOpenEnd("div");
        _elementOpenStart("div", "");
        _attr("class", "col");
        _elementOpenEnd("div");
        var _params = {
          "type": "label",
          "prompt": "Land Arrangement:",
          "naked": "naked"
        };
        _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
        _text("" + (nbsp) + "");
        var _params = {
          "type": "label",
          "prompt": (_props.pkg.costLandArrangements ? _props.pkg.costLandArrangements.toFormattedString() : ''),
          "naked": "naked"
        };
        _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
        _elementClose("div");
        _elementClose("div");
        _elementOpenStart("div", "");
        _attr("class", "row");
        _elementOpenEnd("div");
        _elementOpenStart("div", "");
        _attr("class", "col");
        _elementOpenEnd("div");
        var _params = {
          "type": "label",
          "prompt": "Ticket:",
          "naked": "naked"
        };
        _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
        _text("" + (nbsp) + "");
        var _params = {
          "type": "label",
          "prompt": (_props.pkg.costTickets ? _props.pkg.costTickets.toFormattedString() : ''),
          "naked": "naked"
        };
        _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
        _elementClose("div");
        _elementClose("div");
        _elementOpenStart("div", "");
        _attr("class", "row");
        _elementOpenEnd("div");
        _elementOpenStart("div", "");
        _attr("class", "col");
        _elementOpenEnd("div");
        var _params = {
          "type": "label",
          "prompt": "Mutawwif:",
          "naked": "naked"
        };
        _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
        _text("" + (nbsp) + "");
        if (_props.pkg.mutawwif) {
          var _params = {
            "type": "hyperlink",
            "prompt": _props.pkg.mutawwif,
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
              onShowMutawwif.bind(self)(_props.pkg.mutawwifId);
            },
            "naked": "naked"
          };
          _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
        }
        _elementClose("div");
        _elementClose("div");
        _elementClose("div");
        if (_props.onedit || _props.onshowItinerary) {
          _elementOpenStart("div", "");
          _attr("class", "row");
          _elementOpenEnd("div");
          _elementOpenStart("div", "");
          _attr("class", "col");
          _elementOpenEnd("div");
          var _params = {
            "type": "label",
            "prompt": " ",
            "naked": "naked"
          };
          _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
          _text("" + (nbsp) + "");
          _elementClose("div");
          var _params = {
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
              self.component = _component;
              self.component._state = self.component._state || {};
              self.state = self.component._state;
              self.emitEvent = function(eventName, data) {
                var event = new ComponentEvent(eventName, data, self.target, self.currentTarget);
                if ('on' + eventName in _props) {
                  _props['on' + eventName](event);
                }
              };
              onEdit.bind(self)(_props.pkg.id);
            }
          };
          _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
          var _params = {
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
              self.component = _component;
              self.component._state = self.component._state || {};
              self.state = self.component._state;
              self.emitEvent = function(eventName, data) {
                var event = new ComponentEvent(eventName, data, self.target, self.currentTarget);
                if ('on' + eventName in _props) {
                  _props['on' + eventName](event);
                }
              };
              onItineraryClicked.bind(self)(_props.pkg.id);
            }
          };
          _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
          _elementClose("div");
        }
        _elementClose("div");
      }
    });
    if (_state.showMutawwif) {
      var _params = {
        "mutawwif": _state.showMutawwif,
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
          onCloseMutawwif.bind(self)();
        }
      };
      _context["mtw"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
    }
    _elementClose("div");
  }
  if (typeof $render === "function") {
    $export.render = $render;
  }
  return $export;
})());