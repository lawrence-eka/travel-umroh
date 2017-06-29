if(!body || !body.email) setResult("", "email not supplied");
else {
    dpd.users.get(body, function(user, err){
        if(err) setResult("", err);
        else if(!user || user.length === 0) setResult( "", "email doesn't exist");
        else {
            
            var d = Date.now();
            if (typeof performance !== 'undefined' && typeof performance.now === 'function'){
                d += performance.now(); //use high-precision timer if available
            }
            var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                var r = (d + Math.random() * 16) % 16 | 0;
                d = Math.floor(d / 16);
                return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
            });

            
            dpd.users.put(user[0].id, {resetPassword:uuid}, function(res, err){
                if(err) setResult("", err);
                else {

                    dpd.mailgun.post({
                        from    : 'do-not-reply@markimroh.tk',
                        to      : 'lawrence.eka@gmail.com',
                        subject : 'Reset your Password',
                        text    : 'Someone has requested to reset your password to markimroh.tk. If it was not you, please ignore this message, otherwise you can go to the following link to reset your password. ' + ctx.req.headers.origin + '/#user.reset-password:id=' + uuid + ' Sincerely yours, markimroh.tk team.',
                        html    : 'Someone has requested to reset your password to markimroh.tk. If it was not you, please ignore this message, otherwise you can click <a href=' + ctx.req.headers.origin + '/#user.reset-password:id=' + uuid + 'here</a> to reset your password. Sincerely yours, markimroh.tk team.',
                    }, function (result, err ) {
                        if(err) setResult("", err);
                        else setResult("email sent");
                    }); 
                }
            });
        }
    });
}
