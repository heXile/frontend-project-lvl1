import cli from './cli.js';

const hello = async () => {
  console.log('Welcome to the Brain Games');
  const name = await cli('May I have a name, sir? ');
  console.log(`Hello, ${name}!`);
  return name;
};

export default async (startRound, greeting) => {
  const playerName = await hello();
  console.log(greeting);
  const roundsToWin = 3;
  let correctAnswers = 0;
  while (correctAnswers < roundsToWin) {
    // eslint-disable-next-line no-await-in-loop
    if (await startRound(playerName)) {
      correctAnswers += 1;
      console.log('Correct!');
    } else break;
  }
  if (correctAnswers === roundsToWin) console.log(`Congratulations, ${playerName}!`);
};
