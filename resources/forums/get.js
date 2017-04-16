if(query.checkIsValidParentForum)
{
    if(this.id === query.checkIsValidParentForum)
    {
        this.cyclic = true;
    }
    else if(this.parentForumId)
    {
        var q = {};
        q.checkIsValidParentForum = query.checkIsValidParentForum;
        q.id = this.parentForumId;
        dpd.forums.get(q, function(result){
            if(result.cyclic)
            {
                this.cyclic = true;
            }
        })
    }
}
else if(this.parentForumId)
{
    var q = {};
    q.id = this.parentForumId;
    q.$limitRecursion = 10;
    dpd.forums.get(q, function(result){
        if(result && result.admins) {this.admins = this.admins.concat(result.admins);}
    })
}