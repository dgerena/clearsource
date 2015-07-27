module.exports={
	index:function(req,res){
		res.view();
	},
	theme:function(req,res){
		User
			.find({uuid:req.session.user.uuid})
			.exec(function (err,user){
				user.theme = req.body.theme;
				user.save();
				res.redirect("back");
			})
	}
}