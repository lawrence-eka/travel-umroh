yalla.framework.addComponent("/dist/booking/paymentDetails",function(){function ComponentEvent(type,data,target,currentTarget){this.data=data,this.target=target,this.type=type,this.currentTarget=currentTarget}function initState(){return{}}function onPropertyChange(){}function initState(){return{alert:new Alert(null,$patchChanges,"payment"),booking:null,bu:(new Utils).bookings,inputActualPayment:!1}}function onPropertyChange(){}function whatRemarks(){var status=this.state.bu.status(this.state.booking);return status.code==this.state.bu.paymentRejected?"Payment is rejected by Travel Agent":status.code==this.state.bu.bookingExpired?"Booking is cancelled because there was no payment received within the booking expiration date":status.code==this.state.bu.bookingCancelled?"Booking was cancelled by user":status.code==this.state.bu.waitingForPayment?"Please make the payment before booking expires to avoid automatic cancellation":status.code==this.state.bu.paymentConfirmationPending?"Payment received, waiting for verification":"Payment received and verified"}function deleteActualPayment(){var self=(this.target.form,this),booking=self.state.booking;booking.fromBank="",booking.fromBankBranch="",booking.fromAccountNumber="",booking.fromAccountHolder="",booking.actualPayment=0,booking.paymentDate=null,dpd.bookings.put(booking.id,booking,function(bkg,err){self.state.alert.alert(err),err||(self.state.inputActualPayment=!1),$patchChanges()})}function showActualPayment(){this.state.inputActualPayment=!0,$patchChanges("payment")}function cancelActualPayment(){this.state.inputActualPayment=!1,$patchChanges("payment")}function saveActualPayment(){var form=this.target.form,self=this,booking=self.state.booking;return form.elements.actualPayment.value<booking.totalPrice?void self.state.alert.alert({errors:[{actualPayment:"Cannot be less than Total Price"}]}):(booking.fromBank=form.elements.fromBank.value,booking.fromBankBranch=form.elements.fromBankBranch.value,booking.fromAccountNumber=form.elements.fromAccountNumber.value,booking.fromAccountHolder=form.elements.fromAccountHolder.value,booking.actualPayment=form.elements.actualPayment.value,booking.paymentDate=new Date(form.elements.paymentDate.value).getTime(),void dpd.bookings.put(booking.id,booking,function(bkg,err){self.state.alert.alert(err),err||(self.state.inputActualPayment=!1),$patchChanges()}))}function getPaymentDetails(bookingId){var self=this;return new Promise(function(resolve){dpd.bookings.get(bookingId,function(bkg,err){self.state.alert.alert(err),err||(self.state.booking=bkg,resolve(bkg))})})}function $render(_props){_context["card-booking"]=$inject("/booking/card-booking"),_context["card-booking"],_context.card=$inject("/component/panel"),_context.card,_context.alert=$inject("/component/alert"),_context.alert,_context.entry=$inject("/component/entry"),_context.entry,_context.ppLink=$inject("/component/ppLink"),_context.ppLink,_context.attachments=$inject("/component/attachments/home"),_context.attachments,_elementOpenStart("div",""),_attr("element","dist.booking.paymentDetails"),_elementOpenEnd("div");var _component=IncrementalDOM.currentElement(),_validComponent=yalla.framework.validComponentName(_component,_elementName);_component._state=_component._state&&_validComponent?_component._state:initState.bind(_component)(_props),_component._state._name=_elementName;var _state=_component._state,_self={component:_component,properties:_props,state:_component._state};_validComponent&&yalla.framework.propertyCheckChanges(_component._properties,_props,onPropertyChange.bind(_self)),_component._properties=_props,_elementOpenStart("div",""),_elementOpenEnd("div"),function(domNode){function asyncFunc_1(data){var _params={booking:_state.booking,showOnly:"showOnly"};_context["card-booking"].render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){}),_elementOpenStart("span",""),_elementOpenEnd("span"),yalla.framework.registerRef("payment",IncrementalDOM.currentElement(),function(){if(!_state.inputActualPayment&&(_state.bu.status(data).code>_state.bu.paymentConfirmationPending||_state.bu.status(data).code==_state.bu.paymentRejected)){var _params={title:"Actual Payment",nofooter:"nofooter"};_context.card.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(slotName){if("body"===slotName){if(_elementOpenStart("div",""),_elementOpenEnd("div"),_text("From Bank: "+_state.booking.fromBank),_elementOpenStart("br",""),_elementOpenEnd("br"),_elementClose("br"),_text("Branch: "+_state.booking.fromBankBranch),_elementOpenStart("br",""),_elementOpenEnd("br"),_elementClose("br"),_text("Account No: "+_state.booking.fromAccountNumber),_elementOpenStart("br",""),_elementOpenEnd("br"),_elementClose("br"),_text("Account Name: "+_state.booking.fromAccountHolder),_elementOpenStart("br",""),_elementOpenEnd("br"),_elementClose("br"),_text("Amount: "+(_state.booking.actualPayment?_state.booking.actualPayment.toFormattedString():"")),_elementOpenStart("br",""),_elementOpenEnd("br"),_elementClose("br"),_text("Transfer Date: "+(_state.booking.paymentDate?_state.booking.paymentDate.toDateComponents(!1,!0):"")),_elementOpenStart("div",""),_attr("class","row"),_elementOpenEnd("div"),_state.bu.status(data).code==_state.bu.paymentConfirmationPending||_state.bu.status(data).code==_state.bu.paymentRejected){var _params={type:"button",name:"btnCancel",value:"Cancel/Delete Payment",onclick:function(event){var self={target:event.target};self.properties=_props,"elements"in self.target&&(self.elements=self.target.elements),self.currentTarget=this==event.target?self.target:_parentComponent(event.currentTarget),self.component=_component,self.component._state=self.component._state||{},self.state=self.component._state,self.emitEvent=function(eventName,data){var event=new ComponentEvent(eventName,data,self.target,self.currentTarget);"on"+eventName in _props&&_props["on"+eventName](event)},deleteActualPayment.bind(self)()}};_context.entry.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){})}_elementClose("div"),_elementClose("div")}})}if(!_state.inputActualPayment){var _params={title:"Payment Info",footer:whatRemarks.bind(self)()};_context.card.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(slotName){if("body"===slotName){if(_elementOpenStart("div",""),_elementOpenEnd("div"),_text("Total: "+(_state.booking.totalPrice?_state.booking.totalPrice.toFormattedString():"")),_elementOpenStart("br",""),_elementOpenEnd("br"),_elementClose("br"),_text("Bank: Bank Central Asia"),_elementOpenStart("br",""),_elementOpenEnd("br"),_elementClose("br"),_text("Branch: Sidoarjo"),_elementOpenStart("br",""),_elementOpenEnd("br"),_elementClose("br"),_text("Account No:1234567890"),_elementOpenStart("br",""),_elementOpenEnd("br"),_elementClose("br"),_text("Name: PT Pete Tbk."),_elementOpenStart("br",""),_elementOpenEnd("br"),_elementClose("br"),_elementOpenStart("div",""),_attr("class","row"),_elementOpenEnd("div"),_state.bu.status(data).code==_state.bu.definingPassengers){var _params={type:"button",name:"btnPaymentConfirmation",value:"Input Actual Payment",onclick:function(event){var self={target:event.target};self.properties=_props,"elements"in self.target&&(self.elements=self.target.elements),self.currentTarget=this==event.target?self.target:_parentComponent(event.currentTarget),self.component=_component,self.component._state=self.component._state||{},self.state=self.component._state,self.emitEvent=function(eventName,data){var event=new ComponentEvent(eventName,data,self.target,self.currentTarget);"on"+eventName in _props&&_props["on"+eventName](event)},showActualPayment.bind(self)()}};_context.entry.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){})}_elementClose("div"),_elementClose("div")}})}if(_elementOpenStart("span",""),_elementOpenEnd("span"),yalla.framework.registerRef("alert",IncrementalDOM.currentElement(),function(){var _params={alertType:_state.alert.type.bind(self)(),message:_state.alert.text.bind(self)()};_context.alert.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){})})(),_elementClose("span"),_state.inputActualPayment){var _params={title:"Payment Confirmation"};_context.card.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(slotName){if("footer"===slotName){_elementOpenStart("div",""),_elementOpenEnd("div");var _params={};_context.ppLink.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){}),_elementClose("div")}if("body"===slotName){_elementOpenStart("div",""),_elementOpenEnd("div"),_elementOpenStart("form",""),_elementOpenEnd("form");var _params={type:"text",prompt:"Bank Name",name:"fromBank"};_context.entry.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){});var _params={type:"text",prompt:"Bank Branch",name:"fromBankBranch"};_context.entry.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){});var _params={type:"text",prompt:"Account Number",name:"fromAccountNumber"};_context.entry.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){});var _params={type:"text",prompt:"Account Holder",name:"fromAccountHolder"};_context.entry.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){});var _params={type:"number",prompt:"Amount Transfered",name:"actualPayment",min:_state.booking.totalPrice,alert:_state.alert};_context.entry.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){});var _params={type:"datetime-local",prompt:"Transfer Date & Time",name:"paymentDate",value:(new Date).toYYYYMMDD(!0),max:(new Date).toYYYYMMDD(!0)};if(_context.entry.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){}),_elementOpenStart("div",""),_elementOpenEnd("div"),yalla.framework.registerRef("docsPaymentSlip",IncrementalDOM.currentElement(),function(){_elementOpenStart("div",""),_attr("class","row"),_elementOpenEnd("div");var _params={userId:data.id,prompt:"Payment Slip",collection:"docspaymentslip",onSave:_state.onSave,onsaved:function(event){var self={target:event.target};self.properties=_props,"elements"in self.target&&(self.elements=self.target.elements),self.currentTarget=this==event.target?self.target:_parentComponent(event.currentTarget),self.component=_component,self.component._state=self.component._state||{},self.state=self.component._state,self.emitEvent=function(eventName,data){var event=new ComponentEvent(eventName,data,self.target,self.currentTarget);"on"+eventName in _props&&_props["on"+eventName](event)},afterSaveAttachments.bind(self)()},name:"docsPaymentSlip",alert:_state.alert};_context.attachments.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){}),_elementClose("div")})(),_elementClose("div"),!_state.booking.actualPayment){var _params={type:"button",name:"btnSave",value:"Save",divClass:"col-xs-6 col-sm-6 col-md-6 col-lg-6",onclick:function(event){var self={target:event.target};self.properties=_props,"elements"in self.target&&(self.elements=self.target.elements),self.currentTarget=this==event.target?self.target:_parentComponent(event.currentTarget),self.component=_component,self.component._state=self.component._state||{},self.state=self.component._state,self.emitEvent=function(eventName,data){var event=new ComponentEvent(eventName,data,self.target,self.currentTarget);"on"+eventName in _props&&_props["on"+eventName](event)},saveActualPayment.bind(self)()}};_context.entry.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){})}var _params={type:"button",name:"btnCancel",value:_state.booking.actualPayment?"Close":"Cancel",divClass:"col-xs-6 col-sm-6 col-md-6 col-lg-6",onclick:function(event){var self={target:event.target};self.properties=_props,"elements"in self.target&&(self.elements=self.target.elements),self.currentTarget=this==event.target?self.target:_parentComponent(event.currentTarget),self.component=_component,self.component._state=self.component._state||{},self.state=self.component._state,self.emitEvent=function(eventName,data){var event=new ComponentEvent(eventName,data,self.target,self.currentTarget);"on"+eventName in _props&&_props["on"+eventName](event)},cancelActualPayment.bind(self)()}};_context.entry.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){}),_elementClose("form"),_elementClose("div")}})}})(),_elementClose("span")}var node=domNode.element,self={target:node};self.properties=_props,"elements"in self.target&&(self.elements=self.target.elements),self.currentTarget=self.target,self.component=_component,self.component._state=self.component._state||{},self.state=self.component._state;var promise=getPaymentDetails.bind(self)(_props.bookingId);promise&&"object"==typeof promise&&"then"in promise?(_skip(),promise.then(function(_result){$patchChanges(node,function(){asyncFunc_1.call(self,_result)})}).catch(function(err){})):asyncFunc_1.call(self,promise)}({element:IncrementalDOM.currentElement(),pointer:IncrementalDOM.currentPointer()}),_elementClose("div"),_elementClose("div")}var $patchChanges=yalla.framework.renderToScreen,$inject=yalla.framework.createInjector("/dist/booking/paymentDetails"),$export={},_elementName="dist.booking.paymentDetails",_context={},_parentComponent=yalla.framework.getParentComponent,_merge=yalla.utils.merge,_elementClose=(IncrementalDOM.elementOpen,IncrementalDOM.elementClose),_elementOpenStart=IncrementalDOM.elementOpenStart,_elementOpenEnd=IncrementalDOM.elementOpenEnd,_text=(IncrementalDOM.elementVoid,IncrementalDOM.text),_attr=IncrementalDOM.attr,_skip=IncrementalDOM.skip;return"function"==typeof $render&&($export.render=$render),$export}());