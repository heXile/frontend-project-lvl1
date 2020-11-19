import getAnswerFromPlayer from '../cli.js';
import { getRandomNumber } from '../utils.js';

const MIN = 1;
const MAX = 100;
export const greeting = 'Answer "yes" if the number is even, otherwise answer "no".';

export const startRound = async () => {
  const guessedNumber = getRandomNumber(MIN, MAX);
  console.log(`Question: ${guessedNumber}`);
  const answer = await getAnswerFromPlayer('Your answer: ');
  const isEven = guessedNumber % 2 === 0 ? 'yes' : 'no';
  if (isEven === answer) return [true];
  return [false, answer, isEven];
};
