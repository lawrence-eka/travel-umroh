yalla.framework.addComponent("/dist/itinerary/card-itinerary",function(){function ComponentEvent(type,data,target,currentTarget){this.data=data,this.target=target,this.type=type,this.currentTarget=currentTarget}function initState(){return{}}function onPropertyChange(){}function onEdit(itineraryId){this.emitEvent("edit",itineraryId)}function onDelete(itineraryId){this.emitEvent("delete",itineraryId)}function $render(_props){_context.card=$inject("/component/panel"),_context.card,_context.entry=$inject("/component/entry"),_context.entry,_elementOpenStart("div",""),_attr("element","dist.itinerary.card-itinerary"),_elementOpenEnd("div");var _component=IncrementalDOM.currentElement(),_validComponent=yalla.framework.validComponentName(_component,_elementName);_component._state=_component._state&&_validComponent?_component._state:initState.bind(_component)(_props),_component._state._name=_elementName;var _self=(_component._state,{component:_component,properties:_props,state:_component._state});_validComponent&&yalla.framework.propertyCheckChanges(_component._properties,_props,onPropertyChange.bind(_self)),_component._properties=_props;var _params={title:_props.itr.fromDateTime.toDateComponents(),remarks:_props.itr.remarks,nofooter:"nofooter"};_context.card.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(slotName){if("body"===slotName){if(_elementOpenStart("div",""),_elementOpenEnd("div"),_props.itr.entry.transport&&(_elementOpenStart("div",""),_elementOpenEnd("div"),_text(""+_props.itr.entry.transportType+": "+_props.itr.entry.transport),_elementOpenStart("br",""),_elementOpenEnd("br"),_elementClose("br"),_text("Departure: "+_props.itr.entry.departure.toDateComponents(!1,!0)),_elementOpenStart("br",""),_elementOpenEnd("br"),_elementClose("br"),_text("From: "+_props.itr.entry.departFrom),_elementOpenStart("br",""),_elementOpenEnd("br"),_elementClose("br"),_text("Arrival: "+_props.itr.entry.arrival.toDateComponents(!1,!0)),_elementOpenStart("br",""),_elementOpenEnd("br"),_elementClose("br"),_text("At: "+_props.itr.entry.arriveAt),_elementOpenStart("br",""),_elementOpenEnd("br"),_elementClose("br"),_elementClose("div")),_props.itr.entry.hotel&&(_elementOpenStart("div",""),_elementOpenEnd("div"),_text("Hotel: "+_props.itr.entry.hotel),_elementOpenStart("br",""),_elementOpenEnd("br"),_elementClose("br"),_text("City: "+_props.itr.entry.city),_elementOpenStart("br",""),_elementOpenEnd("br"),_elementClose("br"),_text("Check in: "+_props.itr.entry.checkIn.toDateComponents()),_elementOpenStart("br",""),_elementOpenEnd("br"),_elementClose("br"),_text("Check out: "+_props.itr.entry.checkOut.toDateComponents()),_elementOpenStart("br",""),_elementOpenEnd("br"),_elementClose("br"),_elementClose("div")),_props.onedit||_props.ondelete){_elementOpenStart("div",""),_attr("class","row"),_elementOpenEnd("div");var _params={type:"button",value:"Edit",divClass:"col-xs-6 col-sm-6 col-md-6 col-lg-6",onclick:function(event){var self={target:event.target};self.properties=_props,"elements"in self.target&&(self.elements=self.target.elements),self.currentTarget=this==event.target?self.target:_parentComponent(event.currentTarget),self.component=_component,self.component._state=self.component._state||{},self.state=self.component._state,self.emitEvent=function(eventName,data){var event=new ComponentEvent(eventName,data,self.target,self.currentTarget);"on"+eventName in _props&&_props["on"+eventName](event)},onEdit.bind(self)(_props.itr.id)}};_context.entry.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){});var _params={type:"button",value:"Delete",divClass:"col-xs-6 col-sm-6 col-md-6 col-lg-6",onclick:function(event){var self={target:event.target};self.properties=_props,"elements"in self.target&&(self.elements=self.target.elements),self.currentTarget=this==event.target?self.target:_parentComponent(event.currentTarget),self.component=_component,self.component._state=self.component._state||{},self.state=self.component._state,self.emitEvent=function(eventName,data){var event=new ComponentEvent(eventName,data,self.target,self.currentTarget);"on"+eventName in _props&&_props["on"+eventName](event)},onDelete.bind(self)(_props.itr.id)}};_context.entry.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){}),_elementClose("div")}_elementClose("div")}}),_elementClose("div")}var $inject=(yalla.framework.renderToScreen,yalla.framework.createInjector("/dist/itinerary/card-itinerary")),$export={},_elementName="dist.itinerary.card-itinerary",_context={},_parentComponent=yalla.framework.getParentComponent,_merge=yalla.utils.merge,_elementClose=(IncrementalDOM.elementOpen,IncrementalDOM.elementClose),_elementOpenStart=IncrementalDOM.elementOpenStart,_elementOpenEnd=IncrementalDOM.elementOpenEnd,_text=(IncrementalDOM.elementVoid,IncrementalDOM.text),_attr=IncrementalDOM.attr;return IncrementalDOM.skip,"function"==typeof $render&&($export.render=$render),$export}());