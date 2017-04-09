console.log(query);
if(query && !query.$sort) query.$sort = {fromDateTime:1};
console.log(query);
cancelIf(query.packageId && this.packageId != query.packageId, "Access Unathorized", 401);
