const readlineSync = require('readline-sync');

const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';
const INITIAL_MARKER = ' ';
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

function minimaxBoard(board) {
  let newBoard = Object.keys(board);
  let arr = [];

  for (let index = 0; index < newBoard.length; index += 1) {
    if (board[newBoard[index]] !== ' ') {
      arr.push(board[newBoard[index]]);
    } else {
      arr.push(index + 1);
    }
  }

  return arr;
}

function minimax(board, player) {
  let boardIndexes = minimaxBoard(board);
  let squaresAvailable = availableSquares(boardIndexes);

  if (minimaxWinner(boardIndexes, HUMAN_MARKER)) {
    return { score: -1};
  } else if (minimaxWinner(boardIndexes, COMPUTER_MARKER)) {
    return {score: 1};
  } else if (squaresAvailable.length === 0) {
    return {score: 0};
  }

  let moves = minimaxRecursion(board, player);
  let bestMove;

  if (player === COMPUTER_MARKER) {
    bestMove = bestMoveComputer(moves);
  } else {
    bestMove = bestMoveHuman(moves);
  }

  return moves[bestMove];
}

function bestMoveComputer(array) {
  let bestScore = -Infinity;
  let bestMove;

  for (let index = 0; index < array.length; index += 1) {
    if (array[index].score > bestScore) {
      bestScore = array[index].score;
      bestMove = index;
    }
  }

  return bestMove;
}

function bestMoveHuman(array) {
  let bestScore = Infinity;
  let bestMove;

  for (let index = 0; index < array.length; index += 1) {
    if (array[index].score < bestScore) {
      bestScore = array[index].score;
      bestMove = index;
    }
  }

  return bestMove;
}

function minimaxRecursion(board, player) {
  let boardIndexes = minimaxBoard(board);
  let emptySquareIndexes = availableSquares(boardIndexes);
  let moves = [];

  for (let index = 0; index < emptySquareIndexes.length; index += 1) {
    let move = {};
    move.index = boardIndexes[emptySquareIndexes[index] - 1];
    boardIndexes[emptySquareIndexes[index] - 1] = player;

    if (player === COMPUTER_MARKER) {
      let result = minimax(boardIndexes, HUMAN_MARKER);
      move.score = result.score;
    } else {
      let result = minimax(boardIndexes, COMPUTER_MARKER);
      move.score = result.score;
    }

    boardIndexes[emptySquareIndexes[index] - 1] = move.index;
    moves.push(move);
  }

  return moves;
}

function availableSquares(arr) {
  return arr.filter(val => val !== 'X' && val !== 'O');
}

function computerChoosesSquare(board) {
  let boardValues = Object.values(board);
  let square = minimax(boardValues, COMPUTER_MARKER).index;
  board[String(square)] = COMPUTER_MARKER;
}

function IsBoardFull(board) {
  return emptySquares(board).length === 0;
}

function someoneWon(board) {
  return detectRoundWinner(board);
}

function detectRoundWinner(board) {
  for (let index = 0; index < WINNING_LINES.length; index += 1) {
    let [sq1, sq2, sq3] = WINNING_LINES[index];

    if (
      board[sq1] === HUMAN_MARKER &&
      board[sq2] === HUMAN_MARKER &&
      board[sq3] === HUMAN_MARKER) {
      return 'Player';
    } else if (
      board[sq1] === COMPUTER_MARKER &&
      board[sq2] === COMPUTER_MARKER &&
      board[sq3] === COMPUTER_MARKER) {
      return 'Computer';
    }
  }

  return null;
}

function minimaxWinner(board, player) {
  for (let index = 0; index < WINNING_LINES.length; index += 1) {
    let [sq1, sq2, sq3] = WINNING_LINES[index];

    if (
      board[sq1 - 1] === player &&
      board[sq2 - 1] === player &&
      board[sq3 - 1] === player) {
      return true;
    }
  }

  return false;
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

function updateScore(scores, board) {
  let winner = detectRoundWinner(board);

  if (winner !== null) {
    scores[winner] += 1;
  }

  return scores;
}

function displayRoundWinner(board) {
  if (someoneWon(board)) {
    console.log(`${detectRoundWinner(board)} won this Round!`);
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
    let roundWinner = detectRoundWinner(board);

    if (roundWinner !== null || IsBoardFull(board)) {
      displayBoard(board);
      updateScore(scores, board);
      displayScore(scores);
      displayRoundWinner(board);
      break;
    }
  }
}

while (true) {
  startGame();
  if (!playAgain()) break;
}

prompt('Thanks for playing Tic-Tac-Toe!');