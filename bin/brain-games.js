#!/usr/bin/env node
import { askQuestion, print } from '../src/cli.js';

(async () => {
  print('Wellcome to the Brain Games');
  const name = await askQuestion('May I have a name, sir? ');
  print(`Hello, ${name}!`);
})();
