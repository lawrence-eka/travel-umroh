/**
 * Created by gal9569 on 6/6/2017.
 */
function DatePair(patchChanges, defaultMinDate, defaultMaxDateOffset, defaultValue) {
	
    var self = this;
	self.patchChanges = patchChanges;
    
    self.setDefaults = function(defaultMinDate, defaultEndDateOffset, defaultStartDate, defaultEndDate)
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
		
		if(defaultEndDateOffset || defaultStartDate) {
			defaultEndDateOffset = defaultEndDateOffset ? defaultEndDateOffset.toString().toLowerCase() : self.date.defaultMaxDateOffset ? self.date.defaultMaxDateOffset : "0";
			self.date.defaultMaxDateOffset = defaultEndDateOffset;
			if(defaultEndDateOffset.indexOf('y') >= 0) {
				self.date.defaultEndDate = self.date.defaultStartDate.addYears(defaultEndDateOffset.replaceAll('y', ''));
			}
			else if(defaultEndDateOffset.indexOf('m') >= 0) {
				self.date.defaultEndDate = self.date.defaultStartDate.addMonths(defaultEndDateOffset.replaceAll('m', ''));
			}
			else {
				self.date.defaultEndDate = self.date.defaultStartDate.addDays(defaultEndDateOffset.replaceAll('d', ''));
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

	self.defaultStartDate = function(withHHMM, currentStartDate) {
		if(!isNaN(Date.parse(currentStartDate))) self.date.defaultStartDate = currentStartDate;
		return self.date.defaultStartDate.toYYYYMMDD(withHHMM);
	};
	self.defaultEndDate = function(withHHMM, currentEndDate) {
		if(!isNaN(Date.parse(currentEndDate))) self.date.defaultEndDate = currentEndDate;
		return self.date.defaultEndDate.toYYYYMMDD(withHHMM);
	};
}

function PassportDatePair(patchChanges) {
	var self = this;
	self.patchChanges = patchChanges;
	self.date={};
	
	self.date.minStartDate=(new Date()).addYears(-5);
	self.date.maxStartDate=(new Date());
	self.date.minEndDate=(new Date());
	self.date.maxEndDate=(new Date().addYears(5));
	self.date.defaultStartDate=(new Date());
	self.date.defaultEndDate=(new Date()).addYears(5);
	
	self.onStartDateFocusOut = function(refName) {
		self.date.minEndDate = (new Date(this.target.value));
		self.date.maxEndDate = self.date.minEndDate.addYears(5);
		self.date.defaultEndDate = self.date.minEndDate.addYears(5);

		self.patchChanges(refName);
	};
	
	self.minStartDate = function() {
		return self.date.minStartDate.toYYYYMMDD();
	};
	self.maxStartDate = function() {
		return self.date.maxStartDate.toYYYYMMDD();
	};
	self.defaultStartDate = function(currentStartDate) {
		if(!isNaN(Date.parse(currentStartDate))) self.date.defaultStartDate = currentStartDate;
		return self.date.defaultStartDate.toYYYYMMDD();
	};

	self.minEndDate = function() {
		return self.date.minEndDate.toYYYYMMDD();
	};
	self.maxEndDate = function() {
		return self.date.maxEndDate.toYYYYMMDD();
	};
	self.defaultEndDate = function(currentEndDate) {
		if(!isNaN(Date.parse(currentEndDate))) self.date.defaultStartDate = currentEndDate;
		return self.date.defaultEndDate.toYYYYMMDD();
	};
}