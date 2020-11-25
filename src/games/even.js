import { getRandomNumber } from '../utils.js';

const MIN = 1;
const MAX = 100;
export const description = 'Answer "yes" if the number is even, otherwise answer "no".';

export const startRound = () => {
  const guessedNumber = getRandomNumber(MIN, MAX);
  const question = guessedNumber.toString();
  const isEven = guessedNumber % 2 === 0 ? 'yes' : 'no';
  return { question, correctAnswer: isEven };
};
