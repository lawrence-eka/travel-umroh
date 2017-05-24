var deployd = require('deployd')
  , fs = require('fs')
;

var server = deployd({
	port: 443,
	env: 'development',
    key: fs.readFileSync('key3.pem'), // eka
    cert: fs.readFileSync('cert3.pem'), // eka
	db:
	{
		host: '127.0.0.1',
		port: 27017,
		name: 'deployd',
		credentials: {
			username: 'deployd',
			password: 'd3pl0yd'
		}
	}
});
server.listen();
server.on('listening', function(){
	console.log("Server is listening");
});

server.on('error', function(err) {
	console.log(err);
	process.nextTick(function(){
		process.exit();
	});
});