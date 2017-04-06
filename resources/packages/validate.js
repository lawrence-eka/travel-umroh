var validFrom = (new Date(this.validFrom));
var validUntil = (new Date(this.validUntil));

errorIf(validFrom < (new Date()).getTime(), 'invalidDate', "'From Date' (" + validFrom + ") must be a future date");
errorIf(validFrom > validUntil, 'invalidDate', "'Valid From' (" + validFrom + ") must be less or equal to 'Valid Until' (" + validUntil + ")");
errorIf(!me, "credential", "Invalid Credential");
errorIf(!me.isTravelAgent, "credential", "You are not a travel agent contact person");

