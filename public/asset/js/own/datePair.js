/**
 * Created by gal9569 on 6/6/2017.
 */
function DatePair(patchChanges, defaultMinDate, defaultMaxDateOffset, defaultValue) {
	
    var self = this;
	self.patchChanges = patchChanges;
    
    self.setDefaults = function(defaultMinDate, defaultMaxDateOffset, defaultStartDate, defaultEndDate)
	{
		if(!self.date || defaultMinDate) {
			defaultMinDate = defaultMinDate ? defaultMinDate : (new Date());
			
			self.date = {};
			self.date.minStartDate = defaultMinDate;
			self.date.minEndDate = defaultMinDate;
			self.date.defaultStartDate = defaultMinDate;
		}
		if(defaultStartDate) {
			self.date.defaultStartDate = defaultStartDate;
		}
		
		if(defaultMaxDateOffset || defaultStartDate) {
			defaultMaxDateOffset = defaultMaxDateOffset ? defaultMaxDateOffset.toString().toLowerCase() : self.date.defaultMaxDateOffset ? self.date.defaultMaxDateOffset : "0";
			self.date.defaultMaxDateOffset = defaultMaxDateOffset;
			if(defaultMaxDateOffset.indexOf('y') >= 0) {
				self.date.defaultEndDate = self.date.defaultStartDate.addYears(defaultMaxDateOffset.replaceAll('y', ''));
			}
			else if(defaultMaxDateOffset.indexOf('m') >= 0) {
				self.date.defaultEndDate = self.date.defaultStartDate.addMonths(defaultMaxDateOffset.replaceAll('m', ''));
			}
			else {
				self.date.defaultEndDate = self.date.defaultStartDate.addDays(defaultMaxDateOffset.replaceAll('d', ''));
			}
		}
		else self.date.defaultEndDate = self.date.defaultStartDate;
		
		if(defaultEndDate) {
			self.date.defaultEndDate = defaultEndDate;
		}
	}
	
	self.setDefaults(defaultMinDate, defaultMaxDateOffset);
	
	self.onStartDateFocusOut = function(refName) {
        self.date.minEndDate = (new Date(this.target.value));
        self.patchChanges(refName);
    };

	self.minStartDate = function(withHHMM) {
		return self.date.minStartDate.toYYYYMMDD(withHHMM);
	};
	self.minEndDate = function(withHHMM) {
		return self.date.minEndDate.toYYYYMMDD(withHHMM);
	};

	self.defaultStartDate = function(withHHMM) {
		return self.date.defaultStartDate.toYYYYMMDD(withHHMM);
	};
	self.defaultEndDate = function(withHHMM) {
		//debugger;
		return self.date.defaultEndDate.toYYYYMMDD(withHHMM);
	};

}
