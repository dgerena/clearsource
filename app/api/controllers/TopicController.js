
module.exports={
	index:function(req,res){
		Topic
			.nativeAccess
			.distinct('topic',function (err, topics){
				res.view({topics: topics});
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
			.exec(function (err,Topics){
				if(err){
					req.session.error = err
					res.redirect("back");
				}else if(!Topicss.length){
					req.session.warning = "The Topics couldn't be found or does not exist.";
					res.redirect("back");
				}else{
					res.view({"topics":articles});
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