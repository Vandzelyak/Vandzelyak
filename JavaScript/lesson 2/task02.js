/**
 * Created by Lena on 08.08.2015.
 */

//variable declaration
var integerNumber;

//variable initialization
integerNumber = prompt('Введите любое целое число:', '');

//operations if else
if (integerNumber == null || integerNumber == '')
    alert ('Нужно было ввести число :(');
else if (integerNumber > 0)
    alert( '1 - значение больше нуля' );
else if (integerNumber < 0)
    alert( '-1 - значение меньше нуля' );
else if (integerNumber == 0)
    alert( '0 - значение равно нулю' );
else
    alert ('Это же не число! :0');