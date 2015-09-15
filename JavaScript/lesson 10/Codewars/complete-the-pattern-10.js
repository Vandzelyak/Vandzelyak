/**
 * Created by Lena on 15.09.2015.
 */

function pattern(n){
    var output=" ";

    if (n > 0){
        for (var i = 1; i <= n; i++){
            for (var key = 1; key <= n - i; key++){
                output += " ";
            }
            for (var key_01 = 1; key_01 <= n; key_01++){
                output += key_01 % 10;
            }
            for (var key_02 = 1; key_02 <= i - 1; key_02++){
                output += " ";
            }
            output += "\n"
        }
    }
    return output.slice(0, output.length-1);
}