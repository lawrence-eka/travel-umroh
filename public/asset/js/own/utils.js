/**
 * Created by Lawrence Eka on 09-Jun-2017.
 */
function Utils() {
	var self = this;
	
	self.propertiesUpdater = function(target, source, which) {
		for(var key in target) {
			if(source.hasOwnProperty(key)) {
				console.log(target[key]);
				console.log(source[key][which]);
				target[key] = source[key][which];
				console.log(target[key]);
			}
		}
		return target;
	}
	
	self.itineraries = {};
	self.itineraries.recommendedNewDates = function(packageId) {
		//debugger;
		return new Promise(function(resolve) {
			//debugger;
			var q = {
				"packageId": packageId,
				"$sort":{"fromDateTime":-1},
				"$limit":1,
			}
			dpd.itineraries.get(q, function (res, err) {
				//debugger;
				resolve(res.length ? new Date(res[0].toDateTime): (new Date()));
			});
		});
	}
}