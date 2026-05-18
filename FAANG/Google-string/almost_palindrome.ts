function isPalindrome(s: string) {
  let leftp = 0;
  let rightp = s.length - 1;

  function checkForPalindrome(
    word: string,
    pointerl: number,
    pointerr: number,
  ) {
    while (pointerl < pointerr) {
      if (word[pointerl] !== word[pointerr]) {
        return false;
      }
      pointerl++;
      pointerr--;
    }
    return true;
  }
  while (leftp <= rightp) {
    if (s[leftp] !== s[rightp]) {
      return (
        checkForPalindrome(s, leftp + 1, rightp) ||
        checkForPalindrome(s, rightp - 1, leftp)
      );
    }
    leftp++;
    rightp--;
  }
  return true;
}

console.log(isPalindrome("abccdba"));
