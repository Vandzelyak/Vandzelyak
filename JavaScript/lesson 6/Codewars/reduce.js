/**
 * Created by Lena on 26.08.2015.
 */

// function to return the sum of the values in the passed in array
function sum(array) {
    return array.reduce(function(a, b) {
        return a + b;

    });
}