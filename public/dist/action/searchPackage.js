yalla.framework.addComponent("/dist/action/searchPackage", (function() {
  var $path = "/dist/action/searchPackage";
  var $patchChanges = yalla.framework.renderToScreen;
  var $storeRef = yalla.framework.storeRef;
  var $export = {};
  var $context = {};
  var $patchRef = yalla.framework.patchRef;
  var $inject = yalla.framework.createInjector("/dist/action/searchPackage");
  var _elementOpen = IncrementalDOM.elementOpen,
    _elementClose = IncrementalDOM.elementClose,
    _elementOpenStart = IncrementalDOM.elementOpenStart,
    _elementOpenEnd = IncrementalDOM.elementOpenEnd,
    _elementVoid = IncrementalDOM.elementVoid,
    _text = IncrementalDOM.text,
    _attr = IncrementalDOM.attr,
    _skip = IncrementalDOM.skip;

  var errorMessage = '';
  var _startDate = '';
  var _endDate = '';
  var numOfPackagesFound = '';

  function generateLink(id) {
    window.location.hash = '#app/action.showPackage:packageId=' + id;
  }

  function queryPackages() {
    return new Promise(function(resolve) {
      //var form = formGlobal;

      if (_startDate == "" || _endDate == "") resolve([]);
      var startDate = new Date(_startDate + " 00:00:00");
      var endDate = new Date(_endDate + " 23:59:59");
      var query = {};
      query.isPublished = "true";
      query.validUntil = {
        "$gte": (new Date()).getTime()
      };
      query.$and = [{
          travelDateFrom: {
            "$gte": startDate.getTime()
          }
        },
        {
          travelDateFrom: {
            "$lte": endDate.getTime()
          }
        }
      ];
      query.$sort = {
        "travelDateFrom": 1
      };
      dpd.packages.get(query, function(pkg, err) {
        if (err) {
          errorMessage = JSON.stringify(err);
          $patchChanges();
        } else {
          numOfPackagesFound = pkg.length > 0 ? pkg.length.toString() + ' packages found' : '';
          resolve(pkg);
        }
      });
    });

  }

  function search(form) {
    //formGlobal = form;
    _startDate = form.elements.startDate.value;
    _endDate = form.elements.endDate.value;
    $patchChanges();
    return false;
  }

  function $render(_data, _slotView) {
    $context["alert"] = $inject("/component/alert");
    var alert = $context["alert"];
    $context["card-package"] = $inject("/component/card-package");
    var cardPackage = $context["card-package"];
    _elementOpenStart("div", "");
    _attr("element", "dist.action.searchPackage");
    _elementOpenEnd("div");
    _elementOpenStart("div", "");
    _attr("class", "container all-5px");
    _elementOpenEnd("div");
    _elementOpenStart("div", "");
    _attr("class", "row centered-form no-top-margin");
    _elementOpenEnd("div");
    _elementOpenStart("div", "");
    _attr("class", "col-xs-12 col-sm-12 col-md-12 col-lg-12");
    _elementOpenEnd("div");
    _elementOpenStart("div", "");
    _attr("class", "panel panel-default");
    _elementOpenEnd("div");
    _elementOpenStart("div", "");
    _attr("class", "panel-heading");
    _elementOpenEnd("div");
    _elementOpenStart("h3", "");
    _attr("class", "panel-title");
    _elementOpenEnd("h3");
    _text("Search Packages");
    _elementClose("h3");
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
      return search(this)
    });
    _elementOpenEnd("form");
    _elementOpenStart("div", "");
    _attr("class", "row");
    _elementOpenEnd("div");
    _elementOpenStart("div", "");
    _attr("class", "col-xs-6 col-sm-6 col-md-6 col-lg-6");
    _elementOpenEnd("div");
    _elementOpenStart("div", "");
    _attr("class", "form-group");
    _elementOpenEnd("div");
    _elementOpenStart("label", "");
    _elementOpenEnd("label");
    _text("Between:");
    _elementClose("label");
    _elementOpenStart("input", "");
    _attr("type", "date");
    _attr("name", "startDate");
    _attr("class", "form-control input-sm");
    _attr("placeholder", "Between This Date...");
    _attr("value", _startDate == '' ? (new Date()).toYYYYMMDD() : _startDate);
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
    _elementOpenStart("label", "");
    _elementOpenEnd("label");
    _text("And:");
    _elementClose("label");
    _elementOpenStart("input", "");
    _attr("type", "date");
    _attr("name", "endDate");
    _attr("class", "form-control input-sm");
    _attr("placeholder", "...and This Date");
    _attr("value", _endDate == '' ? ((new Date()).getTime() + 31536000000).toYYYYMMDD() : _endDate);
    _elementOpenEnd("input");
    _elementClose("input");
    _elementClose("div");
    _elementClose("div");
    _elementClose("div");
    _elementOpenStart("div", "");
    _attr("class", "form-group");
    _elementOpenEnd("div");
    _elementOpenStart("input", "");
    _attr("type", "submit");
    _attr("value", "Search");
    _attr("class", "form-control btn btn-info btn-block margin-top-15px");
    _elementOpenEnd("input");
    _elementClose("input");
    _elementClose("div");
    $context["alert"].render({
      "message": numOfPackagesFound
    }, function(slotName) {});
    _elementClose("form");
    _elementClose("div");
    _elementClose("div");
    _elementClose("div");
    _elementClose("div");
    _elementClose("div");
    _elementOpenStart("div", "");
    _elementOpenEnd("div");
    (function(domNode) {
      var node = domNode.element;

      function asyncFunc__1(data) {
        _elementOpenStart("div", "");
        _attr("class", "row");
        _elementOpenEnd("div");
        var _array = data || [];
        _array.forEach(function(pkg) {
          _elementOpenStart("div", "");
          _attr("class", "col-md-4 col-sm-6");
          _elementOpenEnd("div");
          $context["card-package"].render({
            "onclick": function(event) {
              return generateLink(pkg.id)
            },
            "pkg": pkg
          }, function(slotName) {});
          _elementClose("div");
        });
        _elementClose("div");
      }
      var promise = queryPackages();
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
    _elementOpenStart("script", "");
    _elementOpenEnd("script");
    _elementClose("script");
  }
  if (typeof $render === "function") {
    $export.render = $render;
  }
  return $export;
})());