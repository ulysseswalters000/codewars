// refactor because i didnt know you could pass the index to map,
// making the solution easier
// made use of math pow as well
const expandedForm = num => {
  return num.toString()
          .split('')
          .reverse()
          .map((num, index) => num * Math.pow(10, index))
          .filter(num => num > 0)
          .reverse()
          .join(" + ");
}
console.log(expandedForm(12));
console.log(expandedForm(42));
console.log(expandedForm(70304));
