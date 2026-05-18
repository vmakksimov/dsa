function longestSubstringWithoutRepeatOptimized(s: string) {
  //pwwkew
  let finalString = {} as any;
  let maxLength = 0;
  let leftIndex = 0;
  let rightIndex = 0;

  if (s.length === 0) return 0;
  if (s.length === 1) return 1;

  // We loop based on the right side of the window
  while (rightIndex < s.length) {
    let char = s[rightIndex];

    // 1. If we found a duplicate that is WITHIN our current window
    if (char in finalString && finalString[char] >= leftIndex) {
      // Jump the left side to the position AFTER the previous occurrence
      leftIndex = finalString[char] + 1;
    }

    // 2. Always record the index of the current character
    finalString[char] = rightIndex;

    // 3. Calculate length without Object.keys (Math is faster)
    let currLength = rightIndex - leftIndex + 1;
    
    if (currLength > maxLength) {
      maxLength = currLength;
    }

    // 4. Move to the next character
    rightIndex++;
  }
  
  return maxLength;
}

function lengthOfLongestSubstringTHEFASTEST(s: string): number {
    let left = 0, right = left, maxLength = 0;
    const subStrMap = new Map<string, number>();

    while (right < s.length){
      const currentChar = s[right]
      if (subStrMap.has(currentChar)){
        left = Math.max((subStrMap.get(currentChar) +1), left)
      }

      subStrMap.set(currentChar,  right)
      maxLength = Math.max(right - left +1, maxLength)
      right++;
    }

    return maxLength;
}

function longestSubstringWithoutRepeat(s: string) {
  // assume all are lowercase
  // contigoues
  // characters in one substring should be unique

  // anviaj
  let finalString = {} as any;
  let currLength = 0;
  let maxLength = 0;
  for (let i = 0; i <= s.length - 1; i++) {
    for (let j = i; j <= s.length - 1; j++) {
      if (!finalString[s[j]]) {
        finalString[s[j]] = true;
        currLength++;
      } else {
        break;
      }
    }
    finalString = {};
    maxLength = maxLength < currLength ? currLength : maxLength;
    currLength = 0;
  }
  return maxLength;
}

console.log(longestSubstringWithoutRepeatOptimized("pwwkew"));
