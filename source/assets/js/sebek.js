/* Drop down mobile nav */

// convert this to pure JavaScript
// then remove jQuery link as it won't be needed anymore.
$(document).ready(function () {
    $('body').addClass('js');

    $('#navMobile').click(function() {
        $('#navMain').toggleClass('active');
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
