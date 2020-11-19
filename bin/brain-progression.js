#!/usr/bin/env node
import startGame from '../src/index.js';
import { startRound, greeting } from '../src/games/progression.js';

startGame(startRound, greeting);
