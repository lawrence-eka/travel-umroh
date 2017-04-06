var tgl = new Date();
console.log(tgl);

tgl.setTime(tgl.getTime() + 86400000);
console.log(tgl);

cancelIf(!me || me.id !== this.id, "Access Unauthorized", 401);


if(query.includeTravelAgents==="true")
{
    dpd.travelagents.get({includePackages: query.includePackages, includeItineraries: query.includeItineraries}, function (result) {
      this.travelAgents = result;
    });
}