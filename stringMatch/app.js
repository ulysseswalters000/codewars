//  a function that takes two strings as args
// it returns the longest sorted combination of unique characters from both strings.
// ex: str1 = abcd; str2 = aefg; // returns abcdefg
const now = require('performance-now');
const longest = (str1, str2) => {
  let joinedString = `${str1}${str2}`
  let found = [];
  for (var i = 0; i < joinedString.length; i++) {
    if (!found.includes(joinedString[i])) {
      found.push(joinedString[i]);
    }
  }
  return found.sort().join('');
}
let t0 = now().toFixed(3);
console.log(longest('abcd', 'aefg'));
let t1 = now().toFixed(3);
console.log(`completed in ${(t1 - t0).toFixed(3)}ms`);
console.log(longest('aaaaaaaa', 'bbbbbb'));
