yalla.framework.addComponent("/dist/component/attachments/home",function(){function ComponentEvent(type,data,target,currentTarget){this.data=data,this.target=target,this.type=type,this.currentTarget=currentTarget}function initState(){return{}}function onPropertyChange(){}function initState(props){return props.onSave&&props.onSave.subscribe(onSaveEvent.bind(this)),{alert:new Alert(null,$patchChanges,"alert"),newFiles:[],delFiles:[],collection:props.collection,userId:props.userId}}function loadFiles(){var self=this;return new Promise(function(resolve){var q={};self.state.userId&&(q.uploaderId=self.state.userId),dpd[self.state.collection].get(q,function(data){resolve(data)})})}function onDelete(event){this.state.delFiles=this.state.delFiles.concat(event.data)}function onAddFile(){var form=this.target.form;this.state.newFiles=this.state.newFiles.concat(form.elements.addFile.files[0]),form.reset(),$patchChanges("newFiles")}function onSaveEvent(){var self=this,fd=new FormData;for(var i in self._state.newFiles)fd.append("uploadedFile",self._state.newFiles[i]);var xhr=new XMLHttpRequest;xhr.open("POST","/"+self._state.collection),xhr.onload=function(){JSON.parse(this.responseText),self._state.alert.alert(null)},xhr.onerror=function(err){self._state.alert.alert(err)},xhr.send(fd);for(var i in self._state.delFiles)dpd[self._state.collection].del(self._state.delFiles[i],function(){})}function $render(_props){_context.list=$inject("/component/attachments/list"),_context.list,_context.entry=$inject("/component/entry"),_context.entry,_context.alert=$inject("/component/alert"),_context.alert,_elementOpenStart("div",""),_attr("element","dist.component.attachments.home"),_elementOpenEnd("div");var _component=IncrementalDOM.currentElement(),_validComponent=yalla.framework.validComponentName(_component,_elementName);_component._state=_component._state&&_validComponent?_component._state:initState.bind(_component)(_props),_component._state._name=_elementName;var _state=_component._state,_self={component:_component,properties:_props,state:_component._state};_validComponent&&yalla.framework.propertyCheckChanges(_component._properties,_props,onPropertyChange.bind(_self)),_component._properties=_props,function(domNode){function asyncFunc_1(data){_elementOpenStart("div",""),_attr("class","container"),_elementOpenEnd("div");var _params={naked:"naked",type:"label",prompt:_props.prompt};if(_context.entry.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){}),_elementClose("div"),_elementOpenStart("div",""),_elementOpenEnd("div"),yalla.framework.registerRef("existingFiles",IncrementalDOM.currentElement(),function(){var _params={list:data,folder:"upload/",ondelete:function(event){var self={target:event.target};self.properties=_props,"elements"in self.target&&(self.elements=self.target.elements),self.currentTarget=this==event.target?self.target:_parentComponent(event.currentTarget),self.component=_component,self.component._state=self.component._state||{},self.state=self.component._state,self.emitEvent=function(eventName,data){var event=new ComponentEvent(eventName,data,self.target,self.currentTarget);"on"+eventName in _props&&_props["on"+eventName](event)},onDelete.bind(self)(event)},readonly:_props.readonly};_context.list.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){})})(),_elementClose("div"),_elementOpenStart("div",""),_elementOpenEnd("div"),yalla.framework.registerRef("newFiles",IncrementalDOM.currentElement(),function(){var _params={list:_state.newFiles};_context.list.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){})})(),_elementClose("div"),!_props.readonly){_elementOpenStart("div",""),_elementOpenEnd("div"),_elementOpenStart("form",""),_elementOpenEnd("form");var _params={type:"file",name:"addFile",onchange:function(event){var self={target:event.target};self.properties=_props,"elements"in self.target&&(self.elements=self.target.elements),self.currentTarget=this==event.target?self.target:_parentComponent(event.currentTarget),self.component=_component,self.component._state=self.component._state||{},self.state=self.component._state,self.emitEvent=function(eventName,data){var event=new ComponentEvent(eventName,data,self.target,self.currentTarget);"on"+eventName in _props&&_props["on"+eventName](event)},onAddFile.bind(self)()}};_context.entry.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){}),_elementClose("form"),_elementClose("div")}_elementOpenStart("span",""),_elementOpenEnd("span"),yalla.framework.registerRef("alert",IncrementalDOM.currentElement(),function(){var _params={alertType:_state.alert.type.bind(self)(),message:_state.alert.text.bind(self)()};_context.alert.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){})})(),_elementClose("span")}var node=domNode.element,self={target:node};self.properties=_props,"elements"in self.target&&(self.elements=self.target.elements),self.currentTarget=self.target,self.component=_component,self.component._state=self.component._state||{},self.state=self.component._state;var promise=loadFiles.bind(self)();promise&&"object"==typeof promise&&"then"in promise?(_skip(),promise.then(function(_result){$patchChanges(node,function(){asyncFunc_1.call(self,_result)})}).catch(function(err){})):asyncFunc_1.call(self,promise)}({element:IncrementalDOM.currentElement(),pointer:IncrementalDOM.currentPointer()}),_elementClose("div")}var $patchChanges=yalla.framework.renderToScreen,$inject=yalla.framework.createInjector("/dist/component/attachments/home"),$export={},_elementName="dist.component.attachments.home",_context={},_parentComponent=yalla.framework.getParentComponent,_merge=yalla.utils.merge,_elementClose=(IncrementalDOM.elementOpen,IncrementalDOM.elementClose),_elementOpenStart=IncrementalDOM.elementOpenStart,_elementOpenEnd=IncrementalDOM.elementOpenEnd,_attr=(IncrementalDOM.elementVoid,IncrementalDOM.text,IncrementalDOM.attr),_skip=IncrementalDOM.skip;return"function"==typeof $render&&($export.render=$render),$export}());