import promptly from 'promptly';

const MIN = 1;
const MAX = 100;
const getRndIncl = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export const startRound = async (playerName) => {
  const guessedNumber = getRndIncl(MIN, MAX);
  const answer = await promptly.prompt(`Question: ${guessedNumber}`);
  const isEven = guessedNumber % 2 === 0 ? 'yes' : 'no';
  if (isEven === answer) return true;
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${isEven}'.\nLet's try again, ${playerName}!`);
  return false;
};

export const greeting = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
};
