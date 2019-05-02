$(document).ready(function () {
    $('div#click').toggle(
        function () {
            $('div#ccc').slideDown('fast').show();
            $('div#click').removeClass('bbb').addClass('aaa');
        },
        function () {
            $('div#ccc').slideDown('fast').hide();
            $('div#click').removeClass('aaa').addClass('bbb');
        });
    });