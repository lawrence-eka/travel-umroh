console.log('Reset password');
console.log(this);
console.log(query);
console.log(me); 
console.log(parts);
console.log(body);

setResult('hello, event world');

/*
var q = {email: this.email};
dpd.users.get(q, function(user, err){
    if(err) {
        cancel(err);
    } else {
        console.log('trus kesini');
        cancelIf(user.length === 0, "User Not Found");
        console.log('here');
        console.log(user);
        this.id = user[0].id;
        this.resetPassword = "put validation string here";
        delete this.email;
        query.id = user[0].id;
        console.log(this);
        console.log(query);
    }
});
*/