var os = require('os');

// set port
module.exports = {
	'http': 8080,
	'numWorkers': os.cpus().length,
	'fileTypes': ['.js','.cljs','.coffee']
}