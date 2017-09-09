yalla.framework.addComponent("/dist/component/scrollable-popup/home", (function() {
  var $patchChanges = yalla.framework.renderToScreen;
  var $inject = yalla.framework.createInjector("/dist/component/scrollable-popup/home");
  var $export = {};
  var $path = "/dist/component/scrollable-popup/home";
  var _elementName = "dist.component.scrollable-popup.home";
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
    //debugger;
    if (props.onCloseEvent) props.onCloseEvent.subscribe(onCloseEvent.bind(this));
    var state = {
      popup: null,
      popupPanel: null,
      show: (props.show != null),
    };
    display.bind(this)(state.show, false);
    return state;
  }

  function onCloseEvent() {
    //debugger;
    display.bind(this)(false);
  }

  function onCreated() {
    //debugger;
    this.target.style.visibility = 'visible';
    document.getElementsByName('universe')[0].appendChild(this.target);
    var panels = document.getElementsByName('universe')[0].children;
    if (panels.length > 1) panels[panels.length - 2].classList.add('blur');
  }

  function onPropertyChange(props) {
    //debugger;
    this.state.show = props.show.newValue;
    display.bind(this.component)(this.state.show, true);

  }


  function display(isShown, temp) {
    //debugger;
    if (!isShown) {
      //if(temp)
      {
        //this.style.visibility = 'visible';
        //document.getElementsByName('universe')[0].appendChild(this);
      }
      var panels = document.getElementsByName('universe')[0].children;
      if (panels.length > 1) {
        panels[panels.length - 2].classList.add('not-blur');
        panels[panels.length - 2].classList.remove('blur');
      }
      //this.style.visibility = 'hidden';
      this.className += ' custom-fadeout-anim';
      setTimeout(doClose.bind(this), 250);
    } else {
      //if(temp)
      {
        this.style.visibility = 'visible';
        document.getElementsByName('universe')[0].appendChild(this);
      }
      var panels = document.getElementsByName('universe')[0].children;
      if (panels.length > 1) {
        panels[panels.length - 2].classList.add('blur');
        panels[panels.length - 2].classList.remove('not-blur');
      }
    }
    //$patchChanges('slot');
  }

  function doClose() {
    //debugger;
    //this.style.visibility = 'hidden';
    document.getElementsByName('universe')[0].removeChild(this);
    //this.state.popup = null;
  }



  function $render(_props, _slotView) {
    _elementOpenStart("div", "");
    _attr("element", "dist.component.scrollable-popup.home");
    _attr("class", "container centered-form popupContainerScrollable");
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
    _slotView("default", {});
    _elementClose("div");
  }
  if (typeof $render === "function") {
    $export.render = $render;
  }
  return $export;
})());