yalla.framework.addComponent("/dist/map/home",function(){function initState(){return{}}function onPropertyChange(){}function $render(_props){_context.map=$inject("/common/map"),_context.map,_elementOpenStart("div",""),_attr("element","dist.map.home"),_elementOpenEnd("div");var _component=IncrementalDOM.currentElement(),_validComponent=yalla.framework.validComponentName(_component,_elementName);_component._state=_component._state&&_validComponent?_component._state:initState.bind(_component)(_props),_component._state._name=_elementName,_component._state;var _self={component:_component,properties:_props,state:_component._state};_validComponent&&yalla.framework.propertyCheckChanges(_component._properties,_props,onPropertyChange.bind(_self)),_component._properties=_props;var _params={};_context.map.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){}),_elementClose("div")}yalla.framework.renderToScreen;var $inject=yalla.framework.createInjector("/dist/map/home"),$export={},_elementName="dist.map.home",_context={},_merge=(yalla.framework.getParentComponent,yalla.utils.merge),_elementClose=(IncrementalDOM.elementOpen,IncrementalDOM.elementClose),_elementOpenStart=IncrementalDOM.elementOpenStart,_elementOpenEnd=IncrementalDOM.elementOpenEnd,_attr=(IncrementalDOM.elementVoid,IncrementalDOM.text,IncrementalDOM.attr);return IncrementalDOM.skip,"function"==typeof $render&&($export.render=$render),$export}());