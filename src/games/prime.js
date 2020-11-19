import getAnswerFromPlayer from '../cli.js';
import { getRandomNumber } from '../utils.js';

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
  const guessedNumber = getRandomNumber(min, max);
  console.log(`Question: ${guessedNumber}`);
  const answer = await getAnswerFromPlayer('Your answer: ');
  const correctAnswer = isPrime(guessedNumber) ? 'yes' : 'no';
  if (answer === correctAnswer) return [true];
  return [false, answer, correctAnswer];
};
