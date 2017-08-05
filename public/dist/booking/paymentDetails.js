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

  function initState(props) {
    //debugger;
    return {
      alert: new Alert(null, $patchChanges, "payment"),
      booking: null,
      flow: (new Utils()).flow.booking,
      //gotActualPayment:false,
      onSave: new Event(),
      //            bookingUtils: (new Utils()).bookings,
    }
  }

  function onPropertyChange(props) {
    debugger;
  }

  function onBackToMyBookings() {
    window.location.hash = "#app/booking.home:bookingId=" + this.state.booking.id;
  }

  function deleteActualPayment() {
    var form = this.target.form;
    var self = this;
    var booking = self.state.booking;

    booking.fromBank = '';
    booking.fromBankBranch = '';
    booking.fromAccountNumber = '';
    booking.fromAccountHolder = '';
    booking.actualPayment = 0;
    booking.paymentDate = null;
    booking.bookingStatus = self.state.flow.move(booking.bookingStatus, 'paymentCancellation');
    booking.paymentSlips = [];
    dpd.bookings.put(booking.id, booking, function(bkg, err) {
      debugger;
      self.state.alert.alert(err);
      //if(!err) {self.state.gotActualPayment = false;}
      $patchChanges();
    });

  }

  function saveActualPayment() {
    //debugger;
    var form = this.target.form;
    var self = this;
    var booking = self.state.booking;
    if (form.elements.actualPayment.value < booking.totalPrice) {
      self.state.alert.alert({
        errors: [{
          actualPayment: "Cannot be less than Total Price"
        }]
      });
      $patchChanges;
      return;
    }
    self.state.onSave.publish(afterSaveAttachments.bind(self));
  }

  function afterSaveAttachments(res, err) {
    //debugger;
    var form = this.target.form;
    var self = this;
    var booking = self.state.booking;
    if (err) {
      this.state.infoText = "";
      //$patchChanges("info");
      this.state.alert.alert(err);
    } else {
      //this.state.gotActualPayment = true;
      // debugger;
      this.state.booking.paymentSlips = res;
      booking.fromBank = form.elements.fromBank.value;
      booking.fromBankBranch = form.elements.fromBankBranch.value;
      booking.fromAccountNumber = form.elements.fromAccountNumber.value;
      booking.fromAccountHolder = form.elements.fromAccountHolder.value;
      booking.actualPayment = form.elements.actualPayment.value;
      booking.paymentDate = (new Date(form.elements.paymentDate.value)).getTime();
      booking.bookingStatus = self.state.flow.move(booking.bookingStatus, 'payment');
      dpd.bookings.put(booking.id, booking, function(bkg, err) {
        debugger;
        self.state.alert.alert(err);
        if (!err) {
          $patchChanges();
        }
      });
    }
  }

  function getPaymentDetails(bookingId) {
    //debugger;
    var self = this;
    return new Promise(function(resolve) {
      dpd.bookings.get(bookingId, function(bkg, err) {
        debugger;
        self.state.alert.alert(err);
        if (!err) {
          self.state.booking = bkg;
          resolve(bkg);
        }
      });

    });
  }

  function $render(_props, _slotView) {
    _context["card-booking"] = $inject("/booking/card-booking");
    var cardBooking = _context["card-booking"];
    _context["card"] = $inject("/component/panel");
    var card = _context["card"];
    _context["alert"] = $inject("/component/alert");
    var alert = _context["alert"];
    _context["entry"] = $inject("/component/entry");
    var entry = _context["entry"];
    _context["ppLink"] = $inject("/component/ppLink");
    var ppLink = _context["ppLink"];
    _context["attachments"] = $inject("/component/attachments/home");
    var attachments = _context["attachments"];
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
          "title": 'Payment for ' + _state.booking.package.packageName,
          "nofooter": "nofooter"
        };
        _context["card"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {
          if (slotName === "body") {
            _elementOpenStart("div", "");
            _attr("class", "row");
            _elementOpenEnd("div");
            var _params = {
              "type": "button",
              "value": "Back to My Booking",
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
                onBackToMyBookings.bind(self)();
              }
            };
            _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
            _elementClose("div");
          }
        });
        _elementOpenStart("span", "");
        _elementOpenEnd("span");
        yalla.framework.registerRef("payment", IncrementalDOM.currentElement(), function() {
          if (data.actualPayment) {
            var _params = {
              "title": "Actual Payment",
              "nofooter": "nofooter"
            };
            _context["card"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {
              if (slotName === "body") {
                _elementOpenStart("div", "");
                _attr("class", "row");
                _elementOpenEnd("div");
                var _params = {
                  "type": "label",
                  "prompt": ('From Bank: ' + _state.booking.fromBank),
                  "innerDivClass": "custom-label-margin"
                };
                _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
                var _params = {
                  "type": "label",
                  "prompt": ('Branch: ' + _state.booking.fromBankBranch),
                  "innerDivClass": "custom-label-margin"
                };
                _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
                var _params = {
                  "type": "label",
                  "prompt": ('Account No: ' + _state.booking.fromAccountNumber),
                  "innerDivClass": "custom-label-margin"
                };
                _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
                var _params = {
                  "type": "label",
                  "prompt": ('Account Name: ' + _state.booking.fromAccountHolder),
                  "innerDivClass": "custom-label-margin"
                };
                _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
                var _params = {
                  "type": "label",
                  "prompt": ('Amount: ' + (_state.booking.actualPayment ? _state.booking.actualPayment.toFormattedString() : '')),
                  "innerDivClass": "custom-label-margin"
                };
                _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
                var _params = {
                  "type": "label",
                  "prompt": ('Transfer Date: ' + (_state.booking.paymentDate ? _state.booking.paymentDate.toDateComponents(false, true) : '')),
                  "innerDivClass": "custom-label-margin"
                };
                _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
                var _params = {
                  "readonly": _state.booking.bookingStatus != 'WFP',
                  "userId": data.userId,
                  "attachmentList": data.paymentSlips,
                  "prompt": "Payment Slip",
                  "collection": "docspaymentslip",
                  "folder": "upload/docspaymentslip/",
                  "onSave": _state.onSave,
                  "onsaved": function(event) {
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
                    afterSaveAttachments.bind(self)();
                  },
                  "name": "docsPaymentSlip",
                  "alert": _state.alert
                };
                _context["attachments"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
                if (_state.flow.isTransitionAllowed(_state.booking.bookingStatus, 'DPS')) {
                  var _params = {
                    "type": "button",
                    "name": "btnCancel",
                    "value": "Cancel/Delete Payment",
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
                      deleteActualPayment.bind(self)();
                    }
                  };
                  _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
                }
                _elementClose("div");
              }
            });
          }
          var _params = {
            "title": "Payment Info"
          };
          _context["card"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {
            if (!data.actualPayment) {
              if (slotName === "footer") {
                _elementOpenStart("div", "");
                _elementOpenEnd("div");
                _text("Please make payment before the expiry date to avoid booking cancellation");
                _elementClose("div");
              }
            }
            if (slotName === "body") {
              _elementOpenStart("div", "");
              _elementOpenEnd("div");
              _text("Total: " + (_state.booking.totalPrice ? _state.booking.totalPrice.toFormattedString() : '') + "");
              _elementOpenStart("br", "");
              _elementOpenEnd("br");
              _elementClose("br");
              _text("Bank: Bank Central Asia");
              _elementOpenStart("br", "");
              _elementOpenEnd("br");
              _elementClose("br");
              _text("1111                    Branch: Sidoarjo");
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
          if (!data.actualPayment) {
            var _params = {
              "title": "Actual Payment"
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
                  "name": "fromBankBranch"
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
                  "name": "actualPayment",
                  "min": _state.booking.totalPrice,
                  "alert": _state.alert
                };
                _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
                var _params = {
                  "type": "datetime-local",
                  "prompt": "Transfer Date & Time",
                  "name": "paymentDate",
                  "value": (new Date()).toYYYYMMDD(true),
                  "max": (new Date()).toYYYYMMDD(true)
                };
                _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
                _elementOpenStart("div", "");
                _elementOpenEnd("div");
                yalla.framework.registerRef("docsPaymentSlip", IncrementalDOM.currentElement(), function() {
                  var _params = {
                    "userId": data.userId,
                    "attachmentList": data.paymentSlips,
                    "prompt": "Payment Slip",
                    "collection": "docspaymentslip",
                    "folder": "upload/docspaymentslip/",
                    "onSave": _state.onSave,
                    "onsaved": function(event) {
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
                      afterSaveAttachments.bind(self)();
                    },
                    "name": "docsPaymentSlip",
                    "alert": _state.alert,
                    "readonly": _state.booking.bookingStatus != 'WFP'
                  };
                  _context["attachments"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
                  if (_state.booking.bookingStatus == 'WFP') {
                    var _params = {
                      "type": "button",
                      "name": "btnSave",
                      "value": "Save",
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
                        saveActualPayment.bind(self)();
                      }
                    };
                    _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
                  }
                })()
                _elementClose("div");
                _elementClose("div");
                _elementClose("form");
                _elementClose("div");
              }
            });
          }
        })()
        _elementClose("span");
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
    _elementClose("div");
  }
  if (typeof $render === "function") {
    $export.render = $render;
  }
  return $export;
})());