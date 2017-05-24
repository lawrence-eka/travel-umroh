yalla.framework.addComponent("/dist/common/strings", (function() {
  var $path = "/dist/common/strings";
  var $patchChanges = yalla.framework.renderToScreen;
  var $storeRef = yalla.framework.storeRef;
  var $export = {};
  var $context = {};
  var $patchRef = yalla.framework.patchRef;
  var $inject = yalla.framework.createInjector("/dist/common/strings");
  /**
   * Created by gal9569 on 5/22/2017.
   */
  $export = {
    titleCase: function(str) {
      var retval = "";
      var s = str.split(" ");
      for (var i = 0; i < s.length; i++) {
        retval += s[i][0].toUpperCase() + s[i].substr(1).toLowerCase() + " ";
      }
      return retval.trim();
    }
  }
  if (typeof $render === "function") {
    $export.render = $render;
  }
  return $export;
})());