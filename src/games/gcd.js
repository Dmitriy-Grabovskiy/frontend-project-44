import runEngine from '../index.js';
import getRandomInt from '../utils.js';

const getGcd = (num1, num2) => {
  if (num1 === 0) { return num2; }
  return getGcd(num2 % num1, num1);
};

function generateRound() {
  const oneNumber = getRandomInt(100, 1);
  const twoNumber = getRandomInt(100, 1);
  const question = `${oneNumber} ${twoNumber}`;

  return [question, getGcd(oneNumber, twoNumber)];
}

function runGcdGame() {
  const rules = 'Find the greatest common divisor of given numbers.';
  runEngine(generateRound, rules);
}

export default runGcdGame;
