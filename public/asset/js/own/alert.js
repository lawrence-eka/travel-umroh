/**
 * Created by gal9569 on 6/7/2017.
 */
function Alert(alertType, patchFunction, refName) {
    var self = this;
    self._text = [];
    self._type = alertType ? alertType : 'error';
	self.patchChanges=patchFunction;
	self.refName = refName;
	
	self.onError = new Event();
		
    self.text = function() {
        return self._text;
    }

    self.type = function() {
        return self._type;
    }

    self.alert = function(text, type) {
        self._text = self.toArrayofMessages(text);
        self._type = type ? type : self._type;
        //debugger;
        if(self.patchChanges) {
	        var refs = [].concat(self.refName);
	        for(var i in refs) self.patchChanges(refs[i]);
        }
    }

    self.toArrayofMessages = function(message) {
		var result = [];
		if(!message) {
			result = [];
		}
		else if (typeof message === "string") {
			result.push({"message": message});
		}
		else if (message.hasOwnProperty("message")) {
			result.push({"name":message.name, "message":message.message});
		}
		else if (message.hasOwnProperty("error")) {
			result.push({"message":message.error});
		}
		else if (message.hasOwnProperty("errors")) {
			var errorList = [];
			if (!message.errors.length) errorList.push(message.errors)
			else errorList = message.errors;

			for (var i in errorList) {
				for (var name in errorList[i]) {
					if (errorList[i].hasOwnProperty(name)) {
						result.push({"name": name, "message": errorList[i][name]});
					}
				}
			}
		}
		var finalResult = [];
        for(var idx in result){
            if(result[idx].message !="") {
	            result[idx].message = result[idx].message.toSentenceCase();
                finalResult.push(result[idx]);
            }
        }
//debugger;
        self.onError.publish(finalResult);
	    
		return finalResult;
	}
}


