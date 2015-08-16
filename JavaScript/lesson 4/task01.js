/**
 * Created by Lena on 14.08.2015.
 */

//By definition, the first two numbers in the Fibonacci sequence are either 1 and 1, and each subsequent number is
// the sum of the previous two.
// F(n) = F(n-1) + F(n-2)

//variable initialization
var fib = function(n) {

    //calculation of the sum of the two previous numbers
    return n > 1 ?  fib(n - 1) + fib(n - 2) : n;
};

//result output
alert(fib(8));