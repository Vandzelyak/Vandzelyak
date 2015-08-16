/**
 * Created by Lena on 16.08.2015.
 */

//variable initialization
var n = prompt('Enter a number to find out is it odd or even', '');

//checking if it`s a number
n = parseInt(n);

//if it`s not a number
if (isNaN(n))
{
    alert('You should actually enter some number');
}

//if it`s 0
else if (n == 0)
{
    alert('It`s zero!');
}

//output for the odd number
else if (n%2)
{
    alert('This number is odd');
}

//output for the even number
else
{
    alert('This number is even');
}
