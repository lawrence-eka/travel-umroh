yalla.framework.addComponent("/dist/action/searchPackage", (function() {
  var $path = "/dist/action/searchPackage";
  var $patchChanges = yalla.framework.renderToScreen;
  var $storeRef = yalla.framework.storeRef;
  var $export = {};
  var $context = {};
  var $patchRef = yalla.framework.patchRef;
  var $inject = yalla.framework.createInjector("/dist/action/searchPackage");
  var elementOpen = IncrementalDOM.elementOpen,
    elementClose = IncrementalDOM.elementClose,
    elementOpenStart = IncrementalDOM.elementOpenStart,
    elementOpenEnd = IncrementalDOM.elementOpenEnd,
    elementVoid = IncrementalDOM.elementVoid,
    text = IncrementalDOM.text,
    attr = IncrementalDOM.attr,
    skip = IncrementalDOM.skip;

  var numbers = $inject('/common/numbers');
  var dates = $inject('/common/dates');
  var errorMessage = '';
  var formGlobal = null;

  function generateLink(id) {
    return '#app/home/action.showPackage:packageId=' + id
  }

  function queryPackages() {
    return new Promise(function(resolve) {
      var form = formGlobal;

      if (form == null || form.elements.startDate.value == "" || form.elements.endDate.value == "") resolve([]);
      var startDate = new Date(form.elements.startDate.value + " 00:00:00");
      var endDate = new Date(form.elements.endDate.value + " 23:59:59");
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
    formGlobal = form;
    $patchChanges();
    return false;
  }

  function $render(_data, _slotView) {
    elementOpenStart("div", "");
    attr("element", "dist.action.searchPackage");
    elementOpenEnd("div");
    elementOpenStart("p", "");
    elementOpenEnd("p");
    text("Search Package");
    elementClose("p");
    elementOpenStart("p", "");
    elementOpenEnd("p");
    text("Find me packages between");
    elementClose("p");
    elementOpenStart("form", "");
    attr("onsubmit", function(event) {
      return search(this)
    });
    elementOpenEnd("form");
    elementOpenStart("p", "");
    elementOpenEnd("p");
    elementOpenStart("input", "");
    attr("type", "date");
    attr("name", "startDate");
    elementOpenEnd("input");
    elementClose("input");
    text("and");
    elementOpenStart("input", "");
    attr("type", "date");
    attr("name", "endDate");
    elementOpenEnd("input");
    elementClose("input");
    elementClose("p");
    elementOpenStart("p", "");
    elementOpenEnd("p");
    elementOpenStart("input", "");
    attr("type", "submit");
    attr("value", "Search");
    elementOpenEnd("input");
    elementClose("input");
    elementClose("p");
    elementClose("form");
    elementOpenStart("div", "");
    elementOpenEnd("div");
    (function(domNode) {
      var node = domNode.element;

      function asyncFunc__1(data) {
        elementOpenStart("ul", "");
        elementOpenEnd("ul");
        var _array = data || [];
        _array.forEach(function(pkg) {
          elementOpenStart("li", "");
          elementOpenEnd("li");
          elementOpenStart("a", "");
          attr("href", generateLink(pkg.id));
          elementOpenEnd("a");
          text("" + (pkg.packageName) + "  (" + (dates.rangePrettifier((new Date(pkg.travelDateFrom)), (new Date(pkg.travelDateUntil)))) + ") (LA: " + (numbers.money(pkg.costLandArrangements)) + "; Tickets: " + (numbers.money(pkg.costTickets)) + ")");
          elementClose("a");
          elementClose("li");
        });
        elementClose("ul");
      }
      var promise = queryPackages();
      if (promise && typeof promise == "object" && "then" in promise) {
        skip();
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
    elementClose("div");
    elementClose("div");
    elementOpenStart("script", "");
    elementOpenEnd("script");
    elementClose("script");
  }
  if (typeof $render === "function") {
    $export.render = $render;
  }
  return $export;
})());