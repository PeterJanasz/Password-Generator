// Assignment Code
var generateBtn = document.querySelector("#generate");

// Array of characters
var upperCaseLetters =  ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var numericArray = ["0","1","2","3","4","5","6","7","8","9"]

var specialArray = ["~","!","@","#","$","%","^","&","*","(",")","_","-","+","=","?","/","'", "<",">",",",".","[","]","{","}","|"]


function userSelection(){
// Prompts for user options
  var length = window.prompt ("Choose a lenghth between 8-128 characters long.");
  console.log(length);

  if (length < 8 || length > 128) {
    alert ("Password length must be between 8 and 128 characters long.");
    return;
  }
  var criteria = window.alert ("Must choose one of the following criteria.");
  console.log(criteria);
  var upperCase = window.confirm ("Would you like to use upper case letters?");
  console.log(upperCase);
  var lowerCase = window.confirm ("Would you like to use lowercase letters");
  console.log(lowerCase);
  var numeric = window.confirm ("Would you like to use numeric characters?");
  console.log(numeric);
  var special = window.confirm ("Would you like to use special characters?");
  console.log(special);

  //Validate user input 
  if (!upperCase && !lowerCase && !numeric && !special){
    alert("Must choose at least one character type!");
    return;
  }
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
