/**
 * Created by Lena on 24.08.2015.
 */

//an array creation
var arr = [1, 2, 3, 4, 5];

//the sort function used to mix up elements of the array in a random order
arr.sort(function() {
    return 0.5 - Math.random();
});

console.log( arr ); // result output: elements in a random order