const monkeyCount = num => {
  return Array(num)
    .fill()
    .map((elem) => {
      return num--;
    })
    .reverse();

}

console.log(monkeyCount(10));
