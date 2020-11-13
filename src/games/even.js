import cli from '../cli.js';
import { getRndIncl } from '../tools.js';

const MIN = 1;
const MAX = 100;
export const greeting = 'Answer "yes" if the number is even, otherwise answer "no".';

export const startRound = async () => {
  const guessedNumber = getRndIncl(MIN, MAX);
  const answer = await cli(`Question: ${guessedNumber}`);
  const isEven = guessedNumber % 2 === 0 ? 'yes' : 'no';
  if (isEven === answer) return [true];
  return [false, answer, isEven];
};
