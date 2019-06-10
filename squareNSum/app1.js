// refactored code using Array.prototype.reduce()
// reduce takes 2 args here, accumulator and its currentvalue
// iterates through the array and for each item, applies the math

const squareSum = arr => {
  return arr.reduce((sum, n) => {
    return (n * n) + sum;
  })
}

console.log(squareSum([1,2,3]));
