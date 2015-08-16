/**
 * Created by Lena on 16.08.2015.
 */
/*In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

 Example:

 makeNegative(1); // return -1
 makeNegative(-5); // return -5
 makeNegative(0); // return 0
 */


//function initialization
function makeNegative(num) {

//if number is positive, it turns into negative.
// other way it stays negative
    return num < 0 ? num : -num;
}