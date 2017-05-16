if(!internal)
{
    var q = {
        "IATA": this.IATA,
        "id": {"$ne": this.id ? this.id : -1}
    };
    dpd.airports.get(q, function (result) {
        errorIf(result.length > 0, "duplicateData", "IATA code already exist.");
    });
}
this.lastUpdatedOn = (new Date()).getTime();