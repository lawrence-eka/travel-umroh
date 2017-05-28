yalla.framework.addComponent("/dist/action/myApprovals", (function() {
  var $path = "/dist/action/myApprovals";
  var $patchChanges = yalla.framework.renderToScreen;
  var $storeRef = yalla.framework.storeRef;
  var $export = {};
  var $context = {};
  var $patchRef = yalla.framework.patchRef;
  var $inject = yalla.framework.createInjector("/dist/action/myApprovals");

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

  var errorMessage = "";
  var alertType = "";

  function loadUserApprovals() {
    return new Promise(function(resolve) {
      var q = {
        "needApproval": {
          "$ne": null
        }
      };
      dpd.users.get(q, function(users, err) {
        if (err) {
          errorMessage = err.message;
        } else {
          resolve(users);
        }
        $patchChanges();
      });
    });
  }

  function onApprove(user, isApproved) {
    return new Promise(function(resolve) {
      if (isApproved) user.needApproval.isApproved = true;
      else user.needApproval = false;
      dpd.users.put(user.id, user, function(result, err) {
        if (err) {
          errorMessage = JSON.stringify(err);
          alertType = "error";
        }
        window.location.hash = "#app/action.myApprovals";
      });
    });
  }

  function $render(_data, _slotView) {
    $context["card-user-approvals"] = $inject("/component/card-user-approvals");
    var cardUserApprovals = $context["card-user-approvals"];
    $context["alert"] = $inject("/component/alert");
    var alert = $context["alert"];
    _elementOpenStart("link", "");
    _attr("element", "dist.action.myApprovals");
    _attr("href", "asset/css/registration.css");
    _attr("rel", "stylesheet");
    _elementOpenEnd("link");
    _elementClose("link");
    _elementOpenStart("div", "");
    _attr("element", "dist.action.myApprovals");
    _elementOpenEnd("div");
    (function(domNode) {
      var node = domNode.element;

      function asyncFunc__1(data) {
        $context["alert"].render({
          "message": errorMessage,
          "alertType": alertType
        }, function(slotName) {});
        if (!data || data.length == 0) {
          $context["alert"].render({
            "message": 'No user needs approval for now.',
            "alertType": 'info'
          }, function(slotName) {});
        }
        var _array = data || [];
        _array.forEach(function(user) {
          _elementOpenStart("p", "");
          _elementOpenEnd("p");
          $context["card-user-approvals"].render({
            "user": user,
            "onapprove": function(event) {
              this.emitEvent = function(eventName, data) {
                var event = new ComponentEvent(eventName, data, this);
                if ('on' + eventName in _data) {
                  _data['on' + eventName](event);
                }
              };
              return onApprove.bind(this)(event, true);
            },
            "onreject": function(event) {
              this.emitEvent = function(eventName, data) {
                var event = new ComponentEvent(eventName, data, this);
                if ('on' + eventName in _data) {
                  _data['on' + eventName](event);
                }
              };
              return onApprove.bind(this)(event, false);
            }
          }, function(slotName) {});
          _elementClose("p");
        });
      }
      var promise = loadUserApprovals();
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