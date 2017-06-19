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

