///////////////////////// Uses /////////////////////////////////////
// At this time used especially for Express can be used for ETC.  //
////////////////////////////////////////////////////////////////////

// Requires 
var express = require('express');
var session = require('express-session');
var ejs = require('ejs-mate');

// Set View Engine to EJS
app.engine('ejs', ejs);

// set templating engine to ejs
app.set('view engine', 'ejs');
app.use('/views', express.static('/views'));
app.use('/views/about', express.static('/views/about'));
app.use('/views/careers', express.static('/views/careers'));

// Assets i.e. CSS and JS
app.use('/assets', express.static('./assets'));

// Sessions
app.use(
	session({
		'secret': 'k23j4l2j23j24lj2lkj8w9d7hcxjd23',
		'resave': false,
		'saveUninitialized': true
	})
);

// Adds things to views for easier rendering
app.use(function (req, res, next){
	res.locals.session = req.session;
	res.locals.query = req.query;
	next();
});