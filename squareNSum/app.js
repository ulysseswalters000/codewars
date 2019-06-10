const squareSum = arr => {
  let sum = 0;
  let newArr = arr.map(elem => {
    elem *= elem;
    sum += elem;
  });
  return sum;
}

console.log(squareSum([1,2,3]));
