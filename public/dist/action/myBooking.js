yalla.framework.addComponent("/dist/action/myBooking", (function() {
  var $path = "/dist/action/myBooking";
  var $patchChanges = yalla.framework.renderToScreen;
  var $export = {};
  var $context = {};
  var _parentComponent = yalla.framework.getParentComponent;
  var $inject = yalla.framework.createInjector("/dist/action/myBooking");

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

  var errorMessage = "";

  function queryBookings(userId) {
    return new Promise(function(resolve) {
      var q = {
        "userId": userId
      };
      dpd.bookings.get(q, function(bkg, err) {
        if (err) {
          errorMessage = err.message;
          $patchChanges();
        } else {
          resolve(bkg);
        };
      });
    });
  }

  function getBookings() {
    return new Promise(function(resolve) {
      dpd.users.me(function(me) {
        queryBookings(me.id).then(function(bkg) {
          resolve(bkg);
        });

      });
    });
  }

  function generateLink(event) {
    debugger;
    window.location.hash = '#app/action.bookPackage:bookingId=' + event.data;
  }

  function $render(_props, _slotView) {
    $context["card-booking"] = $inject("/component/card-booking");
    var cardBooking = $context["card-booking"];
    $context["card"] = $inject("/component/card");
    var card = $context["card"];
    _elementOpenStart("div", "");
    _attr("element", "dist.action.myBooking");
    _elementOpenEnd("div");
    // The component of this object
    var __component = IncrementalDOM.currentElement();
    __component.__state = __component.__state || initState.bind(__component)(_props);
    var __state = __component.__state;
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
        _array.forEach(function(bkg) {
          _elementOpenStart("p", "");
          _elementOpenEnd("p");
          $context["card-booking"].render({
            "bkg": bkg,
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
            }
          }, function(slotName) {});
          _elementClose("p");
        });
      }
      var promise = getBookings.bind(self)();
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
  }
  if (typeof $render === "function") {
    $export.render = $render;
  }
  return $export;
})());