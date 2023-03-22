import $ from "jquery";

$(function(){
    // best item tab
    $('main .bestItem .tab li').on('click', function(){
        $(this).addClass('active').siblings().removeClass('active');
    });

    // top button
    $('aside.top button').on('click', function(e){
        $('html, body').animate({scrollTop: '0'}, 400, 'linear');
    })
})