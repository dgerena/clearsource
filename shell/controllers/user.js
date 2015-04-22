var route = require('express').Router();
var async = require('async');
var ejs = require('ejs');
var fs = require('fs');
var path = require('path');


route.get('/logout',function (req,res){
	req.session.destroy();
	res.redirect('/');
});

route.post('/login', function (req,res){
	console.log('user.js');
	if(!user){
		req.session.error = "That user does not exist";
		res.render('login');
	} else {
		req.session.error = "The password was incorrect";
		res.render('login');
	}
});

route.get('/signup',function (req,res){
	res.render("signup");
});

route.post('/signup',function (req,res){
	var userId = null;
	console.log('user.js',30,req.body);
});

route.get('/verify/:uid',function (req,res){
	if(user && user.active){
		res.render('error', {'Error': "Verify error", 'Message': "That User has already been verified"});
	}else{
		res.render('error', {'Error': "Verify error", 'Message': "A User does not exists with that ID"});
	}

});

module.exports = route;