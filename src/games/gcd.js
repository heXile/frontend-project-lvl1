import { getRandomNumber } from '../utils.js';

export const description = 'Find the greatest common divisor of given numbers.';

const getGCD = (num1, num2) => {
  let [greaterNumber, lesserNumber] = num1 > num2 ? [num1, num2] : [num2, num1];
  let remainder;
  do {
    remainder = greaterNumber % lesserNumber;
    [greaterNumber, lesserNumber] = [lesserNumber, remainder];
  } while (lesserNumber !== 0);
  return greaterNumber;
};

const [MIN, MAX] = [1, 100];

export const startRound = () => {
  const [num1, num2] = [getRandomNumber(MIN, MAX), getRandomNumber(MIN, MAX)];
  const gcd = getGCD(num1, num2);
  const question = `${num1} ${num2}`;
  return { question, correctAnswer: gcd.toString() };
};
