import { getRandomNumber } from '../utils.js';

export const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const [min, max] = [1, 100];
const isPrime = (number) => {
  if (number === 1) return false;
  const upperLimit = Math.floor(Math.sqrt(number));
  for (let i = 2; i <= upperLimit; i += 1) {
    if (number % i === 0) return false;
  }
  return true;
};

export const initRound = () => {
  const guessedNumber = getRandomNumber(min, max);
  const question = guessedNumber.toString();
  const correctAnswer = isPrime(guessedNumber) ? 'yes' : 'no';
  return { question, correctAnswer };
};
