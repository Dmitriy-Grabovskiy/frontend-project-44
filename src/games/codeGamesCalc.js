#!/usr/bin/env node

import { runEngine, getRandomInt } from '../index.js';

function generateRound() {
  const operationObj = ['+', '-', '*'];
  const oneNumber = getRandomInt(100);
  const twoNumber = getRandomInt(100);
  const operationNumber = getRandomInt(3);
  const operation = operationObj[operationNumber];
  const result = `${oneNumber} ${operation} ${twoNumber}`;
  // eslint-disable-next-line no-eval
  return [result, eval(result)];
}
function codeGamesCalc() {
  const rules = 'What is the result of the expression?';
  runEngine(generateRound, rules);
}

export default codeGamesCalc;
