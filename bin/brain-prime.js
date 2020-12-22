#!/usr/bin/env node
import startGame from '../src/index.js';
import { description, initRound } from '../src/games/prime.js';

startGame(description, initRound);
