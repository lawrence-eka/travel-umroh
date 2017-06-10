yalla.framework.addComponent("/dist/itinerary/card-itinerary-bulleted", (function() {
  var $patchChanges = yalla.framework.renderToScreen;
  var $inject = yalla.framework.createInjector("/dist/itinerary/card-itinerary-bulleted");
  var $export = {};
  var $path = "/dist/itinerary/card-itinerary-bulleted";
  var _elementName = "dist.itinerary.card-itinerary-bulleted";
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

  var nbsp = ' ';

  function whatClass(item) {
    item = item ? item : 'hotel';
    item = item.toLowerCase();
    return "fa fa-" + item + " icon-center";
  }

  function $render(_props, _slotView) {
    _elementOpenStart("style", "");
    _elementOpenEnd("style");
    _text("\n[element='dist.itinerary.card-itinerary-bulleted']{/*background-color: #ffffff;*/position: relative;}\n[element='dist.itinerary.card-itinerary-bulleted'] .leftLine{width: 50px;float: left;position: absolute;top:0;bottom: 0;}\n[element='dist.itinerary.card-itinerary-bulleted'] .content{margin-left:50px;display: block;padding-top:5px;/*background: url('/asset/img/image5.jpg') no-repeat center center fixed;*/}\n[element='dist.itinerary.card-itinerary-bulleted'] .circle{border:2px solid #cccccc;border-radius: 100%;width: 30px;height: 30px;margin: auto;text-align: center;}\n[element='dist.itinerary.card-itinerary-bulleted'] .lineVertical{border-left : 2px solid #cccccc;width: 2px;margin: auto;position: absolute;top:30px;bottom: 0px;left: 25px;}\n[element='dist.itinerary.card-itinerary-bulleted'] .leftLineContainer{}\n[element='dist.itinerary.card-itinerary-bulleted'] .icon-center {font-size:1.5rem;color : #666666;margin-top:0.5rem;}\n[element='dist.itinerary.card-itinerary-bulleted'] h3{margin-top:0px;}\n[element='dist.itinerary.card-itinerary-bulleted'] h5{margin-top:0px;margin-bottom:0px;}");
    _elementClose("style");
    _elementOpenStart("div", "");
    _attr("element", "dist.itinerary.card-itinerary-bulleted");
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
    _elementOpenStart("div", "");
    _attr("class", "leftLine");
    _elementOpenEnd("div");
    _elementOpenStart("div", "");
    _attr("class", "leftLineContainer");
    _elementOpenEnd("div");
    _elementOpenStart("div", "");
    _attr("class", "circle");
    _elementOpenEnd("div");
    _elementOpenStart("i", "");
    _attr("class", whatClass.bind(self)(_props.itr.entry.transportType));
    _attr("aria-hidden", "true");
    _elementOpenEnd("i");
    _elementClose("i");
    _elementClose("div");
    _elementOpenStart("div", "");
    _attr("class", "lineVertical");
    _elementOpenEnd("div");
    _elementClose("div");
    _elementClose("div");
    _elementClose("div");
    _elementOpenStart("div", "");
    _attr("class", "content");
    _elementOpenEnd("div");
    if (_props.itr.entry.transport) {
      _elementOpenStart("div", "");
      _elementOpenEnd("div");
      _elementOpenStart("h3", "");
      _elementOpenEnd("h3");
      _text("" + (_props.itr.entry.departure.toDateComponents(false)) + "");
      _elementClose("h3");
      _elementOpenStart("h5", "");
      _elementOpenEnd("h5");
      _text("Dep:");
      _elementOpenStart("label", "");
      _elementOpenEnd("label");
      _text("" + (_props.itr.entry.departure.toTimeComponents()) + "");
      _elementClose("label");
      _text("" + (nbsp) + "/ Arr:");
      _elementOpenStart("label", "");
      _elementOpenEnd("label");
      _text("" + (_props.itr.entry.arrival.toTimeComponents() + (_props.itr.entry.departure.toDayOffset(_props.itr.entry.arrival) ? ' ' + _props.itr.entry.departure.toDayOffset(_props.itr.entry.arrival) : '')) + "");
      _elementClose("label");
      _elementClose("h5");
      _text("Airline: " + (_props.itr.entry.transport) + "");
      _elementOpenStart("br", "");
      _elementOpenEnd("br");
      _elementClose("br");
      _text("From: " + (_props.itr.entry.departFrom) + "");
      _elementOpenStart("br", "");
      _elementOpenEnd("br");
      _elementClose("br");
      _text("To: " + (_props.itr.entry.arriveAt) + "");
      _elementOpenStart("br", "");
      _elementOpenEnd("br");
      _elementClose("br");
      _elementClose("div");
    }
    if (_props.itr.entry.hotel) {
      _elementOpenStart("div", "");
      _elementOpenEnd("div");
      _elementOpenStart("h3", "");
      _elementOpenEnd("h3");
      _text("" + (_props.itr.entry.checkIn.toDateComponents(false)) + "");
      _elementClose("h3");
      _elementOpenStart("h5", "");
      _elementOpenEnd("h5");
      _text("Check out:");
      _elementOpenStart("label", "");
      _elementOpenEnd("label");
      _text("" + (_props.itr.entry.checkOut.toDateComponents()) + "");
      _elementClose("label");
      _elementClose("h5");
      _text("Hotel: " + (_props.itr.entry.hotel) + "");
      _elementOpenStart("br", "");
      _elementOpenEnd("br");
      _elementClose("br");
      _text("City: " + (_props.itr.entry.city) + "");
      _elementOpenStart("br", "");
      _elementOpenEnd("br");
      _elementClose("br");
      _elementClose("div");
    }
    _text("" + (_props.itr.remarks) + "");
    _elementClose("div");
    _elementClose("div");
  }
  if (typeof $render === "function") {
    $export.render = $render;
  }
  return $export;
})());