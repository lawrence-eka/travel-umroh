/*
 * Created by Lawrence Eka on 24-May-2017.
 */

String.prototype.padStart = function(targetLength, padString){
	if(this.length>=targetLength) return this;

	padString = padString || ' ';
	return padString.repeat(targetLength - this.length) + this;
}

String.prototype.replaceAll = function(toFind, replaceWith) {
	return this.split(toFind).join(replaceWith);
}


String.prototype.toSentenceCase = function() {
	return this == '' ? '' : this[0].toUpperCase() + this.substr(1).toLowerCase();
}

String.prototype.toTitleCase =function() {
	var retval = "";
	var s = this.split(" ");
	for(var i = 0; i < s.length; i++) {
		retval += s[i].trim().toSentenceCase() + " ";
	}
	return retval.trim();
}

Date.prototype.toYYYYMMDD = function(withHHMM) {
	var y = this.getFullYear().toString();
	var m = this.getMonth() + 1;
	var d = this.getDate();
	
	if(withHHMM) {
		var h = this.getHours();
		var mi = this.getMinutes();
		
		h = (h < 10 ? '0' : '') + h.toString();
		mi = (mi < 10 ? '0' : '') + mi.toString();
	}
	
	m = (m < 10 ? "0" : "") + m.toString();
	d = (d < 10 ? "0":"") + d.toString();
	
	return y + "-" + m + "-" + d + (withHHMM ? 'T' + h + ':' + mi : '');
},

Date.prototype.toTimeComponents = function(asComponents, withSSms) {
    if(!this|| ((typeof this.getMonth) !== 'function') || (isNaN(this.getTime())))
    {
        if(asComponents) return undefined;
        else return "";
    }

    var h = this.getHours();
    var m = this.getMinutes();

    var s = this.getSeconds();
    var ms = this.getMilliseconds();

    if(asComponents)
    {
        var result = {};
		result["hour"] = h;
		result["minutes"] = m;

		if(withSSms) {
			result["seconds"] = s;
			result["milliseconds"] = ms;
		}

        return result;
    }
    else {
        h = (h < 10 ? '0' : '') + h.toString();
        m = (m < 10 ? '0' : '') + m.toString();
		s = (s < 10 ? '0' : '') + s.toString();
		ms = (ms < 10 ? '00' : ms < 100 ? '0' : '') + ms.toString();

        return h + ":" + m + (withSSms ? ':' + s + '.' + ms : '');
    }

}

Date.prototype.toDateComponents = function(asComponents, withHHMM, withSSms, withDay)
{
	if(!this|| ((typeof this.getMonth) !== 'function') || (isNaN(this.getTime())))
	{
		if(asComponents) return undefined;
		else return "";
	}

	var dy = "SunMonTueWedThuFriSat".substr(this.getDay() * 3, 3);
	var dt = this.getDate();
	var mo = "JanFebMarAprMayJunJulAugSepOctNovDec".substr(this.getMonth() * 3, 3);
	var yr = this.getFullYear();

    if(withHHMM || withSSms) var time = this.toTimeComponents(asComponents, withSSms);

	if(asComponents)
	{
		var result = {};
		result["date"] = dt;
		result["month"] = mo;
		result["year"] = yr;
		
		if(withHHMM)
		{
			result["hour"] = time["hour"];
			result["minutes"] = time["minutes"];
			if(withSSms) {
				result["seconds"] = time["seconds"];
				result["milliseconds"] = time["milliseconds"];
			}
		}
		if (withDay){
			result["day"] = dy;
		}

		return result;
	}
	else return (withDay? dy + ' ' : '' ) + dt.toString() + " " + mo + " " + yr.toString() + (withHHMM ? " " + time : "");
}

