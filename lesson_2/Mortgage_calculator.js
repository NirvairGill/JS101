const RLSYNC = require('readline-sync');

const MESSAGES = require('./Mortgage_calculator.json');

const clearScreen = () => {
  console.clear();
};

clearScreen();

const prompt = input => {
  console.log(`=> ${input}`);
};

const getLoanAmount = () => {
  prompt(MESSAGES['inputTotal']);
  return Math.round(RLSYNC.question());
};

const getApr = () => {
  prompt(MESSAGES['inputApr']);
  return RLSYNC.question();
};

const getDurationInYears = () => {
  prompt(MESSAGES['inputDuration']);
  return RLSYNC.question();
};

const validateLoanAmount = number => {
  return +number < 100 || +number > 10000000 || Number.isNaN(+number);
};

const displayLoanAmountError = () => {
  prompt(MESSAGES['inputTotalError']);
  return RLSYNC.question();
};

const validateApr = number => {
  return Number.isNaN(+number) || +number === '' || +number < 0 || +number > 100;
};

const displayAprError = () => {
  prompt('inputAprError');
  return RLSYNC.question();
};

const validateDuration = number => {
  return Number.isNaN(+number) || +number === 0 || +number <= 0 || +number > 50;
};

const displayDurationError = () => {
  prompt(MESSAGES['inputDurationError']);
  return RLSYNC.question();
};

const getResponse = () => {
  return RLSYNC.question().toLowerCase();
};

prompt(MESSAGES['welcome']);
prompt(MESSAGES['blank']);

while (true) {
  let loanAmount = getLoanAmount();

  while (validateLoanAmount(loanAmount)) {
    loanAmount = displayLoanAmountError();
  }

  let annualPR = getApr();

  while (validateApr(annualPR)) {
    annualPR = displayAprError();
  }

  let durationInYears = getDurationInYears();

  while (validateDuration(durationInYears)) {
    durationInYears = displayDurationError();
  }

  let monthlyPR = +annualPR / 100 / 12;
  let durationInMonths = +durationInYears * 12;

  const calculateMonthlyPayment = (totalAmt, monthlyRate, durationMonths) => {
    let monthlyPayment;

    if (monthlyRate === 0) {
      monthlyPayment = totalAmt / durationMonths;
    } else {
      monthlyPayment = totalAmt * (monthlyRate /
        (1 - Math.pow(1 + monthlyRate, -durationMonths)));
    }

    return monthlyPayment;
  };

  let result = calculateMonthlyPayment(loanAmount, monthlyPR, durationInMonths);

  prompt(`Your monthly installment would be $${result.toFixed(2)} for ${Math.round(durationInMonths)} months for the Loan amount of $${loanAmount} with APR ${annualPR}% \n`);

  prompt(MESSAGES['anotherCalc']);
  let answer = getResponse();

  if (answer[0] !== 'y') {
    prompt(MESSAGES['seeYou']);
    break;
  }

  clearScreen();
}
