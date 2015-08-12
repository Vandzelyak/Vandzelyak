/**
 * Created by Lena on 12.08.2015.
 */

//function for calculating pow n number x initialization
function pow (x, n) {

    //variable initialization
    var number = x;

    //multiplication cycle x*x for n times
    for (i = 1; i < n; i++) {

        //multiplication
        number = number * x;}

    //result output
    document.write (number);
}

//the value of variables
pow (3, 6);