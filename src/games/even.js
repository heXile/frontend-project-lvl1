import promptly from 'promptly';
import { getRndIncl } from '../tools.js';

const MIN = 1;
const MAX = 100;
export const greeting = 'Answer "yes" if the number is even, otherwise answer "no".';

export const startRound = async (playerName) => {
  const guessedNumber = getRndIncl(MIN, MAX);
  const answer = await promptly.prompt(`Question: ${guessedNumber}`);
  const isEven = guessedNumber % 2 === 0 ? 'yes' : 'no';
  if (isEven === answer) return true;
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${isEven}'.\nLet's try again, ${playerName}!`);
  return false;
};
