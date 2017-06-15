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

dpd.packages.get(this.packageId, function (travelPackage) {
    if(travelPackage)
    {
        var query = {"$sort":{"fromDateTime":1}, "$limit": 1, "id":{"$ne": this.id}, "packageId":this.packageId};
        dpd.itineraries.get(query, function (result) {
            if(result) travelPackage.travelDateFrom = result[0].fromDateTime;
            else travelPackage.travelDateFrom = null;

            query = {"$sort":{"toDateTime":-1}, "$limit": 1, "id":{"$ne": this.id}, "packageId":this.packageId};
            dpd.itineraries.get(query, function (result) {
                if(result) travelPackage.travelDateUntil = result[0].toDateTime;
                else travelPackage.travelDateUntil = null;

                dpd.packages.put(travelPackage.id, travelPackage, function(result, err) {
                    errorIf(err, "genericError", err);
                });
            });
        });
    }
});