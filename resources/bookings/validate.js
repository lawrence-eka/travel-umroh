errorIf(!me, "credential", "User is not logged in.");

dpd.packages.get(this.packageId, function(pkg, err){
    errorIf(err, 'package', err);
    dpd.travelagents.get(pkg.travelAgentId, function(travelAgent, err) {
        errorIf(err, 'travel agent', err);
        errorIf(this.userId != me.id && travelAgent.contactPersonId != me.id, "credential", "Unauthorized access");
    });
});

/* disabled for testing purposes
var q = {};
q.id = this.packageId;
q.$and = 
[
    {"isPublished": true},
    {"validFrom" : {"$lte": (new Date()).getTime()}},
    {"validUntil" : {"$gte": (new Date()).getTime()}},
    {"travelDateFrom" : {"$gte": (new Date()).getTime()}}
];
dpd.packages.get(q, function (result) {
    errorIf(!result || result.length === 0, "invalidPackage", "Package does not exist or is not available for purchase");
});
*/

q = {};
q.id = {"$ne" : this.id ? this.id : -1};
q.packageId = this.packageId;
q.userId = this.userId;

/* disabled for testing purposes only
dpd.bookings.get(q, function (result) {
    errorIf(result && result.length > 0, "doublePurchase", "User has purchased this package");
});

*/