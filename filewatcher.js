var crypto = require('crypto');
var uglifyJS = require('uglify-js');
var chokidar = require('chokidar');
var fse = require('fs-extra');
var klaw = require('klaw');
var zlib = require('zlib');

var version = '';
var algorithm = 'sha1';

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
var library={};

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

function getStats(path){
	if(fse.existsSync(path)) return fse.statSync(path);
	else return null;
}

function writeLibrary(key, val) {
	library[key] = val;
	fse.writeFile(w, 'var ver = ' + JSON.stringify(library));

	var gzip = zlib.createGzip();
	var inp = fse.createReadStream(w);
	var out = fse.createWriteStream(w + '.gzip');
	inp.pipe(gzip).pipe(out);
}

function hash(text) {
	var shasum = crypto.createHash(algorithm);
	shasum.update(text);
	return shasum.digest('hex');
}

function isEqual(text1, text2) {
	return hash(text1) == hash(text2);
}

function afterFileAction(err, action, path, newPath){
	var filename = path.substr(path.lastIndexOf('\\') + 1);
	if (err) console.log('Error during', (action == 'u' ? 'uglifying' : 'copying'), path, 'to', newPath, 'for', event, 'event:', err);
	else if (!q) {
		if(action != 's') console.log((action == 'u' ? 'Uglified' : 'Copied'), path, 'to', newPath.split(filename)[0]);
		else console.log('Skipped', path);
	}
	var newStats = getStats(newPath);
	if(newStats && newStats.mtime) writeLibrary(path.split('\\').join('/'), Math.floor(newStats.mtime / 1000));
	else console.log(path,'has no stats, omited from library.');
}

function readFile(filename){
	try{
		return fse.readFileSync(filename, 'utf8');
	}
	catch(e){
		return '';
	}
}
function fileAction(path, event) {
	if(c.length > 0) {
		var newPath = getNewPath(path);
		if(event == "add" || event == "change") {
			var skipped = false;
			var uglified = '';

			if((!u)  || (path.indexOf('.js') < 0) || (path.indexOf('.min.js') >= 0)) {
				skipped = isEqual(readFile(path), readFile(newPath));
			}
			else {
				var data = readFile(path);
				uglified = uglifyJS.minify(data, uglifyOptions).code;
				skipped = isEqual(uglified, readFile(newPath));
			}

			//console.log(oldStats);
			if(skipped) {
				afterFileAction(null, 's', path, newPath);
			}
			else if ((!u) || (path.indexOf('.js') < 0) || (path.indexOf('.min.js') >= 0)) {
				fse.copySync(path, newPath);
				afterFileAction(null, 'c', path, newPath);
			}
			else {
				fse.ensureFileSync(newPath);
				fse.writeFileSync(newPath, uglified);
				afterFileAction(null, 'u', path, newPath);
			}
		} else if(event == "delete") {
			fse.removeSync(newPath);
			console.log(newPath,'deleted');
		}
	}
}

function timeStamp(path, time) {
	if(time) {
		var ver = new Date(time);
		if((path.indexOf('.js') > 0)) {
			var newVersion = ver.getFullYear() + '.' + pad(ver.getMonth() + 1) + '.' + pad(ver.getDate()) + '.' + pad(ver.getHours()) + '.' + pad(ver.getMinutes()) + '.' + pad(ver.getSeconds());
			if (newVersion > version) {
				version = newVersion;
				console.log('Latest version:', version, ' from', path);
				writeLibrary('version', version);
				writeLibrary('dpd.js', Math.floor(time / 1000));
			}
		}
	}
}

function actionSet(path, event, time) {
	//console.log('action set for', path);
	return new Promise(function(resolve,reject){
		fileAction(path, event);
		timeStamp(path, time);
		resolve();
	});
}

function watch() {
	//isEqual('node node_modules/yallajs/yalla-cli.js -s src', readFile('C:\\workspace\\esnaadm\\not yalla.bat'));
	console.log('Monitoring file changes in folder', m);
	if(c.length) console.log((u? 'uglify' : 'copy'),'them to', c);
	console.log('and write the timestamp into', w, '...');

	var chokidarOptions = {
		persistent: true,
		recursive: true,
		ignoreInitial: !f,
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
			actionSet(path, "delete", (stats ? stats.mtime : Date.now()));
		})
		.on("unlinkDir", function (path, stats) {
			actionSet(path, "delete", (stats ? stats.mtime : Date.now()));
		})
		.on("change", function (path, stats) {
			actionSet(path, "change", (stats ? stats.mtime : Date.now()));
		});
}

watch();
return;
