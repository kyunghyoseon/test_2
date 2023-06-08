//상단메뉴바
$(function(){
	$(".navbar1>ul>li>a").mouseenter(function(){
		$(this).next().stop().slideDown(500);
	});

	$(".navbar1>ul>li").mouseleave(function(){
		//$(".sub",this).stop().slideUp(500);
		//$("this").children(".sub").stop().slideUp(500);
		//위에 두가지로도 적용가능 밑에 값이랑 다 같은 의미
		$(this).find(".sub").stop().slideUp(500);
	});
});

$(function(){
    $('.slide_women_item').slick({
        dots:true,
        autoplay: true,
        infinite: true,
        autiolaySpeed:2000,
        slidesToShow:1,   //한 화면에 보여줄 아이템 수
        slidesToScroll:1,  //한번에 슬라이드 시킬 아이템 수
        responsive: [
            {
                breakpoint: 1920,   //미만
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint:840,   //600 미만
                settings: {
                    slidesToShow:1,
                    slidesToScroll:1
                }
            },
            {
                breakpoint:480,  //480 미만
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    })
});
$(function(){
    $('.slide_men_item').slick({
        dots:true,
        autoplay: true,
        infinite: true,
        autiolaySpeed:2000,
        slidesToShow:1,   //한 화면에 보여줄 아이템 수
        slidesToScroll:1,  //한번에 슬라이드 시킬 아이템 수
        responsive: [
            {
                breakpoint: 1920,   //미만
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint:840,   //600 미만
                settings: {
                    slidesToShow:1,
                    slidesToScroll:1
                }
            },
            {
                breakpoint:480,  //480 미만
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    })
});
$(function(){
    $('.slide_women_item2').slick({
        dots:true,
        autoplay: true,
        infinite: true,
        autiolaySpeed:2000,
        slidesToShow:1,   //한 화면에 보여줄 아이템 수
        slidesToScroll:1,  //한번에 슬라이드 시킬 아이템 수
        responsive: [
            {
                breakpoint: 1920,   //미만
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint:840,   //600 미만
                settings: {
                    slidesToShow:1,
                    slidesToScroll:1
                }
            },
            {
                breakpoint:480,  //480 미만
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    })

    // 모바일 햄버거 메뉴바
    $(".hamburger").click(function(){
        $(".hammenu").toggleClass("open");
    });

    //서브메뉴 부분
    $(".hammenu>ul>li>a").click(function(){
        if($(this).next().is(":visible")){
            $(this).next().stop().slideUp(500);
            $(this).children("img").attr("src","prac/arrow-down.png");
        }else{
            $(".sub").stop().slideUp(500);
            $(".hammenu>ul>li>a").children("img").attr("scr","prac/arrow-down.png");
            $(this).next().stop().slideDown(500);
            $(this).children("img").attr("src","prac/arrow-up.png")
        }
    });
});
