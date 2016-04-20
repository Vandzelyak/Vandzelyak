/**
 * Created by Lena on 20.04.2016.
 */
$(window).scroll(function() {
    if ($(this).scrollTop() > 1) {
        $('header').addClass("sticky");
        $('article').addClass("sticky");
    } else {
        $('header').removeClass("sticky");
        $('article').removeClass("sticky");
    }
});