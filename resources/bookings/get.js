cancelIf(!query.travelAgentContactPersonId && this.userId != me.id, 'not authorized', 403);

dpd.packages.get(this.packageId, function(pkg, err){
    errorIf(err, 'package', err);
    this.package = pkg;
    dpd.travelagents.get(pkg.travelAgentId, function(travelAgent, err) {
        errorIf(err, 'travel agent', err);
        cancelIf(query.travelAgentContactPersonId && travelAgent.contactPersonId != query.travelAgentContactPersonId, 'not authorized', 403);
        this.travelAgent = travelAgent;
    });
});

