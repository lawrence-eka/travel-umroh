var extractor = require('../../codes/ListExtractor.js');
console.log(process.cwd());
var airlinesHost = "en.wikipedia.org";
var airlinesPath = "/wiki/List_of_airline_codes";
var airlineComponentList = [
    {"componentName": "IATA", "begTag": '<tr><td>', "endTag": '</td><td>', "mandatory": true},
    {"componentName": "", "begTag": '', "endTag": '</td>', "mandatory": false},
    {"componentName": "airline", "begTag": '<td>', "endTag": '</td><td>', "mandatory": true},
    {"componentName": "", "begTag": '', "endTag": '</td>', "mandatory": false},
    {"componentName": "country", "begTag": '<td>', "endTag": '</td><td>', "mandatory": false},
    {"componentName": "", "begTag": '', "endTag": '</td>', "mandatory": false}
];

console.log("Updating IATA lists on " + (new Date()).toString() + "...");
/*
extractor.retrieve(true, airlinesHost, airlinesPath, "<th>Comments</th>", airlineComponentList).then(function(airlines){
    console.log("Found " + airlines.length.toString() + " IATA airlines.");
    for(var i = 0; i < airlines.length; i++)
    {
        dpd.airlines.post(airlines[i], function(result){});
    }
});
*/
dpd.airports.get(function(result,error){
  var remaining = result.length;
  result.forEach(function(entry) {
    dpd.airports.del(entry.id,function(){
      remaining--;
      if (remaining === 0) {
        //Finally done
      }
    });
  });
});

//var airportsHost = "www.nationsonline.org";
var airportsHost = "localhost";
var airportComponentList = [
	{componentName: "IATA", begTag: '<td class="border1">', endTag: '</td>', mandatory: true},
	{componentName: "city", begTag: '">', endTag: '</td>'},
	{componentName: "airport", begTag: '">', endTag: '</td>', alias:'city', replace:[{text:'International', with:''},{text:'Airport', with:''}]},
	{componentName: "country", begTag: '">', endTag: '</td>'},
	{componentName: "cmb", combine: {delimiter:':', components:['IATA', 'airport', 'city'],},},
];

for(var i = 0; i < 26; i++)
{
	var c = String.fromCharCode('A'.charCodeAt() + i);
	var airportsPath = '/oneworld/IATA_Codes/IATA_Code_' + c + '.htm';
	console.log("Updating Airport's IATA lists of " + c + " cities on " + (new Date()).toString() + "...");
	extractor.retrieve(true, airportsHost, airportsPath, 'class="border1"><b>Country</b><br></td>', airportComponentList).then(function(airports){
		if(airports.length) console.log("Found " + airports.length.toString() + " IATA " + airports[0].IATA[0] + " airports.");
		for(var i = 0; i < airports.length; i++)
		{
		    //console.log(airports[i].cmb);
			dpd.airports.post(airports[i], function(result){
			    //console.log(result);
			});
		}
	})
	.catch(function(err){
	    console.log(err);
	});
}