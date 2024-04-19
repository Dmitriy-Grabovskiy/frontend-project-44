#!/usr/bin/env node

import { gameFn, getRandomInt } from '../index.js';

function codeGamesGcd() {
  const task = 'Find the greatest common divisor of given numbers.';
  const testArr = [];
  let oneNumber;
  let twoNumber;
  let max;
  let
    min;
  let result;
  let answer;

  for (let k = 0; k < 3; k += 1) {
    oneNumber = getRandomInt(100);
    twoNumber = getRandomInt(100);
    result = `${oneNumber} ${twoNumber}`;

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
          if (min % i === 0) {
            if (max % (min / i) === 0) {
              answer = min / i;
              break;
            }
          }
        } else (answer = 1);
      }
    }

    const obj = { question: result, answer };
    testArr.push(obj);
  }
  gameFn(testArr, task);
}
export default codeGamesGcd;
