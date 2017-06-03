yalla.framework.addComponent("/dist/action/searchPackage", (function() {
  var $path = "/dist/action/searchPackage";
  var $patchChanges = yalla.framework.renderToScreen;
  var $export = {};
  var _context = {};
  var _parentComponent = yalla.framework.getParentComponent;
  var _merge = yalla.utils.merge;
  var $inject = yalla.framework.createInjector("/dist/action/searchPackage");

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

  var recordsFound = "";
  var message = '';
  var messageType = '';
  var _startDate = (new Date()).toYYYYMMDD();
  var _endDate = ((new Date()).getTime() + 31536000000).toYYYYMMDD();
  var numOfPackagesFound = '';

  function generateLink(event) {
    window.location.hash = '#app/action.showPackage:packageId=' + event.data;
  }

  function queryPackages() {
    return new Promise(function(resolve) {
      debugger;
      if (_startDate == "" || _endDate == "") resolve([]);
      var startDate = (new Date(_startDate)).setHours(0, 0, 0, 0);
      var endDate = (new Date(_endDate)).setHours(23, 59, 59, 999);
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
          message = err;
          messageType = "error";
          recordsFound = "";
        } else {
          recordsFound = (pkg.length > 0 ? pkg.length.toString() + ' package' + (pkg.length == 1 ? '' : 's') : 'No package') + ' found';
        }
        resolve(pkg);
      });
    });

  }

  function search() {
    var form = this.target.form;
    _startDate = form.elements.startDate.value;
    _endDate = form.elements.endDate.value;
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
    _elementOpenStart("div", "");
    _attr("element", "dist.action.searchPackage");
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
      "title": "Search Packages",
      "footer": recordsFound
    };
    _context["panel"].render(typeof arguments[1] === "object" ? _merge(arguments[1], __params) : __params, function(slotName, slotProps) {
      if (slotName == "body") {
        _elementOpenStart("div", "");
        _elementOpenEnd("div");
        _elementOpenStart("form", "");
        _elementOpenEnd("form");
        var __params = {
          "type": "date",
          "prompt": "Between",
          "name": "startDate",
          "value": _startDate
        };
        _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], __params) : __params, function(slotName, slotProps) {});
        var __params = {
          "type": "date",
          "prompt": "And",
          "name": "endDate",
          "value": _endDate
        };
        _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], __params) : __params, function(slotName, slotProps) {});
        var __params = {
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
            self.component = __component;
            self.component.__state = self.component.__state || {};
            self.state = self.component.__state;
            self.emitEvent = function(eventName, data) {
              var event = new ComponentEvent(eventName, data, self.target, self.currentTarget);
              if ('on' + eventName in _props) {
                _props['on' + eventName](event);
              }
            };
            return search.bind(self)();
          }
        };
        _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], __params) : __params, function(slotName, slotProps) {});
        _elementClose("form");
        _elementClose("div");
      }
    });
    _elementOpenStart("div", "");
    _elementOpenEnd("div");
    var __params = {
      "alertType": messageType,
      "message": message
    };
    _context["alert"].render(typeof arguments[1] === "object" ? _merge(arguments[1], __params) : __params, function(slotName, slotProps) {});
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
      self.component = __component;
      self.component.__state = self.component.__state || {};
      self.state = self.component.__state;

      function asyncFunc__1(data) {
        var _array = data || [];
        _array.forEach(function(pkg) {
          _elementOpenStart("div", "");
          _elementOpenEnd("div");
          var __params = {
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
              return generateLink.bind(self)(event);
            },
            "pkg": pkg
          };
          _context["card-package"].render(typeof arguments[1] === "object" ? _merge(arguments[1], __params) : __params, function(slotName, slotProps) {});
          _elementClose("div");
        });
      }
      var promise = queryPackages.bind(self)();
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
  }
  if (typeof $render === "function") {
    $export.render = $render;
  }
  return $export;
})());