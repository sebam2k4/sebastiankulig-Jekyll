/* Drop down mobile nav */
$(document).ready(function () {
    $('body').addClass('js');

    $('#mobile-nav').click(function() {
        $('#main-nav').toggleClass('active');
    });

/* highlight nav links based on url */
    $(function () {
        if ((location.pathname.split("/")[1]) !== "") {
            $('#main-nav ul li a[href*="/' + location.pathname.split("/")[1] + '"]').addClass('current');
        } else {
            $('#main-nav ul li a#nav-home').addClass('current');
        }
    });

});
