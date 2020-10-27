#!/usr/bin/env node
import readlineSync from 'readline-sync';
import cli from '../src/cli.js';

const getRndIncl = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const MIN = 1;
const MAX = 100;
const TARGET = 3;

const name = cli();

console.log('Answer "yes" if the number is even, otherwise answer "no".');
let correctAnswers = 0;

while (correctAnswers < TARGET) {
  const guessedNumber = getRndIncl(MIN, MAX);
  const answer = readlineSync.question(`Question: ${guessedNumber} `);
  const isEven = guessedNumber % 2 === 0 ? 'yes' : 'no';
  if (isEven === answer) {
    console.log('Correct!');
    correctAnswers += 1;
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${isEven}'.\nLet's try again, ${name}!`);
    break;
  }
}

if (correctAnswers === TARGET) console.log(`Congratulations, ${name}!`);
