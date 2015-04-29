var route = require('express').Router();
//To allow functions to run async
var async = require('async');
//For the password
//var uuid = require('uuid');

app.get('/login', function (req,res){
	console.log('user.js app get login');
		res.render('login'); 
});

route.post('/login', function (req,res){
	console.log('login');
});

app.get('/signup',function (req,res){
	console.log('user.js singup get',17,req.query);
	res.render('signup');
});

route.post('/signup',function (req,res){
	console.log('user.js signup post',22,req.query);
});

route.get('/logout',function (req,res){
	req.session.destroy();
	res.redirect('/');
});

module.exports = route;