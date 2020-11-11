#!/usr/bin/env node
import index from '../src/index.js';
import { startRound, greeting } from '../src/games/even.js';

index(startRound, greeting);
