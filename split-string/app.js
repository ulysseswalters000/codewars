function solution(str) {
  let arr = [];
  for(let i = 0; i < str.length; i += 2) {
    arr.push(str.slice(i, i + 2));
  }
  let lastStrIndex = arr.length - 1;
  if(arr[lastStrIndex].length % 2 === 1) {
    arr[lastStrIndex] = arr[lastStrIndex].concat('_');
  }
  return arr
}

console.log(solution("abc"));
console.log(solution("abcd"));
console.log(solution("abcde"));
