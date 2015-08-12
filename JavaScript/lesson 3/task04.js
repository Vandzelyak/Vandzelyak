/**
 * Created by Lena on 12.08.2015.
 */

//variable initialization
var buzz = 'Buzz', fizz = 'Fizz', number, fizzBuzz = 'FizzBuzz';

//cyclic checking of numbers
for (number = 1; number <= 100; number++) {

    //checking numbers evenly divisible on 5 and on 3
    if (number % 3 == 0 && number % 5 == 0) {
        console.log(fizzBuzz);

    //checking numbers evenly divisible on 3
    } else if (number % 3 == 0) {
        console.log(fizz);

        //checking numbers evenly divisible on 5 and not on 3
    } else if (number % 5 == 0 && number % 3 != 0) {
        console.log(buzz);

        //result output
    } else {
        console.log(number);
    }
}