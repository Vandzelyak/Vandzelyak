/**
 * Created by Lena on 08.08.2015.
 */
//variable declaration
var integerNumber;
//variable initialization
integerNumber = prompt('������� ����� ����� �����:', '');
//operations if else
if (integerNumber == null || integerNumber == '')
    alert ('����� ���� ������ ����� :(');
else if (integerNumber > 0)
    alert( '1 - �������� ������ ����' );
else if (integerNumber < 0)
    alert( '-1 - �������� ������ ����' );
else if (integerNumber < 0)
    alert( '0 - �������� ����� ����' );
else
    alert ('��� �� �� �����! :0');