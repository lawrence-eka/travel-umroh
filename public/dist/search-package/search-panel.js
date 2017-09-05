yalla.framework.addComponent("/dist/search-package/search-panel",function(){function ComponentEvent(type,data,target,currentTarget){this.data=data,this.target=target,this.type=type,this.currentTarget=currentTarget}function initState(){return{}}function onPropertyChange(){}function initState(props){return{recordsFound:props.recordsFound,alert:new Alert,datePair:new DatePair($patchChanges,null,"1y"),startDate:props.startDate,endDate:props.endDate}}function onPropertyChange(props){props.recordsFound&&(this.state.recordsFound=props.recordsFound.newValue)}function search(){var form=this.target.form,eventData={startDate:form.elements.startDate.value,endDate:form.elements.endDate.value};this.emitEvent("search",eventData)}function $render(_props){_context.panel=$inject("/component/panel"),_context.panel,_context.entry=$inject("/component/entry"),_context.entry,_context.home=$inject("/component/home-button"),_context.home,_elementOpenStart("div",""),_attr("element","dist.search-package.search-panel"),_elementOpenEnd("div");var _component=IncrementalDOM.currentElement(),_validComponent=yalla.framework.validComponentName(_component,_elementName);_component._state=_component._state&&_validComponent?_component._state:initState.bind(_component)(_props),_component._state._name=_elementName;var _state=_component._state,_self={component:_component,properties:_props,state:_component._state};_validComponent&&yalla.framework.propertyCheckChanges(_component._properties,_props,onPropertyChange.bind(_self)),_component._properties=_props;var _params={title:"Search Packages",footer:_state.recordsFound};_context.panel.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(slotName){if("body"===slotName){_elementOpenStart("div",""),_elementOpenEnd("div"),_elementOpenStart("form",""),_elementOpenEnd("form"),_elementOpenStart("div",""),_attr("class","row"),_elementOpenEnd("div"),_params={type:"date",prompt:"Between",name:"startDate",value:_state.datePair.defaultStartDate.bind(self)(null,_state.startDate),min:_state.datePair.minStartDate.bind(self)(),onfocusout:function(event){var self={target:event.target};self.properties=_props,"elements"in self.target&&(self.elements=self.target.elements),self.currentTarget=this==event.target?self.target:_parentComponent(event.currentTarget),self.component=_component,self.component._state=self.component._state||{},self.state=self.component._state,self.emitEvent=function(eventName,data){var event=new ComponentEvent(eventName,data,self.target,self.currentTarget);"on"+eventName in _props&&_props["on"+eventName](event)},_state.datePair.onStartDateFocusOut.bind(self)("endDate")}},_context.entry.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){}),_elementOpenStart("span",""),_elementOpenEnd("span"),yalla.framework.registerRef("endDate",IncrementalDOM.currentElement(),function(){var _params={type:"date",prompt:"And",name:"endDate",value:_state.datePair.defaultEndDate.bind(self)(null,_state.endDate),min:_state.datePair.minEndDate.bind(self)()};_context.entry.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){})})(),_elementClose("span"),_params={type:"button",value:"Search",onclick:function(event){var self={target:event.target};self.properties=_props,"elements"in self.target&&(self.elements=self.target.elements),self.currentTarget=this==event.target?self.target:_parentComponent(event.currentTarget),self.component=_component,self.component._state=self.component._state||{},self.state=self.component._state,self.emitEvent=function(eventName,data){var event=new ComponentEvent(eventName,data,self.target,self.currentTarget);"on"+eventName in _props&&_props["on"+eventName](event)},search.bind(self)()}},_context.entry.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){});var _params={};_context.home.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){}),_elementClose("div"),_elementClose("form"),_elementClose("div")}}),_elementClose("div")}var $patchChanges=yalla.framework.renderToScreen,$inject=yalla.framework.createInjector("/dist/search-package/search-panel"),$export={},_elementName="dist.search-package.search-panel",_context={},_parentComponent=yalla.framework.getParentComponent,_merge=yalla.utils.merge,_elementClose=(IncrementalDOM.elementOpen,IncrementalDOM.elementClose),_elementOpenStart=IncrementalDOM.elementOpenStart,_elementOpenEnd=IncrementalDOM.elementOpenEnd,_attr=(IncrementalDOM.elementVoid,IncrementalDOM.text,IncrementalDOM.attr);return IncrementalDOM.skip,"function"==typeof $render&&($export.render=$render),$export}());