let str1 = "Come over here!"; // true
let str2 = "What's up, Doc?"; // false

const stringEndsWith = str => str.endsWith('!');
stringEndsWith(str1);
stringEndsWith(str2);