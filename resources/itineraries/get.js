cancelIf(query.packageId && this.packageId != query.packageId, "Access Unathorized", 401);

if(this.entry) {
    if(this.entry.transport && this.entry.transportType == 'Plane') {
        dpd.airlines.get({IATA:this.entry.transport, $fields: {airline:1}}, function(res){
            if(res && res.length) this.entry.transportName = this.entry.transport + ' - ' + res[0].airline;
        })
            //console.log(this.entry.departFrom)
        dpd.airports.get({IATA:this.entry.departFrom, $fields: {airport:1}}, function(res){
            if(res && res.length) this.entry.departFromName = this.entry.departFrom + ' - ' + res[0].airport;
        })
            //console.log(this.entry.arriveAt)
        dpd.airports.get({IATA:this.entry.arriveAt, $fields: {airport:1}}, function(res){
            if(res && res.length) this.entry.arriveAtName = this.entry.arriveAt + ' - ' + res[0].airport;
        })
    }
    else if(this.entry.hotel) {
        dpd.hotels.get(this.entry.hotel, function(res){
            if(res && res.length) this.entry.hotelName = res.hotelName;
        });
    }
}
