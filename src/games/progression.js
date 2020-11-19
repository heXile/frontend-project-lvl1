import getAnswerFromPlayer from '../cli.js';
import { getRandomNumber } from '../utils.js';

export const greeting = 'What number is missing in the progression?';
const [progressionLengthMin, progressionLengthMax] = [5, 12];
const [firstElementMin, firstElementMax] = [-10, 50];
const [progressionStepMin, progressionStepMax] = [-5, 10];
const placeholder = '..';

const generateProgression = (progressionLength, progressionStep, progressionFirstElement) => {
  let currentElement = progressionFirstElement;
  const progression = [];
  for (let i = 0; i < progressionLength; i += 1, currentElement += progressionStep) {
    progression.push(currentElement);
  }
  return progression;
};

export const startRound = async () => {
  const progressionLength = getRandomNumber(progressionLengthMin, progressionLengthMax);
  const hiddenElementPosition = getRandomNumber(0, progressionLength - 1);
  const progressionFirstElement = getRandomNumber(firstElementMin, firstElementMax);
  const progressionStep = getRandomNumber(progressionStepMin, progressionStepMax);
  // eslint-disable-next-line max-len
  const progression = generateProgression(progressionLength, progressionStep, progressionFirstElement);
  const hiddenElement = progression[hiddenElementPosition].toString();
  progression[hiddenElementPosition] = placeholder;
  console.log(`Question: ${progression.join(' ')}`);
  const answer = await getAnswerFromPlayer('Your answer: ');
  if (answer === hiddenElement) return [true];
  return [false, answer, hiddenElement];
};