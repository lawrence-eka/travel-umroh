
if(!query || !query.uuid || !body || !body.password) setResult("","password change failed");
else {
    var q = {
        resetPassword: query.uuid,
    }
    dpd.users.get(q, function(user, err){
        if(err) setResult("",err);
        else if(!user || user.length === 0) setResult("","user not found");
        else {
            var r = {
                "password": body.password,
                "resetPassword": null,
            }
            dpd.users.put(user[0].id, r, function(res, err){
                console.log(res);
                if(err) setResult("", err);
                else setResult("password changed");
            });
        }
    });
}
