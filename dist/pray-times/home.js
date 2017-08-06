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

  function test2(date, method) {
    var j;
    prayTimes.setMethod(method);
    prayTimes.adjust({
      highLats: 'AngleBased',
      asr: 'Standard',
      midnight: 'Standard',
    })
    j = prayTimes.getTimes(date, [24.5174234, 54.9895103], 4);
    j.method = method;
    return j;
  }


  function $render(_props, _slotView) {
    _context["panel"] = $inject("/component/panel");
    var panel = _context["panel"];
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
            _text("" + (JSON.stringify(data)) + "            " + (JSON.stringify(test2((new Date()), 'MWL'))) + "");
            _elementOpenStart("br", "");
            _elementOpenEnd("br");
            _elementClose("br");
            _text("" + (JSON.stringify(test2((new Date()), 'ISNA'))) + "");
            _elementOpenStart("br", "");
            _elementOpenEnd("br");
            _elementClose("br");
            _text("" + (JSON.stringify(test2((new Date()), 'Egypt'))) + "");
            _elementOpenStart("br", "");
            _elementOpenEnd("br");
            _elementClose("br");
            _text("" + (JSON.stringify(test2((new Date()), 'Makkah'))) + "");
            _elementOpenStart("br", "");
            _elementOpenEnd("br");
            _elementClose("br");
            _text("" + (JSON.stringify(test2((new Date()), 'Karachi'))) + "");
            _elementOpenStart("br", "");
            _elementOpenEnd("br");
            _elementClose("br");
            _text("" + (JSON.stringify(test2((new Date()), 'Tehran'))) + "");
            _elementOpenStart("br", "");
            _elementOpenEnd("br");
            _elementClose("br");
            _text("" + (JSON.stringify(test2((new Date()), 'Jafari'))) + "");
            _elementOpenStart("br", "");
            _elementOpenEnd("br");
            _elementClose("br");
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
      var promise = geo.getLocation.bind(self)();
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