// output string with next line indented
//algo..
// create a padding to the string
//Run a loop 10 times
// log the string and increment padding by 1;

let str = 'The Flintstones Rock!';

for (let padding = str.length; padding < str.length + 10; padding += 1) {

  console.log(str.padStart(padding, ' '));
}
