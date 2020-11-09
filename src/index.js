import cli from './cli.js';
import * as even from '../games/even.js';
import * as calc from '../games/calc.js';

export default async (gameType) => {
  const playerName = await cli();
  let startRound;
  let greeting;
  switch (gameType) {
    case 'even':
      startRound = even.startRound;
      greeting = even.greeting;
      break;
    case 'calc':
      startRound = calc.startRound;
      greeting = calc.greeting;
      break;
    default: console.log('Game not selected');
  }
  greeting();
  const roundsToWin = 3;
  let correctAnswers = 0;
  while (correctAnswers < roundsToWin) {
    // eslint-disable-next-line no-await-in-loop
    if (await startRound(playerName)) {
      correctAnswers += 1;
      console.log('Correct!');
    } else break;
  }
  if (correctAnswers === roundsToWin) console.log(`Congratulations, ${playerName}!`);
};
