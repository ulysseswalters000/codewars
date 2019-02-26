function towerBuilder(nFloors) {
  // build here
  let space = "";
  let star = "";
  let tower = [];
  // want to start with 1 so that we can multiply on the first iteration
  for ( var i = 1; i <= nFloors; i++) {
    space = (" ").repeat(nFloors - i);
    star = ("*").repeat((2 * i) - 1);
    tower.push(`${space}${star}${space}`);
  }
  return tower;
}
console.log(towerBuilder(3));
console.log(towerBuilder(6));
console.log(towerBuilder(24));
