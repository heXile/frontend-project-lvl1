import {
  cons, car, cdr,
} from '@hexlet/pairs';
import { getRandomNumber } from '../utils.js';
import getAnswerFromPlayer from '../cli.js';

const MIN = 5;
const MAX = 15;

export const greeting = 'What is the result of the expression?';

export const startRound = async () => {
  const operands = cons(getRandomNumber(MIN, MAX), getRandomNumber(MIN, MAX));
  const chooseOperator = getRandomNumber(1, 3);
  let operator;
  let exprRes;
  switch (chooseOperator) {
    case 1: operator = '+';
      exprRes = car(operands) + cdr(operands);
      break;
    case 2: operator = '-';
      exprRes = car(operands) - cdr(operands);
      break;
    default: operator = '*';
      exprRes = car(operands) * cdr(operands);
  }
  console.log(`Question: ${car(operands)} ${operator} ${cdr(operands)}`);
  const answer = await getAnswerFromPlayer('Your answer: ');
  exprRes = exprRes.toString();
  if (exprRes === answer) return [true];
  return [false, answer, exprRes];
};
