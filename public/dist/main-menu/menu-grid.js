yalla.framework.addComponent("/dist/main-menu/menu-grid",function(){function ComponentEvent(type,data,target,currentTarget){this.data=data,this.target=target,this.type=type,this.currentTarget=currentTarget}function initState(){return{}}function onPropertyChange(){}function initState(){return{actionable:actionable(),me:storage.me.read()}}function actionable(){var result="|schedule|login|praytimes|qibla|dua|",me=storage.me.read();return me&&(result+="profile|bookings|",me.isTravelAgent&&(result+="travelagent|confirmpayment|"),me.isAdmin&&(result+="manageusers|approveusers|")),result.toLowerCase()}function isActionable(action,self){return self._state.actionable.indexOf("|"+action.toLowerCase()+"|")>=0}function onClick(path){window.location.hash=path}function onLogin(){this.state.me?dpd.users.logout(function(){storage.me.erase(),window.location.hash="#app"}):window.location.hash="#user.login-form"}function $render(_props){_context["menu-block"]=$inject("/main-menu/menu-block"),_context["menu-block"],_elementOpenStart("div",""),_attr("element","dist.main-menu.menu-grid"),_elementOpenEnd("div");var _component=IncrementalDOM.currentElement(),_validComponent=yalla.framework.validComponentName(_component,_elementName);_component._state=_component._state&&_validComponent?_component._state:initState.bind(_component)(_props),_component._state._name=_elementName;var _state=_component._state,_self={component:_component,properties:_props,state:_component._state};if(_validComponent&&yalla.framework.propertyCheckChanges(_component._properties,_props,onPropertyChange.bind(_self)),_component._properties=_props,_elementOpenStart("div",""),_attr("class","row menu-grid"),_elementOpenEnd("div"),isActionable("profile",_component)&&(_params={icon:"address-card-o",text:"Profile",onclick:function(event){var self={target:event.target};self.properties=_props,"elements"in self.target&&(self.elements=self.target.elements),self.currentTarget=this==event.target?self.target:_parentComponent(event.currentTarget),self.component=_component,self.component._state=self.component._state||{},self.state=self.component._state,self.emitEvent=function(eventName,data){var event=new ComponentEvent(eventName,data,self.target,self.currentTarget);"on"+eventName in _props&&_props["on"+eventName](event)},onClick.bind(self)("#app/user.myProfile")}},_context["menu-block"].render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){})),isActionable("schedule",_component)&&(_params={icon:"calendar",text:"Schedule",onclick:function(event){var self={target:event.target};self.properties=_props,"elements"in self.target&&(self.elements=self.target.elements),self.currentTarget=this==event.target?self.target:_parentComponent(event.currentTarget),self.component=_component,self.component._state=self.component._state||{},self.state=self.component._state,self.emitEvent=function(eventName,data){var event=new ComponentEvent(eventName,data,self.target,self.currentTarget);"on"+eventName in _props&&_props["on"+eventName](event)},onClick.bind(self)("#app/search-package.home")}},_context["menu-block"].render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){})),isActionable("bookings",_component)&&(_params={icon:"ticket",text:"Bookings",onclick:function(event){var self={target:event.target};self.properties=_props,"elements"in self.target&&(self.elements=self.target.elements),self.currentTarget=this==event.target?self.target:_parentComponent(event.currentTarget),self.component=_component,self.component._state=self.component._state||{},self.state=self.component._state,self.emitEvent=function(eventName,data){var event=new ComponentEvent(eventName,data,self.target,self.currentTarget);"on"+eventName in _props&&_props["on"+eventName](event)},onClick.bind(self)("#app/booking.home")}},_context["menu-block"].render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){})),isActionable("travelAgent",_component)&&(_params={icon:"plane",text:"Travel Agent",onclick:function(event){var self={target:event.target};self.properties=_props,"elements"in self.target&&(self.elements=self.target.elements),self.currentTarget=this==event.target?self.target:_parentComponent(event.currentTarget),self.component=_component,self.component._state=self.component._state||{},self.state=self.component._state,self.emitEvent=function(eventName,data){var event=new ComponentEvent(eventName,data,self.target,self.currentTarget);"on"+eventName in _props&&_props["on"+eventName](event)},onClick.bind(self)("#app/travel-agent.home")}},_context["menu-block"].render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){})),isActionable("approveUsers",_component)&&(_params={icon:"files-o",text:"Approvals",onclick:function(event){var self={target:event.target};self.properties=_props,"elements"in self.target&&(self.elements=self.target.elements),self.currentTarget=this==event.target?self.target:_parentComponent(event.currentTarget),self.component=_component,self.component._state=self.component._state||{},self.state=self.component._state,self.emitEvent=function(eventName,data){var event=new ComponentEvent(eventName,data,self.target,self.currentTarget);"on"+eventName in _props&&_props["on"+eventName](event)},onClick.bind(self)("#app/user.myApprovals")}},_context["menu-block"].render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){})),isActionable("confirmPayment",_component)&&(_params={icon:"money",text:"Payments",onclick:function(event){var self={target:event.target};self.properties=_props,"elements"in self.target&&(self.elements=self.target.elements),self.currentTarget=this==event.target?self.target:_parentComponent(event.currentTarget),self.component=_component,self.component._state=self.component._state||{},self.state=self.component._state,self.emitEvent=function(eventName,data){var event=new ComponentEvent(eventName,data,self.target,self.currentTarget);"on"+eventName in _props&&_props["on"+eventName](event)},onClick.bind(self)("#app/booking.paymentConfirmation")}},_context["menu-block"].render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){})),isActionable("manageUsers",_component)&&(_params={icon:"users",text:"Users",onclick:function(event){var self={target:event.target};self.properties=_props,"elements"in self.target&&(self.elements=self.target.elements),self.currentTarget=this==event.target?self.target:_parentComponent(event.currentTarget),self.component=_component,self.component._state=self.component._state||{},self.state=self.component._state,self.emitEvent=function(eventName,data){var event=new ComponentEvent(eventName,data,self.target,self.currentTarget);"on"+eventName in _props&&_props["on"+eventName](event)},onClick.bind(self)("#app/user.home")}},_context["menu-block"].render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){})),isActionable("prayTimes",_component)&&(_params={icon:"clock-o",text:"Pray Times",onclick:function(event){var self={target:event.target};self.properties=_props,"elements"in self.target&&(self.elements=self.target.elements),self.currentTarget=this==event.target?self.target:_parentComponent(event.currentTarget),self.component=_component,self.component._state=self.component._state||{},self.state=self.component._state,self.emitEvent=function(eventName,data){var event=new ComponentEvent(eventName,data,self.target,self.currentTarget);"on"+eventName in _props&&_props["on"+eventName](event)},onClick.bind(self)("#app/user.home")}},_context["menu-block"].render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){})),isActionable("qibla",_component)&&(_params={icon:"compass",text:"Qibla",onclick:function(event){var self={target:event.target};self.properties=_props,"elements"in self.target&&(self.elements=self.target.elements),self.currentTarget=this==event.target?self.target:_parentComponent(event.currentTarget),self.component=_component,self.component._state=self.component._state||{},self.state=self.component._state,self.emitEvent=function(eventName,data){var event=new ComponentEvent(eventName,data,self.target,self.currentTarget);"on"+eventName in _props&&_props["on"+eventName](event)},onClick.bind(self)("#app/user.home")}},_context["menu-block"].render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){})),isActionable("dua",_component)&&(_params={icon:"signing",text:"Duas",onclick:function(event){var self={target:event.target};self.properties=_props,"elements"in self.target&&(self.elements=self.target.elements),self.currentTarget=this==event.target?self.target:_parentComponent(event.currentTarget),self.component=_component,self.component._state=self.component._state||{},self.state=self.component._state,self.emitEvent=function(eventName,data){var event=new ComponentEvent(eventName,data,self.target,self.currentTarget);"on"+eventName in _props&&_props["on"+eventName](event)},onClick.bind(self)("#app/user.home")}},_context["menu-block"].render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){})),isActionable("login",_component)){var _params={icon:"power-off",text:_state.me?"Log Out":"Log In",onclick:function(event){var self={target:event.target};self.properties=_props,"elements"in self.target&&(self.elements=self.target.elements),self.currentTarget=this==event.target?self.target:_parentComponent(event.currentTarget),self.component=_component,self.component._state=self.component._state||{},self.state=self.component._state,self.emitEvent=function(eventName,data){var event=new ComponentEvent(eventName,data,self.target,self.currentTarget);"on"+eventName in _props&&_props["on"+eventName](event)},onLogin.bind(self)()}};_context["menu-block"].render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){})}_elementClose("div"),_elementClose("div")}yalla.framework.renderToScreen;var $inject=yalla.framework.createInjector("/dist/main-menu/menu-grid"),$export={},_elementName="dist.main-menu.menu-grid",_context={},_parentComponent=yalla.framework.getParentComponent,_merge=yalla.utils.merge,_elementClose=(IncrementalDOM.elementOpen,IncrementalDOM.elementClose),_elementOpenStart=IncrementalDOM.elementOpenStart,_elementOpenEnd=IncrementalDOM.elementOpenEnd,_attr=(IncrementalDOM.elementVoid,IncrementalDOM.text,IncrementalDOM.attr);return IncrementalDOM.skip,"function"==typeof $render&&($export.render=$render),$export}());