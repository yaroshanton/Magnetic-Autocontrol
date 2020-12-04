$(document).ready(function () {
    var i = 1;
    $('.header_button_burger').click(function (event) {
        event.preventDefault();
        if (i % 2) {
            $(this).find('.fa').removeClass('fa-bars');
            $(this).find('.fa').addClass('fa-times');
            $('.section_menu').show();
            $('body').css('overflow', 'hidden');
        } else {
            $(this).find('.fa').addClass('fa-bars');
            $(this).find('.fa').removeClass('fa-times');
            $('.section_menu').hide();
            $('body').css('overflow', '');
        }
        i++;
    });

});