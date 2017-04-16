errorIf((!me && this.id) || (me && !me.isAdmin && me.id !== this.id), "credential", "Access Unauthorized");
if(!query.checkAvailability && !query.checkIsLastAdmin)
{
    var q = 
    {
        "checkAvailability":true,
        "$or":
        [
            {"email": this.email},
            {"username": this.username}
        ],
        "id": {"$ne": this.id ? this.id : -1}
    };
    
    dpd.users.get(q, function(user, err) {
        errorIf(err, "genericError", err);
        errorIf(user && user.length > 0 && user[0].email === this.email, "email", "Email is already in use.");
        errorIf(user && user.length > 0 && user[0].username === this.username, "username", "Username is already in use.");
    });
}


if(!query.checkIsLastAdmin && this.needApproval && this.needApproval.hasOwnProperty("isApproved"))
{
    errorIf(!me.isAdmin, "credential", "Access unauthorized");
    //console.log(this);
    if(this.needApproval.isApproved)
    {
        this.isTravelAgent = (this.needApproval.hasOwnProperty("isTravelAgent") ? this.needApproval.isTravelAgent : this.isTravelAgent);

        if(this.needApproval.hasOwnProperty("isAdmin"))
        {
            if(!this.needApproval.isAdmin)
            {
                var q =
                {
                    "checkIsLastAdmin":true,
                    "isAdmin":true,
                    "id": {"$ne": this.id ? this.id : -1}
                };
                //console.log(q);
                
                dpd.users.get(q, function(user, err) {
                    errorIf(err, "genericError", err);
                    errorIf(!user || user.length === 0, "admin", "Cannot revoke the last admin.");
                    this.isAdmin = this.needApproval.isAdmin;
                    this.needApproval = null;
                });
            }
            else 
            {
                this.isAdmin = true;
                this.needApproval = null;
            }
        }
        else 
        {
            this.needApproval = null;
        }
        
    }
    else 
    {
       this.needApproval = null;
    }
}
//console.log(errors);
