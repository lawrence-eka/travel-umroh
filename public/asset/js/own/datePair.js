/**
 * Created by gal9569 on 6/6/2017.
 */
function DatePair(patchChanges, defaultMinDate, defaultMaxDateOffset) {
    var self = this;
    defaultMinDate = defaultMinDate ? defaultMinDate : (new Date());

    self.date = {};
	self.date.minStartDate =  defaultMinDate;
	self.date.minEndDate =  defaultMinDate;
	self.date.defaultStartDate = defaultMinDate;
    if(defaultMaxDateOffset) {
    	defaultMaxDateOffset = defaultMaxDateOffset.toString().toLowerCase();
    	//defaultMaxDateOffset = defaultMaxDateOffset.toLowerCase();
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

    self.patchChanges = patchChanges;

    self.onStartDateFocusOut = function(refName) {
        self.date.minEndDate = (new Date(this.target.value));
        self.patchChanges(refName);
    };

	self.minEndDate = function() {
		return self.date.minEndDate.toYYYYMMDD();
	};
	self.minStartDate = function() {
		return self.date.minStartDate.toYYYYMMDD();
	};
	self.defaultStartDate = function() {
		return self.date.defaultStartDate.toYYYYMMDD();
	};
	self.defaultEndDate = function() {
		return self.date.defaultEndDate.toYYYYMMDD();
	};
}
