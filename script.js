// Assignment Code
var generateBtn = document.querySelector("#generate");

//password criteria
function generatePassword(){
  
  var length = prompt ("Choose a lenghth between 8-128 characters long.");
  var criteria = confirm ("Must choose one of the following criteria.");
  var upperCase = confirm ("Would you like to use upper case letters?");
  var lowerCase = confirm ("Would you like to use lowercase letters");
  var numeric = confirm ("Would you like to use numeric characters?");
  var special = confirm ("Would you like to use special characters?");
}

//validate criteria

if (length < 8 || length > 128) {
  alert ("Password length must be between 8 and 128 characters long.");
  return;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
