/**
 * Created by Lena on 19.08.2015.
 */

//an array creation
var result = 0;

//starting cycle of saving entered numbers
do {

    //entering numbers by user
    var number = +prompt('Enter a number ', null);

    //completing the array with new numbers
    if (number != null) {
        result.push(number);
    }

    //cycling while user enters numbers
} while (number);

//result output
console.log(result);

//OR

//an array creation
var numberArray = [];

//starting cycle of saving entered numbers
while (true) {

    //entering numbers by user
    var number = +prompt('Enter a number ');

    //saving numbers stops if enter null, space or NaN
    if (number == '' || number == null || isNaN(number)) break;

    //completing the array with new numbers
    numberArray.push(+number);
}

//structuring number array
var result = 0;
for (var i = 0; i < numberArray.length; i++) {
    result += numberArray[i];
}
//result output
alert ('Your sum is ' + result);