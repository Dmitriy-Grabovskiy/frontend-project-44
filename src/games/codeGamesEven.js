#!/usr/bin/env node 

import {gameFn, getRandomInt} from '../index.js'

function codeGamesEven () {

	const testArr = []
	let oneNumber;

	for (let i = 0; i < 3; i++) {
		oneNumber = getRandomInt(100);
		var obj = {question: oneNumber, answer: oneNumber%2 == 0?'yes':'no'};
		testArr.push(obj);
	}
	gameFn(testArr)
}
export{codeGamesEven}
