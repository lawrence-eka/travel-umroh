yalla.framework.addComponent("/dist/action/myPackages", (function() {
  var $path = "/dist/action/myPackages";
  var $patchChanges = yalla.framework.renderToScreen;
  var $storeRef = yalla.framework.storeRef;
  var $export = {};
  var $context = {};
  var $patchRef = yalla.framework.patchRef;
  var $inject = yalla.framework.createInjector("/dist/action/myPackages");
  var _elementOpen = IncrementalDOM.elementOpen,
    _elementClose = IncrementalDOM.elementClose,
    _elementOpenStart = IncrementalDOM.elementOpenStart,
    _elementOpenEnd = IncrementalDOM.elementOpenEnd,
    _elementVoid = IncrementalDOM.elementVoid,
    _text = IncrementalDOM.text,
    _attr = IncrementalDOM.attr,
    _skip = IncrementalDOM.skip;

  function getTravelAgentName(id) {
    return new Promise(function(resolve) {
      dpd.travelagents.get(id, function(ta, err) {
        if (err) {
          errorMessage = err.message;
          $patchChanges();
        } else {
          resolve(ta);
        }
      });
    });
  }

  function getPackages(travelAgentId) {
    return new Promise(function(resolve) {
      var q = {
        "travelAgentId": travelAgentId
      }
      dpd.packages.get(q, function(result, err) {
        resolve(result);
      });
    });
    0
  }

  function onCancelEdit(travelAgentId) {
    window.location.hash = "#app/action.myPackages:travelAgentId=" + travelAgentId;
  }

  function onSavePackage(pkg, travelAgentId) {
    pkg.travelAgentId = travelAgentId;
    alert(JSON.stringify(pkg));
  }

  function onEditPackage(packageId, travelAgentId) {
    window.location.hash = "#app/action.myPackages:travelAgentId=" + travelAgentId + ":editPackageId=" + packageId;
  }

  function onShowItinerary(packageId) {
    window.location.hash = "#app/action.myItinerary:packageId=" + packageId;
  }

  function onNewPackage(travelAgentId) {
    window.location.hash = "#app/action.myPackages:travelAgentId=" + travelAgentId + ":editPackageId=-1";
  }

  function $render(_data, _slotView) {
    _elementOpenStart("link", "");
    _attr("element", "dist.action.myPackages");
    _attr("href", "asset/css/registration.css");
    _attr("rel", "stylesheet");
    _elementOpenEnd("link");
    _elementClose("link");
    $context["card"] = $inject("/component/card");
    var card = $context["card"];
    $context["card-package"] = $inject("/component/card-package");
    var cardPackage = $context["card-package"];
    $context["edit-package"] = $inject("/component/edit-package");
    var editPackage = $context["edit-package"];
    _elementOpenStart("div", "");
    _attr("element", "dist.action.myPackages");
    _elementOpenEnd("div");
    (function(domNode) {
      var node = domNode.element;

      function asyncFunc__1(data) {
        $context["card"].render({
          "title": data.travelAgentName
        }, function(slotName) {
          if (!_data.editPackageId) {
            _elementOpenStart("input", "");
            _attr("type", "button");
            _attr("value", "New Package");
            _attr("class", "form-control btn btn-info btn-block");
            _attr("onclick", function(event) {
              return onNewPackage(_data.travelAgentId);
            });
            _elementOpenEnd("input");
            _elementClose("input");
          }
        });
        if (_data.editPackageId == -1) {
          $context["edit-package"].render({
            "onsave": function(event) {
              return onSavePackage(event, _data.travelAgentId);
            },
            "oncancel": function(event) {
              return onCancelEdit(_data.travelAgentId);
            }
          }, function(slotName) {});
        }
        _elementOpenStart("div", "");
        _elementOpenEnd("div");
        (function(domNode) {
          var node = domNode.element;

          function asyncFunc__2(data) {
            var _array = data || [];
            _array.forEach(function(pkg) {
              _elementOpenStart("div", "");
              _elementOpenEnd("div");
              if (_data.editPackageId != pkg.id) {
                $context["card-package"].render({
                  "pkg": pkg,
                  "onedit": function(event) {
                    return onEditPackage(event, _data.travelAgentId);
                  },
                  "onshowItinerary": function(event) {
                    return onShowItinerary(event);
                  }
                }, function(slotName) {});
              }
              if (_data.editPackageId == pkg.id) {
                $context["edit-package"].render({
                  "package": pkg,
                  "onsave": function(event) {
                    return onSavePackage(event, _data.travelAgentId);
                  },
                  "oncancel": function(event) {
                    return onCancelEdit(_data.travelAgentId);
                  }
                }, function(slotName) {});
              }
              _elementClose("div");
            });
          }
          var promise = getPackages(_data.travelAgentId);
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
      var promise = getTravelAgentName(_data.travelAgentId);
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