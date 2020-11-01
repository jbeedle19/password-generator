// Assignment code here

// Password options and variables
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["1", "2", "3", "4", "5", "7", "8", "9", "0"];
var characters = ["!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];
var passwordOptions;

// Start the function to generate a password
var generatePassword = function() {
  // Ask how long of a password the user wants
  var passwordLength = window.prompt("How many characters would you like your password to contain? \n* Must contain between 8-128 characters *");
  // Need to change to Int since they will be entering a number for the prompt
  passwordLength = parseInt(passwordLength);

  // Make sure that the user doesn't leave this blank
  if (!passwordLength) {
    window.alert("You must enter a value!");
  }
    // Make sure password is between 8 and 128 characters
    else if (passwordLength < 8 || passwordLength > 128) {
      passwordLength = window.prompt("You must choose between 8 and 128 characters!");
      passwordLength = parseInt(passwordLength);
    }

    else {
      // Goes through to confirm what the password will contain
      var includeLowercase = window.confirm("Would you like your password to contain lowercase letters?");
      var includeUppercase = window.confirm("Would you like your password to contain UPPERCASE lettes?");
      var includeNumber = window.confirm("Would you like your password to contain numbers?");
      var includeCharacter = window.confirm("Would you like your password to contain characters");
    };

    // If user doesn't include any option, remind them to pick at least one
    if (!includeLowercase && !includeUppercase && !includeNumber && !includeCharacter) {
      passwordOptions = window.alert("You must choose at least one option!");
    }

    // Password generated with all 4 options selected
    else if (includeLowercase && includeUppercase && includeNumber && includeCharacter) {
      passwordOptions = lowercase.concat(uppercase, numbers, characters);
    }

    // Password generated with 3 options selected
    else if (includeLowercase && includeUppercase && includeNumber) {
      passwordOptions = lowercase.concat(uppercase, numbers);
    }
    else if (includeLowercase && includeUppercase && includeCharacter) {
      passwordOptions = lowercase.concat(uppercase, characters);
    }
    else if (includeLowercase && includeNumber && includeCharacter) {
      passwordOptions = lowercase.concat(numbers, characters);
    }
    else if (includeUppercase && includeNumber && includeCharacter) {
      passwordOptions = uppercase.concat(numbers, characters);
    }

    // Pass

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
