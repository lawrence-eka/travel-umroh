var q = {};
q.$and = 
[
    {"id": this.packageId},
    {
        "$or":
        [
            {"travelDateFrom": {"$gte":(new Date()).getTime()}},
            {"validUntil":{"$gte":(new Date()).getTime()}}
        ]
    }
];

dpd.packages.get(q, function(result){
    this.detail = result;
});
