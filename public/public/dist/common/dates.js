yalla.framework.addComponent("/dist/common/dates", (function() {
  var $path = "/dist/common/dates";
  var $patchChanges = yalla.framework.renderToScreen;
  var $storeRef = yalla.framework.storeRef;
  var $export = {};
  var $context = {};
  var $patchRef = yalla.framework.patchRef;
  var $inject = yalla.framework.createInjector("/dist/common/dates");

  function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }

  $export = {
    formatter: function(dte, asComponents, withHHMM) {
      if (isNumber(dte)) {
        dte = new Date(dte);
      }

      if (!dte || ((typeof dte.getMonth) !== 'function') || (isNaN(dte.getTime()))) {
        if (asComponents) return undefined;
        else return "";
      }

      var dt = dte.getDate();
      var mo = "JanFebMarAprMayJunJulAugSepOctNovDec".substr(dte.getMonth() * 3, 3);
      var yr = dte.getFullYear();
      if (withHHMM) {
        var hr = dte.getHours();
        var mn = dte.getMinutes();
      }

      if (asComponents) {
        var result = {};
        result["date"] = dt;
        result["month"] = mo;
        result["year"] = yr;

        if (withHHMM) {
          result["hour"] = hr;
          result["minutes"] = mn;
        }
        return result;
      } else return dt.toString() + " " + mo + " " + yr.toString() + (withHHMM ? " " + hr.toString() + ":" + mn.toString() : "");
    },
    toYYYYMMDD: function(dte) {
      var y = dte.getFullYear().toString();
      var m = dte.getMonth();
      var d = dte.getDate();

      m = (m < 10 ? "0" : "") + m.toString();
      d = (d < 10 ? "0" : "") + d.toString();

      return y + "-" + m + "-" + d;
    },
    rangePrettifier: function(startDate, endDate) {
      s = this.formatter(startDate, true);
      e = this.formatter(endDate, true);

      if (!s && !e) return "";
      else if (s && (!e)) return s.date.toString() + " " + s.month + " " + s.year.toString();
      else if ((!s) && e) return e.date.toString() + " " + e.month + " " + e.year.toString();
      else if (s.date == e.date && s.month == e.month && s.year == e.year) return s.date.toString() + " " + s.month + " " + s.year.toString();
      else if (s.month == e.month && s.year == e.year) return s.date.toString() + "-" + e.date.toString() + " " + s.month + " " + s.year.toString();
      else if (s.year == e.year) return s.date.toString() + " " + s.month + "-" + e.date.toString() + " " + e.month + " " + s.year.toString();
      else return s.date.toString() + " " + s.month + " " + s.year.toString() + "-" + e.date.toString() + " " + e.month + " " + e.year.toString();
    }

  }


  if (typeof $render === "function") {
    $export.render = $render;
  }
  return $export;
})());