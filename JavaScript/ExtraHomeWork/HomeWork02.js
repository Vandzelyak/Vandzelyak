/**
 * Created by Lena on 16.09.2015.
 */

function meatChopper () {

    var result = [];
    for (var i = 0; i < arguments.length-1; i++) {
        var j = arguments [i];
        if (j == 'LOWER') {
            result.push(j.toLowerCase());
        }
        else if (j == 'upper')
        {
            result.push (j.toUpperCase());
        }
        else {
            result.push (j);
        }
    }
    return result.join(arguments[arguments.length-1]);
}
console.log (meatChopper ('bread', 'LOWER', 'milk', 'LOWER', 'upper', 'upper', 'soup', 'butter', '%', '4'))
