yalla.framework.addComponent("/dist/booking/paymentDetails",function(){function ComponentEvent(type,data,target,currentTarget){this.data=data,this.target=target,this.type=type,this.currentTarget=currentTarget}function initState(){return{}}function onPropertyChange(){}function initState(){return{alert:new Alert(null,$patchChanges,"payment"),booking:null,flow:(new Utils).flow.booking,onSave:new Event}}function onPropertyChange(){}function onBackToMyBookings(){window.location.hash="#app/booking.home:bookingId="+this.state.booking.id}function deleteActualPayment(){this.target.form;var self=this,booking=self.state.booking;booking.fromBank="",booking.fromBankBranch="",booking.fromAccountNumber="",booking.fromAccountHolder="",booking.actualPayment=0,booking.paymentDate=null,booking.bookingStatus=self.state.flow.move(booking.bookingStatus,"paymentCancellation"),booking.paymentSlips=[],dpd.bookings.put(booking.id,booking,function(bkg,err){self.state.alert.alert(err),$patchChanges()})}function saveActualPayment(){var form=this.target.form,self=this,booking=self.state.booking;form.elements.actualPayment.value<booking.totalPrice?self.state.alert.alert({errors:[{actualPayment:"Cannot be less than Total Price"}]}):self.state.onSave.publish(afterSaveAttachments.bind(self))}function afterSaveAttachments(res,err){var form=this.target.form,self=this,booking=self.state.booking;err?(this.state.infoText="",this.state.alert.alert(err)):(this.state.booking.paymentSlips=res,booking.fromBank=form.elements.fromBank.value,booking.fromBankBranch=form.elements.fromBankBranch.value,booking.fromAccountNumber=form.elements.fromAccountNumber.value,booking.fromAccountHolder=form.elements.fromAccountHolder.value,booking.actualPayment=form.elements.actualPayment.value,booking.paymentDate=new Date(form.elements.paymentDate.value).getTime(),booking.bookingStatus=self.state.flow.move(booking.bookingStatus,"payment"),dpd.bookings.put(booking.id,booking,function(bkg,err){self.state.alert.alert(err),err||$patchChanges()}))}function getPaymentDetails(bookingId){var self=this;return new Promise(function(resolve){dpd.bookings.get(bookingId,function(bkg,err){self.state.alert.alert(err),err||(self.state.booking=bkg,resolve(bkg))})})}function $render(_props){_context["card-booking"]=$inject("/booking/card-booking"),_context["card-booking"],_context.card=$inject("/component/panel"),_context.card,_context.alert=$inject("/component/alert"),_context.alert,_context.entry=$inject("/component/entry"),_context.entry,_context.ppLink=$inject("/component/ppLink"),_context.ppLink,_context.attachments=$inject("/component/attachments/home"),_context.attachments,_elementOpenStart("div",""),_attr("element","dist.booking.paymentDetails"),_elementOpenEnd("div");var _component=IncrementalDOM.currentElement(),_validComponent=yalla.framework.validComponentName(_component,_elementName);_component._state=_component._state&&_validComponent?_component._state:initState.bind(_component)(_props),_component._state._name=_elementName;var _state=_component._state,_self={component:_component,properties:_props,state:_component._state};_validComponent&&yalla.framework.propertyCheckChanges(_component._properties,_props,onPropertyChange.bind(_self)),_component._properties=_props,_elementOpenStart("div",""),_elementOpenEnd("div"),function(){function asyncFunc_1(data){var _params={title:"Payment for "+_state.booking.package.packageName,nofooter:"nofooter"};_context.card.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(slotName){if("body"===slotName){_elementOpenStart("div",""),_attr("class","row"),_elementOpenEnd("div");var _params={type:"button",value:"Back to My Booking",onclick:function(event){var self={target:event.target};self.properties=_props,"elements"in self.target&&(self.elements=self.target.elements),self.currentTarget=this==event.target?self.target:_parentComponent(event.currentTarget),self.component=_component,self.component._state=self.component._state||{},self.state=self.component._state,self.emitEvent=function(eventName,data){var event=new ComponentEvent(eventName,data,self.target,self.currentTarget);"on"+eventName in _props&&_props["on"+eventName](event)},onBackToMyBookings.bind(self)()}};_context.entry.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){}),_elementClose("div")}}),_elementOpenStart("span",""),_elementOpenEnd("span"),yalla.framework.registerRef("payment",IncrementalDOM.currentElement(),function(){if(data.actualPayment&&(_params={title:"Actual Payment",nofooter:"nofooter"},_context.card.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(slotName){if("body"===slotName){if(_elementOpenStart("div",""),_attr("class","row"),_elementOpenEnd("div"),_params={type:"label",prompt:"From Bank: "+_state.booking.fromBank,innerDivClass:"custom-label-margin"},_context.entry.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){}),_params={type:"label",prompt:"Branch: "+_state.booking.fromBankBranch,innerDivClass:"custom-label-margin"},_context.entry.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){}),_params={type:"label",prompt:"Account No: "+_state.booking.fromAccountNumber,innerDivClass:"custom-label-margin"},_context.entry.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){}),_params={type:"label",prompt:"Account Name: "+_state.booking.fromAccountHolder,innerDivClass:"custom-label-margin"},_context.entry.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){}),_params={type:"label",prompt:"Amount: "+(_state.booking.actualPayment?_state.booking.actualPayment.toFormattedString():""),innerDivClass:"custom-label-margin"},_context.entry.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){}),_params={type:"label",prompt:"Transfer Date: "+(_state.booking.paymentDate?_state.booking.paymentDate.toDateComponents(!1,!0):""),innerDivClass:"custom-label-margin"},_context.entry.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){}),_params={readonly:"WFP"!=_state.booking.bookingStatus,userId:data.userId,attachmentList:data.paymentSlips,prompt:"Payment Slip",collection:"docspaymentslip",folder:"upload/docspaymentslip/",onSave:_state.onSave,onsaved:function(event){var self={target:event.target};self.properties=_props,"elements"in self.target&&(self.elements=self.target.elements),self.currentTarget=this==event.target?self.target:_parentComponent(event.currentTarget),self.component=_component,self.component._state=self.component._state||{},self.state=self.component._state,self.emitEvent=function(eventName,data){var event=new ComponentEvent(eventName,data,self.target,self.currentTarget);"on"+eventName in _props&&_props["on"+eventName](event)},afterSaveAttachments.bind(self)()},name:"docsPaymentSlip",alert:_state.alert},_context.attachments.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){}),_state.flow.isTransitionAllowed(_state.booking.bookingStatus,"DPS")){var _params={type:"button",name:"btnCancel",value:"Cancel/Delete Payment",onclick:function(event){var self={target:event.target};self.properties=_props,"elements"in self.target&&(self.elements=self.target.elements),self.currentTarget=this==event.target?self.target:_parentComponent(event.currentTarget),self.component=_component,self.component._state=self.component._state||{},self.state=self.component._state,self.emitEvent=function(eventName,data){var event=new ComponentEvent(eventName,data,self.target,self.currentTarget);"on"+eventName in _props&&_props["on"+eventName](event)},deleteActualPayment.bind(self)()}};_context.entry.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){})}_elementClose("div")}})),_params={title:"Payment Info"},_context.card.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(slotName){data.actualPayment||"footer"===slotName&&(_elementOpenStart("div",""),_elementOpenEnd("div"),_text("Please make payment before the expiry date to avoid booking cancellation"),_elementClose("div")),"body"===slotName&&(_elementOpenStart("div",""),_elementOpenEnd("div"),_text("Total: "+(_state.booking.totalPrice?_state.booking.totalPrice.toFormattedString():"")),_elementOpenStart("br",""),_elementOpenEnd("br"),_elementClose("br"),_text("Bank: Bank Central Asia"),_elementOpenStart("br",""),_elementOpenEnd("br"),_elementClose("br"),_text("1111                    Branch: Sidoarjo"),_elementOpenStart("br",""),_elementOpenEnd("br"),_elementClose("br"),_text("Account No:1234567890"),_elementOpenStart("br",""),_elementOpenEnd("br"),_elementClose("br"),_text("Name: PT Pete Tbk."),_elementOpenStart("br",""),_elementOpenEnd("br"),_elementClose("br"),_elementClose("div"))}),_elementOpenStart("span",""),_elementOpenEnd("span"),yalla.framework.registerRef("alert",IncrementalDOM.currentElement(),function(){var _params={alertType:_state.alert.type.bind(self)(),message:_state.alert.text.bind(self)()};_context.alert.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){})})(),_elementClose("span"),!data.actualPayment){var _params={title:"Actual Payment"};_context.card.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(slotName){if("footer"===slotName&&(_elementOpenStart("div",""),_elementOpenEnd("div"),_params={},_context.ppLink.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){}),_elementClose("div")),"body"===slotName){_elementOpenStart("div",""),_elementOpenEnd("div"),_elementOpenStart("form",""),_elementOpenEnd("form"),_elementOpenStart("div",""),_attr("class","row"),_elementOpenEnd("div"),_params={type:"text",prompt:"Bank Name",name:"fromBank"},_context.entry.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){}),_params={type:"text",prompt:"Bank Branch",name:"fromBankBranch"},_context.entry.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){}),_params={type:"text",prompt:"Account Number",name:"fromAccountNumber"},_context.entry.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){}),_params={type:"text",prompt:"Account Holder",name:"fromAccountHolder"},_context.entry.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){}),_params={type:"number",prompt:"Amount Transfered",name:"actualPayment",min:_state.booking.totalPrice,alert:_state.alert},_context.entry.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){});var _params={type:"datetime-local",prompt:"Transfer Date & Time",name:"paymentDate",value:(new Date).toYYYYMMDD(!0),max:(new Date).toYYYYMMDD(!0)};_context.entry.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){}),_elementOpenStart("div",""),_elementOpenEnd("div"),yalla.framework.registerRef("docsPaymentSlip",IncrementalDOM.currentElement(),function(){if(_params={userId:data.userId,attachmentList:data.paymentSlips,prompt:"Payment Slip",collection:"docspaymentslip",folder:"upload/docspaymentslip/",onSave:_state.onSave,onsaved:function(event){var self={target:event.target};self.properties=_props,"elements"in self.target&&(self.elements=self.target.elements),self.currentTarget=this==event.target?self.target:_parentComponent(event.currentTarget),self.component=_component,self.component._state=self.component._state||{},self.state=self.component._state,self.emitEvent=function(eventName,data){var event=new ComponentEvent(eventName,data,self.target,self.currentTarget);"on"+eventName in _props&&_props["on"+eventName](event)},afterSaveAttachments.bind(self)()},name:"docsPaymentSlip",alert:_state.alert,readonly:"WFP"!=_state.booking.bookingStatus},_context.attachments.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){}),"WFP"==_state.booking.bookingStatus){var _params={type:"button",name:"btnSave",value:"Save",onclick:function(event){var self={target:event.target};self.properties=_props,"elements"in self.target&&(self.elements=self.target.elements),self.currentTarget=this==event.target?self.target:_parentComponent(event.currentTarget),self.component=_component,self.component._state=self.component._state||{},self.state=self.component._state,self.emitEvent=function(eventName,data){var event=new ComponentEvent(eventName,data,self.target,self.currentTarget);"on"+eventName in _props&&_props["on"+eventName](event)},saveActualPayment.bind(self)()}};_context.entry.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){})}})(),_elementClose("div"),_elementClose("div"),_elementClose("form"),_elementClose("div")}})}})(),_elementClose("span")}var node={element:IncrementalDOM.currentElement(),pointer:IncrementalDOM.currentPointer()}.element,self={target:node};self.properties=_props,"elements"in self.target&&(self.elements=self.target.elements),self.currentTarget=self.target,self.component=_component,self.component._state=self.component._state||{},self.state=self.component._state;var promise=getPaymentDetails.bind(self)(_props.bookingId);promise&&"object"==typeof promise&&"then"in promise?(_skip(),promise.then(function(_result){$patchChanges(node,function(){asyncFunc_1.call(self,_result)})}).catch(function(){})):asyncFunc_1.call(self,promise)}(),_elementClose("div"),_elementClose("div")}var $patchChanges=yalla.framework.renderToScreen,$inject=yalla.framework.createInjector("/dist/booking/paymentDetails"),$export={},_elementName="dist.booking.paymentDetails",_context={},_parentComponent=yalla.framework.getParentComponent,_merge=yalla.utils.merge,_elementClose=(IncrementalDOM.elementOpen,IncrementalDOM.elementClose),_elementOpenStart=IncrementalDOM.elementOpenStart,_elementOpenEnd=IncrementalDOM.elementOpenEnd,_text=(IncrementalDOM.elementVoid,IncrementalDOM.text),_attr=IncrementalDOM.attr,_skip=IncrementalDOM.skip;return"function"==typeof $render&&($export.render=$render),$export}());