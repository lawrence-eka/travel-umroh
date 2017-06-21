cancelIf(!me, "needRelogin");

if(query.showNext)
{
    query.isPublished = "true";
    query.validFrom = {"$gte": new Date().getTime()};
    query.travelDateFrom = {"$gte": new Date().getTime()};
    query.$limit= query.showNext;
    query.$sort={"travelDateFrom":1};
}