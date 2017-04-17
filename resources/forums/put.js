if(!query.threadId)
{
    this.modifiedById = me.id;
    this.modifiedOn = (new Date()).getTime();
}
else if(query.threadId)
{
    dpd.threads.get(query.threadId, function(result){
        errorIf(!result, "invalidThread", "Thread not found");
        if(result)
        {
            this.latestActiveThreadId = result.id;
            this.latestActivityOn = result.latestCommentOn;
            this.latestActivityById = result.latestCommentById;
        }
    })
}