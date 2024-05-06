#!/usr/bin/env node
/* eslint-disable */

function getRandomInt(max = 100, min = 0) {
  return Math.floor(min + Math.random() * (max - min + 1));

}

export { getRandomInt };
