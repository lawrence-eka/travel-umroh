yalla.framework.addComponent("/dist/comp/header",function(){function ComponentEvent(type,data,target,currentTarget){this.data=data,this.target=target,this.type=type,this.currentTarget=currentTarget}function initState(){return{}}function onPropertyChange(){}function onBurgerButtonClicked(){this.emitEvent("burger-button-clicked")}function initBurgerButtonClass(drawerOpened){var result=[];return result.push("fa"),drawerOpened?result.push("fa-chevron-left"):result.push("fa-bars"),result.push("burger-button"),result.join(" ")}function $render(_props){_elementOpenStart("style",""),_elementOpenEnd("style"),_text("\n[element='dist.comp.header'] {width : 100%;background-color: #999999;color: #ffffff;border-bottom: 1px solid #666666;}\n[element='dist.comp.header'] .burger-button{font-size: 3rem;padding: 1rem;}"),_elementClose("style"),_elementOpenStart("div",""),_attr("element","dist.comp.header"),_elementOpenEnd("div");var _component=IncrementalDOM.currentElement(),_validComponent=yalla.framework.validComponentName(_component,_elementName);_component._state=_component._state&&_validComponent?_component._state:initState.bind(_component)(_props),_component._state._name=_elementName;var _self=(_component._state,{component:_component,properties:_props,state:_component._state});_validComponent&&yalla.framework.propertyCheckChanges(_component._properties,_props,onPropertyChange.bind(_self)),_component._properties=_props,_elementOpenStart("i",""),_attr("class",initBurgerButtonClass.bind(self)(_props.drawerOpened)),_attr("aria-hidden","true"),_attr("onclick",function(event){var self={target:event.target};self.properties=_props,"elements"in self.target&&(self.elements=self.target.elements),self.currentTarget=this==event.target?self.target:_parentComponent(event.currentTarget),self.component=_component,self.component._state=self.component._state||{},self.state=self.component._state,self.emitEvent=function(eventName,data){var event=new ComponentEvent(eventName,data,self.target,self.currentTarget);"on"+eventName in _props&&_props["on"+eventName](event)},onBurgerButtonClicked.bind(self)()}),_elementOpenEnd("i"),_elementClose("i"),_elementClose("div")}var $export=(yalla.framework.renderToScreen,yalla.framework.createInjector("/dist/comp/header"),{}),_elementName="dist.comp.header",_parentComponent=yalla.framework.getParentComponent,_elementClose=(yalla.utils.merge,IncrementalDOM.elementOpen,IncrementalDOM.elementClose),_elementOpenStart=IncrementalDOM.elementOpenStart,_elementOpenEnd=IncrementalDOM.elementOpenEnd,_text=(IncrementalDOM.elementVoid,IncrementalDOM.text),_attr=IncrementalDOM.attr;return IncrementalDOM.skip,"function"==typeof $render&&($export.render=$render),$export}());