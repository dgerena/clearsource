//Requires specific to this controller
var route = require('express').Router();
var async = require('async');

// Default Redirect
app.get('/', function(req,res){
	res.render('public/landing');
});

//Necessary to run
module.exports = route;