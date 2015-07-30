module.exports={
	index:function(req,res){
		var search = {}
		if(req.params.topic){
			search = req.params.topic

		}
		Article
			.find({"topic":search})
			.exec(function (err,articles){
				console.log("in article controller",articles);
				if(err){
					req.session.error = err
					res.redirect("back");
				}else if(!articles.length){
					req.session.warning = "The article couldn't be found or does not exist.";
					res.redirect("back");
				}else if (req.query.dataType === "json"){
					res.json(articles);
				}else{
					res.view({"articles":articles});
				}
			})
	},
	create:function(req,res){
		console.log(req.session);
		Article
			.create({
				authorId:req.session.user.uuid,
				author:req.session.user.userName,
				title:req.body.title,
				body:req.body.body,
				reference:req.body.reference
			}).exec(function (err,user){
				if(err){
					req.session.error = JSON.stringify(err);
				}
				res.redirect("/topic/r/:topic");
			})
	},
	read:function(req,res){// recall all of a topics articles
		var search = {}
		if(req.params.topic){
			search = req.params.topic

		}
		Article
			.find({"topic":search})
			.exec(function (err,articles){
				console.log("in article controller",articles);
				if(err){
					req.session.error = err
					res.redirect("back");
				}else if(!articles.length){
					req.session.warning = "The article couldn't be found or does not exist.";
					res.redirect("back");
				}else if (req.query.dataType === "json"){
					res.json(articles);
				}else{ 
					res.view({"articles":articles});
				}
			})
	}
}