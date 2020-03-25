/*TODO: Get name (usrName), surname (usrSurname) and fav color (usrColor) from user.
Combine the 3 strings with a random number (rndNumber) and generate a string (usrPwd)
Then print the generate password in the id passwordResult*/

var usrName;
var usrSurname;
var usrColor;
var rndNumber;
var usrPwd;

//1 Get the name

usrName = prompt("What's your name?");

//2 Get the second name

usrSurname = prompt("And your Surname?");

//3 Get the favorite color

usrColor = prompt("One last question: tell me your favourite color.");

//4 Get the random number, integer between 1 to 99

rndNumber = Math.floor(Math.random() * 10);

//5 Concatenate usrName usrSurname usrColor and rndNumber

usrPwd = usrName + usrSurname + usrColor + rndNumber;

//6 Print usrPwd to passwordResult

document.getElementById('passwordResult').innerHTML = usrPwd;
