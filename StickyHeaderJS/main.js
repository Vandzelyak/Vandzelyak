/**
 * Created by Lena on 19.04.2016.
 */

var headerFix = document.getElementById('nav');

var headerFixTop = headerFix.getBoundingClientRect().bottom + window.pageYOffset;

window.onscroll = function() {
    if (headerFix.classList.contains('fixed') && window.pageYOffset < headerFixTop) {
        headerFix.classList.remove('fixed');
    } else if (window.pageYOffset > headerFixTop) {
        headerFix.classList.add('fixed');
    }
};

