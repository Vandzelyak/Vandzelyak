/**
 * Created by Lena on 16.08.2015.
 */

//function for string reducing initialization
var string = function (string) {

    //string will be reduced if it is longer than 20 symbols
    if (string.length > 20) {
        return string.substr(0, 20) + "...";
    }
    else return string;
}

//result output
console.log(string ("Honorificabilitudinitatibus"));