/**
 * Created by Lena on 19.04.2016.
 */
var headerFix = document.getElementById('nav');

var headerFixBottom = headerFix.getBoundingClientRect().bottom + window.pageYOffset;

window.onscroll = function() {
    if (headerFix.classList.contains('fixed') && window.pageYOffset < headerFixBottom) {
        headerFix.classList.remove('fixed');
    } else if (window.pageYOffset > headerFixBottom) {
        headerFix.classList.add('fixed');
    }
};