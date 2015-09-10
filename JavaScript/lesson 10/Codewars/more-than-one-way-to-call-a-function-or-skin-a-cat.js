/**
 * Created by Lena on 10.09.2015.
 */

function sum(a, b){
    if (typeof b === "undefined") {
        return function (b) {
            return a + b;
        };
    }
    return a + b;
}