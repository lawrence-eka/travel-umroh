yalla.framework.addComponent("/dist/booking/home", (function() {
  var $patchChanges = yalla.framework.renderToScreen;
  var $inject = yalla.framework.createInjector("/dist/booking/home");
  var $export = {};
  var $path = "/dist/booking/home";
  var _elementName = "dist.booking.home";
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
      bookingId: props.bookingId,
    }
  }
  var package = {};
  var booking = {};

  //var numOfPassenger = 0;
  var errorMessage = '';

  function setPackage(pkg) {
    package = pkg;
  }

  function getPackage() {
    return package;
  }

  function setBooking(bkg) {
    var nop = booking.numberOfPassengers ? booking.numberOfPassengers : 0;
    booking = bkg;
    booking.numberOfPassengers = nop;
  }

  function setNumberOfPassengers(numberOfPassengers) {
    booking.numberOfPassengers = numberOfPassengers
  }

  function getBooking() {
    return booking;
  }

  function getPassengers(bookingId) {
    debugger;
    return new Promise(function(resolve) {
      dpd.passengers.get({
        "bookingId": bookingId
      }, function(passengers, err) {
        if (err) {
          errorMessage = JSON.stringify(err);
        } else {
          setNumberOfPassengers(passengers.length);
          resolve(passengers);
        }
      });
    });
  }

  function queryBooking(id) {
    return new Promise(function(resolve) {
      dpd.bookings.get(id, function(bkg, err) {
        if (err) {
          errorMessage = JSON.stringify(err);
        } else {
          resolve(bkg);
          setBooking(bkg);
        }
      });
    });
  }

  function $render(_props, _slotView) {
    _context["card-booking"] = $inject("/booking/card-booking");
    var cardBooking = _context["card-booking"];
    _context["card-passenger"] = $inject("/booking/card-passenger");
    var cardPassenger = _context["card-passenger"];
    _context["edit-passenger"] = $inject("/booking/edit-passenger");
    var editPassenger = _context["edit-passenger"];
    _context["alert"] = $inject("/component/alert");
    var alert = _context["alert"];
    _context["entry"] = $inject("/component/entry");
    var entry = _context["entry"];
    _context["panel"] = $inject("/component/panel");
    var panel = _context["panel"];
    _context["ppLink"] = $inject("/component/ppLink");
    var ppLink = _context["ppLink"];
    _elementOpenStart("link", "");
    _attr("element", "dist.booking.home");
    _attr("href", "asset/css/custom-style.css");
    _attr("rel", "stylesheet");
    _elementOpenEnd("link");
    _elementClose("link");
    _elementOpenStart("div", "");
    _attr("element", "dist.booking.home");
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
        _elementOpenStart("div", "");
        _elementOpenEnd("div");
        var _params = {
          "bkg": data
        };
        _context["card-booking"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
        _elementClose("div");
        var _params = {
          "booking": data
        };
        _context["edit-passenger"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
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

          function asyncFunc_2(data) {
            var _array = data || [];
            _array.forEach(function(psg) {
              _elementOpenStart("p", "");
              _elementOpenEnd("p");
              var _params = {
                "passenger": psg
              };
              _context["card-passenger"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
              _elementClose("p");
            });
          }
          var promise = getPassengers.bind(self)(_state.bookingId);
          if (promise && typeof promise == "object" && "then" in promise) {
            _skip();
            promise.then(function(_result) {
              $patchChanges(node, function() {
                asyncFunc_2.call(self, _result)
              });
            }).catch(function(err) {
              console.log(err);
            });
          } else {
            asyncFunc_2.call(self, promise)
          }
        })({
          element: IncrementalDOM.currentElement(),
          pointer: IncrementalDOM.currentPointer()
        });
        _elementClose("div");
      }
      var promise = queryBooking.bind(self)(_state.bookingId);
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