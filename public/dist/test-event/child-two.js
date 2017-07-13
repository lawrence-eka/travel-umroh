yalla.framework.addComponent("/dist/test-event/child-two", (function() {
  var $patchChanges = yalla.framework.renderToScreen;
  var $inject = yalla.framework.createInjector("/dist/test-event/child-two");
  var $export = {};
  var $path = "/dist/test-event/child-two";
  var _elementName = "dist.test-event.child-two";
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

  var event = $inject('/test-event/event');

  function initState(props) {
    return {
      prop1: props.prop1
    };
  }

  function onPropertyChange(props) {
    this.state.prop1 = props.prop1.newValue;
  }

  function loadData() {
    return new Promise(function(resulve) {
      alert('We have new prop ' + this.state.prop1);
    });


  }

  function informOther() {
    event.publish(this.state.prop1);
    this.state.prop1 += 1;
    $patchChanges();
  }

  function $render(_props, _slotView) {
    _elementOpenStart("div", "");
    _attr("element", "dist.test-event.child-two");
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
    _text("Child two");
    _elementOpenStart("button", "");
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
      informOther.bind(self)();
    });
    _elementOpenEnd("button");
    _text("Click To Inform Ohter");
    _elementClose("button");
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

      function asyncFunc_1(data) {}
      var promise = loadData.bind(self)();
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
    _text("KLRK");
  }
  if (typeof $render === "function") {
    $export.render = $render;
  }
  return $export;
})());