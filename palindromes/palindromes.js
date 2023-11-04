/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x < 0) {
    return false; // Negative numbers are not palindromes
  }

  const strX = x.toString();
  const reversedStrX = strX.split('').reverse().join('');

  return strX === reversedStrX;  
};