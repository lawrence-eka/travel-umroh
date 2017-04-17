var q = {};
q.id = this.threadId;
q.commentId= this.id;
dpd.threads.put(q, {}, function(result){
    errorIf(!result, "invalidThread", "Thread not found");
})