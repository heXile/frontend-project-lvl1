#!/usr/bin/env node
import startGame from '../src/index.js';
import { startRound, greeting } from '../src/games/even.js';

startGame(startRound, greeting);
