#!/usr/bin/env node
import index from '../src/index.js';
import { startRound, greeting } from '../src/games/prime.js';

index(startRound, greeting);
