/**
 * Created by Lena on 26.08.2015.
 */

function createFunctions(n) {
    var callbacks = [];

    for (var i = 0; i < n; i++) {
        (function (val){
            callbacks.push(function() {
                return val;
            });
        })(i);
    }
    return callbacks;
}