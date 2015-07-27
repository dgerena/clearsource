var Sails = require('sails'),
	sails;

before(function (done) {
	
	Sails.lift({ }, // configuration for testing purposes
	
	function (err, server) {

		console.log("Sails lifted")
		sails = server;
		if (err) return done(err);
		// here you can load fixtures, etc.
		done(err, sails);

	});
});

after(function(done) {
	// here you can clear fixtures, etc.
	sails.lower(done);
});


// Carpet Commands
// --compilers "coffee:./node_modules/coffee-script/lib/coffee-script/register > coverage.html"
// --require blanket -R html-cov > coverage.html
// --reporter mocha-lcov-reporter | ./node_modules/coveralls/bin/coveralls.js