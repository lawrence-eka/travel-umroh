// production.js
var deployd = require("deployd")
  , tls = require("tls") // eka
  , fs = require("fs")
;

var certs = {
  "localhost": {
	  key: fs.readFileSync("privkey.pem"),
	  cert: fs.readFileSync("fullchain.pem") 
  },
  "markimroh.tk": {
	  key: fs.readFileSync("privkey-markimroh.pem"),
	  cert: fs.readFileSync("fullchain-markimroh.pem") 
  },
  "www.markimroh.tk": {
	  key: fs.readFileSync("privkey-markimroh.pem"),
	  cert: fs.readFileSync("fullchain-markimroh.pem") 
  },
  "travel-umroh.tk": {
	  key: fs.readFileSync("privkey-travel-umroh.pem"),
	  cert: fs.readFileSync("fullchain-travel-umroh.pem") 
  },
  "www.travel-umroh.tk": {
	  key: fs.readFileSync("privkey-travel-umroh.pem"),
	  cert: fs.readFileSync("fullchain-travel-umroh.pem") 
  }
}

var server = deployd({
  port: process.env.PORT || 443,
  
  // eka starts
  SNICallback: function(hostname, cb) 
  {
	  if (certs[hostname]) 
	  {
		if (cb)
		{
			var ctx = tls.createSecureContext(certs[hostname])
			cb(null, ctx);
			//cb(null, certs[hostname]);
		} else 
		{
			// compatibility for older versions of node
			return certs[hostname]; 
		}
	  } 
	  else 
	  {
		  console.log("No keys/certificates for domain requested:" + hostname);
		  throw new Error("No keys/certificates for domain requested");
	  }
  },
// eka ends

  key: fs.readFileSync("privkey.pem"), // eka
  cert: fs.readFileSync("fullchain.pem"), // eka

  env: "production",
  db: {
    host: "127.0.0.1",
    port: 27017,
    name: "deployd",
    credentials: {
      username: "deployd",
      password: "d3pl0yd"
    }
  }
});

server.listen();

server.on("listening", function() {
  console.log("Server is listening on port " + server.options.port.toString());
});

server.on("error", function(err) {
  console.error(err);
  process.nextTick(function() { // Give the server a chance to return an error
    process.exit();
  });
});