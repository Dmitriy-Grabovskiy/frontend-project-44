#!/usr/bin/env node
/* eslint-disable */

import { runEngine } from '../index.js';

import { getRandomInt } from '../utils.js';

function generateRound() {
  const question = getRandomInt();
  const answer = question % 2 == 0 ? 'yes' : 'no' ;
  return [question, answer];
}

function runEvenGame() {
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
  runEngine(generateRound, rules);
}
export default runEvenGame;
