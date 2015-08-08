/**
 * Created by Lena on 08.08.2015.
 */
//variable declaration
var integerNumber;
//variable initialization
integerNumber = prompt('¬ведите любое целое число:', '');
//operations if else
if (integerNumber == null || integerNumber == '')
    alert ('Ќужно было ввести число :(');
else if (integerNumber > 0)
    alert( '1 - значение больше нул€' );
else if (integerNumber < 0)
    alert( '-1 - значение меньше нул€' );
else if (integerNumber == 0)
    alert( '0 - значение равно нулю' );
else
    alert ('Ёто же не число! :0');