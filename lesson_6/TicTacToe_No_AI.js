/* eslint-disable complexity */
/* eslint-disable max-statements */
const readlineSync = require('readline-sync');
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';
const INITIAL_MARKER = ' ';
const CENTER_SQUARE = '5';
const WINNING_LINES = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7],
[2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]];
const HUMAN_PLAYER = 'Player';
const COMPUTER_PLAYER = 'Computer';

function prompt(msg) {
  console.log(`=>${msg}`);
}

function welcomeMessage() {
  console.clear();
  prompt('Welcome to Tic Tac Toe!');
  prompt('It\'s a 5 Rounds game. The best of 3 will be a Grand Winner!');
}

function promptChoosePlayer() {
  console.log(' ');
  prompt('Who you want to go first? Enter [C]omputer or [P]layer: ');
  let answer = readlineSync.question().toLowerCase();

  while (answer[0] !== 'p' && answer[0] !== 'c') {
    prompt('That is not valid choice! Enter "p" to choose Player and "c" for computer: ');
    answer = readlineSync.question().toLowerCase();
  }

  return answer;
}

function choosePlayer() {
  let firstPlayer;
  let choice = promptChoosePlayer();

  if (choice === 'p') {
    firstPlayer = HUMAN_PLAYER;
  } else if (choice === 'c') {
    firstPlayer = COMPUTER_PLAYER;
  }

  return firstPlayer;
}

function chooseSquare(board, player) {
  if (player === HUMAN_PLAYER) {
    playerChoosesSquare(board);
  } else if (player === COMPUTER_PLAYER) {
    computerChoosesSquare(board);
  }
}

function alternatePlayer(currentPlayer) {
  return currentPlayer === HUMAN_PLAYER ? COMPUTER_PLAYER : HUMAN_PLAYER;
}

function displayBoard(board) {
  console.clear();
  console.log(`You are ${HUMAN_MARKER} and Opponent is ${COMPUTER_MARKER}`);
  console.log('');
  console.log('     |     |     ');
  console.log(`  ${board['1']}  |  ${board['2']}  |  ${board['3']}  `);
  console.log('     |     |     ');
  console.log('-----+-----+-----');
  console.log('     |     |     ');
  console.log(`  ${board['4']}  |  ${board['5']}  |  ${board['6']}   `);
  console.log('     |     |     ');
  console.log('-----+-----+-----');
  console.log('     |     |     ');
  console.log(`  ${board['7']}  |  ${board['8']}  |  ${board['9']}  `);
  console.log('     |     |     ');
  console.log('');
}

function joinOr(arr, deliminator = ', ', word = 'or') {
  if (arr.length <= 2) {
    return arr.join(` ${word} `);
  } else {
    return arr.slice(0, arr.length - 1).join(`${deliminator}`) + ` ${word} ` + arr.slice(arr.length - 1);
  }
}

function initializeBoard() {
  let board = {};

  for (let index = 1; index <= 9; index += 1) {
    board[String(index)] = INITIAL_MARKER;
  }

  return board;
}

function playerChoosesSquare(board) {
  let square;
  prompt(`Choose a square from ${joinOr(emptySquares(board))}`);
  square = readlineSync.question().trim();

  while (!emptySquares(board).includes(square)) {
    prompt('Not a valid choice! Please try again!');
    prompt(`Choose a square from ${joinOr(emptySquares(board))}`);
    square = readlineSync.question().trim();
  }

  board[square] = HUMAN_MARKER;
}

function emptySquares(board) {
  return Object.keys(board).filter(key => board[key] === INITIAL_MARKER);
}

function findAtRiskSquare(line, board, marker) {
  let markersInLine = line.map(square => board[square]);

  if (markersInLine.filter(val => val === marker).length === 2) {
    let unusedSquare = line.find(square => board[square] === INITIAL_MARKER);

    if (unusedSquare !== undefined) {
      return unusedSquare;
    }
  }

  return null;
}

function defensiveSquareMove(board) {
  let square;

  for (let index = 0; index < WINNING_LINES.length; index += 1) {
    let line = WINNING_LINES[index];
    square = findAtRiskSquare(line, board, HUMAN_MARKER);
    if (square) break;
  }

  return square;
}

