import promptly from 'promptly';

export default async (question) => {
  const answer = await promptly.prompt(`${question}`);
  return answer;
};
