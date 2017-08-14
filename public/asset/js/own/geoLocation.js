function GeoLocation(){function onWatchSuccess(position){var pos=new google.maps.LatLng(position.coords.latitude,position.coords.longitude);marker.setPosition(pos),circle.setCenter(pos),circle.setRadius(position.coords.accuracy),showQibla&&(qiblaLine.setMap(null),(qiblaLine=new google.maps.Polyline({path:[{lat:position.coords.latitude,lng:position.coords.longitude},kaabahLoc],geodesic:!0,strokeColor:"#11ff11",strokeOpacity:.7,strokeWeight:2})).setMap(map))}function onWatchError(error){alert&&alert(error)}var map,watchId,marker,circle,showQibla,alert,qiblaLine,status="undefined"!=typeof google,kaabahLoc={lat:21.4225,lng:39.8262,alt:0,acc:1e3};this.getLocation=function(){return new Promise(function(resolve){if(!status)return alert&&alert("Google Map is not available at the moment"),void resolve(kaabahLoc);navigator.geolocation.getCurrentPosition(function(position){resolve({lat:position.coords.latitude,lng:position.coords.longitude,alt:position.coords.altitude,acc:position.coords.accuracy})},function(error){var err={err:error.code};switch(error.code){case error.PERMISSION_DENIED:err.msg="User denied the request for Geolocation.";break;case error.POSITION_UNAVAILABLE:err.msg="Location information is unavailable.";break;case error.TIMEOUT:err.msg="The request to get user location timed out.";break;case error.UNKNOWN_ERROR:err.msg="An unknown error occurred."}resolve(err)})})},this.showLocation=function(mapCanvas,isShowQibla,onAlert,options){alert=onAlert,this.getLocation().then(function(loc){if(!loc.err)return showQibla=isShowQibla,map=new google.maps.Map(mapCanvas,{zoom:17,center:loc,mapTypeId:google.maps.MapTypeId.ROADMAP}),marker=new google.maps.Marker({position:loc,map:map,animation:google.maps.Animation.DROP}),circle=new google.maps.Circle({center:loc,radius:loc.acc,map:map,fillColor:"#0000ff",fillOpacity:.3,strokeColor:"#0000ff",strokeOpacity:0}),showQibla&&(qiblaLine=new google.maps.Polyline({path:[loc,kaabahLoc],geodesic:!0,strokeColor:"#11ff11",strokeOpacity:.7,strokeWeight:2})).setMap(map),options=options||{enableHighAccuracy:!0,timeout:1e4},watchId=navigator.geolocation.watchPosition(onWatchSuccess,onWatchError,options),loc;alert(loc)})},this.clearWatch=function(){null!=watchId&&(navigator.geolocation.clearWatch(watchId),watchId=null)},this.getLocationName=function(location){return new Promise(function(resolve){"undefined"!=typeof google?(new google.maps.Geocoder).geocode({location:location},function(results,status){resolve("OK"===status?results?results[1].address_components[0].short_name:"Unknown Location":status)}):resolve("Al Haram (Default)")})}}var geo=new GeoLocation;