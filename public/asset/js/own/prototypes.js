/**
 * Created by Lawrence Eka on 24-May-2017.
 */


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

Date.prototype.toTimeComponents = function(asComponents) {
    if(!this|| ((typeof this.getMonth) !== 'function') || (isNaN(this.getTime())))
    {
        if(asComponents) return undefined;
        else return "";
    }

    var h = this.getHours();
    var m = this.getMinutes();

    if(asComponents)
    {
        var result = {};
		result["hour"] = h;
		result["minutes"] = m;

        return result;
    }
    else {
        h = (h < 10 ? '0' : '') + h.toString();
        m = (m < 10 ? '0' : '') + m.toString();
        return h + ":" + m;
    }

}

Date.prototype.toDateComponents = function(asComponents, withHHMM)
{
	if(!this|| ((typeof this.getMonth) !== 'function') || (isNaN(this.getTime())))
	{
		if(asComponents) return undefined;
		else return "";
	}
	
	var dt = this.getDate();
	var mo = "JanFebMarAprMayJunJulAugSepOctNovDec".substr(this.getMonth() * 3, 3);
	var yr = this.getFullYear();

    if(withHHMM) var time = this.toTimeComponents(asComponents);

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
		}
		return result;
	}
	else return dt.toString() + " " + mo + " " + yr.toString() + (withHHMM ? " " + time : "");
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

Number.prototype.toDateComponents = function(asComponents, withHHMM) {
    return (new Date(this)).toDateComponents(asComponents, withHHMM);
}

Number.prototype.toTimeComponents = function(asComponents) {
    return (new Date(this)).toTimeComponents(asComponents);
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

Number.prototype.toFormattedString = function( c, d, t){
	var c = isNaN(c = Math.abs(c)) ? 2 : c,
		d = d == undefined ? "." : d,
		t = t == undefined ? "," : t,
		s = this < 0 ? "-" : "",
		i = String(parseInt(Math.abs(Number(this) || 0).toFixed(c))),
		j = (j = i.length) > 3 ? j % 3 : 0;
	return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(this - i).toFixed(c).slice(2) : "");
}

Number.prototype.toYYYYMMDD = function(withHHMM) {
	return (new Date(this)).toYYYYMMDD(withHHMM);
}

Number.prototype.toDayOffset = function(endDate) {
    return Math.floor((endDate - this)/86400000)
}

/*

*/