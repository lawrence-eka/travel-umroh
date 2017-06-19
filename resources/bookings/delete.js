/*jshint loopfunc:true */
var qr = {
    "bookingId":1
};

dpd.passengers.get(qr, function(res, err){
    errorIf(err, 'Generic', err);
    cancelIf(err);
    if(!err) {
        for(var i = 0; i < res.length; i++) {
            dpd.passengers.del(res[i].id, function(err) {
                errorIf(err, 'Generic', err);
                cancelIf(err);
            });
        }
    }
});