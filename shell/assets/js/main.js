

(function($){
	$.fn.serializeObject=function(){var i={},e=this.serializeArray();return $.each(e,function(){void 0!==i[this.name]?(i[this.name].push||(i[this.name]=[i[this.name]]),i[this.name].push(this.value||"")):i[this.name]=this.value||""}),i};
	
	$('#container').isotope({
	  // main isotope options
	  itemSelector: '.item',
	  layoutMode: 'masonry',
	  masonry: {
	    columnWidth: 200,
	    rowHeight: 200
	  }
	});
})(jQuery);