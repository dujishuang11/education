window.addEventListener("load", function() {
	//导航
	var indexNav = 0;
	var indexHistory = 0;
	$('.djsNav li').mouseover(function() {
		indexNav = $(this).index()
		$('.djsBorder').eq(indexNav).css('width', '100%')
	})
	$('.djsNav li').mouseout(function() {
		indexNav = $(this).index()
		$('.djsBorder').eq(indexNav).css('width', '0')
	})
	
	$('.djs-banner').css('left','28%').css('transform','rotate(0deg)').css('opacity','1')
	
	
	
	//公司历程
	$('.history-content>ul>li').mouseover(function() {
		indexHistory = $(this).index()
		$('.history-content>ul>li').eq(indexHistory).children('div').css('display', 'block')
	})
	$('.history-content>ul>li').mouseout(function() {
		indexHistory = $(this).index()
		$('.history-content>ul>li').eq(indexHistory).children('div').css('display', 'none')
	})
})