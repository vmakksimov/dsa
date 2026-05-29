/**
 * @param {string[]} strs
 * @returns {string}
 */
function encode(strs: string[]) {
  //We can use an encoding approach where we start with a number representing the length of the string,
  // followed by a separator character (let's use # for simplicity), and then the string itself.
  //  To decode, we read the number until we reach a #,
  //  then use that number to read the specified number of characters as the string.
  let finalString = "";
  for (const word of strs) {
    finalString += `${word.length}#${word}`;
  }
  return finalString;
}

/**
 * @param {string} str
 * @returns {string[]}
 */
function decode(str: string) {
    let counter = 0;
  const finalString: string[] = [];
  while (counter < str.length) {
    let j = counter;
    
    // 1. Move j until it finds the '#' character
    while (str[j] !== "#") {
      j += 1;
    }
    
    // 2. Now j is exactly at '#'. 
    // The characters between 'counter' and 'j' represent the length.
    let length = parseInt(str.slice(counter, j));
    
    // 3. Extract the actual word (skipping the '#')
    const wordStart = j + 1;
    const wordEnd = wordStart + length;
    finalString.push(str.slice(wordStart, wordEnd));
    
    // 4. Move the counter to the start of the next encoded segment
    counter = wordEnd;
  }
  
  return finalString;
}

const wordforEncoding = encode(["Hello", "World"]);
const decoded = decode(wordforEncoding);
console.log(decoded);
