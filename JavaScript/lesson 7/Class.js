/**
 * Created by Lena on 25.08.2015.
 */

/*
function identity(i) {
    return i;
}
*/
/*
function add (a, b) {
    return a+b;
}

function mul (c, d) {
    return c*d;
}
*/
/*
var idf = identityf(3);

function identityf (i) {
    return function () {
        return i;
    }
}

console.log(idf()); // 3
*/

/*
function addf(x) {
    return function(y) {
        return x + y;
    };
}
var a = addf (5);

a

function anonymous (y);
*/

var addf2 = applyf(add);

function applyf (binary) {
    return function (x) {
        return function (y) {
            return binary (x)(y);
        }
    }
}


console.log(addf2(3)(4)); //7
console.log(applyf(mul)(3)(4)); //12