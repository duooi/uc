$(function(){
	var aLi = $(".header-foot nav li");
	var aImg = $(".main-mid-content div img");
	//header-foot的nav效果
	aLi.eq(3).addClass("selected");

	aLi.click(function(){
		$(this).toggleClass("hover");
		$(this).addClass("selected");
	});

	aImg.hover(function(){
		$(this).toggleClass("hover");
	})

});