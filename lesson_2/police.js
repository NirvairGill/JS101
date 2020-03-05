/* Input:

1. range 1-7;
2. Assign random number to each department 
3. total should be 12
4. police even number



output: All combinations of possible outcomes;
*/

// create an array of number 1 to 7
// iterare over array 
// for each number iterate over array again
// for each number again iterate over array and Assign even number to police
// check all three conditions if true return all three numbers,
let arr = [1,2,3,4,5,6,7]
/*for (let i = 1; i <= arr.length; i += 1) {
  for (let j = 1; j <= arr.length; j += 1) {
    for (let k = 1; k <= arr.length; k += 1) {
      if ((k % 2 === 0) && (i !== j !== k) && (i + j + k === 12)) {
        console.log(`fire: ${i}, sanitation: ${j}, police: ${k}`);
        
      }
    }
  }
}
*/
arr.forEach(i => {
  arr.forEach(j => {
    arr.forEach(k => {
      if (k % 2 === 0 && i !== j !== k && i + j + k === 12) {
        console.log(`fire: ${i}, sanitation: ${j}, police: ${k}`);
      }
    });
  });
});