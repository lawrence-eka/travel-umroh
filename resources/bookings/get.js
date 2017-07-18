//console.log('query:', query, '; this:', this);
cancelIf(!query.travelAgentContactPersonId && this.userId != me.id, 'not authorized', 403);
//console.log('satu');

dpd.packages.get(this.packageId, function(pkg, err){
//console.log('dua');
    errorIf(err, 'package', err);
    this.package = pkg;
    dpd.travelagents.get(pkg.travelAgentId, function(travelAgent, err) {
//console.log('tiga');
        errorIf(err, 'travel agent', err);
        cancelIf(query.travelAgentContactPersonId && travelAgent.contactPersonId != query.travelAgentContactPersonId, 'not authorized', 403);
        this.travelAgent = travelAgent;
    });
});

