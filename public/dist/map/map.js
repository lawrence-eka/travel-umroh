yalla.framework.addComponent("/dist/map/map", (function() {
  var $patchChanges = yalla.framework.renderToScreen;
  var $inject = yalla.framework.createInjector("/dist/map/map");
  var $export = {};
  var $path = "/dist/map/map";
  var _elementName = "dist.map.map";
  var _context = {};
  var _parentComponent = yalla.framework.getParentComponent;
  var _merge = yalla.utils.merge;

  function ComponentEvent(type, data, target, currentTarget) {
    this.data = data;
    this.target = target;
    this.type = type;
    this.currentTarget = currentTarget;
  }

  var _elementOpen = IncrementalDOM.elementOpen;
  var _elementClose = IncrementalDOM.elementClose;
  var _elementOpenStart = IncrementalDOM.elementOpenStart;
  var _elementOpenEnd = IncrementalDOM.elementOpenEnd;
  var _elementVoid = IncrementalDOM.elementVoid;
  var _text = IncrementalDOM.text;
  var _attr = IncrementalDOM.attr;
  var _skip = IncrementalDOM.skip;

  function initState(props) {
    return {}
  };

  function onPropertyChange(event) {};

  function myMap() {
    getGeoLoc().then(function(loc) {
      debugger;
      var mapCanvas = document.getElementByName("map")[0];
      var myCenter = new google.maps.LatLng(loc.lat, loc.lon);
      var mapOptions = {
        center: myCenter,
        zoom: 5
      };
      var map = new google.maps.Map(mapCanvas, mapOptions);
      var marker = new google.maps.Marker({
        position: myCenter,
        animation: google.maps.Animation.BOUNCE
      });
      marker.setMap(map);
    });
  }

  function $render(_props, _slotView) {
    _elementOpenStart("div", "");
    _attr("element", "dist.map.map");
    _attr("name", "map");
    _attr("style", "width:100%;height:500px");
    _elementOpenEnd("div");
    var _component = IncrementalDOM.currentElement();
    var _validComponent = yalla.framework.validComponentName(_component, _elementName)
    _component._state = _component._state && _validComponent ? _component._state : initState.bind(_component)(_props);
    _component._state._name = _elementName;
    var _state = _component._state;
    var _self = {
      component: _component,
      properties: _props,
      state: _component._state
    };
    if (_validComponent) {
      yalla.framework.propertyCheckChanges(_component._properties, _props, onPropertyChange.bind(_self));
    }
    _component._properties = _props;
    _elementClose("div");
  }
  if (typeof $render === "function") {
    $export.render = $render;
  }
  return $export;
})());