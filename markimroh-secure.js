// production.js
var deployd = require('deployd');

var server = deployd({
  port: process.env.PORT || 443,
  env: 'production',
  db: {
    host: '127.0.0.1',
    port: 27105,
    name: 'deployd',
    credentials: {
      username: 'deployd',
      password: 'd3pl0yd'
    }
  }
});

server.listen();

server.on('listening', function() {
  console.log("Server is listening");
});

server.on('error', function(err) {
  console.error(err);
  process.nextTick(function() { // Give the server a chance to return an error
    process.exit();
  });
});