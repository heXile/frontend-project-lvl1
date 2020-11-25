#!/usr/bin/env node
import startGame from '../src/index.js';
import { description, startRound } from '../src/games/calc.js';

startGame(description, startRound);
