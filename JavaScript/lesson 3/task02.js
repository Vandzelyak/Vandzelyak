/**
 * Created by Lena on 12.08.2015.
 */

outputPrimeNumber:

//cyclic checking of numbers (1 is not prime number, so we start from 2)
    for (var i = 2; i < 10; i++) {

        //cycle checking of dividers
        for (var j = 2; j < i; j++) {

            //checking the remainder of division
            if (i % j == 0) continue outputPrimeNumber;
        }

        //showing results
        alert( i );
    }