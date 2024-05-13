import runEngine from '../index.js';
import getRandomInt from '../utils.js';

function checkPrimeNumber(number) {
  if (number === 1) {
    return false;
  }
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

function generateRound() {
  const question = getRandomInt();

  const answer = checkPrimeNumber(question) ? 'yes' : 'no';
  return [question, answer];
}

function runPrimeGame() {
  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  runEngine(generateRound, rules);
}
export default runPrimeGame;
