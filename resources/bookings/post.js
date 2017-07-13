var query = {"packageId": this.packageId, "userId": this.userId};
dpd.bookings.get(query, function (result) {
    if(result.length > 0)
    {
        cancel(JSON.stringify({"message": "The user has booked this package", "booking":result[0]}), 200);
        //cancel(result[0].id, 200);  
    }
    else 
    {
        this.createdOn = (new Date()).getTime();
        var bookingNo = '';
        for(var i = 0; i < this.id.length; i++) {
        	var c = ("abcdef".indexOf(this.id[i])) + 1; 
        	bookingNo += (c === 0 ? this.id[i] : c).toString();
        }
        this.bookingNo = bookingNo;
    }
});
