#!/usr/bin/env node
/* eslint-disable */

import { runEngine, getRandomInt } from '../index.js';

function generateRound() {
  const number = getRandomInt(100);
  const answer = number % 2 == 0 ? 'yes' : 'no' ;
  return [number, answer];
}

function codeGamesEven() {
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
  runEngine(generateRound, rules);
}
export default codeGamesEven;
