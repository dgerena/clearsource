$("document").ready(function(){
	var dom = {
		'topics': $('[topic]')
	};

	async.eachSeries(dom.topics,
		function (item, next){
			var $this = $(item);
			$.ajax({
				'url':'/article/read/'+$this.attr('topic'),  // "Medical"
				'method':'GET',
				'data': {
					dataType: 'json',
				},
				'success': function(response){
					
				}
			})
		},
		function (err){

		})
});