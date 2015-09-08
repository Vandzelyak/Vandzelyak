/**
 * Created by Lena on 08.09.2015.
 */

//setting a string to sort
var str = 'webmaster';

function abc (str) {

    //sorting every letter of string in lexicographical order
    var arr = str.split('').sort().join('');

    //return sorted results
    return arr;
}
//display results
console.log(abc(str));