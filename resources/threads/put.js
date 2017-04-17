errorIf((!me || !me.isAdmin) && !query.commentId, "credential", "Access not authorized");

if(!query.commentId)
{
    dpd.forums.get(this.forumId, function(result){
        errorIf(!result || result.admins.indexOf(me.id) === -1, "credential","Access not authorized");
        this.modifiedById = me.id;
        this.modifiedOn = (new Date()).getTime();
    });
}
else if(query.commentId)
{
    dpd.comments.get(query.commentId, function(result){
        errorIf(!result, "invalidComment", "Comment not found");
        if(result)
        {
            this.latestCommentOn = result.updatedOn;
            this.latestCommentById = result.updatedById;
        }
    })
}