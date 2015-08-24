/**
 * Created by Lena on 20.08.2015.
 */

/*
var obj = {
    className: 'open menu'
};

function addClass (obj, cls) {
    obj.new = 'cls';
}

addClass(obj, 'new'); // obj.className='open menu new'
addClass(obj, 'open'); // без изменений
addClass(obj, 'me'); // obj.className='open menu new me'

console.log( obj.className ); // "open menu new me"*/





/*
function toCamelStyle(string) {
    var newStringArray=string.split("-");
    console.log(newStringArray);
    for (var i = 1; i < newStringArray.length; i++) {
        var firstChar = newStringArray[i].substring(0,1);
        var newUpperChar = firstChar.toUpperCase();
        var lastPart = newStringArray[i].substring(1);
        //newStringArray[i] = newStringArray[i].substring(0).toUpperCase()+newString.substring(1);
        newStringArray[1] = newUpperChar + lastPart;
    }
    var result = newStringArray.join("")

    return newStringArray;
}
console.log(toCamelStyle("background-color"));

toCamelCase('background-color'); // 'backgroundColor';
toCamelCase('list-style-image'); // 'listStyleImage';
toCamelCase('-webkit-transition'); // 'WebkitTransition'; */



/*
var arr = ['Есть', 'жизнь', 'на', 'Марсе'];

var arrLengths = arr.map(function(arrayItem) {
    return arrayItem.length;
});

console.log( arrLengths ); // 4,5,2,5 */



/*
function sum() {
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
        sum = sum + arguments[i];
    }
    return sum;
}
console.log(sum(1, 2, 3, 4, 5));*/



var myDate=new Date(2015,1,25,2,17);
console.log(myDate);