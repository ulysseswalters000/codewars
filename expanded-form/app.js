const expandedForm = num => {
   let count = 1;
   return `${num.toString().split('').reverse().map( v => {
      v *= count ;
      count *= 10;
      return v;
   }).filter( v => v > 0).reverse().join(' + ')}`;
  }
console.log(expandedForm(12));
console.log(expandedForm(42));
console.log(expandedForm(70304));
