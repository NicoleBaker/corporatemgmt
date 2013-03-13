$(".services-img").click(function(event) {
	$(this).siblings().fadeOut(function() {
		$(".services-img").animate({marginTop: '100px'}, function() {
			$('.target').html("<h3>Contract Arrangement</h3><p>Corporate Management will help you arrange contracts needed for snow removal, lawn care, and seasonal cleanup. <a class='return' href='#return'>(return)</a></p>").css('width', '300px').css('float', 'right').css('margin-right', '100px').css('margin-top', '90px').fadeIn();
		});
	});
});

$(document).on('click', '.return', function(event){
	$('.target').fadeOut(function(){
		$(".services-img").fadeOut(function(){
			location.reload();
		})
	});
})