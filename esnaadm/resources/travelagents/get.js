cancelIf(!me, "Access Unathorized", 401);
cancelIf(query.contactPersonId && me.id !== this.contactPersonId, "Access Unathorized", 401);

if(query.includePackages==="true")
{
    dpd.packages.get({travelAgentId: this.id, includeItineraries: query.includeItineraries}, function (result) {
      this.packages = result;
    });
}