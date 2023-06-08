$(function(){

    // 모바일 햄버거 메뉴바
    $(".hamburger").click(function(){
        $(".hammenu").toggleClass("open");
    });

    //서브메뉴 부분
    $(".hammenu>ul>li>a").click(function(){
        if($(this).next().is(":visible")){
            $(this).next().stop().slideUp(500);
            $(this).children("i").attr("class","xi-plus");
        }else{
            $(".sub").stop().slideUp(500);
            $(".hammenu>ul>li>a").children("i").attr("class","xi-plus");
            $(this).next().stop().slideDown(500);
            $(this).children("i").attr("class","xi-minus")
        }
    });
});

// 우먼 슬릭 슬라이드 부분
$(function(){
    $('.slide_item2').slick({
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
// 맨 슬릭 슬라이드 부분
$(function(){
    $('.men_slide_item2').slick({
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
// top20 슬라이드 부분
$(function(){
    $('.top_slide_item2').slick({
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
