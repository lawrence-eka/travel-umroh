dpd.threads.get(this.threadId, function(thread){
    errorIf(!thread, "invalidHtread", "Invalid Thread Info");
    dpd.forums.get(thread.forumId, function(forum) {
        errorIf(!forum, "invalidForum", "Invalid Forum Info");
    });
})
