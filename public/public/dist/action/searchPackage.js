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

  var dates = $inject('/common/dates');
  var errorMessage = '';
  var _startDate = '';
  var _endDate = '';

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
    $context["card-package"] = $inject("/component/card-package");
    var cardPackage = $context["card-package"];
    _elementOpenStart("div", "");
    _attr("element", "dist.action.searchPackage");
    _elementOpenEnd("div");
    _elementOpenStart("p", "");
    _elementOpenEnd("p");
    _text("Search Package");
    _elementClose("p");
    _elementOpenStart("p", "");
    _elementOpenEnd("p");
    _text("Find me packages between");
    _elementClose("p");
    _elementOpenStart("form", "");
    _attr("onsubmit", function(event) {
      return search(this)
    });
    _elementOpenEnd("form");
    _elementOpenStart("p", "");
    _elementOpenEnd("p");
    _elementOpenStart("input", "");
    _attr("type", "date");
    _attr("name", "startDate");
    _attr("class", "form-control");
    _attr("value", _startDate == '' ? dates.toYYYYMMDD(new Date()) : _startDate);
    _elementOpenEnd("input");
    _elementClose("input");
    _text("and");
    _elementOpenStart("input", "");
    _attr("type", "date");
    _attr("name", "endDate");
    _attr("class", "form-control");
    _attr("value", _endDate == '' ? dates.toYYYYMMDD(new Date((new Date()).getTime() + 31536000000)) : _endDate);
    _elementOpenEnd("input");
    _elementClose("input");
    _elementClose("p");
    _elementOpenStart("p", "");
    _elementOpenEnd("p");
    _elementOpenStart("input", "");
    _attr("type", "submit");
    _attr("value", "Search");
    _attr("class", "btn btn-default");
    _elementOpenEnd("input");
    _elementClose("input");
    _elementClose("p");
    _elementClose("form");
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