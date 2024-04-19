#!/usr/bin/env node

import { gameFn, getRandomInt } from '../index.js';

function codeGamesEven() {
  const task = 'Answer "yes" if the number is even, otherwise answer "no".';
  const testArr = [];
  let oneNumber;

  for (let i = 0; i < 3; i += 1) {
    oneNumber = getRandomInt(100);
    const obj = { question: oneNumber, answer: oneNumber % 2 === 0 ? 'yes' : 'no' };
    testArr.push(obj);
  }
  gameFn(testArr, task);
}
export default codeGamesEven;
