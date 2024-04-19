#!/usr/bin/env node
/* eslint-disable eqeqeq */

import { gameFn, getRandomInt } from '../index.js';

function codeGamesProgression() {
  const testArr = [];
  const task = 'What number is missing in the progression?';
  let lengthProgression;
  let numberEmptyElement;
  let startNumber;
  let step;
  let result = '';
  let value;
  let answer;

  for (let k = 0; k < 3; k += 1) {
    lengthProgression = getRandomInt(15, 5);
    numberEmptyElement = getRandomInt(lengthProgression);
    startNumber = getRandomInt(100);
    step = getRandomInt(10);
    for (let i = 1; i <= lengthProgression; i += 1) {
      value = startNumber + i * step;
      if (i != numberEmptyElement) {
        result += `${value} `;
      } else {
        result += '.. ';
        answer = value;
      }
    }
    const obj = { question: result, answer };
    testArr.push(obj);
    result = '';
  }
  gameFn(testArr, task);
}
export default codeGamesProgression;
