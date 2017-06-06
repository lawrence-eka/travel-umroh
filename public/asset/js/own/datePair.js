/**
 * Created by gal9569 on 6/6/2017.
 */
function DatePair(defaultMinDate) {
    var self = this;
    self.date = {
        minDate: defaultMinDate ? defaultMinDate : (new Date()).toYYYYMMDD(),
    };

    self.onFocusOut = function(refName) {
        self.date.minDate = (new Date(this.target.form.elements.startDate.value)).toYYYYMMDD();
        $patchChanges(refName);
    };

    self.minDate = function() {
        return self.date.minDate;
    };
}
