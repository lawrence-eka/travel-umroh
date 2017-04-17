errorIf(!me, "credential", "Access not authorized");

dpd.forums.get(this.forumId, function(result){
    errorIf((!result || result.admins.indexOf(me.id) === -1) && !me.isAdmin, "credential","Access not authorized");
});
