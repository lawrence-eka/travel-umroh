/**
 * Created by Lawrence Eka on 04-Aug-2017.
 */

function GeoLocation() {
	this.map;
	this.watchId;
	this.marker;
	this.circle;
	this.showQibla;
	this.qiblaLine;
	this.onAlert;
	//var map, watchId, marker, circle, showQibla, alert, qiblaLine;
	var status = typeof google != 'undefined';
	var self = this;
	var kaabahLoc = {lat:21.4225,lng:39.8262, alt:null, acc:1000.0,};

	this.getLocation = function() {
		return new Promise(function (resolve) {
			if(!status) {
				if(this.onAlert) this.onAlert('Google Map is not available at the moment');
				resolve(kaabahLoc);
				return;
			} // default to Kaabah coordinate
			navigator.geolocation.getCurrentPosition(function (position) {
				resolve({
					lat: position.coords.latitude,
					lng: position.coords.longitude,
					alt: position.coords.altitude,
					acc: position.coords.accuracy,
				})
			}, function (error) {
				var err = {err: error.code};
				switch (error.code) {
					case error.PERMISSION_DENIED:
						err.msg = "User denied the request for Geolocation."
						break;
					case error.POSITION_UNAVAILABLE:
						err.msg = "Location information is unavailable."
						break;
					case error.TIMEOUT:
						err.msg = "The request to get user location timed out."
						break;
					case error.UNKNOWN_ERROR:
						err.msg = "An unknown error occurred."
						break;
				}
				resolve(err);
			});
		})
	}
	
	function onWatchSuccess(position) {
		console.log('set to', position.coords)
		var pos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
		
		this.marker.setPosition(pos);
		this.circle.setCenter(pos);
		this.circle.setRadius(position.coords.accuracy);
		if(this.showQibla) {
			this.qiblaLine.setMap(null);
			this.qiblaLine = (new google.maps.Polyline({
				path: [
					{lat:position.coords.latitude, lng:position.coords.longitude},
					kaabahLoc,
				],
				geodesic:true,
				strokeColor: '#11ff11',
				strokeOpacity: 0.7,
				strokeWeight: 2
			}));
			this.qiblaLine.setMap(this.map);
		}
	}
	
	function onWatchError(error) {
		if(this.onAlert) this.onAlert(error)
		else console.log(error);
	}
	
	this.showLocation = function(mapCanvas, isShowQibla, onAlert, options) {
		
		var self = this;
		
		self.onAlert = onAlert;
		self.showQibla = isShowQibla;

		if(!status) {
			if(this.onAlert) this.onAlert('Google Map is not available at the moment');
			return;
		} // default to Kaabah coordinate

		self.map = new google.maps.Map(mapCanvas, {
			zoom: 17,
			center: kaabahLoc,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		});
		this.getLocation().then(function(loc){
			//debugger;
			console.log('set to', loc)
			if(!loc.err) {
				var pos = new google.maps.LatLng(loc.lat, loc.lng);
				self.marker = new google.maps.Marker({
					position: loc,
					map: self.map,
					animation: google.maps.Animation.DROP,
				});

				self.circle = new google.maps.Circle({
					center: loc,
					radius: loc.acc,
					map: self.map,
					fillColor: '#0000ff',
					fillOpacity: 0.3,
					strokeColor: '#0000ff',
					strokeOpacity: 0.0,
				});
				self.map.panTo(pos);
				self.marker.setPosition(pos);
				self.circle.setCenter(pos);
				self.circle.setRadius(loc.acc);
				
				if(self.showQibla) {
					self.qiblaLine = (new google.maps.Polyline({
					    path: [
					        loc,
					        kaabahLoc,
					    ],
					    geodesic:true,
					    strokeColor: '#11ff11',
					    strokeOpacity: 0.7,
					    strokeWeight: 2
					}));
					self.qiblaLine.setMap(self.map);
				}
/**/
				options = options || {enableHighAccuracy: true, timeout: 10000};
				watchId = navigator.geolocation.watchPosition(onWatchSuccess.bind(self), onWatchError.bind(self), options);
				return loc;
			}
			else {
				self.onAlert(loc);
			}
		});
	}

	this.clearWatch = function() {
		if (watchId != null) {
			navigator.geolocation.clearWatch(watchId);
			watchId = null;
		}
	}

	this.getLocationName =function(location) {
		//debugger;
		return new Promise(function(resolve){
			//debugger;
			if(typeof google == 'undefined') {
				resolve('Al Haram (Default)');
				return;
			}
			var geocoder = new google.maps.Geocoder;
			geocoder.geocode({'location': location}, function(results, status) {
				//debugger;
				if (status === 'OK') {
					if (results) {
						resolve(results[1].address_components[0].short_name);
					} else {
						resolve('Unknown Location');
					}
				} else {
					resolve(status);
				}
			});
		});
	}
}

var geo = new GeoLocation();