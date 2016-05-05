var timer = null;
var startOffset = $(".Img-srcoll-inner ul").offset().left;

$(function(){
	var aLi = $(".header-foot nav li");
	var leftBtn = $(".scroll-left-dir");
	var rightBtn = $(".scroll-right-dir");
	var aImgLi = $(".main-img-scroll .Img-srcoll-inner li");
	var ul = $(".Img-srcoll-inner ul");
	var aLis = ul.find("li");
	var ulW = ul.width();

	ul.css("width",2*ulW+"px");

	//header-foot的nav效果
	aLi.eq(0).addClass("selected");

	aLi.click(function(){
		$(this).toggleClass("hover");
		$(this).toggleClass("selected");
	});

	//无缝滚动里的li元素鼠标滑入和滑出效果
	aImgLi.hover(function(){
		$(this).toggleClass("hover");
	});

	//无缝滚动
	ImgScrollLeft();

	aLis.hover(function(){
		clearInterval(timer);
	},function(){
		ImgScrollLeft();
	});

	leftBtn.click(function(){
		ImgScrollLeft();
		aLis.hover(function(){
			clearInterval(timer);
		},function(){
			ImgScrollLeft();
		});
	});

	rightBtn.click(function(){
		ImgScrollRight();
		aLis.hover(function(){
			clearInterval(timer);
		},function(){
			ImgScrollRight();
		});
	});

	
});

//无缝向左滚动
function ImgScrollLeft(){
	var ul = $(".Img-srcoll-inner ul");
	var ulW = ul.width();

	clearInterval(timer);
	timer = setInterval(function(){
		if(ul.offset().left < -(ulW/2-startOffset-1)){
			ul.css("left","0px");
		}
		ul.css({
			"left":"-=5px"
		});
	},60);

}

//无缝向右滚动
function ImgScrollRight(){
	var ul = $(".Img-srcoll-inner ul");
	var ulW = ul.width();
	console.log(startOffset);

	clearInterval(timer);
	timer = setInterval(function(){
		if(ul.offset().left > startOffset){
		 	ul.css("left",-(ulW/2-1)+"px");
		}
		ul.css({
			"left":"+=5px"
		});
	},60);
}