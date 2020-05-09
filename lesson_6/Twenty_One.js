/*
-initialize deck
- shuffle cards
- give two cards to each player by popping from deck
- display cards
- ask the player for hit or stay.
- if hits, give another card
- check the total. if busted, dealer wins
- if dealer stays and not busted, dealer hits..
- dealer hits until total reach < 17 or busted
- if dealer busts, player wins
- if dealer stays, compare the total and display the winner.
- play again?
*/

const readline = require('readline-sync');

const SUITS = ['Club', 'Spade', 'Diamond', 'Hearts'];
const VALUES = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
const DEALER_STAYS = 17;
const TARGET = 21;

const prompt = msg => {
  console.log(`=> ${msg}`);
};

function welcomeMessage() {
  console.clear();
  prompt('Welcome to Twenty_One !');
  prompt('The first to reach 5 wins will be a Grand Winner!');
  console.log(' ');
}

const lineBreak = () => {
  console.log('=========================');
};

const shuffleCards = deck => {
  for (let index = deck.length - 1; index > 0; index -= 1) {
    let otherIndex = Math.floor(Math.random() * (index + 1));
    [deck[index], deck[otherIndex]] = [deck[otherIndex], deck[index]];
  }

  return deck;
};

const initializeDeck = (suits, values) => {
  let deck = [];
  suits.forEach(suit => {
    values.forEach(value => {
      let valueInNumbers = Number(value);

      if (value === 'Jack' || value === 'Queen' || value === "King") {
        valueInNumbers = 10;
      } else if (value === 'Ace') {
        valueInNumbers = 11;
      }

      deck.push([suit, value, valueInNumbers]);
    });
  });
  return shuffleCards(deck);
};

const dealHand = deck => {
  return deck.pop();
};

const firstHand = deck => {
  let playerHand = [];
  playerHand.push(dealHand(deck), dealHand(deck));
  return playerHand;
};

const displayHand = hand => {
  return hand.map(card => `${card[1]} of ${card[0]}`).join(', ');
};

const displayFirstHand = (player, dealer) => {
  lineBreak();
  prompt('Dealer deals first hand..');
  prompt(`You have: ${player[0][1]} of ${player[0][0]} and ${player[1][1]} of ${player[1][0]}`);
  prompt(`Dealer has: ${dealer[0][1]} of ${dealer[0][0]} and unknown card`);
  lineBreak();
};

const sumOfCards = hand => {
  let handValues = hand.map(card => card[2]);
  let sum = handValues.reduce((acc, val) => acc + val);
  handValues.filter(value => value === 11).forEach(_ => {
    if (sum > TARGET) {
      sum -= 10;
    }
  });
  return sum;
};

const isBusted = total => {
  return total > TARGET;
};

const dealerStays = total => {
  if (total <= TARGET) {
    prompt('Dealer stays!');
  }

  lineBreak();
};

const dealerHits = (hand, total, deck) => {
  prompt(`Dealer has: ${displayHand(hand)} and dealer total is ${total}`);

  while (total <= DEALER_STAYS) {
    prompt(`Dealer hits...`);
    hand.push(dealHand(deck));
    total = sumOfCards(hand);
    prompt(`Dealer has now: ${displayHand(hand)} and dealer total is ${total}`);
  }

  if (isBusted(total)) {
    prompt('Dealer busted!');
  } else {
    dealerStays(total);
  }

  return hand;
};

const continueNextRound = () => {
  prompt('Please press enter to continue to next round: ');
  let answer = readline.question();

  while (answer !== '') {
    prompt('Please press the key "enter": ');
    answer = readline.question();
  }

  console.clear();
  return answer;
};

const setScore = () => {
  let scores = {};
  scores.Player = 0;
  scores.Dealer = 0;
  return scores;
};

const displayScore = scores => {
  for (let player in scores) {
    prompt(`${player} score is ${scores[player]}`);
  }

  console.log(' ');
};

const grandWinner = scores => {
  return scores['Player'] >= 5 || scores['Dealer'] >= 5;
};

