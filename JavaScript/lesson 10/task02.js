/**
 * Created by Lena on 08.09.2015.
 */

//creating a function for searching for a maximum number in array
function getMaxNumber(arr){
    var varMax = 0;

    //sorting out and structuring an array, which function took
    for (var count = 0; count < arr.length; count++){
        varMax = (arr[count] > varMax) ? arr[count] : varMax;
    }
    return varMax;
}

//display results
console.log(getMaxNumber([1 , 30, 40, 2, 7])); // 40
console.log(getMaxNumber([1, 15, -20, 2, -7])); // 15