let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};

let sum = Object.values(munsters).reduce(((acc, val) => {
  if ( val.gender === 'male') {
  return acc + val.age;
}
return acc;
}
),0);
console.log(sum);

// let objValue = Object.values(munsters);

//let totalMaleAge = 0;
// for (let i = 0; i < objValue.length; i += 1) {
// if (objValue[i]['gender'] === 'male') {
//   totalMaleAge += objValue[i]['age'];
// }

// }



// for (let person in munsters) {
//   if (munsters[person]['gender'] === 'male') {
//     totalMaleAge += munsters[person]['age']
//   }
// }
// console.log(totalMaleAge);