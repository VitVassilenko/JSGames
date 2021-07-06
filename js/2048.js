"use strict";
console(window.innerHeight);
console(window.innerWidth);

const blocks = document.querySelectorAll('.mini__block'),
      newBtn = document.querySelector('.new'),
      cancBtn = document.querySelector('.cancel');

let score = document.querySelector('.score-number'),
    highScore = document.querySelector('.high-number'),
    question = document.querySelector('.question');

