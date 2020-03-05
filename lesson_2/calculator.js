const RLSYNC = require('readline-sync');
const MESSAGES = require('./calculator_messages.json');
const LANGUAGE = 'pn';

const chooseLanguage = (messages, lang) => {
  return MESSAGES[lang][messages];
};

const prompt = key => {
  let message = chooseLanguage(key, LANGUAGE);
  console.log(`=> ${message}`);
};

const invalidNumber = number => {
  return Number.isNaN(Number(number)) || number.trimStart() === '';
};

const invalidOperator = num => {
  return ![1, 2, 3, 4].includes(num);
};


prompt('welcome');
while (true) {
prompt('firstNumber');
let number1 = RLSYNC.question();

while (invalidNumber(number1)) {
  prompt('errorMessage');
  number1 = RLSYNC.question();
}

prompt('secondNumber');
let number2 = RLSYNC.question();

while (invalidNumber(number2)) {
  prompt('errorMessage');
  number2 = RLSYNC.question();
}

prompt('operatorSelection');
let operator = Number(RLSYNC.question());

while (invalidOperator(operator)) {
  prompt(`operatorError`);
  operator = Number(RLSYNC.question());
}

  let output;

  switch (operator) {
    case 1:
      // '1' represents addition
      output = Number(number1) + Number(number2);
      break;

    case 2:
      // '2' represents substraction
      output = Number(number1) - Number(number2);
      break;

    case 3:
      // '3' represents multiplication
      output = Number(number1) * Number(number2);
      break;

    case 4:
      // '4' represents divison
      output = Number(number1) / Number(number2);
      break;
  }

console.log(`The result is: ${output}`);

prompt('repeatCalc');
let answer = RLSYNC.question();
if (answer[0].toLowerCase() !== 'y')  break;

}