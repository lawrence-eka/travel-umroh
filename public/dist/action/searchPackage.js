yalla.framework.addComponent("/dist/action/searchPackage", (function() {
  var $path = "/dist/action/searchPackage";
  var $patchChanges = yalla.framework.renderToScreen;
  var $export = {};
  var $context = {};
  var _parentComponent = yalla.framework.getParentComponent;
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
      //var form = formGlobal;
      if (_startDate == "" || _endDate == "") resolve([]);
      var startDate = new Date(_startDate + " 00:00:00");
      var endDate = new Date(_endDate + " 23:59:59");
      var query = {};
      query.isPublished = "true";
      query.validUntil = {
        "$gte": (new Date()).getTime()
      };
      query.$and = [{
          travelDateFrom: {
            "$gte": startDate.getTime()
          }
        },
        {
          travelDateFrom: {
            "$lte": endDate.getTime()
          }
        }
      ];
      query.$sort = {
        "travelDateFrom": 1
      };
      dpd.packages.get(query, function(pkg, err) {
        if (err) {
          message = err;
          messageType = "error";
        } else {
          message = (pkg.length > 0 ? pkg.length.toString() + ' package' + (pkg.length == 1 ? '' : 's') : 'No package') + ' found';
          messageType = "info";
        }
        resolve(pkg);
        $patchChanges();
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
    $context["entry"] = $inject("/component/entry");
    var entry = $context["entry"];
    $context["alert"] = $inject("/component/alert");
    var alert = $context["alert"];
    $context["card-package"] = $inject("/component/card-package");
    var cardPackage = $context["card-package"];
    _elementOpenStart("link", "");
    _attr("element", "dist.action.searchPackage");
    _attr("href", "asset/css/custom-style.css");
    _attr("rel", "stylesheet");
    _elementOpenEnd("link");
    // The component of this object
    var __component = IncrementalDOM.currentElement();
    __component.__state = __component.__state || initState.bind(__component)(_props);
    var __state = __component.__state;
    _elementClose("link");
    _elementOpenStart("div", "");
    _attr("element", "dist.action.searchPackage");
    _attr("class", "container all-5px");
    _elementOpenEnd("div");
    // The component of this object
    var __component = IncrementalDOM.currentElement();
    __component.__state = __component.__state || initState.bind(__component)(_props);
    var __state = __component.__state;
    _elementOpenStart("div", "");
    _attr("class", "row centered-form no-top-margin");
    _elementOpenEnd("div");
    _elementOpenStart("div", "");
    _attr("class", "form-panel col-xs-12 col-sm-12 col-md-12 col-lg-12");
    _elementOpenEnd("div");
    _elementOpenStart("div", "");
    _attr("class", "panel panel-default frosted-glass");
    _elementOpenEnd("div");
    _elementOpenStart("div", "");
    _attr("class", "panel-heading");
    _elementOpenEnd("div");
    _elementOpenStart("h3", "");
    _attr("class", "panel-title");
    _elementOpenEnd("h3");
    _text("Search Packages");
    _elementClose("h3");
    _elementClose("div");
    _elementOpenStart("div", "");
    _attr("class", "panel-body");
    _elementOpenEnd("div");
    _elementOpenStart("form", "");
    _attr("role", "form");
    _elementOpenEnd("form");
    _elementOpenStart("div", "");
    _attr("class", "row");
    _elementOpenEnd("div");
    $context["entry"].render({
      "type": "date",
      "prompt": "Between",
      "name": "startDate",
      "value": _startDate
    }, function(slotName) {});
    $context["entry"].render({
      "type": "date",
      "prompt": "And",
      "name": "endDate",
      "value": _endDate
    }, function(slotName) {});
    $context["entry"].render({
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
    }, function(slotName) {});
    _elementClose("div");
    $context["alert"].render({
      "alertType": messageType,
      "message": message
    }, function(slotName) {});
    _elementClose("form");
    _elementClose("div");
    _elementClose("div");
    _elementClose("div");
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
        _elementOpenStart("div", "");
        _attr("class", "row");
        _elementOpenEnd("div");
        var _array = data || [];
        _array.forEach(function(pkg) {
          _elementOpenStart("div", "");
          _attr("class", "col-md-4 col-sm-6");
          _elementOpenEnd("div");
          $context["card-package"].render({
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
          }, function(slotName) {});
          _elementClose("div");
        });
        _elementClose("div");
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