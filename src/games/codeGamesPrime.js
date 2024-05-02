#!/usr/bin/env node
/* eslint-disable */
import { runEngine, getRandomInt } from '../index.js';

function generateRound() {
    let answer;
    let question = getRandomInt(1);
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

function codeGamesPrime() {
  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  runEngine(generateRound, rules);
}
export default codeGamesPrime;
