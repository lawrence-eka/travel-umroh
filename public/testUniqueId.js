/**
 * Created by gal9569 on 7/12/2017.
 */
var ids=[];
var future = Date.now() + 5000;
var promises =[];

function uniqueID(){
	var date = Date.now();
	if(date <= uniqueID.previous) {
		date = ++uniqueID.previous;
	} else {
		uniqueID.previous = date;
	}
	return new Date (date);
}

function newId() {
	var id = uniqueID();
	ids.push(id);
	return id;
}

function padZero(num, dig){
	dig = dig.toString();
	return "0".repeat(num - dig.length) + dig;
}

beautify = function(id) {
	return id.getFullYear() + '.' + padZero(2, id.getMonth()) + '.' + padZero(2, id.getDate()) + '.' + padZero(2, id.getHours()) + '.' + padZero(2, id.getMinutes()) + '.' + padZero(2, id.getSeconds()) + '.' + padZero(3, id.getMilliseconds());
}

function runTest() {
	for (var i = 0; i < 100; i++) {
		promises.push(new Promise(function (resolve) {
			//setTimeout(function(){

			 dpd.docno.post({latest:Date.now()}, function(res, err){
			    ids.push(res.bookingNo);
			    console.log(res.bookingNo);
			    resolve();
			 });

			// dpd.docno.get("49f19a5146fd296d", function(res, err){
			// 	ids.push(res.latest);
			// 	console.log(res.latest);
			// 	resolve();
			// });

			// dpd.uniqueid.get(function (res) {
			// 	ids.push(res);
			// 	console.log(res);
			// 	resolve();
			// });

			// var id = newId();
			// console.log(beautify(id));
			// resolve();
			//	}, future - Date.now());
		}));
	}
	Promise.all(promises).then(function (result) {
		console.log(new Set(ids).size === ids.length);
	});
}