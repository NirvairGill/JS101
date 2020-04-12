//'f65c57f6-a6aa-17a8-faa1-a67f2dc9fa91'.
// let char = '0123456789abcdef';

// function hexaDecimalGenerator (times) {
//   let hexaDecimalStr = '';
//   for (let i = 0; i < times; i += 1) {
//      hexaDecimalStr += char[Math.floor(Math.random() * 16)];
//     }
//     return hexaDecimalStr;
//   }
// function dash () {
//   return '-';
// }

// function uuidGenerator () {
//   let result = '';
//   result += hexaDecimalGenerator(8);
//   result += dash();
//   result += hexaDecimalGenerator(4);
//   result += dash();
//   result += hexaDecimalGenerator(4);
//   result += dash();
//   result += hexaDecimalGenerator(4);
//   result += dash();
//   result += hexaDecimalGenerator(12);
// return result;
// }

// console.log(uuidGenerator());


function evenValues(array) {
  let evens = [];

  array.forEach(value => {
    if (value % 2 === 0) {
      evens.push(value);
    }
    array.shift();
  });

  return evens;
}

evenValues([1, 3, 4, 2, 4, 6, 5, 7, 9, 10, 12]);