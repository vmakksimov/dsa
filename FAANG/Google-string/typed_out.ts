
// function typedOutString(s: string, t: string) {
//   // # - is deleteting 1 character backwards if two ## delete 2 characters and so on...
//   // if no character behind # - nothing to delete
//   // Case sensitivity matter? - yes
//   // two empty string equal? - yes
//   function checkStrings(s: string) {
//   let finalS = ''
//    let counter = 0
//   for (let i = s.split("").length - 1; i >= 0; i--) {
//     if (s[i] !== "#" && counter <= 0){
//         finalS += s[i]
//     } else if (s[i] === '#') {
//         counter += 1
//     } else if (s[i] !== '#' && counter > 0){
//         counter -= 1
//     }
//   }

//   return finalS;

// };
//   const buildStringsS = checkStrings(s)
//   const buildSstringsT = checkStrings(t);
//   return buildSstringsT === buildStringsS
// }

function typedOutString(s: string, t: string): boolean {
  let i = s.length - 1;
  let j = t.length - 1;

  function getNextValidIndex(str: string, index: number): number {
    let skip = 0;

    while (index >= 0) {
      if (str[index] === "#") {
        skip++;
        index--;
      } else if (skip > 0) {
        skip--;
        index--;
      } else {
        break;
      }
    }

    return index;
  }

  while (i >= 0 || j >= 0) {
    i = getNextValidIndex(s, i);
    j = getNextValidIndex(t, j);

    if (i < 0 && j < 0) return true;
    if (i < 0 || j < 0) return false;

    if (s[i] !== t[j]) return false;

    i--;
    j--;
  }

  return true;
}

console.log(typedOutString("a#c", "b")); // false
