// var templates = {
// 	article: new EJS({url: '/templates/article.ejs'}),
// };

// $("document").ready(function(){
// 	var dom = {
// 		'topics': $('[topic]')
// 	};
	
// 	async.eachSeries(
// 		dom.topics,
// 		// Iterator
// 		function (item, next){
// 			var $this = $(item);
// 			$.ajax({
// 				'url':'/article/read/'+$this.attr('topic'),  // "Medical"
// 				'method':'GET',
// 				'data': {
// 					topic: $this.attr('topic'),
// 					dataType: 'json',
// 				},
// 				'success': function(response){
// 					console.log(response);
// 					var html = templates.article.render({'articles': response});
// 					console.log(html);
// 					next();
// 				}
// 			})
// 		},
// 		function (err){
// 			// All are done
// 		});
// });