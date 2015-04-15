//Requires specific to this controller
var route = require('express').Router();
var async = require('async');

// Default Redirect
app.get('/', function(req,res){
	res.render('demo');
});
// A route to be built upon
// route.get('/{routeWithinController}', function(req,res){
// 	res.json({'Key': 'Value'});
// });

//Necessary to run
module.exports = route;