Date.prototype.toStringDateRange = function(endDate)
{
	s = this.toDateComponents(true);
	e = endDate.toDateComponents(true);
	
	if(!s && !e) return "";
	else if(s && (!e)) return s.date.toString() + " " + s.month + " " + s.year.toString();
	else if ((!s) && e) return e.date.toString() + " " + e.month + " " + e.year.toString();
	else if(s.date == e.date && s.month == e.month && s.year == e.year) return s.date.toString() + " " + s.month + " " + s.year.toString();
	else if(s.month == e.month && s.year == e.year) return s.date.toString() + "-" + e.date.toString() + " " + s.month + " " + s.year.toString();
	else if(s.year == e.year) return s.date.toString() + " " + s.month + "-" + e.date.toString() + " " + e.month + " " + s.year.toString();
	else return s.date.toString() + " " + s.month + " " + s.year.toString() + "-" + e.date.toString() + " " + e.month + " " + e.year.toString();
}

Date.prototype.toDayOffset = function(endDate) {
	return Math.floor((endDate - this)/86400000)
}

Date.prototype.addYears = function(numOfYears) {
	var newThis = new Date(this);
	return new Date(newThis.setFullYear(newThis.getFullYear() + parseInt(numOfYears)));
}

Date.prototype.addMonths = function(numOfMonths) {
	var newThis = new Date(this);
	return new Date(newThis.setMonth(newThis.getMonth() + parseInt(numOfMonths)));
}

Date.prototype.addDays = function(numOfDays) {
	var newThis = new Date(this);
	return new Date(newThis.setDate(newThis.getDate() + parseInt(numOfDays)));
}

Date.prototype.addHours = function(numOfHours) {
	var newThis = new Date(this);
	return new Date(newThis.setHours(newThis.getHours() + parseInt(numOfHours)));
}

Number.prototype.toDateComponents = function(asComponents, withHHMM, withSSms, withDay) {
    return (new Date(this)).toDateComponents(asComponents, withHHMM, withSSms, withDay);
}

Number.prototype.toTimeComponents = function(asComponents, withSSms) {
    return (new Date(this)).toTimeComponents(asComponents, withSSms);
}

Number.prototype.toStringDateRange = function(endDate)
{
	return (new Date(this)).toStringDateRange(new Date(endDate));
}

Number.prototype.addYears = function(numOfYears) {
	return (new Date(this)).addYears(numOfYears).getTime();
}

Number.prototype.addMonths = function(numOfMonths) {
	return (new Date(this)).addMonths(numOfMonths).getTime();
}

Number.prototype.addDays = function(numOfDays) {
	return (new Date(this)).addDays(numOfDays).getTime();
}

Number.prototype.addHours = function(numOfHours) {
	return (new Date(this)).addHours(numOfHours).getTime();
}

Number.prototype.toFormattedString = function( c, d, t){
	var c = isNaN(c = Math.abs(c)) ? 2 : c,
		d = d == undefined ? "." : d,
		t = t == undefined ? "," : t,
		s = this < 0 ? "-" : "",
		i = String(parseInt(Math.abs(Number(this) || 0).toFixed(c))),
		j = (j = i.length) > 3 ? j % 3 : 0;
	return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(this - i).toFixed(c).slice(2) : "");
}

Number.prototype.toGMKByte = function() {
	var absThis = Math.abs(this);
	var denom = 1;
	var dec = 1;
	var predicate='B';
	if(absThis >= 1000000000) {
		denom = 1000000000;
		predicate = 'GB';
	} else if(absThis >= 1000000) {
		denom = 1000000;
		predicate = 'MB';
	} else if(absThis >= 1000) {
		denom = 1000;
		predicate = 'KB';
	} else {
		dec = 0;
	}
	return (this / denom).toFixed(dec) + predicate;
}

Number.prototype.toYYYYMMDD = function(withHHMM) {
	return (new Date(this)).toYYYYMMDD(withHHMM);
}

Number.prototype.toDayOffset = function(endDate) {
    return Math.floor((endDate - this)/86400000)
}

Number.prototype.padStart = function(targetLength, padString){
	return this.toString().padStart(targetLength, padString || '0');
}
/*

*/