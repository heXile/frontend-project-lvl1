#!/usr/bin/env node
import startGame from '../src/index.js';
import { description, startRound } from '../src/games/prime.js';

startGame(description, startRound);
