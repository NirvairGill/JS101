let a = 2;
let b = [5, 8];
let arr = [a, b]; // [2, [5, 8]]

arr[0] += 2; // [4, [5, 8]]
arr[1][0] -= a; // [4, [3, 8]]

console.log(a); // => 2 because primitive values are immutable
console.log(b); // => [3, 8] because we mutated the inside array.