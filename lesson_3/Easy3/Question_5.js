
function isColorValid(color) {
  if (color === "blue" || color === "green") {
    return true;
  } else {
    return false;
  }
}

console.log(isColorValid('red'));

// First way

function isColorValidNow(color) {
 return (color === 'blue' || color === 'green');
}

console.log(isColorValidNow('green'));

// Second way

const isColorStillValid = color => (color === 'blue' || color === 'green');

console.log(isColorStillValid('blue'));

// Third way

const isColorValidAgain = color => ['blue', 'green'].includes(color);

console.log(isColorValidAgain('green'));