var route = require('express').Router();
//To allow functions to run async
var async = require('async');
//For the password
//var uuid = require('uuid');

route.get('/login', function (req,res){
	console.log('user.js app get login');
		res.render('user/login'); 
});

route.post('/login', function (req,res){
	console.log('login');
});

route.get('/signup',function (req,res){
	console.log('user.js signup get',17);
	res.render('user/signup');
});

route.post('/signup',function (req,res){
	console.log('user.js signup post',22);
	res.json(req.body);
});

route.get('/logout',function (req,res){
	req.session.destroy();
	res.redirect('/');
});

module.exports = route;