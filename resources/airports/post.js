var query = {"IATA": this.IATA};
dpd.airports.get(query, function (result) {
    if(result.length > 0)
    {
        dpd.airports.put(result[0].id, this, function (result, err) {
            cancel("Existing IATA code (" + this.IATA + ") is updated instead of inserting new entry.", 200);  
        });
    }
    else this.createdOn = (new Date()).getTime();
});
