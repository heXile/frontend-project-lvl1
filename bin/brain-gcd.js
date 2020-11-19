#!/usr/bin/env node
import startGame from '../src/index.js';
import { startRound, greeting } from '../src/games/gcd.js';

startGame(startRound, greeting);
