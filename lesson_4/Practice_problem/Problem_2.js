let arr = [1, 2, 3].map(num => {
  num * num;
});

// .map always perform transformation according the value of the callback
// And callback here returns undefined since there is no explicit return defined
// in the callback and map does not care about the truthiness of the function.
// So, we'll get [undefined, undefined, undefined]
console.log(arr);