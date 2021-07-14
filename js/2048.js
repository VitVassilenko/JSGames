"use strict";

const blocks = document.querySelectorAll('.mini__block'),
      newBtn = document.querySelector('.new'),
      cancBtn = document.querySelector('.cancel');

let score = document.querySelector('.score-number'),
    highScore = document.querySelector('.high-number'),
    question = document.querySelector('.question'),
    field = [[0, 0, 2, 0], [0, 4, 0, 0], [16, 0, 0, 0], [0, 0, 0, 0]];

document.addEventListener('keydown', (e) => {
    e.preventDefault();
    // console.log(e);
    if (e.key == 'ArrowDown') {
        console.log(e);
    } else if (e.key == 'ArrowUp') {
        console.log(e);
    } else if (e.key == 'ArrowLeft') {
        console.log(e);
    } else if (e.key == 'ArrowRight') {
        console.log(e);
    } else {

    }
});

function blocksRender() {
    for (let i=0; i<4; i++) {
        for (let j=0; j<4; j++) {
            let index = i*4+j;
            let block = blocks[index];
            block.className = 'mini__block';
            if (field[i][j] == 0) {
                console.log(field[i][j] == 0);
                block.innerHTML = '';
            } else {
                block.innerHTML = `<span class="number">${field[i][j]}</span>`;
                block.classList.add(`num-${field[i][j]}`);
            }
        }
    }
}

blocksRender();