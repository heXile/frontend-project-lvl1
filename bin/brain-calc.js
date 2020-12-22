#!/usr/bin/env node
import startGame from '../src/index.js';
import { description, initRound } from '../src/games/calc.js';

startGame(description, initRound);
