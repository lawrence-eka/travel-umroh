errorIf(!me, "credential", "Access not authorized");

var commentOn = (new Date()).getTime();
this.createdOn = commentOn;
this.createdById = me.id;
this.updatedOn = commentOn;
this.updatedById = me.id;