const promptHitOrStay = () => {
  let answer;

  while (true) {
    prompt('Would you like to (h)it or (s)tay?');
    answer = readline.question().toLowerCase();
    if (['h', 's'].includes(answer[0])) break;
    prompt('Invalid choice! Please enter (h)it or (s)tay: ');
  }

  return answer;
};

const hitOrStay = (playerHand, dealerHand, playerTotal, dealerTotal, deck) => {
  let answer = promptHitOrStay();

  while (answer === 'h') {
    prompt(`You chose to hit..`);
    playerHand.push(dealHand(deck));
    playerTotal = sumOfCards(playerHand);
    prompt(`You have: ${displayHand(playerHand)} and Your total is ${playerTotal}`);

    if (isBusted(playerTotal)) {
      prompt('Player busted!');
      break;
    }

    answer = promptHitOrStay();
  }

  if (answer === 's') {
    prompt(`You chose to stay!`);
    lineBreak();
    prompt('Dealer\'s Turn...');
    dealerHits(dealerHand, dealerTotal, deck);
  }
};

const detectRoundWinner = (playerTotal, dealerTotal) => {
  if ((playerTotal > dealerTotal &&
    !isBusted(playerTotal)) || isBusted(dealerTotal)) {
    return 'Player';
  } else if ((playerTotal < dealerTotal &&
    !isBusted(dealerTotal)) || isBusted(playerTotal)) {
    return 'Dealer';
  }

  return null;
};

const someoneWon = (playerTotal, dealerTotal) => {
  return detectRoundWinner(playerTotal, dealerTotal);
};

const updateScore = (scores, playerTotal, dealerTotal) => {
  let winner = detectRoundWinner(playerTotal, dealerTotal);

  if (winner !== null) {
    scores[winner] += 1;
  }

  return scores;
};

const displayRoundWinner = (playerTotal, dealerTotal) => {
  if (!isBusted(playerTotal) && !isBusted(dealerTotal)) {
    prompt(`Player total is ${playerTotal}`);
    prompt(`Dealer total is ${dealerTotal}`);
  }

  lineBreak();

  if (someoneWon(playerTotal, dealerTotal)) {
    prompt(`${detectRoundWinner(playerTotal, dealerTotal)} won the Round!`);
  } else {
    prompt(`Noboday Won the round. It's a tie!`);
  }
};

const displayGrandWinner = scores => {
  if (scores.Player >= 5) {
    console.log('Player is the Grand Winner!!');
  } else if (scores.Dealer >= 5) {
    console.log('Dealer is the Grand Winner!!');
  }

  console.log(' ');
};

const playAgain = () => {
  prompt('Would you like to play again? (y/n)');
  let response = readline.question().toLowerCase();

  while (!['y', 'yes', 'n', 'no'].includes(response)) {
    prompt('Enter [Y]es or [N]o to continue: ');
    response = readline.question().toLowerCase();
  }

  return ['y', 'yes', 'n', 'no'].includes(response);
};

const startRound = scores => {
  let deck = initializeDeck(SUITS, VALUES);
  let playerHand = firstHand(deck);
  let dealerHand = firstHand(deck);
  displayScore(scores);
  displayFirstHand(playerHand, dealerHand);
  let playerTotal = sumOfCards(playerHand);
  let dealerTotal = sumOfCards(dealerHand);
  hitOrStay(playerHand, dealerHand, playerTotal, dealerTotal, deck);
  playerTotal = sumOfCards(playerHand);
  dealerTotal = sumOfCards(dealerHand);
  detectRoundWinner(playerTotal, dealerTotal);
  updateScore(scores, playerTotal, dealerTotal);
  displayRoundWinner(playerTotal, dealerTotal);
  lineBreak();
  displayScore(scores);
};

const startGame = () => {
  welcomeMessage();
  let scores = setScore();

  while (!grandWinner(scores)) {
    startRound(scores);

    if (!grandWinner(scores)) {
      continueNextRound();
    }
  }

  displayGrandWinner(scores);
};

while (true) {
  startGame();
  if (!playAgain()) break;
}

prompt('Thanks for playing Twenty One!');