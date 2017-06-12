/**
 * Created by gal9569 on 6/7/2017.
 */
function Alert(alertType) {
    var self = this;
    self._text = '';
    self._type = alertType ? alertType : 'error';

    self.text = function() {
        return self._text;
    }

    self.type = function() {
        return self._type;
    }

    self.alert = function(text, type) {
        //debugger;
        self._text = text;
        self._type = type ? type : self._type;
    }
}
