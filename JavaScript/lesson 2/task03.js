/**
 * Created by Lena on 08.08.2015.
 */
//variable declaration
var userName;
var userPassword ;

//userName initialization
userName = prompt ('Enter login','');

//userName validation
if (userName == null)
{alert ('Canceled');}
else if (userName == '')
{alert ('Please enter your login')}
else if (userName == 'admin')

//userPassword initialization
{userPassword = prompt ('Enter password','');

    //userPassword validation
    if (userPassword == null)
    {alert ('Canceled');}
    else if (userPassword == '')
    {alert ('Please enter your password')}
    else if (userPassword == 'passw0rd')
    {alert ('Welcome home!')}
    else
    {alert ('Wrong password')}}
else
{alert ('Access denied')}