if(!internal) {
    var query = {"IATA": this.IATA};
    //console.log(this)https://localhost/dashboard/airports/events/#post-panel;
    dpd.airports.get(query, function (result) {
        if(result.length > 0)
        {
            dpd.airports.put(result[0].id, this, function (result, err) {
                cancel("Existing IATA code (" + this.IATA + ") is updated instead of inserting new entry.", 200);  
            });
        }
        else this.createdOn = (new Date()).getTime();
    });
}
else this.createdOn = (new Date()).getTime();