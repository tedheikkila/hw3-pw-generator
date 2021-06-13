// JS for password generator, TWH, 6/13/21

// Initializing global array variables (LC, UC, nums, and special chars)
lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
specChars = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", "," ,"-", ".", "/", ":", ";", "<", "=", ">", "?","@", "[", "]", "^","_","`", "{", "|", "}", "~"]

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Writes password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
    // Asks user for desired password length (sets array length). Stores input in passwordLength
    function generatePassword() {
      var passwordLength = window.prompt("How many characters (8-128) would you like for your password's length?");

      // If user pressed Cancel at the start or leaves field blank then clicks OK, immediately end function and display guidance
      if (!passwordLength || passwordLength==="") {
      return "No password generated (please try again and enter a value at the first screen)";
      }

      // Do while loop creates recursion for multiple entries of bad data. Allows at one entry into loop
      // If user enters in a numerical value >= 8 and <= 128 or hits "Cancel" at any point the user exits the loop; else re-prompt for various scenarios
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

      // Use of confirmation window to inform user before she/he enters the four character type prompts
      var charConfirm = window.confirm("The next four screens are for character type selection. Selecting more OK's will result in a stronger password (please select at least one). Click OK to continue.")

      // Allows user to exit at this point if they desire
      if (!charConfirm) {
        return "No password generated (user cancelled operation)";
      }

      //sets vars (lowerCase2, etc) for if user clicks OK (true) or cancel (false) at each prompt
      var lowerCase2 = window.confirm("(1) Include lowercase? (Click OK to use lowercase letters. Click Cancel to not use lowercase letters)")
      var upperCase2 = window.confirm("(2) Include uppercase? (Click OK to use uppercase letters. Click Cancel to not use uppercase letters)")
      var numbers2 = window.confirm("(3) Include numbers? (Click OK to use numbers. Click Cancel to not use numbers)")
      var specChars2 = window.confirm("(4) Include special characters? (Click OK to use special characters. Click Cancel to not use special characters)")

      // if structure allow for uses of OK's/Cancels to include/not include global variable arrays; emptied array for each using else's if user selects Cancel
      // First if statement is a catch all for when user clicks Cancel at each prompt (at least one array is necessary to generate password so for user's future convenience lowerCase was selected)
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
      
      //Concat the selected arrays into a passwordArray
      var passwordArray = lowerCase2.concat(upperCase2, numbers2, specChars2);

      //Randomly sorts all values w/in passWordArray array using Fisher-Yates shuffle function (W3 reference)
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
      
      // Calls shuffle fxn and stores randomly shuffled array into randomPasswordArray
      var randomPasswordArray = shuffle(passwordArray)

      // Slices down the randomPasswordArray into the user's desired passwordLength of 8-128 chars (stores as slicedPasswordArray)
      var randomPasswordSliced = randomPasswordArray.slice(0, passwordLength)
      
      // Converts this sliced and randomized array into a string and display it w/out spaces in between the elements (stores as password)
      password = randomPasswordSliced.join("")
    
      // Console logs final result w/out errors (undefined, etc)
      console.log(password + "\n\nHave a good one")

      // Sends password variable back up to writePassword fxn for string value to be displayed onto page
      return password 
  }

}

// Adds event listener to generate button (on click)
generateBtn.addEventListener("click", writePassword);
