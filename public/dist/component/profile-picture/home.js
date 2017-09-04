yalla.framework.addComponent("/dist/component/profile-picture/home", (function() {
  var $patchChanges = yalla.framework.renderToScreen;
  var $inject = yalla.framework.createInjector("/dist/component/profile-picture/home");
  var $export = {};
  var $path = "/dist/component/profile-picture/home";
  var _elementName = "dist.component.profile-picture.home";
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

  function initState(props) {
    props.dim = props.dim || 150;
    //props.img = props.img || 'asset/img/sample-1.jpg';
    var state = {
      name: props.name,
      readonly: props.readonly,
      styleImg: 'max-width:' + props.dim + 'px; max-height:' + props.dim + 'px',
      stylePlaceholder: 'width:' + props.dim + 'px !important; height:' + props.dim + 'px !important;',
      img: props.img,
      blob: null,
    }
    return state;
  }

  function onError() {
    this.state.img = null;
    $patchChanges('profpict');
  }

  function onUploadPicture() {
    if (this.state.readonly) {
      return
    };
    document.getElementsByName(this.state.name)[0].click();
  }

  function onPictSelected() {
    if (this.state.readonly) {
      return
    };
    //debugger;
    var pict = this.target;
    var self = this;
    console.log(pict.files[0]);
    //debugger;
    var ip = new ImageProcessor();
    ip.toJpegBlob(pict.files[0]).then(function(img) {
      var urlCreator = window.URL || window.webkitURL;
      self.state.img = urlCreator.createObjectURL(img.blob);
      self.state.blob = img;
      $patchChanges('profpict');
    });
    pict.value = null;
  }

  function $render(_props, _slotView) {
    _context["panel"] = $inject("/component/panel");
    var panel = _context["panel"];
    _context["entry"] = $inject("/component/entry");
    var entry = _context["entry"];
    _elementOpenStart("div", "");
    _attr("element", "dist.component.profile-picture.home");
    _attr("class", "row row-centered");
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
    yalla.framework.registerRef("profpict", IncrementalDOM.currentElement(), function() {
      _elementOpenStart("div", "");
      _attr("class", "col-xs-12 col-sm-12 col-md-12 col-lg-12 col-centered");
      _elementOpenEnd("div");
      if (_state.img) {
        _elementOpenStart("img", "");
        _attr("src", _state.img);
        _attr("class", "custom-prof-pict");
        _attr("style", _state.styleImg);
        _attr("onclick", function(event) {
          var self = {
            target: event.target
          };
          self.properties = _props;
          if ('elements' in self.target) {
            self.elements = self.target.elements;
          }
          self.currentTarget = this == event.target ? self.target : _parentComponent(event.currentTarget);
          self.component = _component;
          self.component._state = self.component._state || {};
          self.state = self.component._state;
          self.emitEvent = function(eventName, data) {
            var event = new ComponentEvent(eventName, data, self.target, self.currentTarget);
            if ('on' + eventName in _props) {
              _props['on' + eventName](event);
            }
          };
          onUploadPicture.bind(self)();
        });
        _attr("onerror", function(event) {
          var self = {
            target: event.target
          };
          self.properties = _props;
          if ('elements' in self.target) {
            self.elements = self.target.elements;
          }
          self.currentTarget = this == event.target ? self.target : _parentComponent(event.currentTarget);
          self.component = _component;
          self.component._state = self.component._state || {};
          self.state = self.component._state;
          self.emitEvent = function(eventName, data) {
            var event = new ComponentEvent(eventName, data, self.target, self.currentTarget);
            if ('on' + eventName in _props) {
              _props['on' + eventName](event);
            }
          };
          onError.bind(self)();
        });
        _elementOpenEnd("img");
        _elementClose("img");
      }
      if (!_state.img && _state.readonly) {
        _elementOpenStart("div", "");
        _attr("class", "custom-prof-pict");
        _attr("style", _state.stylePlaceholder);
        _elementOpenEnd("div");
        _elementOpenStart("i", "");
        _attr("class", "fa fa-user");
        _attr("style", "color:#CECECE; font-size:10em");
        _elementOpenEnd("i");
        _elementClose("i");
        _elementClose("div");
      }
      if (!_state.img && !_state.readonly) {
        _elementOpenStart("div", "");
        _attr("class", "custom-prof-pict");
        _attr("style", _state.stylePlaceholder);
        _attr("onclick", function(event) {
          var self = {
            target: event.target
          };
          self.properties = _props;
          if ('elements' in self.target) {
            self.elements = self.target.elements;
          }
          self.currentTarget = this == event.target ? self.target : _parentComponent(event.currentTarget);
          self.component = _component;
          self.component._state = self.component._state || {};
          self.state = self.component._state;
          self.emitEvent = function(eventName, data) {
            var event = new ComponentEvent(eventName, data, self.target, self.currentTarget);
            if ('on' + eventName in _props) {
              _props['on' + eventName](event);
            }
          };
          onUploadPicture.bind(self)();
        });
        _elementOpenEnd("div");
        _elementOpenStart("i", "");
        _attr("class", "fa fa-camera");
        _attr("style", "color:#CECECE; font-size:8em");
        _elementOpenEnd("i");
        _elementClose("i");
        _elementClose("div");
      }
      _elementClose("div");
      var _params = {
        "type": "file",
        "name": _props.name,
        "accept": "image/*",
        "hidden": "hidden",
        "onchange": function(event) {
          var self = {
            target: event.target
          };
          self.properties = _props;
          if ('elements' in self.target) {
            self.elements = self.target.elements;
          }
          self.currentTarget = this == event.target ? self.target : _parentComponent(event.currentTarget);
          self.component = _component;
          self.component._state = self.component._state || {};
          self.state = self.component._state;
          self.emitEvent = function(eventName, data) {
            var event = new ComponentEvent(eventName, data, self.target, self.currentTarget);
            if ('on' + eventName in _props) {
              _props['on' + eventName](event);
            }
          };
          onPictSelected.bind(self)();
        },
        "blob": _state.blob
      };
      _context["entry"].render(typeof arguments[1] === "object" ? _merge(arguments[1], _params) : _params, function(slotName, slotProps) {});
    })()
    _elementClose("div");
  }
  if (typeof $render === "function") {
    $export.render = $render;
  }
  return $export;
})());