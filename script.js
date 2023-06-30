// Assignment Code
var generateBtn = document.querySelector("#generate");

// Array of characters
var upperCaseLetters =  ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var numericArray = ["0","1","2","3","4","5","6","7","8","9"]

var specialArray = ["~","!","@","#","$","%","^","&","*","(",")","_","-","+","=","?","/","'", "<",">",",",".","[","]","{","}","|"]


function userSelection(){
// Prompts for user options
  var length = parseInt(window.prompt ("Choose a length between 8-128 characters long."));
  console.log(length);

  if (length < 8 || length > 128 || !length) {
    alert ("Password length must be between 8 and 128 characters long.");
    return userSelection();
  }// return if length criteria is not met 
  
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
    return userSelection();
  }// return if criteria is not met 
}

//select random index
function randomIndex(array){
var randIndex = Math.floor(Math.random() * array.length);
console.log(randIndex);

var randElement = array[randIndex];
console.log(randElement);
return randElement;
}

function generatePassword(){
//vars to plug into functions
var options = userSelection();
var result = [];
var roughCharacters = [];
var finalCharacter = [];

//function to randomize character selections
if (options.upperCase){
  roughCharacters = roughCharacters.concat(upperCaseLetters);
  finalCharacter.push(randomIndex(upperCaseLetters));
  console.log(finalCharacter);
  console.log(roughCharacters);
}

if (options.lowerCase){
  roughCharacters = roughCharacters.concat(lowerCaseLetters);
  finalCharacter.push(randomIndex(lowerCaseLetters));
  console.log(finalCharacter);
  console.log(roughCharacters);
}

if (options.numeric){
  roughCharacters = roughCharacters.concat(numericArray);
  finalCharacter.push(randomIndex(numericArray));
  console.log(finalCharacter);
  console.log(roughCharacters);
}

if (options.special){
  roughCharacters = roughCharacters.concat(specialArray);
  finalCharacter.push(randomIndex(specialArray));
  console.log(finalCharacter);
  console.log(roughCharacters);
}

//for loop function to generate password based off random index
for (var i = 0; i < options.length; i++){
  var randomCharacter = randomIndex(roughCharacters);
  console.log(randomCharacter);
  result.push(randomCharacter);
console.log(result);
}

for (var i = 0; i < finalCharacter.length; i++){
  result[i] = finalCharacter[i];
  console.log(finalCharacter);
}
return result.join("");
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
