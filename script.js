// JS for password generator, TWH, 6/12/21


// Initializing global arrays (LC, UC, nums, and special chars)
lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
specChars = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", "," ,"-", ".", "/", ":", ";", "<", "=", ">", "?","@", "[", "]", "^","_","`", "{", "|", "}", "~"]

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
    // Asks user for password length and sets the array length. Stores in passwordLength variable
    function generatePassword() {
      var passwordLength = window.prompt("How many characters (8-128) would you like for your password's length?");

      // If user pressed Cancel at start, immediately end function
      if (!passwordLength) {
      return "No password generated (please enter a value and try again)";
      }

      // Do while loop creates recursion for multiple entries of bad data
      // If user enters in numerical value >= 8 and <= 128 or hits "Cancel" at any point in loop continue on; else re-prompt for various scenarios
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


      // If statements to add arrays of LC's, UC's, numeric, and special chars
      // Get random array by using random sort function
      // Use splice to cut array down based upon specified pw length
      // ok prompt means using that array (true); cancel means not using array (false)
    
      var charConfirm = window.confirm("The next four screens are for character type selection. Selecting more OK's will result in a stronger password (please select at least one). Click OK to continue.")

      if (!charConfirm) {
        return "No password generated (cancelled operation)";
      }

      //passwordArray, passwordLength, char type selectors as if statements
      var lowerCase2 = window.confirm("(1) Include lowercase? (Click OK to use lowercase letters. Click Cancel to not use lowercase letters)")
      var upperCase2 = window.confirm("(2) Include uppercase? (Click OK to use uppercase letters. Click Cancel to not use uppercase letters)")
      var numbers2 = window.confirm("(3) Include numbers? (Click OK to use numbers. Click Cancel to not use numbers)")
      var specChars2 = window.confirm("(4) Include special characters? (Click OK to use special characters. Click Cancel to not use special characters)")


      // Using OK's/Cancels to include/not include relevant arrays; emptied array for each using else's if selected cancel (returns false)
        if (lowerCase2 === true || lowerCase2 ===false && upperCase2 ===false && numbers2 ===false && specChars2===false) {
        lowerCase2 = lowerCase 
      } else lowerCase2 = []
      
      if (upperCase2 === true) {
        upperCase2 = upperCase
      } else upperCase2 = []
      
      if (numbers2 === true) {
        numbers2 = numbers
      } else numbers2 = []
      
      if (specChars2 === true) {
        specChars2 = specChars
      } else specChars2 = []
      

      //Concat the resulting arrays
      var passwordArray = lowerCase2.concat(upperCase2, numbers2, specChars2);

      // console.log(passwordArray.length)

      //Randomly sort passWordArray array using Fisher-Yates shuffle
      function shuffle() {
          var m = passwordArray.length, t, i;
          while (m) {
            i = Math.floor(Math.random() * m--);
            t = passwordArray[m];
            passwordArray[m] = passwordArray[i];
            passwordArray[i] = t;
          }
          return passwordArray;
        }
      
      var randomPasswordArray = shuffle(passwordArray)

      // console.log(randomPasswordArray)
      // console.log(passwordLength)

      //Splice down to size of entered value into (splicedPasswordArray)
      var randomPasswordSliced = randomPasswordArray.slice(0,passwordLength)
      
      // console.log(randomPasswordSliced)


      //Turn the final array into a string and display it
      password = randomPasswordSliced.join("")
    
      console.log(password)

      return password
  }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
