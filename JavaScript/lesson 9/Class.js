/**
 * Created by Lena on 01.09.2015.
 */


function work(a) {
    return a * 2;
}
// work - произвольная функция, один аргумент

function doubleString (a) {
    return a + a;
}

function makeLogging(f, log) {

 function wrap(a) {

log.push (a);
     return f.call (this.a);
}
    return wrap;
}

var log = [];
var logString = [];

work = makeLogging(work, log);
doubleString = makeLogging(doubleString, logString);

work(1); // 1, добавлено в log
work(5); // 5, добавлено в log

doubleString ('Безысходность');
doubleString ('Печалька');

console.log(log); // [1,5]
console.log (logString);