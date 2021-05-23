/*
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
*/


// Array of special characters to be included in password
var specialCharacters = [
  '@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')',
  '(','}','{',']','[','~','-','_','.',
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P',
  'Q','R','S','T','U','V','W','X','Y','Z',
];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a','b','c','d','e','f','g','h','i','j','k','l','m',
  'n','o','p','q','r','s','t','u','v','w','x','y','z',
];

var password = [];
var arr = [];
var passArray = [];

// button variable
var generateBtn = document.querySelector("#generate");

// function to get random characters
function generatePassword() {

  var passArrLength = Number(prompt ("How many characters would you like? (Min of 8)."));
    if (Number.isNaN(passArrLength)) {
      alert ("You must enter a number.");
      return "Please try again.";
    }

  var arrCaps = confirm ("Do you want to include upper case letters in your password?");
    if (arrCaps === true) {
      arr = arr.concat(upperCasedCharacters);
    } 

  var arrLow = confirm ("Do you want to include lower case letters in your password?");
    if (arrLow === true) {
      arr = arr.concat(lowerCasedCharacters);
    }
  
  var arrNum = confirm ("Do you want to include numbers in your password?");
    if (arrNum === true) {
      arr = arr.concat(numericCharacters);
    }

  var arrSpec = confirm ("Do you want to include special characters in your password?");
    if (arrSpec === true) {
      arr = arr.concat(specialCharacters);
    }

  for (let i=0; i < passArrLength; i++ ) {
  var randomIndex = Math.floor(Math.random() * arr.length);
    passArray.push(arr[randomIndex]);
    
  }
  return passArray.join("");
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;


}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
