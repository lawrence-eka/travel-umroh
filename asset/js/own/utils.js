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
	
	self.generateUUID = function() { // Public Domain/MIT
		var d = Date.now();
		if (typeof performance !== 'undefined' && typeof performance.now === 'function'){
			d += performance.now(); //use high-precision timer if available
		}
		return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
			var r = (d + Math.random() * 16) % 16 | 0;
			d = Math.floor(d / 16);
			return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
		});
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

	self.bookings={
		paymentRejected: -3,
		bookingCancelled: -2,
		bookingExpired: -1,
		definingPassengers: 0,
		waitingForPayment: 1,
		paymentConfirmationPending: 2,
		readyToGo: 3,
		onGoing: 4,
		finished: 5,
	};

	self.flow = {
		booking: {
			statusCodes: [
				{code: 'DPS', status: 'Defining Passengers'},
				{code: 'WFP', status: 'Waiting for Payment'},
				{code: 'WPV', status: 'Waiting for Payment Verification'},
				{code: 'RTG', status: 'Ready to Go'},
				{code: 'OGO', status: 'On Going'},
				{code: 'FIN', status: 'Finished'},
				{code: 'CCL', status: 'Cancelled'},
				{code: 'CNP', status: 'Cancelled due to No Payment'},
				{code: 'CPR', status: 'Payment Rejected'},
			],
			transitions: [
				{from: 'DPS', to: 'WFP',},
				{from: 'DPS', to: 'CCL',},
				{from: 'WFP', to: 'WPV',},
				{from: 'WFP', to: 'DPS',},
				{from: 'WFP', to: 'CNP',},
				{from: 'WFP', to: 'CCL',},
				{from: 'WPV', to: 'RTG',},
				{from: 'WPV', to: 'DPS',},
				{from: 'WPV', to: 'CCL',},
				{from: 'RTG', to: 'OGO',},
				{from: 'RTG', to: 'CCL',},
				{from: 'OGO', to: 'FIN',},
			],

			canGoTo: function(toStatus) {
				var result =[];
				self.flow.booking.transitions.filter(function(t) {return t.to == toStatus;}).forEach(function(item) {result.push(item.from);});
				return result;
			},
			canGoFrom: function(fromStatus) {
				var result = [];
				self.flow.booking.transitions.filter(function(t){return t.from == fromStatus;}).forEach(function(item) {result.push(item.to);});
				return result;
			},
			isTransitionAllowed: function(fromStatus, toStatus) {
				return typeof ((new Utils()).flow.booking.transitions.find(function(item) {return (item.from == fromStatus && item.to == toStatus);})) != 'undefined';
			},
			status: function(code) {
				var statusCode = self.flow.booking.statusCodes.find(function(item){return item.code == code;});
				if(statusCode) return statusCode.status;
				else return '';
			}
		},
	};

	self.bookings.status = function(booking) {
		if(booking.isPaymentConfirmed == -1) return {
			code: self.bookings.paymentRejected,
			text: "Payment Rejected",
		};
		else if(booking.isCancelled) return {
			code: self.bookings.bookingCancelled,
			text: "Cancelled",
		};
		else if(booking.waitingForPaymentUntil && booking.waitingForPaymentUntil < (new Date()).getTime()) return {
			code: self.bookings.bookingExpired,
			text: "Cancelled due to no Payment",
		};
		else if(!booking.uniqueCode) return {
			code: self.bookings.definingPassengers,
			text: "Defining Passengers",
		};
		else if(!booking.actualPayment) return {
			code: self.bookings.waitingForPayment,
			text: "Waiting for Payment",
		};
		else if(!booking.isPaymentConfirmed) return {
			code: self.bookings.paymentConfirmationPending,
			text: "Payment Confirmation Pending",
		};
		else if(booking.travelDateFrom > (new Date()).getTime()) return {
			code: self.bookings.readyToGo,
			text: "Ready to Go",
		};
		else if(booking.travelDateUntil >= (new Date()).getTime()) return {
			code: self.bookings.onGoing,
			text: "On Going",
		};
		else return {
				code: self.bookings.finished,
				text: "Finished",
			};
	}
	Object.freeze(self.bookings);
}

