/**
 * Created by Lena on 10.08.2015.
 */
//variable initialization
var name = prompt('Enter name: admin, manager', ''), text;

//name validation
text = (name == 'admin') ? 'Hi' :
    (name == 'manager') ? 'Hello' :
        (name == '') ? 'No login' :
            '';
alert(text);


