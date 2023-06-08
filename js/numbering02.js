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

// 상단메뉴바 스크롤
// $(function () {
//     $('.page-header').each(function(){
//         const $window = $(window),
//         header = $(this), //헤더의 기본 위치를 검색 
//         headerOffsetTop = header.offset().top; //웹 페이지 상단부터의 거리

//         $window.on ('scroll', function(){
//             /* 윈도우의 스크롤 량을 확인하고, 헤더의 기본 위치를 지나서 있으면 클래스 그렇지 않으면 삭제 */
//             if ($window.scrollTop() > headerOffsetTop){
//                 header.addClass('sticky');
//             }else{
//                 header.removeClass('sticky');

                
//             }
//         });
//     });
// });

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
});