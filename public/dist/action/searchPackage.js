yalla.framework.addComponent("/dist/action/searchPackage", (function() {
  var $patchChanges = yalla.framework.renderToScreen;
  var $inject = yalla.framework.createInjector("/dist/action/searchPackage");
  var $export = {};
  var $path = "/dist/action/searchPackage";
  var _elementName = "dist.action.searchPackage";
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
    return {
      recordsFound: '',
      alert: {
        text: '',
        type: ''
      },
      date: {
        start: (new Date()).toYYYYMMDD(),
        end: ((new Date()).getTime() + 31536000000).toYYYYMMDD()
      }
    };
  }

  function generateLink(event) {
    window.location.hash = '#app/action.showPackage:packageId=' + event.data;
  }

  function queryPackages() {
    var self = this;
    return new Promise(function(resolve) {
      if (self.state.date.start == "" || self.state.date.end == "") resolve([]);
      var startDate = (new Date(self.state.date.start)).setHours(0, 0, 0, 0);
      var endDate = (new Date(self.state.date.end)).setHours(23, 59, 59, 999);
      var query = {};
      query.isPublished = "true";
      query.validUntil = {
        "$gte": (new Date()).getTime()
      };
      query.$and = [{
          travelDateFrom: {
            "$gte": startDate
          }
        },
        {
          travelDateFrom: {
            "$lte": endDate
          }
        }
      ];
      query.$sort = {
        "travelDateFrom": 1
      };
      dpd.packages.get(query, function(pkg, err) {
        //debugger;
        if (err) {
          self.state.alert.text = err;
          self.state.alert.type = "error";
          self.state.recordsFound = "";
        } else {
          self.state.recordsFound = (pkg.length > 0 ? pkg.length.toString() + ' package' + (pkg.length == 1 ? '' : 's') : 'No package') + ' found';
          debugger;
          $patchChanges("panelParam");
        }
        resolve(pkg);
      });
    });

  }

  function search() {
    var form = this.target.form;
    this.state.date.start = form.elements.startDate.value;
    this.state.date.end = form.elements.endDate.value;
    $patchChanges();
    return false;
  }

  function $render(_props, _slotView) {
    _context["panel"] = $inject("/component/panel");
    var panel = _context["panel"];
    _context["entry"] = $inject("/component/entry");
    var entry = _context["entry"];
    _context["alert"] = $inject("/component/alert");
    var alert = _context["alert"];
    _context["card-package"] = $inject("/component/card-package");
    var cardPackage = _context["card-package"];
    _elementOpenStart("link", "");
    _attr("element", "dist.action.searchPackage");
    _attr("href", "asset/css/custom-style.css");
    _attr("rel", "stylesheet");
    _elementOpenEnd("link");
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
    _elementClose("link");
    _elementOpenStart("div", "");
    _attr("element", "dist.action.searchPackage");
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
      "title": "Search Packages",
      "footer": _state.recordsFound,
      "refname": "panelParam"
    };
    _context["panel"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {
      if (slotName === "body") {
        _elementOpenStart("div", "");
        _elementOpenEnd("div");
        _elementOpenStart("form", "");
        _elementOpenEnd("form");
        var _params = {
          "type": "date",
          "prompt": "Between",
          "name": "startDate",
          "value": _state.date.start
        };
        _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
        var _params = {
          "type": "date",
          "prompt": "And",
          "name": "endDate",
          "value": _state.date.end
        };
        _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
        var _params = {
          "type": "button",
          "name": "Search",
          "value": "Search",
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
            search.bind(self)();
          }
        };
        _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
        _elementClose("form");
        _elementClose("div");
      }
    });
    _elementOpenStart("div", "");
    _elementOpenEnd("div");
    var _params = {
      "alertType": _state.alert.type,
      "message": _state.alert.text
    };
    _context["alert"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
    _elementClose("div");
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
        var _array = data || [];
        _array.forEach(function(pkg) {
          _elementOpenStart("div", "");
          _elementOpenEnd("div");
          var _params = {
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
              generateLink.bind(self)(event);
            },
            "pkg": pkg
          };
          _context["card-package"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
          _elementClose("div");
        });
      }
      var promise = queryPackages.bind(self)();
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
    _elementClose("div");
  }
  if (typeof $render === "function") {
    $export.render = $render;
  }
  return $export;
})());