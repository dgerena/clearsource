var os = require('os');

// set port
module.exports = {
	'port': process.env.PORT || 3000,
	'numWorkers': 1 || process.env.WORKERS || os.cpus().length,
	'fileTypes': ['.js','.cljs','.coffee']
}