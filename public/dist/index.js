yalla.framework.addComponent("/dist/index", (function() {
  var $path = "/dist/index";
  var $patchChanges = yalla.framework.renderToScreen;
  var $storeRef = yalla.framework.storeRef;
  var $export = {};
  var $context = {};
  var $patchRef = yalla.framework.patchRef;
  var $inject = yalla.framework.createInjector("/dist/index");
  $(document).ready(function() {
    $('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function() {
      $(this).toggleClass('open');
    });
  });
  if (typeof $render === "function") {
    $export.render = $render;
  }
  return $export;
})());