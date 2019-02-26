function solution(str) {
  return (str + '_').match(/../g)
}

console.log(solution("abc"));
console.log(solution("abcd"));
console.log(solution("abcde"));
