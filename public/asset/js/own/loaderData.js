/**
 * Created by gal9569 on 8/7/2017.
 */

var mainMenuPath = '#app/main-menu.menu-grid';

var specialAddress = [
	"#user.login-form",
	"#user.forgot-password",
	"#user.reset-password",
	"#user.registration",
	'#common.privacyPolicy',
];

function mainMenu (path){
	if(path != undefined) {
		if(path == '') {
			if(storage.me.read()) {
				dpd.users.logout(function (err) {
					//debugger;
					storage.me.erase();
					window.location.hash = '#app';
				});
			}
			else window.location.hash = '#user.login-form';
		} else window.location.hash = path;
		return;
	}

	var me = storage.me.read();
	var menu = [
			{code:'schedule', icon:'calendar',short:'Schedule', long:'Find Schedule', addr:'#app/search-package.home'},
			{code:'bookings', icon:'ticket',short:'Bookings', long:'My Bookings', addr:'#app/booking.home'},
			{code:'travelAgent', icon:'plane',short:'Travel Agent', long:'My Travel Agents', addr:'#app/travel-agent.home'},
			{code:'confirmPayment', icon:'money',short:'Payments', long:'Payment Confirmation', addr:'#app/booking.paymentConfirmation'},
			{code:'approveUsers', icon:'files-o',short:'Approvals', long:'User Approval', addr:'#app/user.myApprovals'},
			{code:'manageUsers', icon:'users',short:'Users', long:'Manage Users', addr:'#app/user.home'},
			{code:'map', icon:'map-marker',short:'Map', addr:'#app/map.home'},
			{code:'qibla', icon:'compass',short:'Qibla', addr:'#app/qibla.home'},
			{code:'prayTimes', icon:'clock-o',short:'Pray Times', addr:'#app/pray-times.home'},
			{code:'steps', icon:'map-o',short:'Ritual', addr:'#app/umroh-procedure.home'},
			{code:'prayers', icon:'signing',short:'Prayers', addr:'#app/prayers.home'},
			{code:'profile', icon:'address-card-o',short:'Profile', long:(me? (me.firstName + ' ' + me.lastName).toTitleCase():''), addr:'#app/user.myProfile'},
			{code:'login', icon:'power-off', short: (me? 'Log Out' : 'Log In'), addr:''},
		];
/**/
	function actionable(){
		var result = '|schedule|login|prayTimes|qibla|prayers|steps|map|';
		if(me) {
			result += 'profile|bookings|';
			if(me.isTravelAgent) result += 'travelAgent|confirmPayment|';
			if(me.isAdmin) result += 'manageUsers|approveUsers|';
		}
		return result;//.toLowerCase();
	}

	return menu.filter(function(x){return actionable().indexOf('|' + x.code + '|')>=0;});
}

var assets = [
	{seq: 2, file: "asset/css/font-awesome.min.css"},
	{seq: 2, file: "asset/css/bootstrap.min.css"},
	{seq: 3, file: "asset/css/css-patch.css"},
	{seq: 2, file: "asset/css/custom-style.css"},
	{seq: 2, file: "asset/css/ie10-viewport-bug-workaround.css"},
	{seq: 2, file: "asset/css/sticky-footer-navbar.css"},
	{seq: 2, file: "asset/js/jquery.min.js"},
	{seq: 4, file: "asset/js/bootstrap.min.js"},
	{seq: 4, file: "asset/js/own/geoLocation.js"},
	{seq: 4, file: "asset/js/vendor/PrayTimes.js"},
	{seq: 2, file: "dpd.js"},
	{seq: 2, file: "asset/js/own/prototypes.js"},
	{seq: 2, file: "asset/js/own/datePair.js"},
	{seq: 2, file: "asset/js/own/alert.js"},
	{seq: 2, file: "asset/js/own/utils.js"},
	{seq: 2, file: "asset/js/own/event.js"},
	{seq: 0, file: "asset/js/own/storages.js"},
	{seq: 0, file: "asset/js/zlib/gunzip.min.js"},
	{seq: 0, file: "asset/js/own/loaderData.js"},
	{seq: 0, file: "dist/yalla.js",
		attribute: {
			id: "yallaScript",
			"yalla-component": "app",
			"yalla-base": "dist",
			"yalla-domtarget": "body",
			"yalla-routing": "authenticate"
		}
	},
	{seq: 1, file: "asset/js/own/yalla-patch.js"},
	{seq: 2, file: "asset/js/vendor/pica.min.js"},
	{seq: 3, file: "asset/js/own/imageProcessor.js"},
];
