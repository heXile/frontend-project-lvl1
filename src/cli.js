import promptly from 'promptly';

export const askQuestion = async (question) => {
  const answer = await promptly.prompt(`${question}`);
  return answer;
};

export const print = (text) => {
  console.log(text);
};
