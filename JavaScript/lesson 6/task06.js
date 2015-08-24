/**
 * Created by Lena on 24.08.2015.
 */

//creating an object
var strings = ['кришна', 'кришна', 'харе', 'харе', 'харе', 'харе', 'кришна', 'кришна', '8-()' ];

//creating a function unique(arr) to return an array that contains only unique elements arr (arr - array of strings).
function unique(arr) {
    var unique = []
    for (var i = 0; i < arr.length; i++) {
        if (unique.indexOf(arr[i]) == -1) {
            unique.push(arr[i]);
        }
    }
    return unique;
}
console.log(unique(strings)); // кришна, харе, 8-()
