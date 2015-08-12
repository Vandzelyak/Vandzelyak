/**
 * Created by Lena on 12.08.2015.
 */

//variable declaration
var userNumber

//userNumber cyclic validation
do {
    userNumber = prompt ('Введите число > 100!', "");
} while (userNumber <= 100 && userNumber != null);
alert (' Отличная работа, ваше число ' + userNumber);

