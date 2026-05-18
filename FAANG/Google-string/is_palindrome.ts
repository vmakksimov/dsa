function isPalindrome(s: string) {
  //A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

  let left = 0;
  const cleanedStr = s.toLowerCase().replace(/[^a-z0-9]/g, "");
  let right = cleanedStr.length - 1;

  while (left < right) {
    if (cleanedStr[left] !== cleanedStr[right]) return false;
    left++;
    right--;
  }
  return true;
}

console.log(isPalindrome("abccdba"));
