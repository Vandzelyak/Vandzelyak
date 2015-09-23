/**
 * Created by Lena on 11.09.2015.
 */

function meeting () {
    var result = [];
    for (var i = 0; i < arguments.length-1; i++) {
        var j = arguments [i];
        if (i%2!==0) {
            result.push(j.toUpperCase());
        }
        else {
            result.push (j);
        }
    }
    return result.join(arguments[arguments.length-1]);
}
    console.log (meeting ('vova', 'zhenya', 'nadya', 'lena', 'igor', '*'))