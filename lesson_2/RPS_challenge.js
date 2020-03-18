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

const displayGamePrompt = () => {
  clearScreen();
  prompt(MESSAGES['startingPrompt']);
};

const isValidateUserChoice = choice => {
  return !VALID_USER_CHOICES.includes(choice);
};

const displayUserChoiceError = choice => {
  if (choice === 's') {
    prompt(MESSAGES['choiceSError']);
    lineBreak();
  }

  prompt(MESSAGES['invalidChoice']);
};

const getUserChoice = () => {
  prompt(MESSAGES['startGame']);
  let userPick = RLSYNC.question().toLowerCase();

  while (isValidateUserChoice(userPick)) {
    clearScreen();
    displayUserChoiceError(userPick);
    userPick = getUserChoice();
  }

  return userPick;
};

const getComputerChoice = () => {
  let randomIndex = Math.round(Math.random() * (VALID_CHOICES.length - 1));
  let computerPick = VALID_USER_CHOICES[randomIndex];
  return computerPick;
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

const displayGameWinner = (choice, compChoice) => {

  if (playerWins(choice, compChoice)) {
    prompt('You Win!');
  } else if (playerWins(compChoice, choice)) {
    prompt('Computer Wins!');
  } else {
    prompt('It\'s a Tie!');
  }

};

const updateScore = (choice, compChoice) => {
  if (playerWins(choice, compChoice)) {
    return 1;
  }

  return 0;
};

const grandWinner = (playerName, userCount, computerCount) => {
  if (userCount === 5) {
    prompt(`${playerName} is the Grand Winner!!`);
  } else if (computerCount === 5) {
    prompt(`${playerName} lost :( Computer is the Grand Winner!`);
  }
};

const playAgain = () => {
  lineBreak();
  prompt(MESSAGES['playAgain']);
  prompt(MESSAGES['playAgainMessage']);
  let response = RLSYNC.question().toLowerCase();
  return response[0] === 'y';
};

clearScreen();

displayWelcomeMessage();

let userName = getUserName();

while (true) {
  let userWinCount = 0;
  let computerWinCount = 0;

  displayGamePrompt();

  while (true) {
    let userChoice = getUserChoice();
    let computerChoice = getComputerChoice();

    clearScreen();

    displayChoices(userName, userChoice, computerChoice);

    displayGameWinner(userChoice, computerChoice);

    userWinCount += updateScore(userChoice, computerChoice);
    computerWinCount += updateScore(computerChoice, userChoice);

    lineBreak();

    prompt(`${userName} score is ${userWinCount}  and computer score is ${computerWinCount}`);

    lineBreak();

    grandWinner(userName, userWinCount, computerWinCount);

    if (userWinCount >= 5 || computerWinCount >= 5) {
      break;
    }
  }

  if (!playAgain()) break;
  lineBreak();
}

prompt(MESSAGES['seeYou']);
