/**
 * Created by Lena on 16.09.2015.
 */

function meatChopper () {

    var result = [];
    for (var i = 0; i < arguments.length-2; i++) {
        var j = arguments [i];
        if (i>=1 && i%arguments [arguments.length-1] == 0) {
            result.push(j.toUpperCase());
        }
        else {
            result.push (j);
        }
    }
    return result.join(arguments[arguments.length-2]);
}
console.log (meatChopper ('bread', 'lower', 'milk', 'lower', 'upper', 'upper', 'soup', 'butter', '%', '4'))
