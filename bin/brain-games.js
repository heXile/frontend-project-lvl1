#!/usr/bin/env node
import cli from '../src/cli.js';

(async () => {
  console.log('Wellcome to the Brain Games');
  const name = await cli('May I have a name, sir? ');
  console.log(`Hello, ${name}!`);
})();
