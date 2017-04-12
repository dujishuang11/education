window.addEventListener("load", function() {
	//导航
	var indexNav = 0;
	$('.djsNav li').mouseover(function() {
		indexNav = $(this).index()
		$('.djsBorder').eq(indexNav).css('width', '100%')
	})
	$('.djsNav li').mouseout(function() {
		indexNav = $(this).index()
		$('.djsBorder').eq(indexNav).css('width', '0')
	})
	
	$('.djs-banner').css('left','28%').css('transform','rotate(0deg)').css('opacity','1')
})