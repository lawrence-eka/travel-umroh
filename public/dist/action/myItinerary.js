yalla.framework.addComponent("/dist/action/myItinerary", (function() {
  var $path = "/dist/action/myItinerary";
  var $patchChanges = yalla.framework.renderToScreen;
  var $export = {};
  var $context = {};
  var _parentComponent = yalla.framework.getParentComponent;
  var $inject = yalla.framework.createInjector("/dist/action/myItinerary");

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

  var message = "";
  var alertType = "";

  function queryItineraries(packageId) {
    return new Promise(function(resolve) {
      var q = {
        "packageId": packageId,
        "$sort": {
          "fromDateTime": 1
        }
      }
      dpd.itineraries.get(q, function(itr, err) {
        if (err) {
          errorMessage = err.message;
          alertType = "error";
          $patchChanges();
        } else {
          resolve(itr);
        }
      });
    });
  }

  function getPackage(id) {
    return new Promise(function(resolve) {
      dpd.packages.get(id, function(result, err) {
        resolve(result);
      });
    });
  }

  function onSaveItinerary(itinerary, packageId) {
    debugger;
    itinerary = itinerary.data;
    itinerary.packageId = packageId;
    if (itinerary.id == "") {
      dpd.itineraries.post(itinerary, function(result, err) {
        debugger;
        if (err) {
          message = err;
        }
        if (result) {
          window.location.hash = "#app/action.myItinerary:packageId=" + packageId;
        }
      });
    } else {
      debugger;
      dpd.itineraries.put(itinerary.id, itinerary, function(result, err) {
        debugger;
        if (err) {
          message = err;
        } else {
          window.location.hash = "#app/action.myItinerary:packageId=" + packageId;
        }
      });
    }
  }

  function onCancelEdit(packageId) {
    debugger;
    window.location.hash = "#app/action.myItinerary:packageId=" + packageId;
  }

  function onAddItinerary(packageId) {
    window.location.hash = "#app/action.myItinerary:packageId=" + packageId + ":editItineraryId=-1";
  }

  function onEdit(itineraryId, packageId) {
    window.location.hash = "#app/action.myItinerary:packageId=" + packageId + ":editItineraryId=" + itineraryId;
  }

  function onDelete(itineraryId, packageId) {
    debugger;
    return new Promise(function(resolve) {
      dpd.itineraries.del(itineraryId, function(err) {
        debugger;
        if (err) {
          if (err) {
            message = JSON.stringify(err);
            alertType = "error";
          }
        } else {
          window.location.hash = "#app/action.myItinerary:packageId=" + packageId;
        }
      });
    });
  }

  function $render(_props, _slotView) {
    $context["card"] = $inject("/component/panel");
    var card = $context["card"];
    $context["card-itinerary"] = $inject("/component/card-itinerary");
    var cardItinerary = $context["card-itinerary"];
    $context["edit-itinerary"] = $inject("/component/edit-itinerary");
    var editItinerary = $context["edit-itinerary"];
    $context["alert"] = $inject("/component/alert");
    var alert = $context["alert"];
    _elementOpenStart("div", "");
    _attr("element", "dist.action.myItinerary");
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
        $context["card"].render({
          "title": data.packageName,
          "nofooter": "nofooter"
        }, function(slotName) {
          if (slotName == "body") {
            _elementOpenStart("div", "");
            _elementOpenEnd("div");
            if (!_props.editItineraryId) {
              _elementOpenStart("input", "");
              _attr("type", "button");
              _attr("value", "Add Itinerary");
              _attr("class", "form-control btn btn-info btn-block");
              _attr("onclick", function(event) {
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
                return onAddItinerary.bind(self)(_props.packageId);
              });
              _elementOpenEnd("input");
              _elementClose("input");
            }
            _elementClose("div");
          }
        });
        if (message) {
          $context["alert"].render({
            "alertType": alertType,
            "message": message
          }, function(slotName) {});
        }
        if (_props.editItineraryId == -1) {
          $context["edit-itinerary"].render({
            "onsave": function(event) {
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
              return onSaveItinerary.bind(self)(event, _props.packageId);
            },
            "oncancel": function(event) {
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
              return onCancelEdit.bind(self)(_props.packageId);
            }
          }, function(slotName) {});
        }
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

          function asyncFunc__2(data) {
            var _array = data || [];
            _array.forEach(function(itr) {
              _elementOpenStart("p", "");
              _elementOpenEnd("p");
              if (itr.id != _props.editItineraryId) {
                $context["card-itinerary"].render({
                  "itr": itr,
                  "onedit": function(event) {
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
                    return onEdit.bind(self)(event, _props.packageId);
                  },
                  "ondelete": function(event) {
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
                    return onDelete.bind(self)(event);
                  }
                }, function(slotName) {});
              }
              if (itr.id == _props.editItineraryId) {
                $context["edit-itinerary"].render({
                  "itinerary": itr,
                  "onsave": function(event) {
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
                    return onSaveItinerary.bind(self)(event, _props.packageId);
                  },
                  "oncancel": function(event) {
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
                    return onCancelEdit.bind(self)(_props.packageId);
                  }
                }, function(slotName) {});
              }
              _elementClose("p");
            });
          }
          var promise = queryItineraries.bind(self)(_props.packageId);
          if (promise && typeof promise == "object" && "then" in promise) {
            _skip();
            promise.then(function(_result) {
              $patchChanges(node, function() {
                asyncFunc__2.call(self, _result)
              });
            }).catch(function(err) {
              console.log(err);
            });
          } else {
            asyncFunc__2.call(self, promise)
          }
        })({
          element: IncrementalDOM.currentElement(),
          pointer: IncrementalDOM.currentPointer()
        });
        _elementClose("div");
      }
      var promise = getPackage.bind(self)(_props.packageId);
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