yalla.framework.addComponent("/dist/qibla/home",function(){function initState(){return{}}function onPropertyChange(){}function initState(){var state={screenSize:"width:100%;height:"+.6*screen.height+"px",alert:new Alert(null,$patchChanges,"alert"),infoText:""};return alert=state.alert,state}function onAlert(err){err.msg?alert.alert(err.msg):alert.alert(err)}function $render(_props){_context.panel=$inject("/component/panel"),_context.panel,_context.home=$inject("/component/home-button"),_context.home,_context.alert=$inject("/component/alert"),_context.alert,_elementOpenStart("div",""),_attr("element","dist.qibla.home"),_elementOpenEnd("div");var _component=IncrementalDOM.currentElement(),_validComponent=yalla.framework.validComponentName(_component,_elementName);_component._state=_component._state&&_validComponent?_component._state:initState.bind(_component)(_props),_component._state._name=_elementName;var _state=_component._state,_self={component:_component,properties:_props,state:_component._state};_validComponent&&yalla.framework.propertyCheckChanges(_component._properties,_props,onPropertyChange.bind(_self)),_component._properties=_props;var _params={title:"Qibla"};_context.panel.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(slotName){if("body"===slotName&&(_elementOpenStart("div",""),_elementOpenEnd("div"),_elementOpenStart("span",""),_elementOpenEnd("span"),yalla.framework.registerRef("alert",IncrementalDOM.currentElement(),function(){var _params={alertType:_state.alert.type.bind(self)(),message:_state.alert.text.bind(self)()};_context.alert.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){})})(),_elementClose("span"),_elementOpenStart("div",""),_attr("name","map"),_attr("style",_state.screenSize),_elementOpenEnd("div"),_elementClose("div"),_elementClose("div")),"footer"===slotName){_elementOpenStart("div",""),_elementOpenEnd("div"),_elementOpenStart("div",""),_attr("class","row"),_elementOpenEnd("div");var _params={};_context.home.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){}),_elementClose("div"),_elementClose("div")}}),_elementClose("div")}var alert,$patchChanges=yalla.framework.renderToScreen,$inject=yalla.framework.createInjector("/dist/qibla/home"),$export={},_elementName="dist.qibla.home",_context={},_merge=(yalla.framework.getParentComponent,yalla.utils.merge),_elementClose=(IncrementalDOM.elementOpen,IncrementalDOM.elementClose),_elementOpenStart=IncrementalDOM.elementOpenStart,_elementOpenEnd=IncrementalDOM.elementOpenEnd,_attr=(IncrementalDOM.elementVoid,IncrementalDOM.text,IncrementalDOM.attr);return IncrementalDOM.skip,setTimeout(function initMap(){var map=document.getElementsByName("map")[0];geo.showLocation(map,!0,onAlert)},1e3),"function"==typeof $render&&($export.render=$render),$export}());