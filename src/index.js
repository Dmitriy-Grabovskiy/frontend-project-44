#!/usr/bin/env node
/* eslint-disable */

import readlineSync from 'readline-sync';

import getName from './cli.js';



function runEngine(generateRound, rules) {
  let answerUser;
  let countResponseTrue = 0;
  const roundCount = 3;
  
  const nameUser = getName();

  console.log(rules);
  for (let i = 0; i < roundCount; i += 1) {
    let [question, answer] = generateRound();
    console.log(`Question: ${question}`);
    answerUser = readlineSync.question('Your answer: ');

    if (answerUser == answer) {
      console.log('Correct!');
      countResponseTrue += 1;
      if (countResponseTrue == roundCount) {
        console.log(`Congratulations, ${nameUser}!`);
        break;
      }
    } else {
      console.log(`'${answerUser}' is wrong answer ;(. Correct answer was '${answer}'.`);
      console.log(`Let's try again, ${nameUser}!`);
      break;
    }
  }
}


function getRandomInt(max, min = 1) {
  return Math.floor(Math.random() * (max - min) + min);
}

export { runEngine, getRandomInt };
