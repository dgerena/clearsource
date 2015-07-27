var request = require('supertest');
var agent, cookie;

describe('PublicController', function() {
	
	before(function(){
		agent = request.agent(sails.hooks.http.app);
	});


	describe('#signup()', function() {
		
		it('should redirect', function (done) {
			
			agent
				.post('/public/signup')
				.send({
					userName: "damasio",
					reference: "https://www.google.com/",
					email: "darktheman2000@yahoo.com",
					firstName: "eli",
					lastName: "gerena",
					password: "adidas1",
				})
				.expect(302)
				.end(function (err, res){
					cookie = res.header['set-cookie'][0];
					done();
				});

		});
	});

	describe('#logout()', function() {
		
		it('should redirect', function (done) {
			
			agent
				.get('/public/logout')
				.expect(302)
				.end(function (err, res){
					done();
				});

		});
	});

	describe('#login()', function() {
		
		it('should redirect', function (done) {
			
			agent
				.post('/public/login')
				.send({
					email: "darktheman2000@yahoo.com",
					password: "adidas1",
				})
				.expect(302)
				.end(function (err, res){
					cookie = res.header['set-cookie'][0];
					done();
				});

		});
	});
});