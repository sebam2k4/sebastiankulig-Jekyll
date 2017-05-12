/* Drop down mobile nav show/hide  need to update this so navigation pushes the header down*/
$(document).ready(function () {
    $('body').addClass('js');
    var $menu = $('#main-nav'),
        $menulink = $('#mobile-nav');

    $menulink.click(function () {
        $menulink.toggleClass('active');
        $menu.toggleClass('active');
        return false;
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
