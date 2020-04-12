let object = { first: [1] };
let numArray = object["first"];
numArray.push(2);

console.log(numArray); //  => "[1, 2]"
console.log(object);  // => { first: [1, 2] }. Since numArray is the reference to the original object array, mutating numArray will
// will affect object as well.