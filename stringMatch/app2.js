// refactor using spread operatior and sets.
// new set takes iterable objects and only returns unique instances of each
// this allows the function to only return one letter if there are duplicates.
// the spread operator then takes the set and sets it to comma separated values
// inside of the [] (making it an array)
const now = require('performance-now');
const longest = (str1, str2) => {
  return [...new Set(str1 + str2)].sort().join('');
}
let t0 = now().toFixed(3);
console.log(longest('abcd', 'aefg'));
let t1 = now().toFixed(3);
console.log(`completed in ${(t1 - t0).toFixed(3)}ms`);
console.log(longest('aaaaaaaa', 'bbbbbb'));
