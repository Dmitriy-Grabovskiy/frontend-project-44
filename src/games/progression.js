import runEngine from '../index.js';
import getRandomInt from '../utils.js';

const generateProgression = (start, step, length) => {
  const progression = [];

  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i);
  }
  return progression;
};

function generateRound() {
  let question = '';

  const lengthProgression = getRandomInt(10, 5);
  const indexEmptyElement = getRandomInt(lengthProgression - 1);
  const arrayProgression = generateProgression(getRandomInt(), getRandomInt(10), lengthProgression);
  const answer = arrayProgression[indexEmptyElement];
  arrayProgression[indexEmptyElement] = '..';
  question = arrayProgression.join(' ');

  return [question, answer];
}

function runProgressionGame() {
  const rules = 'What number is missing in the progression?';
  runEngine(generateRound, rules);
}

export default runProgressionGame;
