/**
 * Created by Lena on 15.09.2015.
 */

var Calculator = {
    average: function() {
        var args = [].slice.apply(arguments), sum = 0;
        if (args.length > 0){
            for (var i = 0; i < args.length; i++){
                sum += args[i];
            }
            sum = sum / args.length;
        }
        return sum;
    }
}
