errorIf(!me, "Credential", "Invalid Credential");
errorIf(!me.isTravelAgent, "Contact Person", "You are not a travel agent contact person");
errorIf(!this.packageId, "Package", "Invalid Package");

dpd.packages.get(this.packageId, function (pkg) {
    errorIf(!pkg, "Package", "Invalid Package");

    dpd.travelagents.get(pkg.travelAgentId, function (trv) {
        errorIf(!trv, "Travel Agent", "Invalid Travel Agent");
        errorIf(trv.contactPersonId != me.id, "Contact Person", "You are not the contact person of this travel agent");
    });
    
});
/*
var fromDateType = "";
var toDateType ="";
var fromDateTime = null; 
var toDateTime = null;

errorIf(!this.entry || (!this.entry.transport && !this.entry.hotel), "Entry", "Itinerary must contain information about either 'hotel' or 'transport'");
if(this.entry.transport)
{
    errorIf(!this.entry.departure, "departure", "Missing Departure Date Info");
    errorIf(!this.entry.arrival, "arrival", "Missing Arrival Date Info");
    errorIf(!this.entry.departFrom, "departFrom", "Missing Departure Info");
    errorIf(!this.entry.arriveAt, "arriveAt", "Missing Arrival Info");

    fromDateTime = new Date(this.entry.departure);
    toDateTime = new Date(this.entry.arrival);
    this.fromDateTime = this.entry.departure;
    this.toDateTime = this.entry.arrival;
    fromDateType = "Departure";
    toDateType = "Arrival";
}
else if(this.entry.hotel)
{
    errorIf(!this.entry.checkIn, "checkIn", "Missing Check In Date Info");
    errorIf(!this.entry.checkOut, "checkOut", "Missing Check Out Date Info");
    errorIf(!this.entry.city, "city", "Missing City Info");

    fromDateTime = new Date(this.entry.checkIn);
    toDateTime = new Date(this.entry.checkOut);
    this.fromDateTime = this.entry.checkIn;
    this.toDateTime = this.entry.checkOut;
    fromDateType = "Check In";
    toDateType = "Check Out";
}

errorIf(fromDateTime < (new Date()).getTime(), 'Date', "'" + fromDateType + " Date' (" + fromDateTime + ") must be a future date");
errorIf(fromDateTime > toDateTime, 'Date Range', "'" + fromDateType + " Date' (" + fromDateTime + ") must be less or equal to '" + toDateType + " Date' (" + toDateTime + ")");

var query = {  
    "id": {"$ne": this.id},
    "$and":
    [
        {"entry.transport": {"$exists":this.entry.hasOwnProperty("transport")}},
        {"packageId":this.packageId}, 
        { 
            "$or":
            [
                {
                    "$and":
                    [
                        {"fromDateTime": {"$lte": this.toDateTime}},
                        {"toDateTime": {"$gte": this.fromDateTime}}
                    ]
                },
                {
                    "$and":
                    [
                        {"fromDateTime":  this.fromDateTime},
                        {"toDateTime": this.toDateTime}
                    ]
                }
            ]
        }
    ]
};
dpd.itineraries.get(query, function (result) {
    errorIf(result && result.length > 0, "Date", "The date range (" + fromDateTime + " - " + toDateTime + ") overlaps with existing itinerary");
});


dpd.packages.get(this.packageId, function (travelPackage) {
    if(travelPackage)
    {
        var query = {"$sort":{"fromDateTime":1}, "$limit": 1, "id":{"$ne": this.id}, "packageId":this.packageId};
        dpd.itineraries.get(query, function (result, err) {
            if(result && result.length > 0) travelPackage.travelDateFrom = Math.min(!result[0].fromDateTime ? this.fromDateTime : result[0].fromDateTime);
            else travelPackage.travelDateFrom = null;

            query = {"$sort":{"toDateTime":-1}, "$limit": 1, "id":{"$ne": this.id}, "packageId":this.packageId};
            dpd.itineraries.get(query, function (result) {
                if(result && result.length > 0) travelPackage.travelDateUntil = Math.max(result[0].toDateTime, this.toDateTime);
                else travelPackage.travelDateUntil = null;
               // console.log(travelPackage);
                //console.log((new Date()).getTime());
                dpd.packages.put(travelPackage.id, travelPackage, function(result, err) {
                    //console.log(result);
                    //console.log(err);
                    errorIf(err, "genericError", err);
                });
            });
        });
    }
});
*/