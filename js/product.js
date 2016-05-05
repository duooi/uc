$(function(){
	var aLi = $(".header-foot nav li");

	//header-foot的nav效果
	aLi.eq(1).addClass("selected");

	aLi.click(function(){
		$(this).toggleClass("hover");
		$(this).addClass("selected");
	});
});