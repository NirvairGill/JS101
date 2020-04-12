let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

let objValues = Object.values(obj).join().split('');
objValues.forEach(char => {
  if ('aeiou'.includes(char)) {
    console.log(char);
  }
} );


