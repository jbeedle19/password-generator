// Password options and variables
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["1", "2", "3", "4", "5", "7", "8", "9", "0"];
var characters = ["!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];
var passwordOptions;

// Start the function to generate a password
var  generatePassword = function() {
  // Ask how long of a password the user wants
  var passwordLength = window.prompt("How many characters would you like your password to contain? \n* Must contain between 8-128 characters *");
  // Need to change to Int since they will be entering a number for the prompt
  passwordLength = parseInt(passwordLength);

  // Make sure that the user doesn't leave this blank
  if (!passwordLength) {
    window.alert("You must enter a valid value!");
    return generatePassword();
  }
    // Make sure password is between 8 and 128 characters
    else if (passwordLength < 8 || passwordLength > 128) {
      passwordLength = window.alert("You must choose between 8 and 128 characters!");
      return generatePassword();
    }

    else {
      // Goes through prompts to confirm what the password will contain
      var includeLowercase = window.confirm("Would you like your password to contain lowercase letters?");
      var includeUppercase = window.confirm("Would you like your password to contain UPPERCASE letters?");
      var includeNumber = window.confirm("Would you like your password to contain numbers?");
      var includeCharacter = window.confirm("Would you like your password to contain characters");
    };

    // If user doesn't include any option, remind them to pick at least one
    if (!includeLowercase && !includeUppercase && !includeNumber && !includeCharacter) {
      passwordOptions = window.alert("You must choose at least one option!");
      return generatePassword();
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

    // Password generated with 2 options selected
    else if (includeLowercase && includeUppercase) {
      passwordOptions = lowercase.concat(uppercase);
    }
    else if (includeLowercase && includeNumber) {
      passwordOptions = lowercase.concat(numbers);
    }
    else if (includeLowercase && includeCharacter) {
      passwordOptions = lowercase.concat(characters);
    }
    else if (includeUppercase && includeNumber) {
      passwordOptions = uppercase.concat(numbers);
    }
    else if (includeUppercase && includeCharacter) {
      passwordOptions = uppercase.concat(characters);
    }
    else if (includeNumber && includeCharacter) {
      passwordOptions = numbers.concat(characters);
    }

    // Password generated with 1 option selected
    else if (includeLowercase) {
      passwordOptions = lowercase;
    }
    else if (includeUppercase) {
      passwordOptions = uppercase;
    }
    else if (includeNumber) {
      passwordOptions = numbers;
    }
    else if (includeCharacter) {
      passwordOptions = characters;
    };

    // Create variable for password and an array placeholder for what the length of the password will be
    var password = [];
    
    //Use Math.random to randomize password options/variables
    for (i = 0; i < passwordLength; i++) {
      var pickOptions = passwordOptions[Math.floor(Math.random() * passwordOptions.length)];
      password.push(pickOptions); 
    }

    // Join the password array and convert it into a string
    var passJoin = password.join("");
    return passJoin;
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