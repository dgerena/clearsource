module.exports={
	index:function(req,res){
		res.view();
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
	read:function(req,res){// recall all of a users articles
		var search = {}
		if(req.params.uuid){
			search.uuid = req.params.uuid
		}
		Article
			.find(search)
			.exec(function (err,articles){
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