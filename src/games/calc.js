import {
  cons, car, cdr,
} from '@hexlet/pairs';
import { getRndIncl } from '../tools.js';
import cli from '../cli.js';

const MIN = 5;
const MAX = 15;

export const greeting = 'What is the result of the expression?';

export const startRound = async () => {
  const operands = cons(getRndIncl(MIN, MAX), getRndIncl(MIN, MAX));
  const chooseOperator = getRndIncl(1, 3);
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
  const answer = await cli(`Question: ${car(operands)} ${operator} ${cdr(operands)}`);
  exprRes = exprRes.toString();
  if (exprRes === answer) return [true];
  return [false, answer, exprRes];
};
