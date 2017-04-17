var q = {};
q.id = this.forumId;
q.threadId= this.id;
dpd.forums.put(q, {}, function(result){
    errorIf(!result, "invalidForum", "Forum not found");
})