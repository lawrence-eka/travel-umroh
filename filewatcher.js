var fs = require('fs');
var latestMTime = new Date();
var version = '';
console.log('Monitoring file changes...');
fs.watch('c:/workspace/esnaadm/public', {persistent: true, recursive:true}, function(eventName, filename) {
	if(filename.indexOf('.js') > 0) {
		fs.stat(filename, function(err, stats){
			//console.log('event:', eventName, '; filename:', filename, ';stats:', stats);
			//console.log('event:', eventName, '; filename:', filename, ';stats:', stats.mtime, ';now:', latestMTime);
			//console.log('mtime:', new Date(stats.mtime), 'latest:', latestMTime);

			if(stats && (new Date(stats.mtime).getTime() > latestMTime.getTime())) {
				latestMTime = new Date(stats.mtime);
				version = latestMTime.getFullYear() + '.' + (latestMTime.getMonth() + 1) + '.' + latestMTime.getDate() + '.' + latestMTime.getHours() + '.' + latestMTime.getMinutes() + '.' + latestMTime.getSeconds();
				console.log('Latest modification:', latestMTime, ';version:', version);
				fs.writeFile('c:/workspace/esnaadm/public/version.js', "var ver = {version:'" + version + "'}");
			}
		});
	}
});
