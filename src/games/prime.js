#!/usr/bin/env node
/* eslint-disable */
import { runEngine } from '../index.js';
import { getRandomInt } from '../utils.js';

function generateRound() {
    let answer;
    let question = getRandomInt();
    if (question == 1){
      answer = 'no';
    }else{
    for (let i = 2; i <= question; i += 1) {
      if ((question % i == 0 && i != question)) {
        answer = 'no';
        break;
      } else {
        answer = 'yes';
      }
    }
  } 
 
  return [question, answer];
}

function runPrimeGame() {
  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  runEngine(generateRound, rules);
}
export default runPrimeGame;
