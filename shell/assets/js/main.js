
// var container = document.querySelector('#container');
// // init
// var iso = new Isotope( container, {
//   itemSelector: '.item',
//   getSortData: {
//     name: '.name',
//     category: '[data-category]'
//   },
//   masonry: {
//     columnWidth: 200
//   }
// });
(function($){
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