// Assignment code here


// Get references to the #generate element
const numbers = "0123456789";
const symbols = "1@#$%^&*_-+=";
const alpha = "abcdefghijklmnopqrstuvwxyz";
const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const password_ele= document.getElementById("password");
const length = document.getElementById("length");
const IncNumbers= document.getElementById("numbers");
const IncSymbols = document.getElementById("symbols");
const uppercase = document.getElementById("uppercase");
var generateBtn = document.getElementById("generate");
document.getElementById("password").value = "password";

// Add event listener to generate button
generateBtn.addEventListener("click", () =>{
  let chars = alpha;
  IncNumbers.checked ? (chars += numbers) :"";
  IncSymbols.checked ? (chars += symbols) :"";
  uppercase.checked ? (chars += upper) :"";
  password_ele.value = writePassword(length.value, chars);
} );

// Write password to the #password input
const writePassword = (length, chars) => {
  let password = "";
  for (let i = 0; i < length; i++) {
    password += chars.charAt(
      Math.floor(Math.random() * chars.length)
    );
  }
  return password;
}






