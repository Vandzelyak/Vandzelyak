/**
 * Created by Lena on 15.09.2015.
 */

function add() {
    var args = [].slice.apply(arguments);
    if (args.length > 0){
        for (var i = 0; i < args.length; i++){
            args[i] = args[i] * (i + 1);
        }
        return args.reduce(function(a, b) {return a + b;})
    } else {
        return 0;
    }
}