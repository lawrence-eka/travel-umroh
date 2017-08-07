/**
 * Created by Lawrence Eka on 04-Aug-2017.
 */

function GeoLocation() {
	this.watchId;
	this.onWatchSuccess;
	this.onWatchError;

	this.getLocation = function() {
		return new Promise(function (resolve) {
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
	this.watchLocation = function(os, oe, option) {
		this.onWatchSuccess = os;
		this.onWatchError = oe;
		options = option || {enableHighAccuracy: true, timeout: 10000};
		this.watchId = navigator.geolocation.watchPosition(this.onSuccess.bind(this), this.onError.bind(this), options);
		return this.watchId;
	}

	this.onSuccess = function(position) {
		var l = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
		this.onWatchSuccess(l, position.coords.accuracy);
	}

	this.onError= function(error) {
		this.onWatchError(error);
	}

	this.clearWatch = function() {
		if (this.watchId != null) {
			navigator.geolocation.clearWatch(this.watchId);
			this.watchId = null;
		}
	}
	
	this.getLocationName =function(location) {
		//debugger;
		return new Promise(function(resolve){
			//debugger;
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