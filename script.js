// Assignment Code
var generateBtn = document.querySelector("#generate");

//password criteria
function generatePassword(){
  var length = prompt("Choose a lenghth between 8-128 characters long.");
  var upperCase = prompt("Would you like to use upper case letters?");
  var lowerCase = prompt("Would you like to use lowercase letters");
  var numeric = prompt ("Would you like to use numeric characters?");
  var special = prompt ("Would you like to use special characters?");
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
