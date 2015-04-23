var os = require('os');

// set port
var config = {
	'http': 8080,
	'numWorkers': 1, //os.cpus().length,
	'fileTypes': ['.js','.cljs','.coffee']
}
module.exports = config;