$(document).ready(function(){

	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})

});

// $(".vegan-img").hover(function(e) {
//     $($(this).data(".popup")).css({
//         left: e.pageX + 1,
//         top: e.pageY + 1
//     }).stop().show(100);
// }, function() {
//     $($(this).data(".popup")).hide();
// });
