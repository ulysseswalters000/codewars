const monkeyCount = num => {
  /*
  * .from() takes two args, first is an iterable object. in this case
  * it defines the array length as equal to number.
  * the second arg is a map function, '_' ignores maps first arg (the element)
  * and provides the second arg as the index.
  * in this case, from index 0 + 1 for the length of numbers (num)
  */
  return Array.from({length: num}, (_,i) => i + 1);
}

console.log(monkeyCount(10));
