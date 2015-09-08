/**
 * Created by Lena on 08.09.2015.
 */

//creating an array of data for shuffling
arr = [1, 5, 6, 7, 8, 9, 10];

//creating a function to shuffle an array "arr"
function suffle (arr) {
    return Math.random () - 0.5;
}

//sorting an array with function "suffle"
arr.sort(suffle);

//display results
console.log(arr);