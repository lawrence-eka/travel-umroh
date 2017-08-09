/**
 * Created by Lawrence Eka on 04-Aug-2017.
 */

function GeoLocation() {
	var map, watchId, marker, circle, showQibla, alert;
	var status = typeof google != 'undefined';
	var self = this;
	var kaabahLoc = {lat:21.4225,lng:39.8262, alt:0, acc:1000,};


	function onWatchSuccess(position) {
		var pos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
		marker.setPosition(pos);
		circle.setCenter(pos);
		circle.setRadius(position.coords.accuracy);
		if(showQibla) {
			(new google.maps.Polyline({
				path: [
					{lat:position.coords.latitude, lng:position.coords.longitude},
					kaabahLoc,
				],
				geodesic:true,
				strokeColor: '#11ff11',
				strokeOpacity: 0.7,
				strokeWeight: 2
			})).setMap(map);
		}
	}

	function onWatchError(error) {
		if(alert) alert(error)
		else console.log(error);
	}

	this.getLocation = function() {
		return new Promise(function (resolve) {
			if(!status) {
				if(alert) alert('Google Map is not available at the moment');
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

	this.showLocation = function(mapCanvas, isShowQibla, onAlert, options) {
		alert = onAlert;
		this.getLocation().then(function(loc){
			if(!loc.err) {
				showQibla = isShowQibla;
				map = new google.maps.Map(mapCanvas, {
					zoom: 17,
					center: loc,
					mapTypeId: google.maps.MapTypeId.ROADMAP
				});

				marker = new google.maps.Marker({
					position: loc,
					map: map,
					animation: google.maps.Animation.DROP,
				});

				circle = new google.maps.Circle({
					center: loc,
					radius: loc.acc,
					map: map,
					fillColor: '#0000ff',
					fillOpacity: 0.3,
					strokeColor: '#0000ff',
					strokeOpacity: 0.0,
				});
				if(showQibla) {
					(new google.maps.Polyline({
						path: [
							loc,
							kaabahLoc,
						],
						geodesic:true,
						strokeColor: '#11ff11',
						strokeOpacity: 0.7,
						strokeWeight: 2
					})).setMap(map);
				}

				options = options || {enableHighAccuracy: true, timeout: 10000};
				watchId = navigator.geolocation.watchPosition(onWatchSuccess, onWatchError, options);
				return loc;
			}
			else {
				alert(loc);
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