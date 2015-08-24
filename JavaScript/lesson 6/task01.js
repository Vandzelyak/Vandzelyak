/**
 * Created by Lena on 22.08.2015.
 */

//an object creation
var obj = {
    className: 'open menu'//object`s property, which maintains a list of css class names - words separated by spaces
};

//function for removing the class 'cls', if there is one
function removeClass(obj, cls) {
    var arr = obj.className.split(' ');
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == cls) {
            arr.splice(i, 1);
            i--;
        }
    }
    obj.className = arr.join(' ');

    console.log (obj.className);
}


removeClass(obj, 'open');  // obj.className = 'menu'
removeClass(obj, 'blabla'); // без изменений