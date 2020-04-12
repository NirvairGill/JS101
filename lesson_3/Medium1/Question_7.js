let answer = 42;

function messWithIt(someNumber) {
  return (someNumber += 8);
}

let newAnswer = messWithIt(answer);

console.log(answer - 8); // => 34. Numbers are immutables and primitive values are pass by values and we are trying to chnage the primitive value.