var query = {"packageId": this.packageId, "userId": this.userId};
dpd.bookings.get(query, function (result) {
    if(result.length > 0)
    {
        cancel(JSON.stringify({"message": "The user has booked this package", "booking":result[0]}), 200);
        //cancel(result[0].id, 200);  
    }
    else this.createdOn = (new Date()).getTime();
});
