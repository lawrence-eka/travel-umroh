function getGeoLoc(){return new Promise(function(resolve){navigator.geolocation.getCurrentPosition(function(position){resolve({lat:position.coords.latitude,lng:position.coords.longitude,alt:position.coords.altitude,acc:position.coords.accuracy})},function(error){var err={err:error.code};switch(error.code){case error.PERMISSION_DENIED:err.msg="User denied the request for Geolocation.";break;case error.POSITION_UNAVAILABLE:err.msg="Location information is unavailable.";break;case error.TIMEOUT:err.msg="The request to get user location timed out.";break;case error.UNKNOWN_ERROR:err.msg="An unknown error occurred."}resolve(err)})})}