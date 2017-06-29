cancelIf(!me);
for(var i = 0; i < this.length;){
    if(this[i].uploaderId != me.id) this.splice(i, 1);
    else i += 1;
}
