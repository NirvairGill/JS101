/*
function messWithVars(one, two, three) {
  one = two;
  two = three;
  three = one;
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);
// Since massWithVars is not changing and returning any values,
// so we will get the following output:
console.log(`one is: ${one}`);  // => one is: one
console.log(`two is: ${two}`);  // => two is: two
console.log(`three is: ${three}`); // => three is: three


function messWithVars(one, two, three) {
  one = ["two"];
  two = ["three"];
  three = ["one"];
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);
// Again, massWithVars is not changing and returning any values,
// so we will get the following output:
console.log(`one is: ${one}`);  // => one is: one
console.log(`two is: ${two}`);  // => two is: two
console.log(`three is: ${three}`); // => three is: three
*/


function messWithVars(one, two, three) {
  one.splice(0, 1, "two");
  two.splice(0, 1, "three");
  three.splice(0, 1, "one");
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);
// It will produce the same ouput as the other two functions above for the
// same reason it's not returning or changing anything.
console.log(`one is: ${one}`);  // => one is: one
console.log(`two is: ${two}`);  // => two is: two
console.log(`three is: ${three}`); // => three is: three