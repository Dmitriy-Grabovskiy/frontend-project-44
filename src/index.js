#!/usr/bin/env node 

import readlineSync from 'readline-sync';
import {getName, nameUser} from '../src/cli.js'

	function gameFn (test) {
		let countResponseTrue = 0;
		const countWinningRound = 3;
		let answerUser;

		console.log('Welcome to the Brain Games!');
		getName()
		console.log('Answer "yes" if the number is even, otherwise answer "no".');
		for (let i = 0; i < countWinningRound; i++) {
			console.log('Question: ' + test[i].question);
			answerUser = readlineSync.question('Your answer: ');
			if(answerUser == test[i].answer){
				console.log('Correct!');
				countResponseTrue++
				if(countResponseTrue == countWinningRound){
					console.log("Congratulations, " + nameUser + "!");
					break
				}	
			}else {
				console.log(`'${answerUser}' is wrong answer ;(. Correct answer was '${test[i].answer}'.`);
				console.log("Let's try again, " + nameUser + "!");
				break
			}
		}
	}

	function getRandomInt( max, min = 1, ) {
		return Math.floor(Math.random() * (max - min) + min)
	}

export{gameFn, getRandomInt}
