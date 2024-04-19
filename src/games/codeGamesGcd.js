#!/usr/bin/env node 

import {gameFn, getRandomInt} from '../index.js'


function codeGamesGcd () {
	const testArr = []

	let oneNumber;
	let twoNumber;
	let max;
	let min;
	let result;
	let answer;

	for (let i = 0; i < 3; i++) {
		oneNumber = getRandomInt(100);
		twoNumber = getRandomInt(100);
		result = oneNumber + ' ' + twoNumber

		if(oneNumber > twoNumber){
			max = oneNumber;
			min = twoNumber;
		}else{
			min = oneNumber;
			max = twoNumber;
		}

		if(max % min == 0){
			answer = min;
		}else {
			for (let i = 2; i <= min; i++) {
				if(i !== min && i <= (max-min)){
					if(min % i == 0){
						if(max % (min/i) == 0){
							answer = min/i;
							break
						}
					}	
				}else (answer = 1)
			}
		}

		var obj = {question: result, answer: answer};
		testArr.push(obj);
	}
	gameFn(testArr)
}
export{codeGamesGcd}
