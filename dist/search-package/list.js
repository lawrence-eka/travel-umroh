yalla.framework.addComponent("/dist/search-package/list", (function() {
  var $patchChanges = yalla.framework.renderToScreen;
  var $inject = yalla.framework.createInjector("/dist/search-package/list");
  var $export = {};
  var $path = "/dist/search-package/list";
  var _elementName = "dist.search-package.list";
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
    var state = {
      alert: new Alert(null, $patchChanges, "alert"),
      startDate: new Date(props.startDate),
      endDate: new Date(props.endDate),
      onRecordsFound: props.onRecordsFound,
    };

    return state;
  }

  function onPropertyChange(props) {
    for (var key in this.state) {
      if (props.hasOwnProperty(key)) {
        this.state[key] = props[key]["newValue"];
      }
    }
  }

  function queryPackages() {
    var self = this;
    return new Promise(function(resolve) {
      if (self.state.startDate == "" || self.state.endDate == "") resolve([]);
      var startDate = (new Date(self.state.startDate)).setHours(0, 0, 0, 0);
      var endDate = (new Date(self.state.endDate)).setHours(23, 59, 59, 999);
      var query = {};
      query.isPublished = "true";
      query.validUntil = {
        "$gte": startDate
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
        self.state.alert.alert(err);
        if (!err) {
          var recordsFound = (pkg.length > 0 ? pkg.length.toString() + ' package' + (pkg.length == 1 ? '' : 's') : 'No package') + ' found';
          self.state.onRecordsFound.publish(recordsFound);
        }
        resolve(pkg);
      });
    });

  }

  function onClick(event) {
    //debugger;
    this.emitEvent('click', event.data);
  }

  function $render(_props, _slotView) {
    _context["card-package"] = $inject("/package/card-package");
    var cardPackage = _context["card-package"];
    _context["alert"] = $inject("/component/alert");
    var alert = _context["alert"];
    _elementOpenStart("div", "");
    _attr("element", "dist.search-package.list");
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
    _elementOpenStart("span", "");
    _elementOpenEnd("span");
    yalla.framework.registerRef("alert", IncrementalDOM.currentElement(), function() {
      var _params = {
        "alertType": _state.alert.type.bind(self)(),
        "message": _state.alert.text.bind(self)()
      };
      _context["alert"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
    })()
    _elementClose("span");
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
              onClick.bind(self)(event);
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