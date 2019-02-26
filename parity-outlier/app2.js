function findOutlier(integers) {
  let oddNums = [];
  let evenNums = [];
  for( var i = 0; i < integers.length; i++) {
    (integers[i] % 2 === 0)
      ? evenNums.push(integers[i])
      : oddNums.push(integers[i])
  }
  return (oddNums.length === 1)
    ? oddNums[0]
    : evenNums[0]
}

findOutlier([0,1,2]); // expected 1
findOutlier([1,2,3]); // exprected 2
findOutlier([2,6,8,10,3]); // expected 3
findOutlier([0,0,3,0,0]); // expected 3
findOutlier([1,1,0,1,1]); // expected 0
