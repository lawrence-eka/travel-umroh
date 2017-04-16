console.log(this);
errorIf(!me || !me.isAdmin, "credential", "Access Not Authorized");

var q = {};
q.forumName = this.forumName;
q.id = {"$ne": this.id ? this.id : -1};
dpd.forums.get(q, function(result) {
    errorIf(result && result.length > 0, "duplicateForumName", "Forum '" + this.forumName + "' already exists");
})

if(this.parentForumId)
{
    errorIf(this.parentForumId === this.id, "cyclicReference", "Forum cannot be the parent of itself");
    var q = {};
    q.checkIsValidParentForum = this.id;
    q.id = this.parentForumId;
    q.$limitRecursion = 10;
    
    dpd.forums.get(q, function(result) {
        errorIf(result && result.cyclic, "cyclicReference", "Forum cannot be the parent of itself");
    })
    dpd.forums.get(this.parentForumId, function(result) {
        errorIf(!result || result.length === 0, "invalidParentForum", "Parent Forum does not exist");
    })
}
