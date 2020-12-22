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
  return { operator, operands };
};

const calculateExpression = (operator, operands) => {
  switch (operator) {
    case '+':
      return car(operands) + cdr(operands);
    case '-':
      return car(operands) - cdr(operands);
    case '*':
      return car(operands) * cdr(operands);
    default:
      throw new Error('Error message here');
  }
};

export const initRound = () => {
  const { operator, operands } = getRandomExpression(operators, operandMin, operandMax);
  const expressionResult = calculateExpression(operator, operands);
  const question = `${car(operands)} ${operator} ${cdr(operands)}`;
  return { question, correctAnswer: expressionResult.toString() };
};
