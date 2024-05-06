#!/usr/bin/env node

import { runEngine } from '../index.js';

import { getRandomInt } from '../utils.js';

const calculation = (num1, num2, operator) => {
  switch (operator) {
    case '+': return num1 + num2;
    case '-': return num1 - num2;
    case '*': return num1 * num2;
    default: throw new Error('Invalid operator - '`${operator}`);
  }
};

function generateRound() {
  const operationObj = ['+', '-', '*'];
  const oneNumber = getRandomInt();
  const twoNumber = getRandomInt();
  const operationNumber = getRandomInt(2);
  const operation = operationObj[operationNumber];

  const question = `${oneNumber} ${operation} ${twoNumber}`;
  const answer = String(calculation(oneNumber, twoNumber, operationObj[operationNumber]));

  return [question, answer];
}

function runCalcGame() {
  const rules = 'What is the result of the expression?';
  runEngine(generateRound, rules);
}

export default runCalcGame;
