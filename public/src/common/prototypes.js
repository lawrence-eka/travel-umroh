/**
 * Created by Lawrence Eka on 24-May-2017.
 */

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
	if(withHHMM)
	{
		var hr = this.getHours();
		var mn = this.getMinutes();
	}
	
	if(asComponents)
	{
		var result = {};
		result["date"] = dt;
		result["month"] = mo;
		result["year"] = yr;
		
		if(withHHMM)
		{
			result["hour"] = hr;
			result["minutes"] = mn;
		}
		return result;
	}
	else return dt.toString() + " " + mo + " " + yr.toString() + (withHHMM ? " " + hr.toString() + ":" + mn.toString() : "");
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

Number.prototype.toDateComponents = function(asComponents, withHHMM) {
	return (new Date(this)).toDateComponents(asComponents, withHHMM);
}

Number.prototype.toStringDateRange = function(endDate)
{
	return (new Date(this)).toStringDateRange(new Date(endDate));
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