yalla.framework.addComponent("/dist/comp/drawer",function(){function initState(){return{}}function onPropertyChange(){}function initRootStyle(displayDrawer){return displayDrawer?"":"transform:translateX(-100%)"}function $render(_props){_elementOpenStart("style",""),_elementOpenEnd("style"),_text("\n[element='dist.comp.drawer'] {position: fixed;top:50px;left: 0;right: 0;bottom: 0;background-color: #5e5e5e;transition: 0.5s all ease;padding:1rem;color: white;}\n[element='dist.comp.drawer'] .close{-webkit-transform: translateX(-100%);-moz-transform: translateX(-100%);-ms-transform: translateX(-100%);-o-transform: translateX(-100%);transform: translateX(-100%);}"),_elementClose("style"),_elementOpenStart("div",""),_attr("element","dist.comp.drawer"),_attr("style",initRootStyle.bind(self)(_props.displayDrawer)),_elementOpenEnd("div");var _component=IncrementalDOM.currentElement(),_validComponent=yalla.framework.validComponentName(_component,_elementName);_component._state=_component._state&&_validComponent?_component._state:initState.bind(_component)(_props),_component._state._name=_elementName;var _self=(_component._state,{component:_component,properties:_props,state:_component._state});_validComponent&&yalla.framework.propertyCheckChanges(_component._properties,_props,onPropertyChange.bind(_self)),_component._properties=_props,_text("THIS IS THE MENU"),_elementClose("div")}var $export=(yalla.framework.renderToScreen,yalla.framework.createInjector("/dist/comp/drawer"),{}),_elementName="dist.comp.drawer",_elementClose=(yalla.framework.getParentComponent,yalla.utils.merge,IncrementalDOM.elementOpen,IncrementalDOM.elementClose),_elementOpenStart=IncrementalDOM.elementOpenStart,_elementOpenEnd=IncrementalDOM.elementOpenEnd,_text=(IncrementalDOM.elementVoid,IncrementalDOM.text),_attr=IncrementalDOM.attr;return IncrementalDOM.skip,"function"==typeof $render&&($export.render=$render),$export}());