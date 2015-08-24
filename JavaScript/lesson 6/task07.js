/**
 * Created by Lena on 24.08.2015.
 */

//creating an array
var arr = ['воз', 'киборг', 'корсет', 'ЗОВ', 'гробик', 'костер', 'сектор'];

//creating a function anClean (arr), which returns an array of words, cleaned of anagrams.
function anClean(arr) {

    //creating an array and sorting it to find anagrams
    var sortedObj = {};
    for (var i = 0; i < arr.length; i++) {
        var sortedArray = arr[i].toLowerCase().split('').sort().join('');
        sortedObj[sortedArray] = arr[i];
    }

    //pushing results into an array with no anagrams in it
    var result = [];
    for (var key in sortedObj) {
        result.push(sortedObj[key]);
    }
    return result;
}
console.log( anClean(arr) ); // 'ЗОВ,гробик,сектор'