[1, 2, 3].every(num => {
  return num *= 2;
});

// The return value of the callback should be 2,4,6 which is truthy
// for the every element of the given array so .every will return true.