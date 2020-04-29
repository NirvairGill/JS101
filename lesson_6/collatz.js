function collatz (n) {
  //let steps = 0;
  if (n === 1) {
   return 0;
  } else if (n % 2 === 0) {
    return  1 + collatz(n /= 2);

  } else if (n % 2 === 1) {
    return 1 + collatz((3 * n) + 1);

  }
  return n;
}

console.log(collatz(7));