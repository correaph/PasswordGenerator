/* This function takes two arguments, passwordLength and characters2BeUsed,
   and generates a new random password */
function randomPassword(passwordLength, characters2BeUsed) {
    var password = "";
    for (var i = 0; i < passwordLength; i++) {
        var randomNumber = Math.floor(Math.random() * characters2BeUsed.length);
        password = password.concat(characters2BeUsed.charAt(randomNumber));
    }
    return password;
}
/*Validation for Password Length and Character Types.
  Checks passwword length is between 8 and 256.
  Check at least one character type is chosen*/
function isFormValid() {
    var returnV = false;
    var pwdLength = document.getElementById("passwordLength").value;
    if (pwdLength < 8 || pwdLength > 256) {
        alert("Pasword length must be between 8 and 256!");
    } if (!document.getElementById("upperCaseCharacters").checked
        && !document.getElementById("lowerCaseCharacters").checked
        && !document.getElementById("numericCharacters").checked
        && !document.getElementById("specialCharacters").checked) {
        alert("At least one type of character should be chosen!");
    } else {
        returnV = true;
    }
    return returnV;
}
/*This function will be triggered when button 'Generate Password' is clicked 
  if inputs are valid, creates a new string with all possible characters to be used,
  calls randomPassword(), and fills textarea 'password' with the new generated password */
function generatePassword() {
    if (isFormValid()) {
        var pwdLength = document.getElementById("passwordLength").value;
        var characters2BeUsed = "";
        if (document.getElementById("upperCaseCharacters").checked) {
            characters2BeUsed = characters2BeUsed.concat("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
        }
        if (document.getElementById("lowerCaseCharacters").checked) {
            characters2BeUsed = characters2BeUsed.concat("abcdefghijklmnopqrstuvwxyz");
        }
        if (document.getElementById("numericCharacters").checked) {
            characters2BeUsed = characters2BeUsed.concat("0123456789");
        }
        if (document.getElementById("specialCharacters").checked) {
            characters2BeUsed = characters2BeUsed.concat("!@#$%&*()-_+=|\/");
        }
        document.getElementById("password").value = randomPassword(pwdLength, characters2BeUsed);
        document.getElementById("copy").disabled = false;
    } else {
        document.getElementById("copy").disabled = true;
    }
}
/*Copy password content to the clipboard. This function is triggered when 
  'Copy to Clipboard' button is clicked */
function copy2Clipboard() {
    document.getElementById("password").select();
    document.execCommand('copy');
    alert("Password copied to clipboad!");
}