yalla.framework.addComponent("/dist/app",function(){function initState(){return{}}function onPropertyChange(){}function checkCurrentUser(){return storage.me.read()}function $render(_props,_slotView){_context["login-panel"]=$inject("/user/login-form"),_context["login-panel"],_context["reset-password"]=$inject("/user/reset-password"),_context["reset-password"],_context["app-header"]=$inject("/component/header"),_context["app-header"],_elementOpenStart("link",""),_attr("element","dist.app"),_attr("href","asset/css/registration.css"),_attr("rel","stylesheet"),_elementOpenEnd("link"),_elementClose("link"),_elementOpenStart("div",""),_attr("element","dist.app"),_attr("class","container"),_elementOpenEnd("div");var _component=IncrementalDOM.currentElement(),_validComponent=yalla.framework.validComponentName(_component,_elementName);_component._state=_component._state&&_validComponent?_component._state:initState.bind(_component)(_props),_component._state._name=_elementName;var _self=(_component._state,{component:_component,properties:_props,state:_component._state});_validComponent&&yalla.framework.propertyCheckChanges(_component._properties,_props,onPropertyChange.bind(_self)),_component._properties=_props,_elementOpenStart("div",""),_elementOpenEnd("div"),function(domNode){function asyncFunc_1(data){if(data){_elementOpenStart("div",""),_elementOpenEnd("div");var _params={};_context["app-header"].render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){}),_slotView("default",{}),_elementClose("div")}if(!data){_elementOpenStart("div",""),_elementOpenEnd("div");var _params={};_context["login-panel"].render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){}),_elementClose("div")}}var node=domNode.element,self={target:node};self.properties=_props,"elements"in self.target&&(self.elements=self.target.elements),self.currentTarget=self.target,self.component=_component,self.component._state=self.component._state||{},self.state=self.component._state;var promise=checkCurrentUser.bind(self)();promise&&"object"==typeof promise&&"then"in promise?(_skip(),promise.then(function(_result){$patchChanges(node,function(){asyncFunc_1.call(self,_result)})}).catch(function(err){})):asyncFunc_1.call(self,promise)}({element:IncrementalDOM.currentElement(),pointer:IncrementalDOM.currentPointer()}),_elementClose("div"),_elementClose("div")}var $patchChanges=yalla.framework.renderToScreen,$inject=yalla.framework.createInjector("/dist/app"),$export={},_elementName="dist.app",_context={},_merge=(yalla.framework.getParentComponent,yalla.utils.merge),_elementClose=(IncrementalDOM.elementOpen,IncrementalDOM.elementClose),_elementOpenStart=IncrementalDOM.elementOpenStart,_elementOpenEnd=IncrementalDOM.elementOpenEnd,_attr=(IncrementalDOM.elementVoid,IncrementalDOM.text,IncrementalDOM.attr),_skip=IncrementalDOM.skip;return"function"==typeof $render&&($export.render=$render),$export}());