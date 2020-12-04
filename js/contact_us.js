$(document).ready(function () {

    $('.contact_form').submit(function () {
        var error = false;
        var inputs = $(this).find('input');
        $.each(inputs, function () {
            if ($(this).val().length == 0) {
                error = true;
                $(this).parent().addClass('blue_input');
                $(this).parent().prev().show();
                $(this).parent().find('.star').show();
            } else if ($(this).attr('type') == 'email' && isEmail($(this).val()) == false) {
                error = true;
                $(this).parent().addClass('blue_input');
                $(this).parent().prev().show();
                $(this).parent().find('.star').show();
            } else {
                $(this).parent().removeClass('blue_input');
                $(this).parent().prev().hide();
                $(this).parent().find('.star').hide();
            }
        });

        if (error == true) {
            return false;
        }
    });

    $('input').on('input change', function () {
        if ($(this).val().length == 0) {
            $(this).parent().addClass('blue_input');
            $(this).parent().prev().show();
            $(this).parent().find('.star').show();
        } else if ($(this).attr('type') == 'email' && isEmail($(this).val()) == false) {
            error = true;
            $(this).parent().addClass('blue_input');
            $(this).parent().prev().show();
            $(this).parent().find('.star').show();
        } else {
            $(this).parent().removeClass('blue_input');
            $(this).parent().prev().hide();
            $(this).parent().find('.star').hide();
        }
    });

    function isEmail(email) {
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(email);
    }

});