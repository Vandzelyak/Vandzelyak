/**
 * Created by Lena on 26.08.2015.
 */

//function getMissingElement to accept an array of unique integers between 0 and 9 (inclusive)
//and return the missing element
function getMissingElement(superImportantArray){
    for (var i = 0; i <= 9; i++){
        if (superImportantArray.indexOf(i) === -1){
            return i
        }
    }
}

console.log(getMissingElement([0, 5, 1, 3, 2, 9, 7, 6, 4]));// 8
console.log(getMissingElement([9, 2, 4, 5, 7, 0, 8, 6, 1]));//3