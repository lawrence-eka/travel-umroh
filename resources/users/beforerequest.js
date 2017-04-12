console.log("afternoon");
console.log(query);
console.log(this);
console.log("evening");

if(this.isTravelAgent !== undefined)
{
    console.log("gotcha");
    this.needApproval = {"isTravelAgent": this.isTravelAgent};
    delete this.isTravelAgent;
}

if(this.email) this.email = this.email.toLowerCase();
if(this.username) this.username = this.username.toLowerCase();
if(query && query.checkAvailability) query.$fields = {"email":1, "username":1};

