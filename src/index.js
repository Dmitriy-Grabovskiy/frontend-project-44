#!/usr/bin/env node
/* eslint-disable */

import readlineSync from 'readline-sync';

import getName from './cli.js';

let countResponseTrue = 0;
const countWinningRound = 3;

function gameFn(test, task) {
  let answerUser;

  const nameUser = getName();
  console.log(task);
  for (let i = 0; i < countWinningRound; i += 1) {
    console.log(`Question: ${test[i].question}`);
    answerUser = readlineSync.question('Your answer: ');

    if (answerUser == test[i].answer) {
      console.log('Correct!');
      countResponseTrue += 1;
      if (countResponseTrue == countWinningRound) {
        console.log(`Congratulations, ${nameUser}!`);
        break;
      }
    } else {
      console.log(`'${answerUser}' is wrong answer ;(. Correct answer was '${test[i].answer}'.`);
      console.log(`Let's try again, ${nameUser}!`);
      break;
    }
  }
}

function getRandomInt(max, min = 1) {
  return Math.floor(Math.random() * (max - min) + min);
}

export { gameFn, getRandomInt };
