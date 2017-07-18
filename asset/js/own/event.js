/**
* Created by Lawrence Eka on 14-Jun-2017.
*/
function Event() {
	var self = this;
	self.listeners =[];
	
	self.publish = function(data){
		self.listeners.forEach(function (listener){
			listener(data);
		});
	},
	self.subscribe = function(listener){
		self.listeners.push(listener);
	},
	self.unsubscribe = function(listener){
		self.listeners.splice(self.listeners.indexOf(listener),1);
	}
}
