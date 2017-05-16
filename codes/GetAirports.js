var extractor = require('./ListExtractor.js');


var airportComponentList = [
	{"componentName": "airport", "begTag": '<td class="border1">', "endTag": '</td>'},
	{"componentName": "country", "begTag": '<td class="border1">', "endTag": '</td>'},
	{"componentName": "code", "begTag": '<td class="border1">', "endTag": '</td>'},
];


var airlineComponentList = [
    {"componentName": "IATA", "begTag": '<tr><td>', "endTag": '</td><td>', "mandatory": true},
    {"componentName": "", "begTag": '', "endTag": '</td>', "mandatory": false},
    {"componentName": "airline", "begTag": '<td>', "endTag": '</td><td>', "mandatory": true},
    {"componentName": "", "begTag": '', "endTag": '</td>', "mandatory": false},
    {"componentName": "country", "begTag": '<td>', "endTag": '</td><td>', "mandatory": false},
    {"componentName": "", "begTag": '', "endTag": '</td>', "mandatory": false}
];

extractor.retrieve(true, "localhost", "/airportsx.html", "", airportComponentList).then(function(airports){
    console.log(airports);
});
extractor.retrieve(true, "localhost", "/airlinesx.html", "<th>Comments</th>", airlineComponentList).then(function(airlines){
    console.log(airlines);
})