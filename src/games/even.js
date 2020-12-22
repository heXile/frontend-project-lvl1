import { getRandomNumber } from '../utils.js';

const MIN = 1;
const MAX = 100;
const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const initRound = () => {
  const guessedNumber = getRandomNumber(MIN, MAX);
  const question = guessedNumber.toString();
  const correctAnswer = isEven(guessedNumber) ? 'yes' : 'no';
  return { question, correctAnswer };
};

export default () => ({ description, initRound });
