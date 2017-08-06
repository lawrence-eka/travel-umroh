/**
 * Created by Lawrence Eka on 04-Aug-2017.
 */

function GeoLocation() {
	var watchId;
	var onWatchSuccess;
	var onWatchError;

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
	this.watchLocation = function(option) {
		options = option || {enableHighAccuracy: true, timeout: 10000};
		this.watchId = navigator.geolocation.watchPosition(onSuccess, onError, options);
		return this.watchId;
	}

	function onSuccess(position) {
		var l = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
		onWatchSuccess(l, position.coords.accuracy);
	}

	function onError(error) {
		onWatchError(error);
	}

	this.clearWatch = function() {
		if (this.watchId != null) {
			navigator.geolocation.clearWatch(this.watchId);
			this.watchId = null;
		}
	}
}

var geo = new GeoLocation();