/**
 * Created by Lena on 15.09.2015.
 */

function reverseIt(data){

    if (typeof (data) == "string") {
        var arr = data.split("");
        return arr.reverse().join("");

    } else {
        if (typeof (data) == "number"){
            var arr = data.toString().split("");
            return +arr.reverse().join("");
        } else return data;
    }
}
