#!/usr/bin/env node
import startGame from '../src/index.js';
import { description, initRound } from '../src/games/progression.js';

startGame(description, initRound);
