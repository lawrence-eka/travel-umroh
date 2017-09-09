var extractor = require('../../codes/ListExtractor.js');
console.log(process.cwd());
var airlinesHost = "en.wikipedia.org";
var airlinesPath = "/wiki/List_of_airline_codes";
var airlineComponentList = [
    {componentName: "IATA", begTag: '<tr><td>', endTag: '</td><td>', mandatory: true},
    {componentName: "", begTag: '', endTag: '</td>'},
    {componentName: "airline", begTag: '<td>', endTag: '</td><td>', mandatory: true},
    {componentName: "", begTag: '', endTag: '</td>'},
    {componentName: "country", begTag: '<td>', endTag: '</td><td>'},
    {componentName: "", begTag: '', endTag: '</td>'}
];

console.log("Updating IATA lists on " + (new Date()).toString() + "...");

extractor.retrieve(true, airlinesHost, airlinesPath, "<th>Comments</th>", airlineComponentList).then(function(airlines){
    console.log("Found " + airlines.length.toString() + " IATA airlines.");
    for(var i = 0; i < airlines.length; i++)
    {
        dpd.airlines.post(airlines[i], function(result){});
    }
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

var alphabet=[];
for(var i = 0; i < 26; i++) alphabet.push(String.fromCharCode('A'.charCodeAt() + i));

var cache = [];
var promises = [];


alphabet.forEach(function(c){
    var airportsPath = '/oneworld/IATA_Codes/IATA_Code_' + c + '.htm';
    console.log("Updating Airport's IATA lists of " + c + " cities on " + (new Date()).toString() + "...");
    promises.push(extractor.retrieve(true, airportsHost, airportsPath, 'class="border1"><b>Country</b><br></td>', airportComponentList));
});

Promise.all(promises).then(function(airportsList){
    var totalAirports = 0;
    airportsList.forEach(function(airports){
        //if(airports.length >= 0) console.log("Found " + airports.length.toString() + ' ' + airports[0].IATA[0] + " IATA airports.");
        totalAirports += airports.length;
        airports.forEach(function(airport){
            cache.push(airport.cmb);
            delete airport.cmb;
            dpd.airports.get({IATA: airport.IATA}, function(result){
                dpd.airports.put(result.length ? result[0].id : {}, airport);
            })
            
        });
    });
    console.log('Total airports found:', totalAirports);
    dpd.airports.get(function(result){
        console.log('Total airports in database:', result.length);
    });
    dpd.cache.post({name:'airports', data:{cache:cache}}, function(result){});
});

