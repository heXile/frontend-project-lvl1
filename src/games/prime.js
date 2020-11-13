import cli from '../cli.js';
import { getRndIncl } from '../tools.js';

export const greeting = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const [min, max] = [1, 100];
const isPrime = (number) => {
  if (number === 1) return false;
  const upperLimit = Math.floor(Math.sqrt(number));
  for (let i = 2; i <= upperLimit; i += 1) {
    if (number % i === 0) return false;
  }
  return true;
};

export const startRound = async () => {
  const guessedNumber = getRndIncl(min, max);
  const answer = await cli(`Question: ${guessedNumber}`);
  const correctAnswer = isPrime(guessedNumber) ? 'yes' : 'no';
  if (answer === correctAnswer) return [true];
  return [false, answer, correctAnswer];
};
