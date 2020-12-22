#!/usr/bin/env node
import startGame from '../src/index.js';
import { description, initRound } from '../src/games/even.js';

startGame(description, initRound);
