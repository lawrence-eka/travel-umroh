var fromDate = null;
var toDate = null;
var fromDateType = "";
var toDateType ="";

errorIf(!this.entry || !this.airline && !this.hotel, "invalidEntry", "Itinerary must contain either information about 'hotel' or 'airline'");
if(this.entry.airline)
{
    errorIf(!this.entry.departure, "invalidEntry", "Flight is missing Departure Date Info ('departure')");
    errorIf(!this.entry.arrival, "invalidEntry", "Flight is missing Arrival Date Info ('arrival')");
    errorIf(!this.entry.departFrom, "invalidEntry", "Flight is missing Departure Airport Info ('departFrom')");
    errorIf(!this.entry.arriveAt, "invalidEntry", "Flight is missing Arrival Airport Info ('arriveAt')");

    fromDate = new Date(this.entry.departure);
    toDate = new Date(this.entry.arrival);
    fromDateType = "Departure";
    toDateType = "Arrival";
}
else
{
    errorIf(!this.entry.checkIn, "invalidEntry", "Hotel is missing Check In Date Info ('checkIn')");
    errorIf(!this.entry.checkOut, "invalidEntry", "Hotel is missing Check Out Date Info ('checkOut')");
    errorIf(!this.entry.city, "invalidEntry", "Hotel is missing City Info ('city')");

    fromDate = new Date(this.entry.checkIn);
    toDate = new Date(this.entry.checkOut);
    fromDateType = "Check In";
    toDateType = "Check Out";
}

errorIf(fromDate < (new Date()).getTime(), 'invalidDate', "'" + fromDateType + " Date' (" + fromDate + ") must be a future date");
errorIf(fromDate > toDate, 'invalidDate', "'" + fromDateType + " Date' (" + fromDate + ") must be less or equal to '" + toDateType + " Date' (" + toDate + ")");
errorIf(!me, "credential", "Invalid Credential");
errorIf(!me.isTravelAgent, "credential", "You are not a travel agent contact person");
