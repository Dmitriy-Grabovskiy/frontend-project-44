#!/usr/bin/env node 

import {gameFn, getRandomInt} from '../index.js'

function codeGamesPrime () {
	const testArr = []

	let task = 'Answer "yes" if given number is prime. Otherwise answer "no".'
	let number;
	let answer;
	for (let k = 0; k < 3; k++) {
		number = getRandomInt(100);

		for (let i = 2; i <= number; i++) {
			if(number%i == 0 && i!==number || number == 1){
				answer = 'no'
				break
			}else{
				answer = 'yes'
			}
		}
		var obj = {question: number, answer: answer};
		testArr.push(obj);
	}
	gameFn(testArr,task)
}
export{codeGamesPrime}
