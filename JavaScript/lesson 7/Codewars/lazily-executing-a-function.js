/**
 * Created by Lena on 26.08.2015.
 */

var make_lazy = function (a) {
    return a.bind.apply( a, arguments )
};