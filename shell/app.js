var cluster = require('cluster');
var config = require('./config/config');

// Set to watch the app as it runs on a  worker.
if (cluster.isMaster) {
	// Spawns workers
	for (var i = 0; i < config.numWorkers; i++) {
		cluster.fork();
	}

	cluster.on('exit', function (worker) {
		// Replace the dead worker,
		// we're not sentimental
		console.log('Worker ' + worker.id + ' died :(');
		cluster.fork();
	});

} else {
	//Worker environment
	var http = require('http');
	var path = require('path');
	var express = require('express');
	var fs = require('fs');

	global.db = require('./config/db');

	// Skeleton of an Application
	global.app = express();
	

	// global.shortcuts = express();

	// Adding httpServer to Skeleton
	var httpServer = http.createServer(app);
	
	// The app.use 's from the config folder
	require('./config/use');

	// Get the policies for the application	
	app.policies = require('./config/policies');

	// --- Models --- //
	app.models = {};
	fs.readdirSync("./models").forEach(function(file) {
		if(config.fileTypes.indexOf(path.extname(file)) > -1){
			require("./models/" + file);
		}
	});
	
	// Start up every script in the controllers folder
	fs.readdirSync("./controllers").forEach(function(file) {
		if(config.fileTypes.indexOf(path.extname(file)) > -1){
			app.use("/"+path.basename(file, path.extname(file)), require("./controllers/" + file));
		}
	});

	// 404 ---- Page
	app.get("/*", function(req, res){
		res.render('public/404');
	});

	// Starts app on specified port
	httpServer.listen(config.http, function(){
		console.log("Port Listening on port "+config.http);
	});
}