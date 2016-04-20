/**
 * Created by Lena on 18.04.2016.
 */
var NavTop = $('.nav').offset().top;

$(window).scroll(function() {
    if ($(window).scrollTop() > NavTop) {
        $('.nav').css({
            position: 'fixed',
            top: '0px',
        });
    } else {
        $('.nav').css({
            position: 'static'
        });
    }
});
if (navigator.platform == 'iPad' || navigator.platform == 'iPhone' || navigator.platform == 'iPod' || navigator.platform == 'Linux armv6l')
{
    window.ontouchstart = function ()
    {
        $("#fixedDiv").css("display", "none");
    }

    window.onscroll = function()
    {
        var iPadPosition = window.innerHeight + window.pageYOffset-45; // 45 is the height of the Footer
        $("#fixedDiv").css("position", "absolute");
        $("#fixedDiv").css("top", iPadPosition);
        $("#fixedDiv").css("display", "block");
    }
}

