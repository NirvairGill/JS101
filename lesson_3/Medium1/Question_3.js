function factors(number) {
  if (number <= 0) {
    console.log('This number is not valid!');
  }
  let divisor = number;
  let factors = [];
  while (divisor > 0) {
    if (number % divisor === 0) {
      factors.push(divisor);
    }
    divisor -= 1;
  }

return factors;
}

console.log(factors(48));

// The purpose of numbers % divisor === 0 is to find out if the divisor is a
// factor or not.