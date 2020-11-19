#!/usr/bin/env node
import startGame from '../src/index.js';
import { startRound, greeting } from '../src/games/prime.js';

startGame(startRound, greeting);
