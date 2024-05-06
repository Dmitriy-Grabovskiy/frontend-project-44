#!/usr/bin/env node
/* eslint-disable */

import { runEngine } from '../index.js';

import { getRandomInt } from '../utils.js';

function generateRound() {
  let max;
  let min;
  let answer;

  const oneNumber = getRandomInt();
  const twoNumber = getRandomInt();
  const question = `${oneNumber} ${twoNumber}`;

  if (oneNumber > twoNumber) {
    max = oneNumber;
    min = twoNumber;
  } else {
    min = oneNumber;
    max = twoNumber;
  }

  if (max % min === 0) {
    answer = min;
  } else {
    for (let i = 2; i <= min; i += 1) {
      if (i !== min && i <= (max - min)) {
        if (min % i == 0) {
          if (max % (min / i) == 0) {
            answer = min / i;
            break;
          }
        }
      } else (answer = 1);
    }
  }
  return [question, answer];
}

function runGcdGame() {
  const rules = 'Find the greatest common divisor of given numbers.';
  runEngine(generateRound, rules);
}

export default runGcdGame;