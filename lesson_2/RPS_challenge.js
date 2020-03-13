const RLSYNC = require('readline-sync');

const MESSAGES = require('./RPS_challenge.json');

const VALID_CHOICES = ['Rock', 'Paper', 'Scissors', 'Lizard', 'Spock'];
const VALID_USER_CHOICES = ['r', 'p', 'sc', 'l', 'sp'];
const WINNING_COMBOS = {
  Rock: ['Scissors', 'Lizard'],
  Paper: ['Rock', 'Spock'],
  Scissors: ['Paper', 'Lizard'],
  Lizard: ['Paper', 'Spock'],
  Spock: ['Rock', 'Scissors']
};

const prompt = message => {
  console.log(`=> ${message}`);
};

const lineBreak = () => {
  console.log();
};

const clearScreen = () => {
  console.clear();
};

const displayWelcomeMessage = () => {
  prompt(MESSAGES['welcome']);
};

const getUserName = () => {
  prompt(MESSAGES['userName']);
  return RLSYNC.question();
};

const getUserChoice = () => {
  prompt(MESSAGES['startGame']);
  return RLSYNC.question().toLowerCase();
};

const validateUserChoice = choice => {
  return !VALID_USER_CHOICES.includes(choice);
};

const displayUserChoiceError = choice => {
  if (choice === 's') {
    prompt(MESSAGES['choiceSError']);
    lineBreak();
  }
  prompt(MESSAGES['invalidChoice']);
};

const findIndex = choice => {
  return VALID_USER_CHOICES.indexOf(choice);
};

const displayChoices = (name, choice, compChoice) => {
  prompt(`${name} chose ${VALID_CHOICES[findIndex(choice)]} and Computer chose ${VALID_CHOICES[findIndex(compChoice)]}`);
};

const playerWins = (choice, compChoice) => {
  choice = VALID_CHOICES[findIndex(choice)];
  compChoice = VALID_CHOICES[findIndex(compChoice)];
  return WINNING_COMBOS[choice].includes(compChoice);
};

let result;

const displayWinner = (choice, compChoice) => {
  if (playerWins(choice, compChoice)) {
    result = 'You Win!';
  } else if (playerWins(compChoice, choice)) {
    result = 'Computer Wins!';
  } else {
    result = 'It\'s a Tie!';
  }

  return result;
};

const grandWinner = (playerName, userCount, computerCount) => {
  if (userCount === 5) {
    prompt(`${playerName} is the Grand Winner!!`);
  } else if (computerCount === 5) {
    prompt(`${playerName} lost :( Computer is the Grand Winner!`);
  }
};

clearScreen();

displayWelcomeMessage();

let userName = getUserName();

while (true) {
  let userWinCount = 0;
  let computerWinCount = 0;

  while (true) {

    let userChoice = getUserChoice();

    clearScreen();

    while (validateUserChoice(userChoice)) {
      clearScreen();
      displayUserChoiceError(userChoice);
      userChoice = getUserChoice();
    }

    let randomIndex = Math.round(Math.random() * (VALID_CHOICES.length - 1));
    let computerChoice = VALID_USER_CHOICES[randomIndex];

    displayChoices(userName, userChoice, computerChoice);

    prompt(displayWinner(userChoice, computerChoice));

    lineBreak();

    if (result === 'You Win!') {
      userWinCount += 1;
    } else if (result === 'Computer Wins!') {
      computerWinCount += 1;
    }

    prompt(`${userName} score is ${userWinCount}  and computer score is ${computerWinCount}`);

    lineBreak();

    grandWinner(userName, userWinCount, computerWinCount);

    if (userWinCount >= 5 || computerWinCount >= 5) {
      break;
    }
  }

  lineBreak();

  prompt(MESSAGES['playAgain']);
  let response = RLSYNC.question();

  while (response.toLowerCase()[0] !== 'y' && response.toLowerCase()[0] !== 'n') {
    prompt(MESSAGES['invalidPlayAgain']);
    response = RLSYNC.question();
  }

  if (response.toLowerCase()[0] === 'n') {
    prompt(MESSAGES['seeYou']);
    break;
  }

  clearScreen();
}