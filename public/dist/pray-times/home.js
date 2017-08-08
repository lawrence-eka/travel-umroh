yalla.framework.addComponent("/dist/pray-times/home", (function() {
  var $patchChanges = yalla.framework.renderToScreen;
  var $inject = yalla.framework.createInjector("/dist/pray-times/home");
  var $export = {};
  var $path = "/dist/pray-times/home";
  var _elementName = "dist.pray-times.home";
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
    var state = {
      date: new Date(),
      location: null,
      locName: null,
    };
    return state;
  }

  function onNextDay(offset) {
    this.state.date = this.state.date.addDays(offset);
    $patchChanges();
  }

  function getLoc() {
    var self = this;
    return new Promise(function(resolve) {
      if (self.state.location) resolve(self.state.location);
      geo.getLocation().then(function(loc) {
        self.state.location = loc;
        resolve(loc);
      });
    });
  }

  function getLocName(loc) {
    var self = this;
    return new Promise(function(resolve) {
      if (self.state.location) resolve(self.state.locName);
      geo.getLocationName(loc).then(function(name) {
        self.state.locName = name;
        resolve(name);
      })
    })
  }

  function getTimes(date) {
    var self = this;
    return new Promise(function(resolve) {
      getLoc.bind(self)().then(getLocName.bind(self)).then(function() {
        var j;
        var loc = self.state.location;
        prayTimes.setMethod('Egypt');
        prayTimes.adjust({
          highLats: 'AngleBased',
          asr: 'Standard',
          midnight: 'Standard',
        })
        j = prayTimes.getTimes(date, [loc.lat, loc.lng], 4);
        var k = [];
        for (var i = 0; i < Object.keys(j).length; i++) {
          k.push({
            name: Object.keys(j)[i].toTitleCase(),
            time: j[Object.keys(j)[i]],
          });
        }
        k = k.sort(function(a, b) {
          return a.time < b.time ? -1 : a.time == b.time ? 0 : 1
        });
        var x = k.findIndex(x => x.time >= date.getHours().padStart(2) + ':' + date.getMinutes().padStart(2));
        if (x >= 0) k[x]['next'] = true;
        resolve(k);
      });
    });
  }


  function $render(_props, _slotView) {
    _context["panel"] = $inject("/component/panel");
    var panel = _context["panel"];
    _context["entry"] = $inject("/component/entry-naked");
    var entry = _context["entry"];
    _context["home"] = $inject("/component/home-button");
    var home = _context["home"];
    _elementOpenStart("div", "");
    _attr("element", "dist.pray-times.home");
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
        var _params = {
          "title": "Pray Times"
        };
        _context["panel"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {
          if (slotName === "body") {
            _elementOpenStart("div", "");
            _elementOpenEnd("div");
            _elementOpenStart("div", "");
            _attr("class", "row");
            _elementOpenEnd("div");
            _elementOpenStart("div", "");
            _attr("class", "col-xs-2");
            _attr("onclick", function(event) {
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
              onNextDay.bind(self)(-1);
            });
            _elementOpenEnd("div");
            _elementOpenStart("i", "");
            _attr("class", "fa fa-angle-left custom-bold-text");
            _elementOpenEnd("i");
            _elementClose("i");
            _elementClose("div");
            _elementOpenStart("div", "");
            _attr("class", "col-xs-8 custom-pray-times-date");
            _elementOpenEnd("div");
            var _params = {
              "type": "label",
              "prompt": (_state.date).toDateComponents(false, true, false, true),
              "class": "custom-pray-times-date-text"
            };
            _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
            var _params = {
              "type": "label",
              "prompt": _state.locName,
              "class": "custom-entry-prompt"
            };
            _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
            _elementClose("div");
            _elementOpenStart("div", "");
            _attr("class", "col-xs-2");
            _attr("onclick", function(event) {
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
              onNextDay.bind(self)(1);
            });
            _elementOpenEnd("div");
            _elementOpenStart("div", "");
            _attr("class", "pull-right");
            _elementOpenEnd("div");
            _elementOpenStart("i", "");
            _attr("class", "fa fa-angle-right custom-bold-text");
            _elementOpenEnd("i");
            _elementClose("i");
            _elementClose("div");
            _elementClose("div");
            _elementClose("div");
            var _array = data || [];
            _array.forEach(function(time) {
              _elementOpenStart("span", "");
              _elementOpenEnd("span");
              _elementOpenStart("div", "");
              _attr("class", "row");
              _elementOpenEnd("div");
              _elementClose("div");
              _elementOpenStart("div", "");
              _attr("class", "row");
              _elementOpenEnd("div");
              _elementOpenStart("div", "");
              _attr("class", "col-xs-6");
              _elementOpenEnd("div");
              var _params = {
                "type": "label",
                "prompt": time.name,
                "class": ('custom-normal-text ' + (time.next ? 'custom-bold-text' : 'custom-lighter-text'))
              };
              _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
              _elementClose("div");
              _elementOpenStart("div", "");
              _attr("class", "col-xs-6");
              _elementOpenEnd("div");
              _elementOpenStart("div", "");
              _attr("class", "pull-right");
              _elementOpenEnd("div");
              var _params = {
                "type": "label",
                "prompt": time.time,
                "class": ('custom-normal-text ' + (time.next ? 'custom-bold-text' : 'custom-lighter-text'))
              };
              _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
              _elementClose("div");
              _elementClose("div");
              _elementClose("div");
              _elementClose("span");
            });
            _elementClose("div");
          }
          if (slotName === "footer") {
            _elementOpenStart("div", "");
            _elementOpenEnd("div");
            _elementOpenStart("div", "");
            _attr("class", "row");
            _elementOpenEnd("div");
            var _params = {};
            _context["home"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
            _elementClose("div");
            _elementClose("div");
          }
        });
      }
      var promise = getTimes.bind(self)(_state.date);
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
  if (typeof $render === "function") {
    $export.render = $render;
  }
  return $export;
})());