import { getRandomNumber } from '../utils.js';

const description = 'What number is missing in the progression?';
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

const initRound = () => {
  const progressionLength = getRandomNumber(progressionLengthMin, progressionLengthMax);
  const progressionFirstElement = getRandomNumber(firstElementMin, firstElementMax);
  const progressionStep = getRandomNumber(progressionStepMin, progressionStepMax);
  const progression = generateProgression(
    progressionLength,
    progressionStep,
    progressionFirstElement,
  );
  const hiddenElementPosition = getRandomNumber(0, progressionLength - 1);
  const hiddenElement = progression[hiddenElementPosition];
  progression[hiddenElementPosition] = placeholder;
  const question = progression.join(' ');
  return { question, correctAnswer: hiddenElement.toString() };
};

export default () => ({ description, initRound });
