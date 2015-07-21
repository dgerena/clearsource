module.exports={
	// index:function(req,res){
	// 	res.view();
	// },
	create:function(req,res){
		Article
			.findOrCreate({
				$or:[
					{author:user.userName},
					{title:req.body.title},
				]
			},{
				author:user.uuid,
				title:req.body.title,
				body:req.body.body,
				reference:req.body.reference
			}).exec(function (err,user){
				if(err){
					req.session.error = err
				}else if(article.created){
					user.currentArticle={
						author:article.author,
						title:article.title,
						body:article.body,
						reference:article.reference
					}
				}else{
					req.session.error="That user already exists."
				}
				res.redirect("/");
			})
	},
	displayAll:function(req,res){// recall all of a users articles
		Article
			.find({
				author:user.uuid
			}).exec(function (err,user){
				if(err){
					req.session.error = err
				}else if(!article.found){// ? not sure if found is a thing
					req.session.error = "No articles could be found for "+user.userName+"."
				}else if(user.uuid == article.author){
					//display and allow the user to soft delete or edit there posts
				}else{
					req.session.error= "An error has occurred while attempting to find your articles"
				}
				res.redirect("/");// would like this to go to a dashboard with all of there articles or the errors shown.
			})
	}
}