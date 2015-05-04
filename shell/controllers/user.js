var route = require('express').Router();
//To allow functions to run async
var async = require('async');
//For the password
var uuid = require('uuid');

route.get('/login', function (req,res){
	console.log('user.js app get login');
		res.render('user/login'); 
});

route.post('/login', function (req,res){
	app.models.User
		.find({
			'where': {'email': req.body.email}
		}).done(function (user) {
			if (req.body.password == user.password) {
				req.session.user = user;
				console.log('working');
				req.session.success = "You have signed in successfuly"
				res.render('public/landing');
			}else{
				console.log('failed',req.body);
				req.session.error = "You have failed to login, please check your email and password."
				res.render('public/landing');
			}
		});
});

route.get('/signup',function (req,res){
	console.log('user.js signup get',17);
	res.render('user/signup');
});

route.post('/signup',function (req,res){
	console.log('user.js signup post',22,req.body);
	app.models.User
		.findOrCreate({
			'where':{ 'name':req.body.name},
			'id':uuid.v4(),
			'active': true,
			'name': req.body.name,
			'password': req.body.password,
			'email': req.body.email
		})
		.done(function (user){
			console.log('hello',user);
			res.render('user/login')
		});
});

route.get('/logout',function (req,res){
	req.session.destroy();
	res.redirect('/');
});

module.exports = route;