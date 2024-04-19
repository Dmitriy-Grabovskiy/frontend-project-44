#!/usr/bin/env node
/* eslint-disable eqeqeq */
import { gameFn, getRandomInt } from '../index.js';

function codeGamesPrime() {
  const testArr = [];

  const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  let number;
  let answer;
  for (let k = 0; k < 3; k += 1) {
    number = getRandomInt(100);

    for (let i = 2; i <= number; i += 1) {
      if ((number % i == 0 && i != number) || number == 1) {
        answer = 'no';
        break;
      } else {
        answer = 'yes';
      }
    }
    const obj = { question: number, answer };
    testArr.push(obj);
  }
  gameFn(testArr, task);
}
export default codeGamesPrime;
