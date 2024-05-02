#!/usr/bin/env node
/* eslint-disable eqeqeq */

import { runEngine, getRandomInt } from '../index.js';

function generateRound() {
  let question = '';
  let value;
  let answer;

  const lengthProgression = getRandomInt(15, 5);
  const numberEmptyElement = getRandomInt(lengthProgression);
  const startNumber = getRandomInt(100);
  const step = getRandomInt(10);
  for (let i = 1; i <= lengthProgression; i += 1) {
    value = startNumber + i * step;
    if (i != numberEmptyElement) {
      question += `${value} `;
    } else {
      question += '.. ';
      answer = value;
    }
  }

  return [question, answer];
}

function codeGamesProgression() {
  const rules = 'What number is missing in the progression?';
  runEngine(generateRound, rules);
}
export default codeGamesProgression;
