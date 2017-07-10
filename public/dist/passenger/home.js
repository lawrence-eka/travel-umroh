yalla.framework.addComponent("/dist/passenger/home",function(){function ComponentEvent(type,data,target,currentTarget){this.data=data,this.target=target,this.type=type,this.currentTarget=currentTarget}function initState(){return{}}function onPropertyChange(){}function initState(props){return{bookingId:props.bookingId,booking:null,bookingStatus:null,editPassengerId:null,alert:new Alert,isEditMode:!1}}function onCancelled(){this.state.isEditMode=!1,this.state.editPassengerId=null,$patchChanges()}function onSaved(){this.state.isEditMode=!1,this.state.editPassengerId=null,$patchChanges()}function onDelete(){$patchChanges()}function onAddPassenger(){this.state.isEditMode=!0,this.state.editPassengerId=null,$patchChanges()}function getBookings(){var self=this;return new Promise(function(resolve){dpd.bookings.get(self.state.bookingId,function(bkg,err){self.state.alert.alert(err),err||(self.state.booking=bkg,self.state.bookingStatus=(new Utils).bookings.status(bkg),resolve(bkg))})})}function onEdit(event){this.state.isEditMode=!0,this.state.editPassengerId=event.data,$patchChanges()}function onBackToMyBookings(){window.location.hash="#app/booking.home"}function $render(_props){_context["list-passenger"]=$inject("/passenger/list-passenger"),_context["list-passenger"],_context["edit-passenger"]=$inject("/passenger/edit-passenger"),_context["edit-passenger"],_context["card-booking"]=$inject("/booking/card-booking"),_context["card-booking"],_context.entry=$inject("/component/entry"),_context.entry,_context.panel=$inject("/component/panel"),_context.panel,_elementOpenStart("div",""),_attr("element","dist.passenger.home"),_elementOpenEnd("div");var _component=IncrementalDOM.currentElement(),_validComponent=yalla.framework.validComponentName(_component,_elementName);_component._state=_component._state&&_validComponent?_component._state:initState.bind(_component)(_props),_component._state._name=_elementName;var _state=_component._state,_self={component:_component,properties:_props,state:_component._state};_validComponent&&yalla.framework.propertyCheckChanges(_component._properties,_props,onPropertyChange.bind(_self)),_component._properties=_props,function(domNode){function asyncFunc_1(){var _params={title:_state.booking.package.packageName,nofooter:"nofooter"};if(_context.panel.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(slotName){if("body"===slotName){_elementOpenStart("div",""),_elementOpenEnd("div");var _params={type:"button",value:"Go to My Bookings",onclick:function(event){var self={target:event.target};self.properties=_props,"elements"in self.target&&(self.elements=self.target.elements),self.currentTarget=this==event.target?self.target:_parentComponent(event.currentTarget),self.component=_component,self.component._state=self.component._state||{},self.state=self.component._state,self.emitEvent=function(eventName,data){var event=new ComponentEvent(eventName,data,self.target,self.currentTarget);"on"+eventName in _props&&_props["on"+eventName](event)},onBackToMyBookings.bind(self)()}};if(_context.entry.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){}),!_state.isEditMode&&0==_state.bookingStatus.code){var _params={type:"button",value:"Add Passenger...",onclick:function(event){var self={target:event.target};self.properties=_props,"elements"in self.target&&(self.elements=self.target.elements),self.currentTarget=this==event.target?self.target:_parentComponent(event.currentTarget),self.component=_component,self.component._state=self.component._state||{},self.state=self.component._state,self.emitEvent=function(eventName,data){var event=new ComponentEvent(eventName,data,self.target,self.currentTarget);"on"+eventName in _props&&_props["on"+eventName](event)},onAddPassenger.bind(self)()}};_context.entry.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){})}_elementClose("div")}}),_state.isEditMode){_elementOpenStart("span",""),_elementOpenEnd("span");var _params={id:_state.editPassengerId,bookingId:_state.booking.id,oncancelled:function(event){var self={target:event.target};self.properties=_props,"elements"in self.target&&(self.elements=self.target.elements),self.currentTarget=this==event.target?self.target:_parentComponent(event.currentTarget),self.component=_component,self.component._state=self.component._state||{},self.state=self.component._state,self.emitEvent=function(eventName,data){var event=new ComponentEvent(eventName,data,self.target,self.currentTarget);"on"+eventName in _props&&_props["on"+eventName](event)},onCancelled.bind(self)()},onsaved:function(event){var self={target:event.target};self.properties=_props,"elements"in self.target&&(self.elements=self.target.elements),self.currentTarget=this==event.target?self.target:_parentComponent(event.currentTarget),self.component=_component,self.component._state=self.component._state||{},self.state=self.component._state,self.emitEvent=function(eventName,data){var event=new ComponentEvent(eventName,data,self.target,self.currentTarget);"on"+eventName in _props&&_props["on"+eventName](event)},onSaved.bind(self)()}};_context["edit-passenger"].render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){}),_elementClose("span")}if(!_state.isEditMode){_elementOpenStart("span",""),_elementOpenEnd("span");var _params={booking:_state.booking,bookingStatus:_state.bookingStatus,onedit:function(event){var self={target:event.target};self.properties=_props,"elements"in self.target&&(self.elements=self.target.elements),self.currentTarget=this==event.target?self.target:_parentComponent(event.currentTarget),self.component=_component,self.component._state=self.component._state||{},self.state=self.component._state,self.emitEvent=function(eventName,data){var event=new ComponentEvent(eventName,data,self.target,self.currentTarget);"on"+eventName in _props&&_props["on"+eventName](event)},onEdit.bind(self)(event)},ondelete:function(event){var self={target:event.target};self.properties=_props,"elements"in self.target&&(self.elements=self.target.elements),self.currentTarget=this==event.target?self.target:_parentComponent(event.currentTarget),self.component=_component,self.component._state=self.component._state||{},self.state=self.component._state,self.emitEvent=function(eventName,data){var event=new ComponentEvent(eventName,data,self.target,self.currentTarget);"on"+eventName in _props&&_props["on"+eventName](event)},onDelete.bind(self)(event)}};_context["list-passenger"].render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){}),_elementClose("span")}_elementOpenStart("span",""),_elementOpenEnd("span"),yalla.framework.registerRef("alert",IncrementalDOM.currentElement(),function(){_elementOpenStart("alert",""),_attr("alertType",_state.alert.type.bind(self)()),_attr("message",_state.alert.text.bind(self)()),_elementOpenEnd("alert"),_elementClose("alert")})(),_elementClose("span")}var node=domNode.element,self={target:node};self.properties=_props,"elements"in self.target&&(self.elements=self.target.elements),self.currentTarget=self.target,self.component=_component,self.component._state=self.component._state||{},self.state=self.component._state;var promise=getBookings.bind(self)();promise&&"object"==typeof promise&&"then"in promise?(_skip(),promise.then(function(_result){$patchChanges(node,function(){asyncFunc_1.call(self,_result)})}).catch(function(err){})):asyncFunc_1.call(self,promise)}({element:IncrementalDOM.currentElement(),pointer:IncrementalDOM.currentPointer()}),_elementClose("div")}var $patchChanges=yalla.framework.renderToScreen,$inject=yalla.framework.createInjector("/dist/passenger/home"),$export={},_elementName="dist.passenger.home",_context={},_parentComponent=yalla.framework.getParentComponent,_merge=yalla.utils.merge,_elementClose=(IncrementalDOM.elementOpen,IncrementalDOM.elementClose),_elementOpenStart=IncrementalDOM.elementOpenStart,_elementOpenEnd=IncrementalDOM.elementOpenEnd,_attr=(IncrementalDOM.elementVoid,IncrementalDOM.text,IncrementalDOM.attr),_skip=IncrementalDOM.skip;return"function"==typeof $render&&($export.render=$render),$export}());