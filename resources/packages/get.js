
cancelIf(query.travelAgentId && this.travelAgentId !== query.travelAgentId, "Access Unathorized", 401);

if(query.includeItineraries==="true")
{
    dpd.itineraries.get({packageId: this.id}, function (result) {
      this.itineraries = result;
    });
}

if(this.mutawwifId) {
    dpd.mutawwifs.get(this.mutawwifId, function(mtw){
        this.mutawwif = mtw.firstName + ' ' + mtw.middleName + ' ' + mtw.lastName;
    });
}