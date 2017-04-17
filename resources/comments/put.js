errorIf(!me, "credential", "Access not authorized");

var commentOn = (new Date()).getTime();
this.updatedOn = commentOn;
this.updatedById = me.id;
