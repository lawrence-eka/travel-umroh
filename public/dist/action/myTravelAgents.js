yalla.framework.addComponent("/dist/action/myTravelAgents", (function() {
  var $path = "/dist/action/myTravelAgents";
  var $patchChanges = yalla.framework.renderToScreen;
  var $storeRef = yalla.framework.storeRef;
  var $export = {};
  var $context = {};
  var $patchRef = yalla.framework.patchRef;
  var $inject = yalla.framework.createInjector("/dist/action/myTravelAgents");
  var _elementOpen = IncrementalDOM.elementOpen,
    _elementClose = IncrementalDOM.elementClose,
    _elementOpenStart = IncrementalDOM.elementOpenStart,
    _elementOpenEnd = IncrementalDOM.elementOpenEnd,
    _elementVoid = IncrementalDOM.elementVoid,
    _text = IncrementalDOM.text,
    _attr = IncrementalDOM.attr,
    _skip = IncrementalDOM.skip;

  var errorMessage = "";

  function queryTravelAgents(userId, travelAgentId) {
    return new Promise(function(resolve) {

      var q = {
        "contactPersonId": userId,
        "id": {
          "$ne": (travelAgentId ? travelAgentId : "-1")
        }
      };
      dpd.travelagents.get(q, function(ta, err) {
        if (err) {
          errorMessage = err.message;
          $patchChanges();
        } else {
          resolve(ta);
        };
      });
    });
  }

  function getTravelAgents(travelAgentId) {
    return new Promise(function(resolve) {
      dpd.users.me(function(me) {
        queryTravelAgents(me.id, travelAgentId).then(function(ta) {
          resolve(ta);
        });
      });
    });
  }

  function onEditTA(travelAgentId) {
    window.location.hash = "#app/action.myTravelAgents:travelAgentId=" + travelAgentId;
  }

  function onShowPackages(travelAgentId) {
    window.location.hash = "#app/action.myPackages:travelAgentId=" + travelAgentId;
  }

  function getOneTravelAgent(id) {
    return new Promise(function(resolve) {
      if (id) {
        dpd.travelagents.get(id, function(ta, err) {
          if (err) {
            errorMessage = err.message;
            $patchChanges();
          } else {
            resolve(ta);
          }
        });
      } else {
        dpd.users.me(function(me) {
          var ta = {
            "contactPersonId": me.id
          }
          resolve(ta);
        });
      }
    });
  }

  function cancel() {
    window.location.hash = "#app/action.myTravelAgents";
  }

  function register(form) {
    debugger;
    var q = {
      "travelAgentName": form.elements.travelAgentName.value,
      "address": form.elements.address.value,
      "city": form.elements.city.value,
      "contactPersonId": form.elements.contactPersonId.value
    };
    if (form.elements.id.value == "") {
      dpd.travelagents.post(q, cleanupAfterSave);
    } else {
      dpd.travelagents.put(form.elements.id.value, q, cleanupAfterSave);
    }
  }

  function cleanupAfterSave(result, err) {
    if (err) errorMessage = err.message;
    else {
      window.location.hash = "#app/action.myTravelAgents";
    }
    $patchChanges();
  }


  function $render(_data, _slotView) {
    $context["card-travel-agent"] = $inject("/component/card-travel-agent");
    var cardTravelAgent = $context["card-travel-agent"];
    _elementOpenStart("link", "");
    _attr("element", "dist.action.myTravelAgents");
    _attr("href", "asset/css/registration.css");
    _attr("rel", "stylesheet");
    _elementOpenEnd("link");
    _elementClose("link");
    _elementOpenStart("div", "");
    _attr("element", "dist.action.myTravelAgents");
    _elementOpenEnd("div");
    if (errorMessage != '') {
      _elementOpenStart("div", "");
      _elementOpenEnd("div");
      _text("" + (errorMessage) + "");
      _elementClose("div");
    }
    _elementOpenStart("div", "");
    _attr("class", "container all-5px");
    _elementOpenEnd("div");
    (function(domNode) {
      var node = domNode.element;

      function asyncFunc__1(data) {
        _elementOpenStart("div", "");
        _attr("class", "row centered-form no-top-margin");
        _elementOpenEnd("div");
        _elementOpenStart("div", "");
        _attr("class", "form-panel col-xs-12 col-sm-12 col-md-12 col-lg-12");
        _elementOpenEnd("div");
        _elementOpenStart("div", "");
        _attr("class", "panel panel-default");
        _elementOpenEnd("div");
        _elementOpenStart("div", "");
        _attr("class", "panel-heading");
        _elementOpenEnd("div");
        if (!_data.travelAgentId) {
          _elementOpenStart("h3", "");
          _attr("class", "panel-title");
          _elementOpenEnd("h3");
          _text("New Travel Agent");
          _elementClose("h3");
        }
        if (_data.travelAgentId) {
          _elementOpenStart("h3", "");
          _attr("class", "panel-title");
          _elementOpenEnd("h3");
          _text("Edit Travel Agent");
          _elementClose("h3");
        }
        _elementClose("div");
        _elementOpenStart("div", "");
        _attr("class", "panel-body");
        _elementOpenEnd("div");
        if (errorMessage) {
          _elementOpenStart("div", "");
          _attr("class", "form-control");
          _elementOpenEnd("div");
          _text("" + (errorMessage) + "");
          _elementClose("div");
        }
        _elementOpenStart("form", "");
        _attr("role", "form");
        _attr("onsubmit", function(event) {
          return register(this);
        });
        _elementOpenEnd("form");
        _elementOpenStart("div", "");
        _attr("class", "row");
        _elementOpenEnd("div");
        _elementOpenStart("input", "");
        _attr("type", "hidden");
        _attr("name", "id");
        _attr("value", data.id);
        _elementOpenEnd("input");
        _elementClose("input");
        _elementOpenStart("input", "");
        _attr("type", "hidden");
        _attr("name", "contactPersonId");
        _attr("value", data.contactPersonId);
        _elementOpenEnd("input");
        _elementClose("input");
        _elementOpenStart("div", "");
        _attr("class", "col-xs-12 col-sm-12 col-md-12 col-lg-12");
        _elementOpenEnd("div");
        _elementOpenStart("div", "");
        _attr("class", "form-group");
        _elementOpenEnd("div");
        _elementOpenStart("input", "");
        _attr("type", "text");
        _attr("name", "travelAgentName");
        _attr("class", "form-control input-sm");
        _attr("placeholder", "Name");
        _attr("value", data.travelAgentName);
        _elementOpenEnd("input");
        _elementClose("input");
        _elementClose("div");
        _elementClose("div");
        _elementOpenStart("div", "");
        _attr("class", "col-xs-12 col-sm-12 col-md-12 col-lg-12");
        _elementOpenEnd("div");
        _elementOpenStart("div", "");
        _attr("class", "form-group");
        _elementOpenEnd("div");
        _elementOpenStart("input", "");
        _attr("type", "text");
        _attr("name", "address");
        _attr("class", "form-control input-sm");
        _attr("placeholder", "Address");
        _attr("value", data.address);
        _elementOpenEnd("input");
        _elementClose("input");
        _elementClose("div");
        _elementClose("div");
        _elementOpenStart("div", "");
        _attr("class", "col-xs-12 col-sm-12 col-md-12 col-lg-12");
        _elementOpenEnd("div");
        _elementOpenStart("div", "");
        _attr("class", "form-group");
        _elementOpenEnd("div");
        _elementOpenStart("input", "");
        _attr("type", "text");
        _attr("name", "city");
        _attr("class", "form-control input-sm");
        _attr("placeholder", "City");
        _attr("value", data.city);
        _elementOpenEnd("input");
        _elementClose("input");
        _elementClose("div");
        _elementClose("div");
        _elementClose("div");
        _elementOpenStart("div", "");
        _attr("class", "row");
        _elementOpenEnd("div");
        _elementOpenStart("div", "");
        _attr("class", "col-xs-6 col-sm-6 col-md-6 col-lg-6");
        _elementOpenEnd("div");
        _elementOpenStart("div", "");
        _attr("class", "form-group");
        _elementOpenEnd("div");
        _elementOpenStart("input", "");
        _attr("type", "submit");
        _attr("value", (_data.travelAgentId ? 'Save' : 'Register'));
        _attr("class", "btn btn-info btn-block btn-default");
        _elementOpenEnd("input");
        _elementClose("input");
        _elementClose("div");
        _elementClose("div");
        _elementOpenStart("div", "");
        _attr("class", "col-xs-6 col-sm-6 col-md-6 col-lg-6");
        _elementOpenEnd("div");
        _elementOpenStart("div", "");
        _attr("class", "form-group");
        _elementOpenEnd("div");
        if (_data.travelAgentId) {
          _elementOpenStart("input", "");
          _attr("type", "button");
          _attr("value", "Cancel");
          _attr("class", "form-control btn btn-info btn-block");
          _attr("onclick", function(event) {
            return cancel();
          });
          _elementOpenEnd("input");
          _elementClose("input");
        }
        _elementClose("div");
        _elementClose("div");
        _elementClose("div");
        _elementClose("form");
        if (_data.travelAgentId) {
          _elementOpenStart("div", "");
          _attr("class", "form-group");
          _elementOpenEnd("div");
          _elementClose("div");
        }
        _elementClose("div");
        _elementClose("div");
        _elementClose("div");
        _elementClose("div");
      }
      var promise = getOneTravelAgent(_data.travelAgentId);
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
    _elementClose("div");
    _elementOpenStart("div", "");
    _attr("element", "dist.action.myTravelAgents");
    _elementOpenEnd("div");
    (function(domNode) {
      var node = domNode.element;

      function asyncFunc__1(data) {
        var _array = data || [];
        _array.forEach(function(ta) {
          _elementOpenStart("p", "");
          _elementOpenEnd("p");
          $context["card-travel-agent"].render({
            "travelAgent": ta,
            "oneditTA": function(event) {
              return onEditTA(ta.id);
            },
            "onshowPackages": function(event) {
              return onShowPackages(ta.id);
            }
          }, function(slotName) {});
          _elementClose("p");
        });
      }
      var promise = getTravelAgents(_data.travelAgentId);
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