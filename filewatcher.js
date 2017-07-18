var uglifyJS = require('uglify-js');
var chokidar = require('chokidar');
var fse = require('fs-extra');
var klaw = require('klaw');
var version = '';

var uglifyOptions = {
	compress: {
		drop_console: true,
		drop_debugger: true,
		dead_code: true,
		unused: true,
		loops: true,
		conditionals: true,
		if_return: true,
		reduce_vars: true,
		keep_fargs: false,
//		properties: true,
//		sequences: true,
//		toplevel: true,
		passes: 3,
	},
	mangle: false,
};

// 	mangle:{
// 		keep_fnames: true,
// 		properties: {
// 			keep_quoted:true,
// 			reserved:['IncrementalDOM', 'utils', 'framework', 'assertNotNull', 'renderToScreen']
// 		}
// 	},
// };
//var uglified = uglifyJS.minify(data,{compress:{drop_console:true, drop_debugger:true, dead_code:true, unused:true, loops:true, conditionals:true, if_return:true, reduce_vars:true, keep_fargs:false, passes:3}, mangle:false});

var argv = process.argv;
argv.splice(0, 2);
var m = [];
var c = [];
var w = '';
var u = false;
var q = false;
var f = false;
var errors=[];


function pad(dig, num, char){
	num = num || 2;
	char = char || '0';
	dig = dig.toString();
	return char.repeat(num - dig.length) + dig;
}

function getNextArgPair() {
	var result = {key:'', value:''};
	if(argv.length) {
		result.key = argv[0];
		argv.splice(0,1);
	}
	if('-q-u-f'.indexOf(result.key) < 0 && argv.length) {
		result.value = argv[0];
		argv.splice(0,1);
	}
	return result;
}

for(var p = getNextArgPair(); p.key; p = getNextArgPair())
{
	if (p.key == '-w') {
		if(p.value) w = p.value;
	}else if(p.key == '-m') {
		if(p.value) m.push(p.value);
		else errors.push('Monitored file cannot be empty');
	} else if(p.key == '-c') {
		if(p.value) {for(c.push(p.value); c.length < m.length; c.push(p.value)){};}
		else errors.push('Target file cannot be empty');
	} else if (p.key == '-q') {
		q = true;
	} else if (p.key == '-u') {
		u = true;
	} else if (p.key == '-f') {
		f = true;
	} else {
		errors.push("Unknown key: " + p.key);
	}
}

if(c.length > 0) for(var t = c[c.length - 1]; c.length < m.length; c.push(t)){};

if(m.length == 0) {
	errors.push('Need to define at least one file to monitor');
}

if(w == '') {
	errors.push('Need to define output file name');
}

if(u && (c.length == 0)) {
	errors.push('Cannot uglify when target folder is not defined.');
}

if(errors.length) {
	errors.forEach(function(e){console.log(e);});
	return;
}
function getNewPath(path) {
	var inEffect = m.find(function (x) {
		return path.indexOf(x) >= 0;
	});
	var mIndex = m.indexOf(inEffect);
	return c[mIndex] + path.split(inEffect)[1];
}


function fileAction(path, event) {
	if(c.length > 0) {
		var newPath = getNewPath(path);
		if(event == "add" || event == "change") {
			if ((!u) || (path.indexOf('.js') < 0) || (path.indexOf('.min.js') >= 0)) {
				//console.log('Copying', path,'...');
				fse.copy(path, newPath, function (err) {
					if (err) console.log('Error during copying', path, 'to', newPath, 'for', event, 'event:', err);
					else if (!q) console.log('path:', path, 'was copied to', newPath);
				});
			} else {
				fse.readFile(path, "utf8", function (err, data) {
					if (err) {console.log('Error while trying to read',path,':',err);}
					else {
						//console.log('Uglifying', path,'...');
						var uglified = uglifyJS.minify(data, uglifyOptions);
						//console.log(path,' uglified, writing...');
						fse.ensureFile(newPath, function(file, err){
							if(err) console.log('Error during ensuring that', newPath, 'exists:', err);
							else {
								fse.writeFile(newPath, uglified.code, function (err) {
									if (err) console.log('Error during uglifying', path, 'to', newPath, 'for', event, 'event:', err);
									else if (!q) console.log('path:', path, 'was uglified to', newPath);
									//console.log('path:', path, 'was uglified to', newPath);
								});
							}
						});
					}
				});
			}
		} else if(event == "delete") {
			fse.remove(newPath, function(err){
				if (err) console.log('Error during deleting', newPath, 'for', event, 'event of', path, ':', err);
				else if(!q) console.log(newPath,'deleted');
			});
		}
	}
}

function timeStamp(path, time) {
	if((path.indexOf('.js') > 0) && time) {
		var ver = new Date(time);
		var newVersion = ver.getFullYear() + '.' + pad(ver.getMonth() + 1) + '.' + pad(ver.getDate()) + '.' + pad(ver.getHours()) + '.' + pad(ver.getMinutes()) + '.' + pad(ver.getSeconds());
		if (newVersion > version) {
			version = newVersion;
			console.log('Latest version:', version, ' from', path);
			fse.writeFile(w, "var ver = {version:'" + version + "'}  ", function () {
			});
		}
	}
}

function actionSet(path, event, time) {
	//console.log('action set for', path);
	fileAction(path, event);
	timeStamp(path, time);
}

function watch() {
	console.log('Now monitoring file changes in folder', m);
	if(c.length) console.log((u? 'uglify' : 'copy'),'them to', c);
	console.log('and write the timestamp into', w, '...');

	var chokidarOptions = {
		persistent: true,
		recursive: true,
		ignoreInitial: false,
		awaitWriteFinish: {
			stabilityThreshold: 2000,
		},
	};

	var watcher = chokidar.watch(m, chokidarOptions);
	watcher
		.on("add", function (path, stats) {
			actionSet(path, "add", (stats ? stats.mtime : Date.now()));
		})
		.on("unlink", function (path, stats) {
			console.log('stats:', stats, '; now:', Date.now(), ';getTime:', Date.now());
			actionSet(path, "delete", (stats ? stats.mtime : Date.now()));
		})
		.on("unlinkDir", function (path, stats) {
			console.log('stats:', stats, '; now:', Date.now(), ';getTime:', Date.now());
			actionSet(path, "delete", (stats ? stats.mtime : Date.now()));
		})
		.on("change", function (path, stats) {
			actionSet(path, "change", (stats ? stats.mtime : Date.now()));
		});
}

watch();
return;
