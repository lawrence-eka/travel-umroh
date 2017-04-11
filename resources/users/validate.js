var query = 
{
    "checkAvailability":true,
    "$and":
    [

        {
            "$or":
            [
                {"email": this.email},
                {"username": this.username}
            ]
        },
        {
            "id": {"$ne": this.id ? this.id : -1}
        }
        
    ]
};

dpd.users.get(query, function(user, err) {
    errorIf(err, "genericError", err);
    errorIf(user && user.length > 0 && user[0].email === this.email, "email", "Email is already in use.");
    errorIf(user && user.length > 0 && user[0].username === this.username, "username", "Username is already in use.");
});
