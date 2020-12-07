import { askQuestion, print } from './cli.js';

const greetPlayer = async () => {
  print('Welcome to the Brain Games');
  const name = await askQuestion('May I have a name, sir? ');
  print(`Hello, ${name}!`);
  return name;
};

export default async (description, startRound) => {
  const playerName = await greetPlayer();
  print(description);
  const roundsToWin = 3;
  let correctAnswersCount = 0;
  while (correctAnswersCount < roundsToWin) {
    const { question, correctAnswer } = startRound();
    print(`Question: ${question}`);
    // eslint-disable-next-line no-await-in-loop
    const userAnswer = await askQuestion('Your answer: ');
    if (userAnswer === correctAnswer) {
      correctAnswersCount += 1;
      print('Correct!');
    } else {
      print(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      print(`Let's try again, ${playerName}!`);
      return;
    }
  }
  print(`Congratulations, ${playerName}!`);
};
