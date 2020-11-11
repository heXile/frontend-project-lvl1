#!/usr/bin/env node
import index from '../src/index.js';
import { startRound, greeting } from '../src/games/calc.js';

index(startRound, greeting);
