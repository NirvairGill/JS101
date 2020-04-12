let arr = [1, 2, 3, 4, 5];
arr.fill(1, 1, 10);

// The .fill() method changes all the values in the array into the given static
// value from the given starting to given ending index.
// Yes, array.fill() is a destructive method. When we console.log the
// arr after, we get the modified array.