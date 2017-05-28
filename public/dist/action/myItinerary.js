yalla.framework.addComponent("/dist/action/myItinerary", (function() {
  var $path = "/dist/action/myItinerary";
  var $patchChanges = yalla.framework.renderToScreen;
  var $storeRef = yalla.framework.storeRef;
  var $export = {};
  var $context = {};
  var $patchRef = yalla.framework.patchRef;
  var $inject = yalla.framework.createInjector("/dist/action/myItinerary");

  function ComponentEvent(type, data, target) {
    this.data = data;
    this.target = target;
    this.type = type;
  }

  var _elementOpen = IncrementalDOM.elementOpen,
    _elementClose = IncrementalDOM.elementClose,
    _elementOpenStart = IncrementalDOM.elementOpenStart,
    _elementOpenEnd = IncrementalDOM.elementOpenEnd,
    _elementVoid = IncrementalDOM.elementVoid,
    _text = IncrementalDOM.text,
    _attr = IncrementalDOM.attr,
    _skip = IncrementalDOM.skip;

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
    return new Promise(function(resolve) {
      debugger;
      itinerary.packageId = packageId;
      if (itinerary.id == "") {
        dpd.itineraries.post(itinerary, function(result, err) {
          debugger;
          if (err) {
            resolve(err);
          }
          if (result) {
            window.location.hash = "#app/action.myItinerary:packageId=" + packageId;
            resolve(null);
          }
        });
      } else {
        debugger;
        dpd.itineraries.put(itinerary.id, itinerary, function(result, err) {
          debugger;
          if (err) {
            resolve(err);
          } else {
            window.location.hash = "#app/action.myItinerary:packageId=" + packageId;
            resolve(null);
          }
        });
      }
      debugger;
    });
    return false;
  }

  function onCancelEdit(packageId) {
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

  function $render(_data, _slotView) {
    $context["card"] = $inject("/component/card");
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
    (function(domNode) {
      var node = domNode.element;

      function asyncFunc__1(data) {
        $context["card"].render({
          "title": data.packageName
        }, function(slotName) {
          if (!_data.editItineraryId) {
            _elementOpenStart("input", "");
            _attr("type", "button");
            _attr("value", "Add Itinerary");
            _attr("class", "form-control btn btn-info btn-block");
            _attr("onclick", function(event) {
              this.emitEvent = function(eventName, data) {
                var event = new ComponentEvent(eventName, data, this);
                if ('on' + eventName in _data) {
                  _data['on' + eventName](event);
                }
              };
              return onAddItinerary.bind(this)(_data.packageId);
            });
            _elementOpenEnd("input");
            _elementClose("input");
          }
        });
        if (message) {
          $context["alert"].render({
            "alertType": alertType,
            "message": message
          }, function(slotName) {});
        }
        if (_data.editItineraryId == -1) {
          $context["edit-itinerary"].render({
            "onsave": function(event) {
              this.emitEvent = function(eventName, data) {
                var event = new ComponentEvent(eventName, data, this);
                if ('on' + eventName in _data) {
                  _data['on' + eventName](event);
                }
              };
              return onSaveItinerary.bind(this)(event, _data.packageId);
            },
            "oncancel": function(event) {
              this.emitEvent = function(eventName, data) {
                var event = new ComponentEvent(eventName, data, this);
                if ('on' + eventName in _data) {
                  _data['on' + eventName](event);
                }
              };
              return onCancelEdit.bind(this)(_data.packageId);
            }
          }, function(slotName) {});
        }
        _elementOpenStart("div", "");
        _elementOpenEnd("div");
        (function(domNode) {
          var node = domNode.element;

          function asyncFunc__2(data) {
            var _array = data || [];
            _array.forEach(function(itr) {
              _elementOpenStart("p", "");
              _elementOpenEnd("p");
              if (itr.id != _data.editItineraryId) {
                $context["card-itinerary"].render({
                  "itr": itr,
                  "onedit": function(event) {
                    this.emitEvent = function(eventName, data) {
                      var event = new ComponentEvent(eventName, data, this);
                      if ('on' + eventName in _data) {
                        _data['on' + eventName](event);
                      }
                    };
                    return onEdit.bind(this)(event, _data.packageId);
                  },
                  "ondelete": function(event) {
                    this.emitEvent = function(eventName, data) {
                      var event = new ComponentEvent(eventName, data, this);
                      if ('on' + eventName in _data) {
                        _data['on' + eventName](event);
                      }
                    };
                    return onDelete.bind(this)(event);
                  }
                }, function(slotName) {});
              }
              if (itr.id == _data.editItineraryId) {
                $context["edit-itinerary"].render({
                  "itinerary": itr,
                  "onsave": function(event) {
                    this.emitEvent = function(eventName, data) {
                      var event = new ComponentEvent(eventName, data, this);
                      if ('on' + eventName in _data) {
                        _data['on' + eventName](event);
                      }
                    };
                    return onSaveItinerary.bind(this)(event, _data.packageId);
                  },
                  "oncancel": function(event) {
                    this.emitEvent = function(eventName, data) {
                      var event = new ComponentEvent(eventName, data, this);
                      if ('on' + eventName in _data) {
                        _data['on' + eventName](event);
                      }
                    };
                    return onCancelEdit.bind(this)(_data.packageId);
                  }
                }, function(slotName) {});
              }
              _elementClose("p");
            });
          }
          var promise = queryItineraries(_data.packageId);
          if (promise && typeof promise == "object" && "then" in promise) {
            _skip();
            promise.then(function(_result) {
              $patchChanges(node, function() {
                asyncFunc__2.call(node, _result)
              });
            });
          } else {
            asyncFunc__2.call(node, promise)
          }
        })({
          element: IncrementalDOM.currentElement(),
          pointer: IncrementalDOM.currentPointer()
        });
        _elementClose("div");
      }
      var promise = getPackage(_data.packageId);
      if (promise && typeof promise == "object" && "then" in promise) {
        _skip();
        promise.then(function(_result) {
          $patchChanges(node, function() {
            asyncFunc__1.call(node, _result)
          });
        });
      } else {
        asyncFunc__1.call(node, promise)
      }
    })({
      element: IncrementalDOM.currentElement(),
      pointer: IncrementalDOM.currentPointer()
    });
    _elementClose("div");
    _elementOpenStart("script", "");
    _elementOpenEnd("script");
    _elementClose("script");
  }
  if (typeof $render === "function") {
    $export.render = $render;
  }
  return $export;
})());