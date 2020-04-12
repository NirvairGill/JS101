let nanArray = [NaN];

// eslint-disable-next-line use-isnan
console.log(nanArray[0] === NaN);  // => False. NaN compared with NaN returns false

console.log(Number.isNaN(nanArray[0]));  // => True