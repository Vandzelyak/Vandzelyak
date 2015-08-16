/**
 * Created by Lena on 16.08.2015.
 */

/* Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each.
If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

 Write a function that will take the number of petals of each flower and return true if they are in love and false if
 they aren't.?
 */

//function initialization
function loveFunc (flower1, flower2) {

    //if two flowers summary have an even number of petals, it`s not love
    if((flower1+flower2)%2 === 0)
        return false;

    //if two flowers summary have an odd number of petals, it is love
    return true;
}