/**
 * Created by Lena on 08.09.2015.
 */

//creating a function to to find the longest word in the string
function longestWord(str) {

    var longest = '';
    var compare = str.split(' ');

    //sorting every word of string, finding the longest and assigning to it the name 'longest'
    for (var i = 0; i < compare.length; i += 1) {
        if (compare[i].length > longest.length) {
            longest = compare[i];
        };
    };

    //return sorted results
    return longest;
};

//display results
console.log (longestWord('Web Development Tutorial'));