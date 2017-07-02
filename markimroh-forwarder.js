      // eka start of experimental http forwarder to https
      // in dpd, this should be put below dpd.listen();
      try {
        var fwdExpress = require('express');
        var fwdApp = fwdExpress();
        var fwdPort = 80;
        fwdApp.enable('trust proxy');
        fwdApp.use(function(req, res, next) {
          console.log((req.secure ? 'Https' : 'Http') + ' request received: ' + req.headers.host + req.url);
          if(req.secure) {
            next();
          }
          else {
            res.redirect('https://' + req.headers.host.split(':')[0] + req.url);
          }
        });
        fwdApp.use(fwdExpress.static(__dirname + '/public'));
        var fwdServer = fwdApp.listen(fwdPort, function(){
          console.log('Http to Https Forwarder is listening on port %d', fwdServer.address().port);
        });
      }
      catch(e) {
        console.log(e);
      }
      // eka end  of experimental http forwarder to https
