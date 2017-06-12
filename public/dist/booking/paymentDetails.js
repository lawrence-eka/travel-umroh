yalla.framework.addComponent("/dist/booking/paymentDetails", (function() {
  var $patchChanges = yalla.framework.renderToScreen;
  var $inject = yalla.framework.createInjector("/dist/booking/paymentDetails");
  var $export = {};
  var $path = "/dist/booking/paymentDetails";
  var _elementName = "dist.booking.paymentDetails";
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

  var errorMessage = "";

  var package = {};
  var booking = {};

  function setPackage(pkg) {
    package = pkg;
  }

  function getPackage() {
    return package;
  }

  function setBooking(bkg) {
    booking = bkg;
  }

  function getBooking() {
    return booking;
  }

  function paymentConfirmation() {
    debugger;
    var form = this.target.form;
    booking.fromBank = form.elements.fromBank.value;
    booking.fromBranch = form.elements.fromBranch.value;
    booking.fromAccountNumber = form.elements.fromAccountNumber.value;
    booking.fromAccountHolder = form.elements.fromAccountHolder.value;
    booking.actualPayment = form.elements.actualPayment.value;
    booking.paymentDate = (new Date(form.elements.paymentDate.value)).getTime();
    doPaymentConfirmation();
    return false;
  }

  function doPaymentConfirmation() {
    return new Promise(function(resolve) {
      dpd.bookings.put(booking, function(bkg, err) {
        if (err) {
          errorMessage = JSON.stringify(err);
          $patchChanges();
        } else {
          window.location.hash = '#app/booking.paymentConfirmation:bookingId=' + booking.id;
        }
      });
    });
  }

  function queryTravelAgent(id) {
    return new Promise(function(resolve) {
      dpd.travelagents.get(id, function(agent, err) {
        if (err) {
          errorMessage = JSON.stringify(err);
          $patchChanges();
        } else {
          resolve(agent);
        }
      });
    });
  }

  function queryPackage(id) {

    return new Promise(function(resolve) {
      dpd.packages.get(id, function(pkg, err) {
        if (err) {
          errorMessage = JSON.stringify(err);
          $patchChanges();
        } else {
          queryTravelAgent(pkg.travelAgentId).then(function(agent) {
            pkg.agent = agent;
            resolve(pkg);
          });
        }
      });
    });
  }

  function getPaymentDetails(bookingId) {
    return new Promise(function(resolve) {
      dpd.bookings.get(bookingId, function(bkg, err) {
        if (err) {
          errorMessage = JSON.stringify(err);
          $patchChanges();
        } else {
          setBooking(bkg);
          queryPackage(bkg.packageId).then(function(pkg) {
            setPackage(pkg);
            bkg.package = pkg;
            //debugger;
            resolve(bkg);
          });
        }
      });

    });
  }

  function $render(_props, _slotView) {
    _context["card-booking"] = $inject("/bookinf/card-booking");
    var cardBooking = _context["card-booking"];
    _context["card"] = $inject("/component/panel");
    var card = _context["card"];
    _elementOpenStart("link", "");
    _attr("element", "dist.booking.paymentDetails");
    _attr("href", "asset/css/custom-style.css");
    _attr("rel", "stylesheet");
    _elementOpenEnd("link");
    _elementClose("link");
    _context["entry"] = $inject("/component/entry");
    var entry = _context["entry"];
    _context["ppLink"] = $inject("/component/ppLink");
    var ppLink = _context["ppLink"];
    _elementOpenStart("div", "");
    _attr("element", "dist.booking.paymentDetails");
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
        var _params = {
          "bkg": data
        };
        _context["card-booking"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
        var _params = {
          "title": "Payment Info",
          "footer": "Please make the payment before booking expires to avoid automatic cancellation of your booking"
        };
        _context["card"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {
          if (slotName === "body") {
            _elementOpenStart("div", "");
            _elementOpenEnd("div");
            _text("Total: " + ((booking.totalPrice + booking.uniqueCode).toFormattedString()) + "");
            _elementOpenStart("br", "");
            _elementOpenEnd("br");
            _elementClose("br");
            _text("Bank: Bank Central Asia");
            _elementOpenStart("br", "");
            _elementOpenEnd("br");
            _elementClose("br");
            _text("Branch: Sidoarjo");
            _elementOpenStart("br", "");
            _elementOpenEnd("br");
            _elementClose("br");
            _text("Account No:1234567890");
            _elementOpenStart("br", "");
            _elementOpenEnd("br");
            _elementClose("br");
            _text("Name: PT Pete Tbk.");
            _elementOpenStart("br", "");
            _elementOpenEnd("br");
            _elementClose("br");
            _elementClose("div");
          }
        });
      }
      var promise = getPaymentDetails.bind(self)(_props.bookingId);
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
    var _params = {
      "title": "Payment Confirmation"
    };
    _context["card"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {
      if (slotName === "footer") {
        _elementOpenStart("div", "");
        _elementOpenEnd("div");
        var _params = {};
        _context["ppLink"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
        _elementClose("div");
      }
      if (slotName === "body") {
        _elementOpenStart("div", "");
        _elementOpenEnd("div");
        _elementOpenStart("form", "");
        _elementOpenEnd("form");
        _elementOpenStart("div", "");
        _attr("class", "row");
        _elementOpenEnd("div");
        var _params = {
          "type": "text",
          "prompt": "Bank Name",
          "name": "fromBank"
        };
        _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
        var _params = {
          "type": "text",
          "prompt": "Bank Branch",
          "name": "fromBranch"
        };
        _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
        var _params = {
          "type": "text",
          "prompt": "Account Number",
          "name": "fromAccountNumber"
        };
        _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
        var _params = {
          "type": "text",
          "prompt": "Account Holder",
          "name": "fromAccountHolder"
        };
        _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
        var _params = {
          "type": "number",
          "prompt": "Amount Transfered",
          "name": "actualPayment"
        };
        _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
        var _params = {
          "type": "datetime-local",
          "prompt": "Transfer Date & Time",
          "name": "paymentDate"
        };
        _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
        var _params = {
          "type": "button",
          "name": "btnPaymentConfirmation",
          "value": "Payment Confirmation",
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
            paymentConfirmation.bind(self)();
          }
        };
        _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
        _elementClose("div");
        _elementClose("form");
        _elementClose("div");
      }
    });
    _elementClose("div");
  }
  if (typeof $render === "function") {
    $export.render = $render;
  }
  return $export;
})());