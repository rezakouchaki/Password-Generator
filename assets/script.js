
//Assignment Code + Event Listener to prompt questions when button pushed
document.querySelector("#generate").addEventListener("click", writePassword);


// Various Arrays 
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?", "~"];
var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Variable Declaration 
var confirmLength = "";
var confirmSpecialCharacter;
var confirmNumericCharacter;
var confirmUpperCase;
var confirmLowerCase;

// Prompt to confirm how many characters the user would like in their password
function generatePassword() {

  var confirmLength = (prompt("How many characters would you like your password to contain ( Must be a NUMBER between 8 to 128 )?"));

  // Loop if answer is outside the range 
  while (confirmLength <= 7 || confirmLength >= 129) {
    window.alert("Password length must be a NUMBER between 8 to 128 characters Try again");
    var confirmLength = (window.prompt("How many characters would you like your password to contain?"));
  }
  // Loop to make sure the answer is a NUMBER not alphabet or special character or a mix!
  while (confirmLength > 7 && confirmLength < 129) {

    // Repeat back how many charactes the user will have  
    window.alert(`Your password will have ${confirmLength} characters`);

    // Determine parameters of password 
    var confirmSpecialCharacter = window.confirm("Click OK to confirm if you would like to include special characters");
    var confirmNumericCharacter = window.confirm("Click OK to confirm if you would like to include numeric characters");
    var confirmLowerCase = window.confirm("Click OK to confirm if you would like to include lowercase characters");
    var confirmUpperCase = window.confirm("Click OK to confirm if you would like to include uppercase characters");

    // Loop if answer is outside the parameters 
    while (confirmUpperCase === false && confirmLowerCase === false && confirmSpecialCharacter === false && confirmNumericCharacter === false) {
      window.alert("You must choose at least one parameter");
      var confirmSpecialCharacter = window.confirm("Click OK to confirm if you would like to include special characters");
      var confirmNumericCharacter = window.confirm("Click OK to confirm if you would like to include numeric characters");
      var confirmLowerCase = window.confirm("Click OK to confirm if you would like to include lowercase characters");
      var confirmUpperCase = window.confirm("Click OK to confirm if you would like to include uppercase characters");
    }

    // Assign an action to the password parameters 
    var passwordCharacters = []

    if (confirmSpecialCharacter) {
      passwordCharacters = passwordCharacters.concat(specialChar);
    }

    if (confirmNumericCharacter) {
      passwordCharacters = passwordCharacters.concat(number);
    }

    if (confirmLowerCase) {
      passwordCharacters = passwordCharacters.concat(alphaLower);
    }

    if (confirmUpperCase) {
      passwordCharacters = passwordCharacters.concat(alphaUpper);
    }

    // Empty string to be filled based on for loop selecting random characters from the array
    var randomPassword = ""

    for (var i = 0; i < confirmLength; i++) {
      randomPassword += passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];

    }
    return randomPassword;
  }
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordContent = document.querySelector("#password");

  passwordContent.value = password;
}