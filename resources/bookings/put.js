
if(!internal)
{
/*
    var q = {
        "userId": this.userId,
        "packageId": this.packageId,
        "id": {"$ne": this.id ? this.id : -1}
    };
    dpd.bookings.get(q, function (result) {
        errorIf(result.length > 0, "duplicateData", "The user has booked this package.");
    });
    */
}
this.lastUpdatedOn = (new Date()).getTime();