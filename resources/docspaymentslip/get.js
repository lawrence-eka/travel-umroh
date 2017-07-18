var loggedIn = me;
var ownDocs = !query.uploaderId || query.uploaderId == me.id;
var admin = me.isAdmin;
cancelIf(!loggedIn);// || (!ownDocs && !admin));
if(!query.uploaderId){
    for(var i = 0; i < this.length;){
        if((this[i].uploaderId != me.id)) this.splice(i, 1);
        else i += 1;
    }
}
