var extractor = require('/home/user-travel-umroh/travel-umroh/codes/ListExtractor.js');

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

var airportsHost = "www.nationsonline.org";
var airportsPath = "/oneworld/IATA_Codes/airport_code_list.htm";
var airportComponentList = [
    {"componentName": "airport", "begTag": '<td class="border1">', "endTag": '</td>'},
    {"componentName": "country", "begTag": '<td class="border1">', "endTag": '</td>'},
    {"componentName": "IATA", "begTag": '<td class="border1">', "endTag": '</td>'},
];

console.log("Updating IATA lists on " + (new Date()).toString() + "...");
extractor.retrieve(true, airlinesHost, airlinesPath, "<th>Comments</th>", airlineComponentList).then(function(airlines){
    console.log("Found " + airlines.length.toString() + " IATA airlines.");
    for(var i = 0; i < airlines.length; i++)
    {
        dpd.airlines.post(airlines[i], function(result){});
    }
});

extractor.retrieve(false, airportsHost, airportsPath, "", airportComponentList).then(function(airports){
    console.log("Found " + airports.length.toString() + " IATA airports.");
    for(var i = 0; i < airports.length; i++)
    {
        dpd.airports.post(airports[i], function(result){});
    }
});

