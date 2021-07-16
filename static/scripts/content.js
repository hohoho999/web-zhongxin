(function($){
    $.fn.numberRock=function(options){
        var defaults={
            lastNumber:100,
            duration:3000,
            easing:'swing'  //swing(默认 : 缓冲 : 慢快慢)  linear(匀速的)
        };
        var opts=$.extend({}, defaults, options);

        $(this).animate({
            num : "numberRock",

        },{
            duration : opts.duration,
            easing : opts.easing,
            complete : function(){
                // console.log("success");
            },
            step : function(a,b){

                $(this).html(parseInt(b.pos * opts.lastNumber));
            }
        });
    }
    /**滚动条*/
    $(window).load(function(){
        $(".store-map-list,.other-popup").mCustomScrollbar({
            scrollInertia:150
        });
    })

})(jQuery);

$(document).ready(function(){

    /*判断浏览器版本*/
    var $userAgent = navigator.userAgent.toLowerCase();
    $.browser = {
        version: ($userAgent.match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/) || [])[1],
        safari: /webkit/.test($userAgent),
        opera: /opera/.test($userAgent),
        msie: /msie/.test($userAgent) && !/opera/.test($userAgent),
        mozilla:/mozilla/.test($userAgent)&&!/(compatible|webkit)/.test($userAgent)
    };

    var wow = new WOW({
        boxClass: 'wow',
        animateClass:'animated',
        offset: 0,
        mobile: true,
        live: true,
        callback: function(box) {
            // console.log(box);
        }
    });
    wow.init();

    var srcChange = function () {
        var cWidth = document.documentElement.clientWidth;
        if (cWidth > 768) {
            $('*[data-href-pc]').each(function () {
                $(this).attr('href', $(this).attr('data-href-pc'));
            })
        } else {
            $('*[data-href-mobile]').each(function () {
                $(this).attr('href', $(this).attr('data-href-mobile'));
            })
        }
    }
    srcChange();

    function indexFullPage(){
        $("#fullpage").fullpage({
            anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fifthPage'],
            menu: '#menu',
            navigation: true,
            navigationPosition: 'right',
            showActiveTooltip: true,
            scrollingSpeed:400,
            css3:true,
            fitToSection: true,
            resize : false,
            verticalCentered:true,
            onLeave: function(anchorLink, index){
                if(index === 1){
                    $(".index-fullpage-length").removeClass("active").find(".current").text('01');
                    $(".right-Tips").removeClass("active").find("em").text("首页");
                    $("#fp-nav").removeClass("active");
                    $(".index-footer").removeClass("active");
                }else if(index === 2){
                    $(".index-fullpage-length").addClass("active").find(".current").text('02');
                    $(".right-Tips").addClass("active").find("em").text("关于我们");
                    $("#fp-nav").addClass("active");
                    $(".index-footer").addClass("active");
                }else if(index === 3){
                    $(".index-fullpage-length").addClass("active").find(".current").text('03');
                    $(".right-Tips").addClass("active").find("em").text("新闻中心");
                    $("#fp-nav").addClass("active");
                    $(".index-footer").addClass("active");
                }else if(index === 4){
                    $(".index-fullpage-length").addClass("active").find(".current").text('04');
                    $(".right-Tips").addClass("active").find("em").text("公开信息披露");
                    $("#fp-nav").addClass("active");
                    $(".index-footer").addClass("active");
                }else if(index === 5){
                    $(".index-fullpage-length").addClass("active").find(".current").text('05');
                    $(".right-Tips").addClass("active").find("em").text("信息披露");
                    $("#fp-nav").addClass("active");
                    $(".index-footer").addClass("active");
                }
            },
            afterLoad: function(anchorLink, index){
                // if(index === 1){
                //     console.log(index)
                //     $(".index-fullpage-menu").find(".current").text('01');
                // }else if(index === 2){
                //     console.log(index)
                //     $(".index-fullpage-menu").find(".current").text('02');
                // }

            }
        });
    }
    if($(window).width() > 1024){
        if($(".indexfullpage").length > 0){
            indexFullPage();
        }
    }

    function newsSwiper(){
        var _length = $(".news-swiper-txt .swiper-slide").length;
        var _width = 100 / _length + '%';
        if($(window).width() > 768){
            var Swiper1 = new Swiper('.news-swiper-img',{
                slidesPerView :3,
                spaceBetween : 20,
                direction: 'vertical',
                centeredSlides : true,
                autoplay:5000,
                autoplayDisableOnInteraction : false,
                slideToClickedSlide:true,
            })
            var Swiper2 = new Swiper('.news-swiper-txt',{
                autoHeight: true,
                pagination : '.news-swiper-txt .swiper-pagination',
                prevButton:'.swiper-btn .swiper-button-prev',
                nextButton:'.swiper-btn .swiper-button-next',
                paginationClickable :true,
                paginationBulletRender: function (swiper, index, className) {
                    return '<span class="' + className + '" style="width:' + _width + '"><em>0' + (index + 1) + '</em></span>';
                },
                onSwiperCreated: function(mySwiper){
                    if($.browser.msie&&($.browser.version === "9.0")){
                        var $_pageLen = $(".J-index-banner .pagination span");
                        $_pageLen.each(function(){
                            var $_index = $(this).index() + 1;
                            $(this).html('0'+$_index);
                        })
                    }
                }
            })
            Swiper1.params.control = Swiper2;
            Swiper2.params.control = Swiper1;
            var Swiper3 = new Swiper('#swiper-container3',{
                control: [Swiper1, Swiper2],
            })
        }else{
            var Swiper1 = new Swiper('.news-swiper-img',{
                spaceBetween : 20,
                centeredSlides : true,
                autoplay:5000,
                autoplayDisableOnInteraction : false,
                slideToClickedSlide:true,
            })
            var Swiper2 = new Swiper('.news-swiper-txt',{
                autoHeight: true,
                pagination : '.news-swiper-txt .swiper-pagination',
                prevButton:'.swiper-btn .swiper-button-prev',
                nextButton:'.swiper-btn .swiper-button-next',
                paginationClickable :true,
                paginationBulletRender: function (swiper, index, className) {
                    return '<span class="' + className + '" style="width:' + _width + '"><em>0' + (index + 1) + '</em></span>';
                },
                onSwiperCreated: function(mySwiper){
                    if($.browser.msie&&($.browser.version === "9.0")){
                        var $_pageLen = $(".J-index-banner .pagination span");
                        $_pageLen.each(function(){
                            var $_index = $(this).index() + 1;
                            $(this).html('0'+$_index);
                        })
                    }
                }
            })
            Swiper1.params.control = Swiper2;
            Swiper2.params.control = Swiper1;
            var Swiper3 = new Swiper('#swiper-container3',{
                control: [Swiper1, Swiper2],
            })
        }

    }
    newsSwiper();

    function publicitySwiper(){
        if($(window).width() > 768){
            var Swiper1 = new Swiper('.publicity-container-1',{
                slidesPerView :1,
                spaceBetween : 20,
                grabCursor:true,
                direction: 'vertical',
                speed:300,
                noSwiping : true,
            });
            var Swiper2 = new Swiper('.publicity-container-1-1',{
                prevButton:'.swiper-button-prev-1',
                nextButton:'.swiper-button-next-1',
                slidesPerView :2,
                spaceBetween : 20,
                loop:false,
            });
            var Swiper3 = new Swiper('.publicity-container-1-2',{
                prevButton:'.swiper-button-prev-2',
                nextButton:'.swiper-button-next-2',
                slidesPerView :2,
                spaceBetween : 20,
                loop:false,
            });
            var Swiper4 = new Swiper('.publicity-container-1-3',{
                prevButton:'.swiper-button-prev-3',
                nextButton:'.swiper-button-next-3',
                slidesPerView :2,
                spaceBetween : 20,
                loop:false,
            });
            var Swiper5 = new Swiper('.publicity-container-1-4',{
                prevButton:'.swiper-button-prev-4',
                nextButton:'.swiper-button-next-4',
                slidesPerView :2,
                spaceBetween : 20,
                loop:false,
            });
            var Swiper6 = new Swiper('.publicity-container-1-5',{
                prevButton:'.swiper-button-prev-5',
                nextButton:'.swiper-button-next-5',
                slidesPerView :2,
                spaceBetween : 20,
                loop:false,
            });

        }else{
            var Swiper1 = new Swiper('.publicity-container-1',{
                slidesPerView :1,
                spaceBetween : 20,
                grabCursor:true,
                direction: 'vertical',
                speed:300,
                noSwiping : true,
            });
            var Swiper2 = new Swiper('.publicity-container-1-1',{
                prevButton:'.swiper-button-prev-1',
                nextButton:'.swiper-button-next-1',
                slidesPerView :1,
                spaceBetween : 20,
                loop:false,
            });
            var Swiper3 = new Swiper('.publicity-container-1-2',{
                prevButton:'.swiper-button-prev-2',
                nextButton:'.swiper-button-next-2',
                slidesPerView :1,
                spaceBetween : 20,
                loop:false,
            });
            var Swiper4 = new Swiper('.publicity-container-1-3',{
                prevButton:'.swiper-button-prev-3',
                nextButton:'.swiper-button-next-3',
                slidesPerView :1,
                spaceBetween : 20,
                loop:false,
            });
            var Swiper5 = new Swiper('.publicity-container-1-4',{
                prevButton:'.swiper-button-prev-4',
                nextButton:'.swiper-button-next-4',
                slidesPerView :1,
                spaceBetween : 20,
                loop:false,
            });
            var Swiper6 = new Swiper('.publicity-container-1-5',{
                prevButton:'.swiper-button-prev-5',
                nextButton:'.swiper-button-next-5',
                slidesPerView :1,
                spaceBetween : 20,
                loop:false,
            });
        };
        $(".leftNav").find("li").click(function(){
            $(this).addClass("active").siblings().removeClass("active");
            Swiper1.slideTo($(this).index(), 300, false);
        })
    }
    publicitySwiper();

    function aboutFun(){
        if($(".about-con").length > 0){
            var swiper = new Swiper('.about-news-swiper .swiper-container',{
                pagination:'.about-news-swiper .swiper-pagination',
                prevButton:'.about-news-swiper .swiper-button-prev',
                nextButton:'.about-news-swiper .swiper-button-next',
                autoplay:5000,
                spaceBetween : 20,
                loop:true,
            });
        }
    }
    aboutFun();

    $(".mobile-menu a").click(function(){
        if(!$(this).hasClass("active")){
            $(this).addClass("active");
            $(".header-nav").slideDown(150);
        }else{
            $(this).removeClass("active");
            $(".header-nav").slideUp(150);
        }
    })

    $(".company .switch-title dd").click(function(){
        let name = $(this).text()
        $('.specialH').show()
        $('.sub-title h4').text(name)
        $('.specialH a').text(name)
        $('.specialH a').attr('href',name == '公司概况' ? './companyInfo.html?ci=1' : './companyInfo.html?ci=6')
        $(this).addClass("active").siblings().removeClass("active");
        $(".company .switch-table .switch-table-item").eq($(this).index()).addClass("active").siblings().removeClass("active");
    })

    $(".gudong .switch-title dd").click(function(){
        let name = $(this).text()
        $('.sub-title h4').text(name)
        $(this).addClass("active").siblings().removeClass("active");
        $(".gudong .switch-table .switch-table-item").eq($(this).index()).addClass("active").siblings().removeClass("active");
    })

    $(".switch-title dl").each(function(){
        var _length = $(this).find("dd").length;
        if(_length >= 4){
            $(".switch-title").css('text-align','center');
            $(this).css('display','inline-block');
        }
    })

})



//当页面尺寸改变时执行
$(window).resize(function(){

});

