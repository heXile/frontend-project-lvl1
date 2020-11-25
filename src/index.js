import getAnswerFromPlayer from './cli.js';

const hello = async () => {
  console.log('Welcome to the Brain Games');
  const name = await getAnswerFromPlayer('May I have a name, sir? ');
  console.log(`Hello, ${name}!`);
  return name;
};

export default async (description, startRound) => {
  const playerName = await hello();
  console.log(description);
  const roundsToWin = 3;
  let correctAnswersCount = 0;
  while (correctAnswersCount < roundsToWin) {
    // eslint-disable-next-line no-await-in-loop
    const { question, correctAnswer } = await startRound();
    console.log(`Question: ${question}`);
    // eslint-disable-next-line no-await-in-loop
    const userAnswer = await getAnswerFromPlayer('Your answer: ');
    if (userAnswer === correctAnswer) {
      correctAnswersCount += 1;
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${playerName}!`);
      return;
    }
  }
  if (correctAnswersCount === roundsToWin) console.log(`Congratulations, ${playerName}!`);
};
