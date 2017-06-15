yalla.framework.addComponent("/dist/search-package/home", (function() {
  var $patchChanges = yalla.framework.renderToScreen;
  var $inject = yalla.framework.createInjector("/dist/search-package/home");
  var $export = {};
  var $path = "/dist/search-package/home";
  var _elementName = "dist.search-package.home";
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
      recordsFound: '',
      datePair: new DatePair($patchChanges, null, '1y'),
      displayedPackageId: null,
      onRecordsFound: new Event(),
    };
    state.onRecordsFound.subscribe(onRecordsFoundEvent.bind(this));
    state.startDate = new Date(state.datePair.defaultStartDate());
    state.endDate = new Date(state.datePair.defaultEndDate());

    return state;
  }

  function onRecordsFoundEvent(data) {
    this._state.recordsFound = data;
    $patchChanges("searchPanel");
  }

  function onClick(event) {
    this.state.displayedPackageId = event.data;
  }

  function onSearch(event) {
    this.state.startDate = event.data.startDate;
    this.state.endDate = event.data.endDate;
    $patchChanges();
  }

  function onRecordsFound(event) {
    this.state.recordsFound = event.data;
    $patchChanges('panelParam');
  }


  function $render(_props, _slotView) {
    _context["search"] = $inject("/search-package/search-panel");
    var search = _context["search"];
    _context["list"] = $inject("/search-package/list");
    var list = _context["list"];
    _context["show-package"] = $inject("/search-package/showPackage");
    var showPackage = _context["show-package"];
    _elementOpenStart("link", "");
    _attr("element", "dist.search-package.home");
    _attr("href", "asset/css/custom-style.css");
    _attr("rel", "stylesheet");
    _elementOpenEnd("link");
    _elementClose("link");
    _elementOpenStart("div", "");
    _attr("element", "dist.search-package.home");
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
    if (!_state.displayedPackageId) {
      _elementOpenStart("span", "");
      _elementOpenEnd("span");
      _elementOpenStart("span", "");
      _elementOpenEnd("span");
      yalla.framework.registerRef("searchPanel", IncrementalDOM.currentElement(), function() {
        var _params = {
          "recordsFound": _state.recordsFound,
          "onsearch": function(event) {
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
            onSearch.bind(self)(event);
          }
        };
        _context["search"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
      })()
      _elementClose("span");
      var _params = {
        "startDate": _state.startDate,
        "endDate": _state.endDate,
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
        "onRecordsFound": _state.onRecordsFound
      };
      _context["list"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
      _elementClose("span");
    }
    if (_state.displayedPackageId) {
      _elementOpenStart("span", "");
      _elementOpenEnd("span");
      var _params = {
        "packageId": _state.displayedPackageId
      };
      _context["show-package"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
      _elementClose("span");
    }
    _elementClose("div");
  }
  if (typeof $render === "function") {
    $export.render = $render;
  }
  return $export;
})());