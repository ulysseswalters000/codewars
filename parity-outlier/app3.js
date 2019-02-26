// Another better implementation

// The slice() method returns a shallow copy of a portion of an array into a
// new array object selected from begin to end (end not included).
// The original array will not be modified.

// The filter() method creates a new array with all elements that
// pass the test implemented by the provided function.

// The find() method returns the value of the first element in the array that
// satisfies the provided testing function. Otherwise undefined is returned.

// this takes the given array and looks at the first 3 items
// if the first three array items pass the even test function
// find the length
// if the even numbers length is greater or equal to 2...
// there is only one odd number and return that
// else there is only one even number and return that
function findOutlier(integers){
  return integers.slice(0,3).filter(even).length >=2 ? integers.find(odd) : integers.find(even);
}

// tests whether the number has a remainder of 0 when divided by 2
// (aka is even)
function even(num){
  return (num % 2 == 0);
}
// test whether the number is not even. could also be (num % 2 === 1)
function odd(num){
  return !even(num)
}

findOutlier([0,1,2]); // expected 1
findOutlier([1,2,3]); // exprected 2
findOutlier([2,6,8,10,3]); // expected 3
findOutlier([0,0,3,0,0]); // expected 3
findOutlier([1,1,0,1,1]); // expected 0
