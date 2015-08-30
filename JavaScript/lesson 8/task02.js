/**
 * Created by Lena on 29.08.2015.
 */

//constructor Calculator, which creates expandable objects-calculators

function Calculator() {

    //creating methods for calculator`s operations
    var methods = {
        "-": function(a, b) {
            return a - b;
        },
        "+": function(a, b) {
            return a + b;
        }
    };

    //processing of data received
    this.calculate = function(str) {

        var split = str.split(' '),
            a = +split[0],
            op = split[1],
            b = +split[2];

        //error situation
        if (!methods[op] || isNaN(a) || isNaN(b)) {
            return NaN;
        }

        return methods[op](+a, +b);
    };

    //method addMethod (name, func), which teaches calculator of a new operation
    this.addMethod = function(name, func) {
        methods[name] = func;
    };
}

var calc = new Calculator;

//addMethod method receives the name of the operation "name" and function of two arguments "func (a, b)",
// which is to implement it.

//adding the operation to multiply, divide and raised to the power:
calc.addMethod("*", function(a, b) {
    return a * b;
});
calc.addMethod("/", function(a, b) {
    return a / b;
});
calc.addMethod("**", function(a, b) {
    return Math.pow(a, b);
});

var result = calc.calculate("2 ** 3");

console.log(result); //8

console.log( calc.calculate("3 + 7") ); //10