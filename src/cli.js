#!/usr/bin/env node
import readlineSync from 'readline-sync';

function getName() {
  const nameUser = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${nameUser}!`);
}

export default getName;
