$export = {
	listeners : [],
	publish : function(data){
		this.listeners.forEach(function (listener){
			listener(data);
		});
	},
	subscribe : function(listener){
		this.listeners.push(listener);
	},
	unsubscribe : function(listener){
		this.listeners.splice(this.listeners.indexOf(listener),1);
	}
}