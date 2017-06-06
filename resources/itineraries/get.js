cancelIf(query.packageId && this.packageId != query.packageId, "Access Unathorized", 401);


var t = {"entry":{"hotel":{}}};

var q ={
    "entry.transport": {"$exists":t.entry.hasOwnProperty("transport")}
}

dpd.itineraries.get(q, function(result, err){
    console.log(result);
})