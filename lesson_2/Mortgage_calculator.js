const RLSYNC = require('readline-sync');

const MESSAGES = require('./Mortgage_calculator.json');

const prompt = input => {
  console.log(`=> ${input}`);
};

const validateLoanAmount = number => {
  return +number < 100 || +number > 10000000 || Number.isNaN(+number);
};

const validateApr = number => {
  return Number.isNaN(+number) || +number === '' || +number < 0 || +number > 100;
};

const validateDuration = number => {
  return Number.isNaN(+number) || +number === 0 || +number <= 0 || +number > 50;
};

prompt(MESSAGES['welcome']);
prompt(MESSAGES['blank']);

while (true) {
  prompt(MESSAGES['inputTotal']);
  let loanAmount = RLSYNC.question();
  loanAmount = Math.round(loanAmount);

  while (validateLoanAmount(loanAmount)) {
    prompt(MESSAGES['inputTotalError']);
    loanAmount = RLSYNC.question();
  }

  prompt(MESSAGES['inputApr']);
  let annualRate = RLSYNC.question();

  while (validateApr(annualRate)) {
    prompt('inputAprError');
    annualRate = RLSYNC.question();
  }

  prompt(MESSAGES['inputDuration']);
  let durationInYears = RLSYNC.question();

  while (validateDuration(durationInYears)) {
    prompt(MESSAGES['inputDurationError']);
    durationInYears = RLSYNC.question();
  }

  let monthlyRate = +annualRate / 100 / 12;
  let durationInMonths = +durationInYears * 12;

  const loanCalculator = (amount, apr, duration) => {
    // eslint-disable-next-line id-length
    let p = +amount; // p represents the loan amount
    // eslint-disable-next-line id-length

    let j = +apr; // j represents monthly percentage rate
    // eslint-disable-next-line id-length

    let n = +duration; // n represents loan duration in months
    // eslint-disable-next-line id-length

    let m; // m represents the monthly payment

    if (j === 0) {
      m = p / n;
    } else {
      m = p * (j / (1 - Math.pow(1 + j, -n)));
    }

    return m;
  };

  let result = loanCalculator(loanAmount, monthlyRate, durationInMonths);
  prompt(`Your monthly payment would be $${result.toFixed(2)} for the loan duration ${Math.round(durationInMonths)} months \n`);
  prompt(MESSAGES['anotherCalc']);
  let answer = RLSYNC.question().toLowerCase();

  if (answer[0] !== 'y') {
    prompt(MESSAGES['seeYou']);
    break;
  }

  console.clear();
}