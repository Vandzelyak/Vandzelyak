/**
 * Created by Lena on 16.08.2015.
 */

//Given an input n, write a function always that returns a function which returns n.

/*  var three = always(3);
    three(); */

//function initialization
function always (n) {

    //return a function that returns n
    return function() {
        return n;
    };
}