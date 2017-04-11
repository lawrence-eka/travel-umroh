if(this.email) this.email = this.email.toLowerCase();
if(this.username) this.username = this.username.toLowerCase();
if(query && query.checkAvailability) query.$fields = {"email":1, "username":1};
