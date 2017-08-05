yalla.framework.addComponent("/dist/map/home", (function() {
  var $patchChanges = yalla.framework.renderToScreen;
  var $inject = yalla.framework.createInjector("/dist/map/home");
  var $export = {};
  var $path = "/dist/map/home";
  var _elementName = "dist.map.home";
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

  var watchID = null;
  var marker = null;
  var circle = null;

  function initMap(loc) {
    getGeoLoc().then(function(loc) {
      if (!loc.err) {
        var map = new google.maps.Map(document.getElementsByName('map')[0], {
          zoom: 17,
          center: loc,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        });

        marker = new google.maps.Marker({
          position: loc,
          map: map,
          animation: google.maps.Animation.DROP,
        });

        circle = new google.maps.Circle({
          center: loc,
          radius: loc.acc,
          map: map,
          fillColor: '#0000ff',
          fillOpacity: 0.3,
          strokeColor: '#0000ff',
          strokeOpacity: 0.0,
        });

        var options = {
          enableHighAccuracy: true,
          timeout: 10000
        };
        watchID = navigator.geolocation.watchPosition(onSuccess, onError, options);
      } else {
        alert(loc.msg);
      }
    });
  }

  function onSuccess(position) {
    var l = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

    marker.setPosition(l);
    circle.setCenter(l);
    circle.setRadius(position.coords.accuracy);
  }

  // clear the watch that was started earlier
  //
  function clearWatch() {
    if (watchID != null) {
      navigator.geolocation.clearWatch(watchID);
      watchID = null;
    }
  }

  // onError Callback receives a PositionError object
  //
  function onError(error) {
    console.log(JSON.stringify(error));
  }
  google.maps.event.addDomListener(window, 'load', initMap);


  function $render(_props, _slotView) {
    _context["panel"] = $inject("/component/panel");
    var panel = _context["panel"];
    _context["home"] = $inject("/component/home-button");
    var home = _context["home"];
    _elementOpenStart("div", "");
    _attr("element", "dist.map.home");
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
    var _params = {
      "title": "Map"
    };
    _context["panel"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {
      if (slotName === "body") {
        _elementOpenStart("div", "");
        _attr("name", "map");
        _attr("style", "width:100%;height:600px");
        _elementOpenEnd("div");
        _elementClose("div");
      }
      if (slotName === "footer") {
        _elementOpenStart("div", "");
        _elementOpenEnd("div");
        _elementOpenStart("div", "");
        _attr("class", "row");
        _elementOpenEnd("div");
        var _params = {};
        _context["home"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
        _elementClose("div");
        _elementClose("div");
      }
    });
    _elementClose("div");
  }
  if (typeof $render === "function") {
    $export.render = $render;
  }
  return $export;
})());