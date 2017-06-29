if(!query || !query.uuid) setResult("","user not found");
else {
    var q = {
        resetPassword: query.uuid,
    }
    dpd.users.get(q, function(user, err){
        if(err) setResult("",err);
        else if(!user || user.length === 0) setResult("","user not found");
        else {
            var r = {
                "firstName": user[0].firstName,
                "lastName": user[0].lastName,
            }
            setResult(r);
        }
    });
}
