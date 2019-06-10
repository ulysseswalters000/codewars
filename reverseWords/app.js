// given a string, reverse words in that string preserving whitespace
const reverseWords = str => {
  return str.split(' ')
            .map( v => {return v.split('').reverse().join('');})
            .join(' ');
}

console.log(reverseWords('hello there paul'));
