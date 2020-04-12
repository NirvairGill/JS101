let munstersDescription = "the Munsters are CREEPY and Spooky.";

let capital = munstersDescription.split(' ').map(word => word.toLowerCase());
let firstWord = capital.shift();
firstWord = firstWord[0].toUpperCase() + firstWord.slice(1, firstWord.length);
capital.unshift(firstWord);
console.log(capital.join(' '));

/*
console.log(munstersDescription.charAt(0).toUpperCase() +
munstersDescription.slice(1 , munstersDescription.length).toLowerCase());
*/