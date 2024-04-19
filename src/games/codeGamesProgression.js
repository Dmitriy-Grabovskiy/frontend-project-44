#!/usr/bin/env node 

import {gameFn, getRandomInt} from '../index.js'

function codeGamesProgression () {
	console.log("codeGamesProgression");
	const testArr = []

	let lengthProgression;
	let numberEmptyElement;
	let startNumber;
	let step;
	let result = '';
	let value;
	let answer;

	for (let k = 0; k < 3; k++) {
		lengthProgression = getRandomInt(15,5);
		numberEmptyElement = getRandomInt(lengthProgression);
		startNumber = getRandomInt(100);
		step = getRandomInt(10);
		for (let i = 1; i <= lengthProgression; i++) {
			value = startNumber + i * step;
			if(i !== numberEmptyElement){
				result += " " + value;
			}else {
				result += " ..";
				answer = value;
			}
		}
		var obj = {question: result, answer: answer};
		testArr.push(obj);
		result = '';
	}
	gameFn(testArr)
}
export{codeGamesProgression}
