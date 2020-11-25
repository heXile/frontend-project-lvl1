#!/usr/bin/env node
import startGame from '../src/index.js';
import { description, startRound } from '../src/games/gcd.js';

startGame(description, startRound);
