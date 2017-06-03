// Require express and create an instance of it
var fwdExpress = require('express');
var fwdApp = fwdExpress();

// on the request to root (localhost:3000/)
fwdApp.get('/', function (req, res) {
    console.log(req);
    res.send('<b>My</b> first express http server');
});

// start the server in the port 3000 !
fwdApp.listen(8080, function () {
    console.log('Example app listening on port 8080.');
});