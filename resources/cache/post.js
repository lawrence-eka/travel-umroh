var query = {name: this.name};
//console.log(this)https://localhost/dashboard/airports/events/#post-panel;
dpd.cache.get(query, function (result) {
    if(result.length > 0)
    {
        dpd.cache.put(result[0].id, this, function (result, err) {
            cancel("Existing cache named '" + this.name + "' is updated instead of inserting new entry.", 200);  
        });
    }
    else this.createdOn = (new Date()).getTime();
});
