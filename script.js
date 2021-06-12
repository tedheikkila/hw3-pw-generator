// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

    // Asks user for password length
    function generatePassword() {
      var passwordLength = window.prompt("How many characters (8-128) would you like for your password's length?");

    // If user pressed Cancel, immediately end function
    if (!passwordLength) {
    return;
    }

    // For loop creates recursion for multiple entries of bad data
    // If user enters in numerical value >= 8 and <= 128 continue on; else re-prompt for various scenarios
    var i = 0
    do {
      if (passwordLength>=8 && passwordLength<=128) {
        i++;
      } else if (passwordLength===null) {
        i++
      } else if (passwordLength<8) {
        passwordLength = window.prompt("Please enter a value greater than or equal to 8");
      } else if (passwordLength>128) {
        passwordLength = window.prompt("Please enter a value less than or equal to 128");
      } else {
        passwordLength = window.prompt("Please enter a numerical value between 8 and 128");
      } 
    } while (i<1)

    // Create the letter, numeric, and special char arrays; If statements to confirm use of LC's, UC's, numeric, and special chars
    // The inputted number sets the array size; each if inserts specified data type 

    console.log(passwordLength)
    









  }





}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
