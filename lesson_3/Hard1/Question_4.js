function isAnIpNumber(str) {
  if (!/^\d+$/.test(str)) return false;

  let number = Number(str);
  return number >= 0 && number <= 255;
}

function isDotSeparatedIpAddress(inputString) {
  let dotSeparatedWords = inputString.split(".");
  if (dotSeparatedWords.length !== 4) {
    console.log('Invalid IP address');
    return false;
  }
  while (dotSeparatedWords.length > 0) {
    let word = dotSeparatedWords.pop();
    if (!isAnIpNumber(word)) {
      console.log(`Invalid number ${word}. The numbers should be between 0 and 255.`);
      return false;
    }
  }

  return true;
}

console.log(isDotSeparatedIpAddress('40.1.4.43'));