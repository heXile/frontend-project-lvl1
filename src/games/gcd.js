import cli from '../cli.js';
import { getRndIncl } from '../tools.js';

export const greeting = 'Find the greatest common divisor of given numbers.';

const getGCD = (a, b) => {
  let [op1, op2] = [a, b];
  if (op2 > op1) {
    [op1, op2] = [op2, op1];
  }
  let r;
  do {
    r = op1 % op2;
    [op1, op2] = [op2, r];
  } while (op2 !== 0);
  return op1;
};

const [MIN, MAX] = [1, 100];

export const startRound = async () => {
  const [n1, n2] = [getRndIncl(MIN, MAX), getRndIncl(MIN, MAX)];
  const gcd = getGCD(n1, n2).toString();
  const answer = await cli(`Question: ${n1} ${n2}`);
  if (answer === gcd) return [true];
  return [false, answer, gcd];
};
