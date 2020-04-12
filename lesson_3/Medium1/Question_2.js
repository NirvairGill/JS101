// Split into an array and iterate.
// if the letter is lowercase then change them to upper case . Else lowercase.


let munstersDescription = "The Munsters are creepy and spooky.";

console.log(munstersDescription.split('').map(char => {

  if (char === char.toLowerCase()) {
    return char.toUpperCase();
  } else {
    return char.toLowerCase();
  }
}).join(''));