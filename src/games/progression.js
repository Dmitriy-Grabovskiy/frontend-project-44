#!/usr/bin/env node
/* eslint-disable eqeqeq */

import { runEngine } from '../index.js';

import { getRandomInt } from '../utils.js';

function generateRound() {
  let question = '';
  let value;
  let answer;

  const lengthProgression = getRandomInt(15, 5);
  const numberEmptyElement = getRandomInt(lengthProgression);
  const startNumber = getRandomInt();
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

function runProgressionGame() {
  const rules = 'What number is missing in the progression?';
  runEngine(generateRound, rules);
}
export default runProgressionGame;
