// Assignment Code
var generateBtn = document.querySelector("#generate");

//password criteria
function generatePassword(){
  
  var length = window.prompt ("Choose a lenghth between 8-128 characters long.");
  console.log(length)
  var criteria = window.alert ("Must choose one of the following criteria.");
  console.log(criteria)
  var upperCase = window.confirm ("Would you like to use upper case letters?");
  console.log(upperCase)
  var lowerCase = window.confirm ("Would you like to use lowercase letters");
  console.log(lowerCase)
  var numeric = window.confirm ("Would you like to use numeric characters?");
  console.log(numeric)
  var special = window.confirm ("Would you like to use special characters?");
  console.log(special)

  //Validate user input logic
  if (length < 8 || length > 128) {
    alert ("Password length must be between 8 and 128 characters long.");
    return;
  }

  if (!upperCase && !lowerCase && !numeric && !special){
    alert("Must choose at least one character type!")
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
