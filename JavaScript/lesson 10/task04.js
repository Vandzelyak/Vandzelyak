/**
 * Created by Lena on 08.09.2015.
 */


//creating a function to capitalize the first letter of every word in the string
function capitalizeFirstLetter(str) {

    //setting variable strArray. String will be splited by ' '
    var strArray = str.split(' ');

    //sorting out and structuring letters of the string
    for (var i = 0; i < strArray.length; i++) {

        //capitalizing first letter of every word in the string
        strArray[i] = strArray[i].charAt(0).toUpperCase() + strArray[i].substring(1);
    }

    //setting variable strResult. An array will be joined by ' '
    var strResult = strArray.join(' ');

    //return result
    return strResult;
}

//display result and run the function
console.log(capitalizeFirstLetter('the quick brown fox'));



