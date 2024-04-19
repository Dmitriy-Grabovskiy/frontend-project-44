#!/usr/bin/env node 

import {gameFn, getRandomInt} from '../index.js'

function codeGamesCalc () {
	const testArr = []
  	const operationObj = ['+','-','*']

	let oneNumber;
	let operationNumber;
	let twoNumber;
	let operation;
	let result;

	for (let i = 0; i < 3; i++) {
		oneNumber = getRandomInt(100);
		twoNumber = getRandomInt(100);
		operationNumber = getRandomInt(3)

		operation = operationObj[operationNumber];
		result = oneNumber + ' ' + operation + ' ' + twoNumber
		var obj = {question: result, answer: eval(result)};
		testArr.push(obj);
	}
	gameFn(testArr)
}
export{codeGamesCalc}
