let numbers = [1, 2, 3, 4];

// First way
numbers.splice(0, numbers.length);

// Second way
while (numbers.length > 0 ) {
  numbers.pop();
}

// Third way
do {
  numbers.shift();
} while (numbers.length > 0);

// Forth way
numbers = numbers.slice(numbers.length);

// Fifth way
numbers = [];

//sixth way
numbers.length = 0;

console.log(numbers);

