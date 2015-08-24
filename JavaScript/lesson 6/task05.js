/**
 * Created by Lena on 24.08.2015.
 */

//creating a function isPal for finding palindromes
function isPal(string) {

    //breaking and sorting out the string
    var letterArray = string.toLowerCase().split('');

    for (i=0; i<letterArray.length; i++) {
        if (letterArray[i] == [' ']) {
            letterArray.splice(i,1);
        }
    }

    //checking if string is palindrome
    var reversLetterArray = letterArray.slice().reverse();
    if (reversLetterArray.join('') == letterArray.join('')) {
        return true;
    }
    else {
        return false;
    }
}

console.log(isPal('Anna')); // true
console.log(isPal('А роза упала на лапу Азора')); //true
console.log(isPal('Вася')); //false
console.log(isPal('12321')); //true
console.log(isPal('123212')); //false