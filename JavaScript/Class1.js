/**
 * Created by Lena on 10.09.2015.
 */

/*
var arr = ['link', 'menu', 'menu__item', 'menu__item', 'header', 'link', 'footer', 'sidebar', 'link' ];

function unique (array) {
    var result = [];
}

while  (array.length) {
    var thisElement = array [0];

    if (!result[thisElement]) {
        result[thisElement] = 1;
    }
    else {
        result[thisElement]++;
    }
    array.splice(0, 1);
}
*/

var arr = ['link', 'menu', 'menu__item', 'menu__item', 'header', 'link', 'footer', 'sidebar', 'link' ];

function unique (array) {
    var result = [];
}

for (var i=0; i<array.length; i++) {
    if (result [array [i]]) {
        result[array[i]] = 1;
    }

    else {
        result[array[i]]++;
    }
}
console.log (result);

for (var i=0; i<result.length; i++){

}



unique (arr);