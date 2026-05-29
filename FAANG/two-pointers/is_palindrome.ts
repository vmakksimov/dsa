function isPalindrome(s: string): boolean {
  let leftp = 0;
  const cleanedStr = s.toLowerCase().replace(/[^a-z0-9]/g, "");
    let rightp = cleanedStr.length - 1;
  while (leftp < rightp) {
    const a = cleanedStr[leftp];
    const b = cleanedStr[rightp];
    if (cleanedStr[leftp] !== cleanedStr[rightp]) {
      return false;
    }
    leftp++;
    rightp--;
  }
  return true;
}

console.log(isPalindrome("Was it a car or a cat I saw?"));
