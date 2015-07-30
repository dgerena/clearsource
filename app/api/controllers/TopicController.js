var async = require("async");

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
		async.waterfall([
			function (done){
				Topic
					.findOne({topic: req.params.topic})
					.exec(done)
			},
			function (topic, done){
				console.log('In waterfall',topic);
				Article
					.find({ parent: topic.uuid })
					.exec(done)
			}
		],function (err, articles){
			if(err){
				req.session.error = JSON.stringify(err)
				res.redirect("back");
			}else if(!articles){
				req.session.warning = "The Topic couldn't be found or does not exist.";
				res.redirect("back");
			}else{
				console.log("in the topic controller",articles);
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