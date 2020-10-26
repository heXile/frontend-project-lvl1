import promptly from 'promptly';

export default async () => {
    const name = await promptly.prompt('May I have a name? ');
    console.log(`Hello, ${name}`);
}
