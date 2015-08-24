/**
 * Created by Lena on 24.08.2015.
 */

//an array creation
var arr = ["HTML", "JavaScript", "CSS"];

//modification of the array and sorting
var arrSorted = arr.slice().sort();

console.log( arrSorted );// CSS, HTML, JavaScript
console.log( arr ); // HTML, JavaScript, CSS (без изменений)

//OR

//an array creation
var arr = ["HTML", "JavaScript", "CSS"];

//combining values and sorting an array
var arrSorted = arr.concat().sort();

console.log( arrSorted );// CSS, HTML, JavaScript
console.log( arr ); // HTML, JavaScript, CSS (без изменений)