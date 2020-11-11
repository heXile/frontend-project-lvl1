#!/usr/bin/env node
import index from '../src/index.js';
import { startRound, greeting } from '../src/games/gcd.js';

index(startRound, greeting);
