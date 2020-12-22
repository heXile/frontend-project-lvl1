import { getRandomNumber } from '../utils.js';

const operandMin = 3;
const operandMax = 15;
const operators = ['+', '-', '*'];

const description = 'What is the result of the expression?';

const getRandomArrayElement = (array) => array[getRandomNumber(0, array.length - 1)];

const calculateExpression = (operator, operand1, operand2) => {
  switch (operator) {
    case '+':
      return operand1 + operand2;
    case '-':
      return operand1 - operand2;
    case '*':
      return operand1 * operand2;
    default:
      throw new Error('Error message here');
  }
};

const initRound = () => {
  const [operand1, operand2] = [getRandomNumber(operandMin, operandMax),
    getRandomNumber(operandMin, operandMax)];
  const operator = getRandomArrayElement(operators);
  const expressionResult = calculateExpression(operator, operand1, operand2);
  const question = `${operand1} ${operator} ${operand2}`;
  return { question, correctAnswer: expressionResult.toString() };
};

export default () => ({ description, initRound });
