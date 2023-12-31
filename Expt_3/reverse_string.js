function reverseString() {
  const inputString = document.getElementById("reverseString").value;
  const reversedString = inputString.split("").reverse().join("");
  document.getElementById("reversedResult").textContent = `Reversed String: 
 ${reversedString}`;
}

function replaceCharacters() {
  const inputString = document.getElementById("replaceString").value;
  const replaceChar = document.getElementById("replaceChar").value;
  const replacementChar = document.getElementById("replacementChar").value;

  const replacedString = inputString.replace(
    new RegExp(replaceChar, "g"),
    replacementChar
  );
  document.getElementById("replacedResult").textContent = `Replaced String: 
 ${replacedString}`;
}

function checkPalindrome() {
  const inputString = document.getElementById("palindromeString").value;
  // remove all characters that are not letters (a-z, A-Z) or digits (0-9)
  const cleanedString = inputString.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  const reversedString = cleanedString.split("").reverse().join("");

  const palindromeResult =
    // using strict equality operator (checks both the value and datatype)
    cleanedString === reversedString
      ? "The string is a palindrome."
      : "The string is not a palindrome.";
  document.getElementById("palindromeResult").textContent = palindromeResult;
}
