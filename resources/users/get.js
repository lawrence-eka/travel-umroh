cancelIf((!me || (!me.isAdmin && me.id !== this.id)) && !query.checkAvailability && !query.checkIsLastAdmin, "Access Unauthorized", 401);
if(query &&(query.checkAvailability || query.checkIsLastAdmin)) this.id = null;
else if(query.includeTravelAgents==="true")
{
    dpd.travelagents.get({contactPersonId: me.id, includePackages: query.includePackages, includeItineraries: query.includeItineraries}, function (result) {
        this.travelAgents = result;
    });
}
