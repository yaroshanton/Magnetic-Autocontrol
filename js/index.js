$(document).ready(function () {

    $('.section_menu .anchor, .header_text a').click(function (event) {
        event.preventDefault();
        $('.header_button_burger').find('.fa').addClass('fa-bars');
        $('.header_button_burger').find('.fa').removeClass('fa-times');
        $('.section_menu').hide();
        $('body').css('overflow', '');
        slowScroll($(this).attr('href'));
        i = 1;
    });

    $('.scroll_batton').click(function (event) {
        event.preventDefault();
        slowScroll($(this).attr('href'));
    });

    function slowScroll(id) {
        var offset = 0;
        $('html, body').animate({
            scrollTop: $(id).offset().top - offset
        }, 1000);
        return false;
    }

});