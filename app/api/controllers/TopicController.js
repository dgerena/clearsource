
module.exports={
	index:function(req,res){
		Topic
			.nativeAccess
			.distinct('topic',function (err, topics){
				console.log(req.session.user);
				res.view({"topic": topics});
			});
	},
	create:function(req,res){
		console.log(req.session);
		Topic
			.create({
				topic:req.body.title,
			}).exec(function (err,user){
				if(err){
					req.session.error = JSON.stringify(err);
				}
				res.redirect("/topic");
			})
	},
	read:function(req,res){// recall all of a users articles
		var search = {}
		if(req.params.uuid){
			search.uuid = req.params.uuid
		}
		Topic
			.find(search)
			.exec(function (err,articles){
				if(err){
					req.session.error = err
					res.redirect("back");
				}else if(!articles.length){
					req.session.warning = "The Topics articles couldn't be found or does not exist.";
					res.redirect("back");
				}else{
					res.view({"topic":articles});//What is going on why arent you returning for the nav? Was working fine before...
				}
			})
	},
	upsert:function(req,res){
		Topic
			.nativeAccess
			.update(
			    {keyword:key},
			    {upsert:true,safe:false},
			    function(err,data){
			        if (err){
			            console.log(err);
			        }else{
			            console.log("score succeed");
			        }
			    })
	},
	delete:function(req,res){
		Topic
			.destroy({
				uuid: req.quer.uuid || ""
			})
			.exec(function (err, result){
				res.json(result);

			});
	}
}