if(!query.commentId)
{
    errorIf(!me, "credential", "Access not authorized");
    
    dpd.forums.get(this.forumId, function(result) {
        errorIf(!result, "invalidForum", "Invalid Forum Info");
    });
    
    if(this.isSticky)
    {
        if(!me.isAdmin)
        {
            dpd.forums.get(this.forumId, function(result){
                errorIf(!result || !result.admins || result.admins.indexOf(me.id) === -1, "credential","Only admin can set a thread as sticky");
            });
        }
    
    }
}