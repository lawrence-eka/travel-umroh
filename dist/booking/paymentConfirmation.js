yalla.framework.addComponent("/dist/booking/paymentConfirmation", (function() {
  var $patchChanges = yalla.framework.renderToScreen;
  var $inject = yalla.framework.createInjector("/dist/booking/paymentConfirmation");
  var $export = {};
  var $path = "/dist/booking/paymentConfirmation";
  var _elementName = "dist.booking.paymentConfirmation";
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
      alert: new Alert(null, $patchChanges, "alert"),
      flow: (new Utils()).flow.booking,
    }
  }

  function loadPayments() {
    var self = this;
    return new Promise(function(resolve) {
      debugger;
      var q = {
        travelAgentContactPersonId: storage.me.read().id,
        bookingStatus: 'WPV',
      };
      dpd.bookings.get(q, function(bookings, err) {
        debugger;
        self.state.alert.alert(err);
        if (!err) {
          resolve(bookings);
        }
      });
    });
  }

  function onRespond(paymentId, isApprove) {
    var self = this;
    var q = {
      isPaymentConfirmed: (isApprove ? 1 : -1),
      bookingStatus: self.state.flow.move('WPV', (isApprove ? 'paymentVerified' : 'paymentRejected'))
    }
    //debugger;
    dpd.bookings.put(paymentId, q, function(res, err) {
      //debugger;
      self.state.alert.alert(err);
      if (!err) $patchChanges();
    });
  }

  function $render(_props, _slotView) {
    _context["panel"] = $inject("/component/panel");
    var panel = _context["panel"];
    _context["entry"] = $inject("/component/entry");
    var entry = _context["entry"];
    _context["alert"] = $inject("/component/alert");
    var alert = _context["alert"];
    _context["attachments"] = $inject("/component/attachments/home");
    var attachments = _context["attachments"];
    _elementOpenStart("div", "");
    _attr("element", "dist.booking.paymentConfirmation");
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
        if (!data || data.length == 0) {
          var _params = {
            "message": "No payment needs confirmation for now.",
            "alertType": "info"
          };
          _context["alert"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
        }
        var _array = data || [];
        _array.forEach(function(payment) {
          _elementOpenStart("span", "");
          _elementOpenEnd("span");
          var _params = {
            "title": payment.package.packageName,
            "nofooter": "nofooter"
          };
          _context["panel"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {
            if (slotName === "body") {
              _elementOpenStart("span", "");
              _elementOpenEnd("span");
              _elementOpenStart("div", "");
              _attr("class", "row");
              _elementOpenEnd("div");
              var _params = {
                "type": "label",
                "prompt": ('Travel Agency: ' + (payment.travelAgent.travelAgentName)),
                "innerDivClass": "custom-label-margin"
              };
              _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
              var _params = {
                "type": "label",
                "prompt": ('Travel Date: ' + (payment.package.travelDateFrom).toStringDateRange(payment.package.travelDateUntil)),
                "innerDivClass": "custom-label-margin"
              };
              _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
              var _params = {
                "type": "label",
                "prompt": ('Total passenger: ' + (payment.numberOfPassengers ? payment.numberOfPassengers : '')),
                "innerDivClass": "custom-label-margin"
              };
              _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
              var _params = {
                "type": "label",
                "prompt": ('Total Price: ' + (payment.totalPrice ? payment.totalPrice.toFormattedString() : '')),
                "innerDivClass": "custom-label-margin"
              };
              _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
              var _params = {
                "type": "label",
                "prompt": ('From Bank: ' + payment.fromBank),
                "innerDivClass": "custom-label-margin"
              };
              _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
              var _params = {
                "type": "label",
                "prompt": ('Branch: ' + payment.fromBankBranch),
                "innerDivClass": "custom-label-margin"
              };
              _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
              var _params = {
                "type": "label",
                "prompt": ('Account No: ' + payment.fromAccountNumber),
                "innerDivClass": "custom-label-margin"
              };
              _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
              var _params = {
                "type": "label",
                "prompt": ('Account Name: ' + payment.fromAccountHolder),
                "innerDivClass": "custom-label-margin"
              };
              _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
              var _params = {
                "type": "label",
                "prompt": ('Amount Transferred: ' + payment.actualPayment.toFormattedString()),
                "innerDivClass": "custom-label-margin"
              };
              _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
              var _params = {
                "type": "label",
                "prompt": ('Transfer Date: ' + (payment.paymentDate ? payment.paymentDate.toDateComponents(false, true) : '')),
                "innerDivClass": "custom-label-margin"
              };
              _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
              var _params = {
                "readonly": "readonly",
                "userId": payment.userId,
                "prompt": "Payment Slip",
                "attachmentList": payment.paymentSlips,
                "collection": "docspaymentslip",
                "folder": "upload/docspaymentslip/",
                "onSave": _state.onSave,
                "name": "docsPaymentSlip",
                "alert": _state.alert
              };
              _context["attachments"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
              var _params = {
                "type": "button",
                "name": "btnConfirm",
                "value": "Confirm",
                "divClass": "col-xs-6 col-sm-6 col-md-6 col-lg-6",
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
                  onRespond.bind(self)(payment.id, true);
                }
              };
              _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
              var _params = {
                "type": "button",
                "name": "btnReject",
                "value": "Reject",
                "divClass": "col-xs-6 col-sm-6 col-md-6 col-lg-6",
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
                  onRespond.bind(self)(payment.id, false);
                }
              };
              _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
              _elementClose("div");
              _elementClose("span");
            }
          });
          _elementClose("span");
        });
      }
      var promise = loadPayments.bind(self)();
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
    _elementOpenStart("span", "");
    _elementOpenEnd("span");
    yalla.framework.registerRef("alert", IncrementalDOM.currentElement(), function() {
      var _params = {
        "message": _state.alert.text.bind(self)(),
        "alertType": _state.alert.type.bind(self)()
      };
      _context["alert"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
    })()
    _elementClose("span");
    _elementClose("div");
  }
  if (typeof $render === "function") {
    $export.render = $render;
  }
  return $export;
})());