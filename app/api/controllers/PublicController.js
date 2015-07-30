var async = require('async');

module.exports={
	index:function(req,res){
		//Needs to be able to show all articles with the individual topics...
		if(!req.session.user){
			Topic
				.nativeAccess
				.distinct('topic',function (err,topics){
					res.view({'topics': topics});
				});
		}else if(req.session.user){
			res.redirect("/topic");
		}
	},
	nav:function(req,res){
		Topic
			.nativeAccess
			.distinct('topic',function (err,topics){
				console.log(topics);
				res.json(topics);
			});
	},
	signup:function(req,res){
		User
			.findOrCreate({
				$or:[
					{userName:req.body.userName},
					{email:req.body.email},
				]
			},{
				userName:req.body.userName,
				reference:req.body.reference,
				email:req.body.email,
				firstName:req.body.firstName,
				lastName:req.body.lastName,
				password:req.body.password
			}).exec(function (err,user){
				if(err){
					req.session.error = err
					console.log(err);
				
				}else if(user.created){
					req.session.user={
						userName:user.userName,
						reference:user.reference,
						email:user.email,
						firstName:user.firstName,
						lastName:user.lastName
					}
				}else{
					req.session.error = "That user already exists."
				}
				res.redirect("/");
			})
	},
	login:function(req,res){
		User
			.findOne({
				email:req.body.email
			}).exec(function (err,user){
				if(err){
					req.session.error = err
				}else if(!user){
					req.session.error = "That user does not exit."
				}else if(user.verifyPassword(req.body.password)){
					console.log(user);
					req.session.user={
						uuid:user.uuid,
						userName:user.userName,
						reference:user.reference,
						email:user.email,
						firstName:user.firstName,
						lastName:user.lastName,
						type:user.type
					}
				}else{
					req.session.error= "Incorrect Password"
				}
				res.redirect("/");
			})
	},
	logout:function(req,res){
		req.session.destroy();
		res.redirect("/");
	}

}