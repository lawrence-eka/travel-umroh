var needApproval = {};
if(this.hasOwnProperty("isTravelAgent"))
{
    needApproval.isTravelAgent = this.isTravelAgent;
    delete this.isTravelAgent;
}
if(this.hasOwnProperty("isAdmin"))
{
    needApproval.isAdmin = this.isAdmin;
    delete this.isAdmin;
}

if(Object.getOwnPropertyNames(needApproval).length > 0) 
{
    if(me) needApproval.requestedBy = me.id;
    needApproval.requestedOn = (new Date()).getTime();
    if(me && me.isAdmin) needApproval.isApproved = true;
    this.needApproval = needApproval;
}

if(this.email) this.email = this.email.toLowerCase();
if(this.username) this.username = this.username.toLowerCase();
if(query && (query.checkAvailability || query.checkIsLastAdmin)) query.$fields = {"email":1, "username":1};

