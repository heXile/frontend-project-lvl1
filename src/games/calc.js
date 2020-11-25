import {
  cons, car, cdr,
} from '@hexlet/pairs';
import { getRandomNumber } from '../utils.js';

const MIN = 5;
const MAX = 15;

export const description = 'What is the result of the expression?';

export const startRound = () => {
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
  const question = `${car(operands)} ${operator} ${cdr(operands)}`;
  exprRes = exprRes.toString();
  return { question, correctAnswer: exprRes };
};

export default startRound;
