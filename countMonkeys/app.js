const monkeyCount = num => {
  let arr = [];
  for(var i = 1; i < num + 1; i++){
    arr.push(i);
  }
  return arr;
}

console.log(monkeyCount(10));
