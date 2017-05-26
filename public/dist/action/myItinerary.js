yalla.framework.addComponent("/dist/action/myItinerary", (function() {
  var $path = "/dist/action/myItinerary";
  var $patchChanges = yalla.framework.renderToScreen;
  var $storeRef = yalla.framework.storeRef;
  var $export = {};
  var $context = {};
  var $patchRef = yalla.framework.patchRef;
  var $inject = yalla.framework.createInjector("/dist/action/myItinerary");
  var _elementOpen = IncrementalDOM.elementOpen,
    _elementClose = IncrementalDOM.elementClose,
    _elementOpenStart = IncrementalDOM.elementOpenStart,
    _elementOpenEnd = IncrementalDOM.elementOpenEnd,
    _elementVoid = IncrementalDOM.elementVoid,
    _text = IncrementalDOM.text,
    _attr = IncrementalDOM.attr,
    _skip = IncrementalDOM.skip;

  function queryItineraries(packageId) {
    return new Promise(function(resolve) {
      var q = {
        "packageId": packageId
      }
      dpd.itineraries.get(q, function(itr, err) {
        if (err) {
          errorMessage = err.message;
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
    alert(itineraryId);
  }

  function $render(_data, _slotView) {
    $context["card"] = $inject("/component/card");
    var card = $context["card"];
    $context["card-itinerary"] = $inject("/component/card-itinerary");
    var cardItinerary = $context["card-itinerary"];
    $context["edit-itinerary"] = $inject("/component/edit-itinerary");
    var editItinerary = $context["edit-itinerary"];
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
              return onAddItinerary(_data.packageId);
            });
            _elementOpenEnd("input");
            _elementClose("input");
          }
        });
        if (_data.editItineraryId == -1) {
          $context["edit-itinerary"].render({
            "onsave": function(event) {
              return onSavePackage(event, _data.packageId);
            },
            "oncancel": function(event) {
              return onCancelEdit(_data.packageId);
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
                    return onEdit(event, _data.packageId);
                  },
                  "ondelete": function(event) {
                    return onDelete(event);
                  }
                }, function(slotName) {});
              }
              if (itr.id == _data.editItineraryId) {
                $context["edit-itinerary"].render({
                  "itinerary": itr,
                  "onsave": function(event) {
                    return onSavePackage(event, _data.packageId);
                  },
                  "oncancel": function(event) {
                    return onCancelEdit(_data.packageId);
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