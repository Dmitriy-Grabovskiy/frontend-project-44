/* eslint-disable eqeqeq*/
import readlineSync from 'readline-sync';
import makeWelcome from './cli.js';

const roundCount = 3;

function runEngine(generateRound, rules) {
  const nameUser = makeWelcome();

  console.log(rules);
  for (let i = 0; i < roundCount; i += 1) {
    const [question, answer] = generateRound();
    console.log(`Question: ${question}`);
    const answerUser = readlineSync.question('Your answer: ');

    if (answerUser == answer) {
      console.log('Correct!');
    } else {
      console.log(`'${answerUser}' is wrong answer ;(. Correct answer was '${answer}'.`);
      console.log(`Let's try again, ${nameUser}!`);
      return;
    }
  }
  console.log(`Congratulations, ${nameUser}!`);
}

export default runEngine;
