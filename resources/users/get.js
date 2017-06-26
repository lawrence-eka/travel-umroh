console.log('on get');
console.log(me);
console.log(query);
if(!internal && (!me || (!me.isAdmin && me.id !== this.id)) && !query.checkAvailability && !query.checkIsLastAdmin) console.log('gak lolos');
cancelIf(!internal && (!me || (!me.isAdmin && me.id !== this.id)) && !query.checkAvailability && !query.checkIsLastAdmin, "Access get Unauthorized", 401);
console.log('lolos');
if(query &&(query.checkAvailability || query.checkIsLastAdmin)) this.id = null;
else if(query.includeTravelAgents==="true")
{
    dpd.travelagents.get({contactPersonId: me.id, includePackages: query.includePackages, includeItineraries: query.includeItineraries}, function (result) {
        this.travelAgents = result;
    });
}
