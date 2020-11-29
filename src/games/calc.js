import {
  cons, car, cdr,
} from '@hexlet/pairs';
import { getRandomNumber } from '../utils.js';

const operandMin = 3;
const operandMax = 15;
const operators = ['+', '-', '*'];

export const description = 'What is the result of the expression?';

const getRandomOperands = (min, max) => cons(getRandomNumber(min, max), getRandomNumber(min, max));

const getRandomArrayElement = (array) => array[getRandomNumber(0, array.length - 1)];

const getRandomExpression = (operatorList, min, max) => {
  const operator = getRandomArrayElement(operatorList);
  const operands = getRandomOperands(min, max);
  return cons(operator, operands);
};

const calculateExpression = (expression) => {
  // expression text view: (+ (x, y))
  const operator = car(expression);
  const operands = cdr(expression);
  switch (operator) {
    case '+':
      return car(operands) + cdr(operands);
    case '-':
      return car(operands) - cdr(operands);
    case '*':
      return car(operands) * cdr(operands);

    default:
      return false;
  }
};

export const startRound = () => {
  const expression = getRandomExpression(operators, operandMin, operandMax);
  const expressionResult = calculateExpression(expression).toString();
  const question = `${car(cdr(expression))} ${car(expression)} ${cdr(cdr(expression))}`;
  return { question, correctAnswer: expressionResult };
};

export default startRound;
