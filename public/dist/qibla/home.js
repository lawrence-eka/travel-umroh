yalla.framework.addComponent("/dist/qibla/home",function(){function initState(){return{}}function onPropertyChange(){}function $render(_props){_context.panel=$inject("/component/panel"),_context.panel,_context.home=$inject("/component/home-button"),_context.home,_elementOpenStart("div",""),_attr("element","dist.qibla.home"),_elementOpenEnd("div");var _component=IncrementalDOM.currentElement(),_validComponent=yalla.framework.validComponentName(_component,_elementName);_component._state=_component._state&&_validComponent?_component._state:initState.bind(_component)(_props),_component._state._name=_elementName,_component._state;var _self={component:_component,properties:_props,state:_component._state};_validComponent&&yalla.framework.propertyCheckChanges(_component._properties,_props,onPropertyChange.bind(_self)),_component._properties=_props,function(){function asyncFunc_1(data){var _params={title:"Qibla"};_context.panel.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(slotName){if("body"===slotName&&(_elementOpenStart("div",""),_elementOpenEnd("div"),_text(""+JSON.stringify(data)),_elementClose("div")),"footer"===slotName){_elementOpenStart("div",""),_elementOpenEnd("div"),_elementOpenStart("div",""),_attr("class","row"),_elementOpenEnd("div");var _params={};_context.home.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){}),_elementClose("div"),_elementClose("div")}})}var node={element:IncrementalDOM.currentElement(),pointer:IncrementalDOM.currentPointer()}.element,self={target:node};self.properties=_props,"elements"in self.target&&(self.elements=self.target.elements),self.currentTarget=self.target,self.component=_component,self.component._state=self.component._state||{},self.state=self.component._state;var promise=geo.getLocation.bind(self)();promise&&"object"==typeof promise&&"then"in promise?(_skip(),promise.then(function(_result){$patchChanges(node,function(){asyncFunc_1.call(self,_result)})}).catch(function(){})):asyncFunc_1.call(self,promise)}(),_elementClose("div")}var $patchChanges=yalla.framework.renderToScreen,$inject=yalla.framework.createInjector("/dist/qibla/home"),$export={},_elementName="dist.qibla.home",_context={},_merge=(yalla.framework.getParentComponent,yalla.utils.merge),_elementClose=(IncrementalDOM.elementOpen,IncrementalDOM.elementClose),_elementOpenStart=IncrementalDOM.elementOpenStart,_elementOpenEnd=IncrementalDOM.elementOpenEnd,_text=(IncrementalDOM.elementVoid,IncrementalDOM.text),_attr=IncrementalDOM.attr,_skip=IncrementalDOM.skip;return"function"==typeof $render&&($export.render=$render),$export}());