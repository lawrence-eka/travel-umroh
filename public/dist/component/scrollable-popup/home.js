yalla.framework.addComponent("/dist/component/scrollable-popup/home",function(){function initState(){return{}}function onPropertyChange(){}function initState(props){props.onCloseEvent&&props.onCloseEvent.subscribe(onCloseEvent.bind(this));var state={popup:null,popupPanel:null,show:null!=props.show};return display.bind(this)(state.show,!1),state}function onCloseEvent(){display.bind(this)(!1)}function onPropertyChange(props){this.state.show=props.show.newValue,display.bind(this.component)(this.state.show,!0)}function display(isShown){if(isShown){this.style.visibility="visible",document.getElementsByName("universe")[0].appendChild(this);var panels=document.getElementsByName("universe")[0].children;panels.length>1&&(panels[panels.length-2].classList.add("blur"),panels[panels.length-2].classList.remove("not-blur"))}else(panels=document.getElementsByName("universe")[0].children).length>1&&(panels[panels.length-2].classList.add("not-blur"),panels[panels.length-2].classList.remove("blur")),this.className+=" custom-fadeout-anim",setTimeout(doClose.bind(this),250)}function doClose(){document.getElementsByName("universe")[0].removeChild(this)}function $render(_props,_slotView){_elementOpenStart("div",""),_attr("element","dist.component.scrollable-popup.home"),_attr("class","container centered-form popupContainerScrollable"),_elementOpenEnd("div");var _component=IncrementalDOM.currentElement(),_validComponent=yalla.framework.validComponentName(_component,_elementName);_component._state=_component._state&&_validComponent?_component._state:initState.bind(_component)(_props),_component._state._name=_elementName,_component._state;var _self={component:_component,properties:_props,state:_component._state};_validComponent&&yalla.framework.propertyCheckChanges(_component._properties,_props,onPropertyChange.bind(_self)),_component._properties=_props,_slotView("default",{}),_elementClose("div")}yalla.framework.renderToScreen,yalla.framework.createInjector("/dist/component/scrollable-popup/home");var $export={},_elementName="dist.component.scrollable-popup.home",_elementClose=(yalla.framework.getParentComponent,yalla.utils.merge,IncrementalDOM.elementOpen,IncrementalDOM.elementClose),_elementOpenStart=IncrementalDOM.elementOpenStart,_elementOpenEnd=IncrementalDOM.elementOpenEnd,_attr=(IncrementalDOM.elementVoid,IncrementalDOM.text,IncrementalDOM.attr);return IncrementalDOM.skip,"function"==typeof $render&&($export.render=$render),$export}());