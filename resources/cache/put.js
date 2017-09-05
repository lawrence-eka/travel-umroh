if(!internal)
{
    var q = {
        name: this.name,
        id: {$ne: this.id ? this.id : -1}
    };
    dpd.cache.get(q, function (result) {
        errorIf(result.length > 0, "duplicateData", "cache named '" + this.name + "' already exist.");
    });
}
this.lastUpdatedOn = (new Date()).getTime();