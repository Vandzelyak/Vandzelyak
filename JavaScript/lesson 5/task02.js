/**
 * Created by Lena on 19.08.2015.
 */

//an object creating
var image = {
    width: 100,
    height: 400,
    title: 'Cool image'
};

//creating function multiplyNumeric for transforming numeric items
function multiplyNumeric(image) {

    //searching for numeric items, after - multiplying them
    for( var key in image) {

        //checking if the item is numeric - multiplying it
        if(!isNaN(image[key])) image[key] = image[key] * 2;
    }
    //result return
    return image;
}

//result output
console.log(multiplyNumeric(image));

//OR

//an object creating
var image = {
    width: 100,
    height: 400,
    title: 'Cool image'
};

//multiplying object`s parameter "width"
image.width *= 2;

//multiplying object`s parameter "height"
image.height *= 2;

//result output
console.log(image);