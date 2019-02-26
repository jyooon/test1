/**
 * Created by akahaydn on 2019. 2. 2..
 */

// list page header 스크롤에 따라 반응함.

$(function () {
    var lastScrollTop = 0,
        delta = 15;
    $(window).scroll(function (event) {
        var st = $(this).scrollTop();
        if (Math.abs(lastScrollTop - st) <= delta) return;
        if ((st > lastScrollTop) && (lastScrollTop > 0)) {
            $(".list .header").css("top", "-144px");
        } else {
            $(".list .header").css("top", "0px");
        }
        lastScrollTop = st;
    });
});


// detail page header 스크롤에 따라 반응함.

$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    //console.log(scroll);
    if (scroll >= 50) {
        //console.log('a');
        $(".detail .header").addClass("navScroll");
    } else {
        //console.log('a');
        $(".detail .header").removeClass("navScroll");
    }
});
