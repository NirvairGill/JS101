function first() {
  return {
    prop1: "hi there"
  };
}

function second() {
  return 
  {
    prop1: "hi there"
  };
}

console.log(first());
console.log(second());

// No, the escond function returns the undefined. Since there are no semicolons after return statement,
// javascript engine will insert semilcolon after ending of every line. It would result in returning undefined.