function offensiveSquareMove(board) {
  let square;

  for (let index = 0; index < WINNING_LINES.length; index += 1) {
    let line = WINNING_LINES[index];
    square = findAtRiskSquare(line, board, COMPUTER_MARKER);
    if (square) break;
  }

  return square;
}

function randomSquareMove(board) {
  let square;
  let randomIndex = Math.floor(Math.random() * emptySquares(board).length);
  square = emptySquares(board)[randomIndex];
  return square;
}

function centerSquareMove(board) {
  let square;

  if (emptySquares(board).includes(CENTER_SQUARE)) {
    square = CENTER_SQUARE;
  }

  return square;
}

function computerChoosesSquare(board) {
   let square = offensiveSquareMove(board);
   if (!square) {
     square = defensiveSquareMove(board);
   }

   if (!square) {
    square = centerSquareMove(board);
   }

   if (!square) {
     square = randomSquareMove(board);
   }

  board[square] = COMPUTER_MARKER;
}

function IsBoardFull(board) {
  return emptySquares(board).length === 0;
}

function someoneWon(board, player) {
  return detectRoundWinner(board, player);
}

function detectRoundWinner(board, player) {
  for (let index = 0; index < WINNING_LINES.length; index += 1) {
    let [sq1, sq2, sq3] = WINNING_LINES[index];

    if (
      board[sq1] === player &&
      board[sq2] === player &&
      board[sq3] === player) {
      return 'Player';
    } else if (
      board[sq1] === player &&
      board[sq2] === player &&
      board[sq3] === player) {
      return 'Computer';
    }
  }

  return null;
}

function keepScore() {
  let scores = {};
  scores.Player = 0;
  scores.Computer = 0;
  return scores;
}

function displayScore(scores) {
  for (let player in scores) {
    console.log(`${player} score is ${scores[player]}`);
  }

  console.log(' ');
}

function updateScore(scores, board, player) {
  let winner = detectRoundWinner(board, player);

  if (winner !== null) {
    scores[winner] += 1;
  }

  return scores;
}

function displayRoundWinner(board, player) {
  if (someoneWon(board, player)) {
    console.log(`${detectRoundWinner(board,player)} won this Round!`);
  } else {
    console.log('it\'s a tie!');
  }

  console.log(' ');
}

function continueNextRound() {
  prompt('Please press enter to continue to next round: ');
  let answer = readlineSync.question();

  while (answer !== '') {
    prompt('Please press the key "enter": ');
    answer = readlineSync.question();
  }

  return answer;
}

function grandWinner(scores) {
  return scores['Player'] > 2 || scores['Computer'] > 2;
}

function displayGrandWinner(scores) {
  if (scores.Player > 2) {
    console.log('Player is the Grand Winner!!');
  } else if (scores.Computer > 2) {
    console.log('Computer is the Grand Winner!!');
  }

  console.log(' ');
}

function playAgain() {
  prompt('Would you like to play again? (y/n)');
  let response = readlineSync.question().toLowerCase();

  while (response !== 'y' && response !== 'n') {
    prompt('Enter [Y]es or [N]o to continue: ');
    response = readlineSync.question().toLowerCase();
  }

  return response === 'y';
}

function startGame() {
  welcomeMessage();
  let scores = keepScore();
  let firstPlayer = choosePlayer();

  while (!grandWinner(scores)) {
    startRound(firstPlayer, scores);

    if (!grandWinner(scores)) {
      continueNextRound();
    }
  }

  displayGrandWinner(scores);
}

function startRound(currentPlayer, scores) {
  let board = initializeBoard();
  while (true) {
    displayBoard(board);
    displayScore(scores);
    chooseSquare(board, currentPlayer);
    currentPlayer = alternatePlayer(currentPlayer);
    let roundWinner = detectRoundWinner(board, currentPlayer);

    if (roundWinner !== null || IsBoardFull(board)) {
      displayBoard(board);
      updateScore(scores, board, currentPlayer);
      displayScore(scores);
      displayRoundWinner(board, currentPlayer);
      break;
    }
  }
}

while (true) {
  startGame();
  if (!playAgain()) break;
}

prompt('Thanks for playing Tic-Tac-Toe!');