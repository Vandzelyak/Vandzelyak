/**
 * Created by Lena on 02.09.2015.
 */

//using the method reduce to arguments
function sumArgs() {
    arguments.reduce = [].reduce;
    return arguments.reduce(function(a, b) {
        return a + b;
    });
}
alert( sumArgs(1, 2, 3) );

//using the "call"
function sumArgs() {

    //reduce runs directly from the array
    return [].reduce.call(arguments, function(a, b) {
        return a + b;
    });
}
alert( sumArgs(4, 5, 6) );