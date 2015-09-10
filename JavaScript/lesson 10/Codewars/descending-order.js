/**
 * Created by Lena on 10.09.2015.
 */

function descendingOrder(n){
    return Number(n.toString().split('').sort(function(a, b) {return b - a;}).join(''));
}

console.log(descendingOrder(1254859723));