import promptly from 'promptly';

const getRndIncl = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const MIN = 1;
const MAX = 100;
const TARGET = 3;

const getAnswerFromPlayer = (guessedNumber) => {
  (async () => {
    const answer = await promptly.prompt(`Question: ${guessedNumber}`);
    console.log(`Your answer, ${answer}`);
    return answer;
  })();
};

console.log('Answer "yes" if the number is even, otherwise answer "no".');
let correctAnswers = 0;

while (correctAnswers < TARGET) {
  const guessedNumber = getRndIncl(MIN, MAX);
  const answer = getAnswerFromPlayer(guessedNumber);
  const isEven = guessedNumber % 2 === 0 ? 'yes' : 'no';
  if (isEven === answer) {
    console.log('Correct!');
    correctAnswers += 1;
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${isEven}'.\nLet's try again, Bill!`);
    break;
  }
}

if (correctAnswers === TARGET) console.log('Congratulations, Bill!');
