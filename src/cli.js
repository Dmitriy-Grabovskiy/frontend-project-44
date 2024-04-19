#!/usr/bin/env node 
import readlineSync from 'readline-sync';

let nameUser;
function getName () {
	nameUser = readlineSync.question('May I have your name? ');
	console.log("Hello, " + nameUser + "!");

}

export{getName,nameUser}
